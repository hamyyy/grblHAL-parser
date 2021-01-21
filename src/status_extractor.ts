import { statusMap, subStateMessage, messageTypes, StatusStateType, MessageType, statusStateTypes, limitPinMap, controlPinMap, grbl11PinMap } from './constants';
import { Coordinates, parseCoordinates } from "./utils/extractor_utils";

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

const StatusParsers = {
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
  }
} as const;

export class StatusParser {
  parse<T extends keyof typeof StatusParsers>(type: T, data: string): ReturnType<typeof StatusParsers[T]> {
    return StatusParsers[type](data) as any;
  }
}