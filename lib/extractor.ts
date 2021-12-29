import { gcodeMap, errorMap, alarmMap, buildOptionsMap, settingsMap, statusMap, subStateMessage, StatusStateType, statusStateTypes, limitPinMap, controlPinMap, grbl11PinMap } from './constants';
import { parseCoordinates, Coordinates } from "./utils/extractor_utils";

export interface AccessoriesType {
  flood: boolean;
  mist: boolean;
  spindleDirection?: "clockwise" | "counter-clockwise";
  toolChangePending: boolean;
};

export interface StatusBufferType {
  availableBlocks: number;
  availableRXBytes: number;
}

export interface StatusFeedType {
  realtimeFeedrate: number;
  realtimeSpindle: number;
}

export interface StatusOverrideDataType {
  feeds: number,
  rapids: number,
  spindle: number
}

export interface StatusPinType {
  pin: any,
  on: boolean
};


function parsePins(pins: string) {
  let data: StatusPinType[] = []

  if (/([01]+)\,?([01])?\,?([01]+)?/.test(pins)) {
    // 000,1,0000
    let pinMatch = pins.match(/(\d{3})?(\|\d\|)?(\d+)?/)
    let xyzPins = pinMatch[1]
    let probePin = pinMatch[2]
    let controlPins = pinMatch[3]

    if (xyzPins) {
      let limitPins = xyzPins.split("")
      limitPins.forEach((value, index) => {
        data.push({ pin: limitPinMap[index], on: (value === "1") })
      })
    }

    if (probePin) {
      data.push({ pin: "probe", on: probePin.replace(/\|/g, "") === "1" })
    }

    if (controlPins) {
      controlPins.split("").forEach((pin, index) => {
        data.push({ pin: controlPinMap[index], on: pin === "1" })
      })
    }
  }

  else {

    let pinData = pins.split("")

    pinData.forEach((pin, index) => {
      let obj = { pin: grbl11PinMap[pin], on: true };
      data.push(obj);
    });

  }
  return data;
}

function parseStatus(status: string) {
  // Hold:0
  let match = status.split(":")

  let parsedStatus: {
    state: StatusStateType,
    code?: number,
    message?: string
  } = {
    state: statusStateTypes.find(s => s == match[0])
  }

  if (match[1]) {
    parsedStatus.code = parseFloat(match[1])
    parsedStatus.message = subStateMessage[match[0]][match[1]]
  }

  return parsedStatus;
}

function parseAccessories(accessories: string) {
  // SFM
  let flags = accessories.split("")
  let parsedAccessories: AccessoriesType = {
    flood: false,
    mist: false,
    toolChangePending: false
  };

  if (flags.includes("F"))
    parsedAccessories.flood = true;

  if (flags.includes("M"))
    parsedAccessories.mist = true;


  if (flags.includes("S"))
    parsedAccessories.spindleDirection = "clockwise";
  else if (flags.includes("C"))
    parsedAccessories.spindleDirection = "counter-clockwise";

  if (flags.includes("T"))
    parsedAccessories.toolChangePending = true;

  return parsedAccessories
}

function parseBuffer(buffer: string) {
  // example input: "15,128"
  let bufferData = buffer.split(",")
  let parsedBuffer: StatusBufferType = {
    availableBlocks: parseFloat(bufferData[0]),
    availableRXBytes: parseFloat(bufferData[1])
  }

  return parsedBuffer
}

function parseFeeds(feeds: string) {
  // example input: "15.432,12000.5"
  let feedData = feeds.split(",")
  let parsedFeeds: StatusFeedType = {
    realtimeFeedrate: parseFloat(feedData[0]),
    realtimeSpindle: parseFloat(feedData[1])
  }


  return parsedFeeds
}

function parseOverride(override: string) {
  // 120,100,100
  let overrideData = override.split(",")
  let parsedOverrideData: StatusOverrideDataType = {
    feeds: parseFloat(overrideData[0]),
    rapids: parseFloat(overrideData[1]),
    spindle: parseFloat(overrideData[2])
  }

  return parsedOverrideData;
}


export const ReportExtractors = {

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
    ///^Grbl(HAL)?\s?(\d\.\d.\s)\[.+\]$/

    let initData = init.match(/^Grbl(HAL)?\sv?(\d+\.\d+.)./) as string[];
    return {
      type: 'initialize',
      data: {
        firmwareVersion: initData[0].trim()
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
      code?: number | string,
      value?: number,
      setting?: string,
      units?: string,
      description?: string,
    } = {};

    data.code = parseFloat(settingData[0].match(/\$(N?\d+)/)[1])
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

  probePoint(probePoint: string) {
    // [PRB:0.000,0.000,1.492:1]
    let probeData = probePoint.replace("[PRB:", "").replace("]", "").split(":")
    // ["0.000, 0.000, 1.492", "1"]
    let data: {
      location?: Coordinates,
      success?: boolean
    } = {}

    data.location = parseCoordinates(probeData[0])
    data.success = parseInt(probeData[1]) === 1

    return {
      type: 'probePoint',
      data: data,
      input: probePoint
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
        x: 0,
        y: 0,
        z: parseFloat(systemData[1]),
        a: 0,
        b: 0,
        c: 0
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

  message(recievedMessage: string) {
    // [MSG:‘$H’|’$X’ to unlock]
    // [Caution: Unlocked]
    let data = {
      message: ''
    }
    let message = recievedMessage.replace("[", "").replace("]", "")

    if (message.includes("MSG:")) {
      let messageData = message.split(":")
      data.message = messageData[1] || "";
    }
    else
      data.message = message

    return {
      type: 'message',
      data: data,
      input: recievedMessage
    }
  },
  status(message: string) {
    let report: {
      status?: {
        state: StatusStateType,
        code?: number,
        message?: string
      },
      buffer?: StatusBufferType | string,
      machinePosition?: Coordinates | string,
      workPosition?: Coordinates | string,
      workcoordinateOffset?: Coordinates | string,
      accessories?: AccessoriesType | string,
      override?: StatusOverrideDataType | string,
      realtimeFeed?: StatusFeedType | string,
      pins?: StatusPinType[] | string
    } = {}

    // <Hold:0|MPos:0.000,0.000,0.000|Bf:15,128|FS:675.5,24000|Ov:120,100,100|WCO:0.000,-5.200,306.351|A:SFM>
    // <Idle,MPos:0.000,0.000,0.000,WPos:0.000,0.000,0.000>
    let match = message.match(/^<(.*)>$/)[1]
    // Hold:0|MPos:0.000,0.000,0.000|Bf:15,128|FS:0,0|WCO:0.000,0.000,306.351
    // Idle,MPos:0.000,0.000,0.000,WPos:0.000,0.000,0.000

    if (message.includes(",MPos:") || message.includes(",WPos:")) {
      let statusData = match.match(/(\w+)\,(.+)/)
      report.status = parseStatus(statusData[1]) // Idle
      let statusParams = statusData[2].match(/([a-zA-Z]+)\:([\d\,\.\-\|]+)\,?/g) // [ "MPos:0.000,0.000,0.000,", "WPos:0.000,0.000,0.000,", "Buf:0,", "RX:0,", "Lim:000" ]

      let buffer: string[] = []

      statusParams.forEach((param) => {
        let paramData = param.split(":")   // [ "MPos", "0.000,0.000,0.000," ]
        let key = paramData[0]
        let value = paramData[1]

        if (key === "Buf")
          buffer[0] = value.replace(",", "")
        else if (key === "RX")
          buffer[1] = value.replace(",", "")
        else
          report[statusMap[key]] = value

      })

      if (buffer.length > 0)
        report.buffer = buffer.join(",")
    }

    else {
      let params = match.split("|")
      // ["Hold:0", "MPos:0.000,0.000,0.000", "Bf:15,128", ...]

      report.status = parseStatus(params[0]) // "Hold:0"

      let paramsPairs = params.slice(1, params.length)

      paramsPairs.forEach((param) => {
        let paramData = param.split(":")
        report[statusMap[paramData[0]]] = paramData[1]
      })
    }

    if (typeof report.machinePosition == 'string') {
      report.machinePosition = parseCoordinates(report.machinePosition)
    }

    if (typeof report.workPosition == 'string') {
      report.workPosition = parseCoordinates(report.workPosition)
    }

    if (typeof report.workcoordinateOffset == 'string') {
      report.workcoordinateOffset = parseCoordinates(report.workcoordinateOffset)
    }

    if (typeof report.accessories == 'string') {
      report.accessories = parseAccessories(report.accessories)
    } else if (report.accessories == undefined) {
      report.accessories = parseAccessories("")
    }

    if (typeof report.buffer == 'string') {
      report.buffer = parseBuffer(report.buffer)
    }

    if (typeof report.realtimeFeed == 'string') {
      report.realtimeFeed = parseFeeds(report.realtimeFeed)
    }

    if (typeof report.override == 'string') {
      report.override = parseOverride(report.override)
    }

    if (typeof report.pins == 'string') {
      report.pins = parsePins(report.pins)
    }

    return {
      data: report,
      type: 'status',
      input: message
    }
  },

  newBuildOptions(newBuildOptions: string) {
    let message = newBuildOptions.replace("[", "").replace("]", "")

    let msg: string[];
    if (message.includes("NEWOPT:")) {
      let messageData = message.split(":")
      msg = messageData[1].split(',')
    }
    else
      msg = [message]

    const data = {
      message: msg ?? '',
      autoToolChange: msg.includes('ATC'),
      hasBlockDelete: msg.includes('BD'),
      hasBluetoothStreaming: msg.includes('BT'),
      hasEnumerators: msg.includes('ENUMS'),
      hasEStop: msg.includes('ES'),
      hasEthernetStreaming: msg.includes('ETH'),
      homeEnabled: msg.includes('HOME'),
      latheMode: msg.includes('LATHE'),
      MPG: msg.includes('MPG'),
      noProbe: msg.includes('NOPROBE'),
      hasOdometer: msg.includes('ODO'),
      hasOptionalStop: msg.includes('OS'),
      probeConnected: msg.includes('PC'),
      hasPidLog: msg.includes('PID'),
      RT: (msg.includes('RT+') ? 'RT+' : msg.includes('RT-') ? 'RT-' : null) as ('RT+' | 'RT-' | null), // "RT+" or "RT-"
      hasSDCardStreaming: msg.includes('SD'),
      hasSpindleSync: msg.includes('SS'),
      hasManualToolChange: msg.includes('TC'),
      hasWifiStreaming: msg.includes('WIFI'),
    };




    return {
      data: data,
      type: 'newBuildOptions',
      input: message
    }
  },

  firmwareType(firmwareMessage: string) {
    let message = firmwareMessage.replace("[", "").replace("]", "")

    const data = {
      message: ''
    };

    if (message.includes("FIRMWARE:")) {
      let messageData = message.split(":")
      data.message = messageData[1]
    }
    else
      data.message = message


    return {
      data: data,
      type: 'firmwareType',
      input: message
    }
  },

  driverType(driverMessage: string) {
    let message = driverMessage.replace("[", "").replace("]", "")
    const data = {
      message: ''
    }

    if (message.includes("DRIVER:")) {
      let messageData = message.split(":")
      data.message = messageData[1]
    }
    else
      data.message = message

    return {
      data: data,
      type: 'driverType',
      input: message
    }
  },

  driverVersion(driverMessage: string) {
    let message = driverMessage.replace("[", "").replace("]", "")
    const data = {
      message: ''
    }

    if (message.includes("DRIVER VERSION:")) {
      let messageData = message.split(":")
      data.message = messageData[1]
    }
    else
      data.message = message

    return {
      data: data,
      type: 'driverVersion',
      input: message
    }
  },
  driverOptions(driverMessage: string) {
    let message = driverMessage.replace("[", "").replace("]", "")
    const data = {
      message: ''
    }

    if (message.includes("DRIVER OPTIONS:")) {
      let messageData = message.split(":")
      data.message = messageData[1]
    }
    else
      data.message = message

    return {
      data: data,
      type: 'driverOptions',
      input: message
    }
  },
  boardType(boardMessage: string) {
    let message = boardMessage.replace("[", "").replace("]", "")
    const data = {
      message: ''
    }

    if (message.includes("BOARD:")) {
      let messageData = message.split(":")
      data.message = messageData[1]
    }
    else
      data.message = message

    return {
      data: data,
      type: 'boardType',
      input: message
    }
  },



  pluginType(pluginMessage: string) {
    let message = pluginMessage.replace("[", "").replace("]", "")
    const data = {
      message: ''
    }

    if (message.includes("PLUGIN:")) {
      let messageData = message.split(":")
      data.message = messageData[1]
    }
    else
      data.message = message

    return {
      data: data,
      type: 'pluginType',
      input: message
    }
  },

  ipAddress(ipAddrMessage: string) {
    let message = ipAddrMessage.replace("[", "").replace("]", "")
    const data = {
      ip: ''
    }

    if (message.includes("PLUGIN:")) {
      let messageData = message.split(":")
      data.ip = messageData[1]
    }
    else
      data.ip = message

    return {
      data: data,
      type: 'pluginType',
      input: message
    }
  },

} as const;

// export type ReportParsersType = typeof ReportParsers;

export class Extractor {
  parse<T extends keyof typeof ReportExtractors>(type: T, data: string): ReturnType<typeof ReportExtractors[T]> {
    return ReportExtractors[type](data) as any;
  }
}