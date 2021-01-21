import { messageTypes, gcodeMap, errorMap, alarmMap, buildOptionsMap, settingsMap, MessageType } from './constants';
import { parseCoordinates, Coordinates } from "./utils/extractor_utils";


const ReportParsers = {

  gcodeState(state: string) {
    // [GC:G0 G54 G17 G21 G90 G94 M5 M9 T0 F0 S0]
    let gcodeData = state.replace("[", "").replace("]", "").replace("GC:", "").split(" ")

    let codes: {
      code?: string,
      name?: string,
      description?: string,
      value?: number
    }[] = [];

    gcodeData.forEach((code) => {
      if (/G.+/.test(code))
        codes.push(gcodeMap.gcode[code])
      else if (/M.+/.test(code))
        codes.push(gcodeMap.mcode[code])
      else if (/T.+/.test(code)) {
        codes.push({ code: "T", name: "Tool", description: "The current tool", value: parseInt(code.replace("T", "")) })
      }
      else if (/F.+/.test(code)) {
        codes.push({ code: "F", name: "Feed rate", description: "The last feed command", value: parseFloat(code.replace("F", "")) })
      }
      else if (/S.+/.test(code)) {
        codes.push({ code: "S", name: "RPM", description: "The current spindle speed command", value: parseFloat(code.replace("S", "")) })
      }
      else
        codes.push({ code: code, description: "Unknown gcode state", name: "Unknown" })
    })

    return {
      type: 'gcodeState',
      data: {
        codes: codes
      },
      input: state
    }
  },

  grblInit(init: string) {
    // Grbl 1.1f ['$' for help]

    let initData = init.match(/^Grbl\sv?(\d\.\d.)\s\[\'\$\'\sfor\shelp\]$/) as string[];
    return {
      type: 'initialize',
      data: {
        firmwareVersion: initData[1]
      },
      input: init
    }
  },

  error(error: string) {
    // error:9
    // error:Bad number format
    let data: {
      code?: number,
      message?: string
    } = {}

    let errorData = error.split(":")
    let err = errorData[1]
    if (Number.isInteger(parseInt(errorData[1]))) {
      data.code = parseInt(err)
      data.message = errorMap[err]
    }
    else
      data.message = error.replace("error:", "")

    return {
      type: 'error',
      data: data,
      input: error
    }
  },

  alarm(alarm: string) {
    // ALARM:9
    // ALARM:Hard/soft limit

    let alarmData = alarm.split(":")[1]
    let data: {
      code?: number,
      message?: string
    } = {}

    if (Number.isInteger(parseInt(alarmData))) {
      data.code = parseInt(alarmData)
      data.message = alarmMap[alarmData]
    }
    else
      data.message = alarmData

    return {
      type: 'alarm',
      data: data,
      input: alarm
    }
  },

  buildVersion(version: string) {
    // [VER:1.1f.20170131:]

    let versionMatch = version.replace("[", "").replace("VER:", "").replace("]", "").split(":") //  '1.1f.20170131', 'My string!!'
    let versionData: string[] = versionMatch[0].match(/^(.+)\.(\d{8})$/) || []

    let data: {
      firmwareVersion?: string,
      buildDate?: string,
      buildString?: string
    } = {}

    data.firmwareVersion = versionData[1]
    data.buildDate = versionData[2]

    // data.firmwareVersion = versionData[0]
    if (versionMatch[1])
      data.buildString = versionMatch[1]

    return {
      type: 'buildVersion',
      data: data,
      input: version
    }
  },

  buildOptions(options: string) {
    // [OPT:V,15,128]

    let versionMatch = options.match(/\[(.+)\]/)
    let versionData = versionMatch[1].split(":")[1];

    let versionOptions = versionData.split(",")

    let versionCodes = versionOptions[0].split("") as (keyof typeof buildOptionsMap)[];
    let versionExtras = versionOptions.slice(1, versionOptions.length)

    let buildOptions: {
      code: keyof typeof buildOptionsMap,
      message: string
    }[] = []
    let buildExtras: string[] = [];

    versionCodes.forEach((code) => {
      buildOptions.push({ code, message: buildOptionsMap[code] })
    })

    versionExtras.forEach((extra) => {
      buildExtras.push(extra)
    })

    return {
      type: 'buildOptions',
      data: {
        options: buildOptions,
        extras: buildExtras,
      },
      input: options
    }
  },

  grblSetting(setting: string) {
    // $10=255.5

    let settingData = setting.split("=")

    let data: {
      code?: number,
      value?: number,
      setting?: string,
      units?: string,
      description?: string,
    } = {};

    data.code = parseFloat(settingData[0].match(/\$(\d+)/)[1])
    data.value = parseFloat(settingData[1])
    data.setting = settingsMap[data.code].setting
    data.units = settingsMap[data.code].units
    data.description = settingsMap[data.code].description

    return {
      type: 'setting',
      data: data,
      input: setting
    }
  },

  probeResult(probeResult: string) {
    // [PRB:0.000,0.000,1.492:1]
    let probeData = probeResult.replace("[PRB:", "").replace("]", "").split(":")
    // ["0.000, 0.000, 1.492", "1"]
    let data: {
      location?: Coordinates,
      success?: boolean
    } = {}

    data.location = parseCoordinates(probeData[0])
    data.success = parseInt(probeData[1]) === 1

    return {
      type: 'probeResult',
      data: data,
      input: probeResult
    }
  },

  helpMessage(helpMessage: string) {
    // [HLP:$$ $# $G $I $N $x=val $Nx=line $J=line $SLP $C $X $H ~ ! ? ctrl-x]
    let helpData = helpMessage.replace("[HLP:", "").replace("]", "").split(" ")

    let data: {
      availableCommands?: string[]
    } = {}
    data.availableCommands = []

    helpData.forEach((command) => {
      data.availableCommands.push(command)
    })

    return {
      type: 'helpMessage',
      data: data,
      input: helpMessage
    }
  },

  gcodeSystem(gcodeSystem: string) {
    // [G28:0.000,0.000,0.000]
    // [TLO:0.000]
    // [G28:0.000,-10.225,0.000]
    let data: {
      code?: string,
      name?: string,
      description?: string,
      coordinates?: Coordinates
    } = {}

    let systemData = gcodeSystem.replace("[", "").replace("]", "").split(":")

    if (systemData[0] == "TLO") {
      data = gcodeMap.tool[systemData[0]]
      data.coordinates = {
        z: parseFloat(systemData[1]),
      }
    }
    else {
      data = gcodeMap.gcode[systemData[0]];
      data.coordinates = parseCoordinates(systemData[1]);
    }

    return {
      type: 'gcodeSystem',
      data: data,
      input: gcodeSystem
    }
  },

  echo(echo: string) {
    // [echo:G1X0.540Y10.4F100]
    let data = {
      message: ''
    }
    let echoData = echo.replace("[", "").replace("]", "").split(":")
    data.message = echoData[1]

    return {
      type: 'echoMessage',
      data: data,
      input: echo
    }
  },

  gcodeStartupLine(startupLine: string) {
    // >G54G20:ok
    let data = {
      line: '',
      success: false
    }
    let startupData = startupLine.replace(">", "").split(":")
    data.line = startupData[0]
    data.success = startupData[1] === "ok"

    return {
      type: 'gcodeStartup',
      data: data,
      input: startupLine
    }
  },

  ok(success: string) {
    // ok
    let data = {
      success: false
    }
    data.success = success === "ok"

    return {
      type: 'success',
      data: data,
      input: success
    }
  },

  feedbackMessage(feedbackMessage: string) {
    // [MSG:‘$H’|’$X’ to unlock]
    // [Caution: Unlocked]
    let data = {
      message: ''
    }
    let message = feedbackMessage.replace("[", "").replace("]", "")

    if (message.includes("MSG:")) {
      let messageData = message.split(":")
      data.message = messageData[1]
    }
    else
      data.message = message

    return {
      type: 'feedbackMessage',
      data: data,
      input: feedbackMessage
    }
  }
} as const;

export class Parser {
  parse<T extends keyof typeof ReportParsers>(type: T, data: string): ReturnType<typeof ReportParsers[T]> {
    return ReportParsers[type](data) as any;
  }
}