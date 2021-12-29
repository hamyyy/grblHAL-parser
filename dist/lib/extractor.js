"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Extractor = exports.ReportExtractors = void 0;
var constants_1 = require("./constants");
var extractor_utils_1 = require("./utils/extractor_utils");
;
;
function parsePins(pins) {
    var data = [];
    if (/([01]+)\,?([01])?\,?([01]+)?/.test(pins)) {
        // 000,1,0000
        var pinMatch = pins.match(/(\d{3})?(\|\d\|)?(\d+)?/);
        var xyzPins = pinMatch[1];
        var probePin = pinMatch[2];
        var controlPins = pinMatch[3];
        if (xyzPins) {
            var limitPins = xyzPins.split("");
            limitPins.forEach(function (value, index) {
                data.push({ pin: constants_1.limitPinMap[index], on: (value === "1") });
            });
        }
        if (probePin) {
            data.push({ pin: "probe", on: probePin.replace(/\|/g, "") === "1" });
        }
        if (controlPins) {
            controlPins.split("").forEach(function (pin, index) {
                data.push({ pin: constants_1.controlPinMap[index], on: pin === "1" });
            });
        }
    }
    else {
        var pinData = pins.split("");
        pinData.forEach(function (pin, index) {
            var obj = { pin: constants_1.grbl11PinMap[pin], on: true };
            data.push(obj);
        });
    }
    return data;
}
function parseStatus(status) {
    // Hold:0
    var match = status.split(":");
    var parsedStatus = {
        state: constants_1.statusStateTypes.find(function (s) { return s == match[0]; })
    };
    if (match[1]) {
        parsedStatus.code = parseFloat(match[1]);
        parsedStatus.message = constants_1.subStateMessage[match[0]][match[1]];
    }
    return parsedStatus;
}
function parseAccessories(accessories) {
    // SFM
    var flags = accessories.split("");
    var parsedAccessories = {
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
    return parsedAccessories;
}
function parseBuffer(buffer) {
    // example input: "15,128"
    var bufferData = buffer.split(",");
    var parsedBuffer = {
        availableBlocks: parseFloat(bufferData[0]),
        availableRXBytes: parseFloat(bufferData[1])
    };
    return parsedBuffer;
}
function parseFeeds(feeds) {
    // example input: "15.432,12000.5"
    var feedData = feeds.split(",");
    var parsedFeeds = {
        realtimeFeedrate: parseFloat(feedData[0]),
        realtimeSpindle: parseFloat(feedData[1])
    };
    return parsedFeeds;
}
function parseOverride(override) {
    // 120,100,100
    var overrideData = override.split(",");
    var parsedOverrideData = {
        feeds: parseFloat(overrideData[0]),
        rapids: parseFloat(overrideData[1]),
        spindle: parseFloat(overrideData[2])
    };
    return parsedOverrideData;
}
exports.ReportExtractors = {
    gcodeState: function (state) {
        // [GC:G0 G54 G17 G21 G90 G94 M5 M9 T0 F0 S0]
        var gcodeData = state.replace("[", "").replace("]", "").replace("GC:", "").split(" ");
        var codes = [];
        gcodeData.forEach(function (code) {
            if (/G.+/.test(code))
                codes.push(constants_1.gcodeMap.gcode[code]);
            else if (/M.+/.test(code))
                codes.push(constants_1.gcodeMap.mcode[code]);
            else if (/T.+/.test(code)) {
                codes.push({ code: "T", name: "Tool", description: "The current tool", value: parseInt(code.replace("T", "")) });
            }
            else if (/F.+/.test(code)) {
                codes.push({ code: "F", name: "Feed rate", description: "The last feed command", value: parseFloat(code.replace("F", "")) });
            }
            else if (/S.+/.test(code)) {
                codes.push({ code: "S", name: "RPM", description: "The current spindle speed command", value: parseFloat(code.replace("S", "")) });
            }
            else
                codes.push({ code: code, description: "Unknown gcode state", name: "Unknown" });
        });
        return {
            type: 'gcodeState',
            data: {
                codes: codes
            },
            input: state
        };
    },
    grblInit: function (init) {
        // Grbl 1.1f ['$' for help]
        ///^Grbl(HAL)?\s?(\d\.\d.\s)\[.+\]$/
        var initData = init.match(/^Grbl(HAL)?\sv?(\d+\.\d+.)./);
        return {
            type: 'initialize',
            data: {
                firmwareVersion: initData[0].trim()
            },
            input: init
        };
    },
    error: function (error) {
        // error:9
        // error:Bad number format
        var data = {};
        var errorData = error.split(":");
        var err = errorData[1];
        if (Number.isInteger(parseInt(errorData[1]))) {
            data.code = parseInt(err);
            data.message = constants_1.errorMap[err];
        }
        else
            data.message = error.replace("error:", "");
        return {
            type: 'error',
            data: data,
            input: error
        };
    },
    alarm: function (alarm) {
        // ALARM:9
        // ALARM:Hard/soft limit
        var alarmData = alarm.split(":")[1];
        var data = {};
        if (Number.isInteger(parseInt(alarmData))) {
            data.code = parseInt(alarmData);
            data.message = constants_1.alarmMap[alarmData];
        }
        else
            data.message = alarmData;
        return {
            type: 'alarm',
            data: data,
            input: alarm
        };
    },
    buildVersion: function (version) {
        // [VER:1.1f.20170131:]
        var versionMatch = version.replace("[", "").replace("VER:", "").replace("]", "").split(":"); //  '1.1f.20170131', 'My string!!'
        var versionData = versionMatch[0].match(/^(.+)\.(\d{8})$/) || [];
        var data = {};
        data.firmwareVersion = versionData[1];
        data.buildDate = versionData[2];
        // data.firmwareVersion = versionData[0]
        if (versionMatch[1])
            data.buildString = versionMatch[1];
        return {
            type: 'buildVersion',
            data: data,
            input: version
        };
    },
    buildOptions: function (options) {
        // [OPT:V,15,128]
        var versionMatch = options.match(/\[(.+)\]/);
        var versionData = versionMatch[1].split(":")[1];
        var versionOptions = versionData.split(",");
        var versionCodes = versionOptions[0].split("");
        var versionExtras = versionOptions.slice(1, versionOptions.length);
        var buildOptions = [];
        var buildExtras = [];
        versionCodes.forEach(function (code) {
            buildOptions.push({ code: code, message: constants_1.buildOptionsMap[code] });
        });
        versionExtras.forEach(function (extra) {
            buildExtras.push(extra);
        });
        return {
            type: 'buildOptions',
            data: {
                options: buildOptions,
                extras: buildExtras,
            },
            input: options
        };
    },
    grblSetting: function (setting) {
        // $10=255.5
        var settingData = setting.split("=");
        var data = {};
        data.code = parseFloat(settingData[0].match(/\$(N?\d+)/)[1]);
        data.value = parseFloat(settingData[1]);
        data.setting = constants_1.settingsMap[data.code].setting;
        data.units = constants_1.settingsMap[data.code].units;
        data.description = constants_1.settingsMap[data.code].description;
        return {
            type: 'setting',
            data: data,
            input: setting
        };
    },
    probePoint: function (probePoint) {
        // [PRB:0.000,0.000,1.492:1]
        var probeData = probePoint.replace("[PRB:", "").replace("]", "").split(":");
        // ["0.000, 0.000, 1.492", "1"]
        var data = {};
        data.location = extractor_utils_1.parseCoordinates(probeData[0]);
        data.success = parseInt(probeData[1]) === 1;
        return {
            type: 'probePoint',
            data: data,
            input: probePoint
        };
    },
    helpMessage: function (helpMessage) {
        // [HLP:$$ $# $G $I $N $x=val $Nx=line $J=line $SLP $C $X $H ~ ! ? ctrl-x]
        var helpData = helpMessage.replace("[HLP:", "").replace("]", "").split(" ");
        var data = {};
        data.availableCommands = [];
        helpData.forEach(function (command) {
            data.availableCommands.push(command);
        });
        return {
            type: 'helpMessage',
            data: data,
            input: helpMessage
        };
    },
    gcodeSystem: function (gcodeSystem) {
        // [G28:0.000,0.000,0.000]
        // [TLO:0.000]
        // [G28:0.000,-10.225,0.000]
        var data = {};
        var systemData = gcodeSystem.replace("[", "").replace("]", "").split(":");
        if (systemData[0] == "TLO") {
            data = constants_1.gcodeMap.tool[systemData[0]];
            data.coordinates = {
                x: 0,
                y: 0,
                z: parseFloat(systemData[1]),
                a: 0,
                b: 0,
                c: 0
            };
        }
        else {
            data = constants_1.gcodeMap.gcode[systemData[0]];
            data.coordinates = extractor_utils_1.parseCoordinates(systemData[1]);
        }
        return {
            type: 'gcodeSystem',
            data: data,
            input: gcodeSystem
        };
    },
    echo: function (echo) {
        // [echo:G1X0.540Y10.4F100]
        var data = {
            message: ''
        };
        var echoData = echo.replace("[", "").replace("]", "").split(":");
        data.message = echoData[1];
        return {
            type: 'echoMessage',
            data: data,
            input: echo
        };
    },
    gcodeStartupLine: function (startupLine) {
        // >G54G20:ok
        var data = {
            line: '',
            success: false
        };
        var startupData = startupLine.replace(">", "").split(":");
        data.line = startupData[0];
        data.success = startupData[1] === "ok";
        return {
            type: 'gcodeStartup',
            data: data,
            input: startupLine
        };
    },
    ok: function (success) {
        // ok
        var data = {
            success: false
        };
        data.success = success === "ok";
        return {
            type: 'success',
            data: data,
            input: success
        };
    },
    message: function (recievedMessage) {
        // [MSG:‘$H’|’$X’ to unlock]
        // [Caution: Unlocked]
        var data = {
            message: ''
        };
        var message = recievedMessage.replace("[", "").replace("]", "");
        if (message.includes("MSG:")) {
            var messageData = message.split(":");
            data.message = messageData[1] || "";
        }
        else
            data.message = message;
        return {
            type: 'message',
            data: data,
            input: recievedMessage
        };
    },
    status: function (message) {
        var report = {};
        // <Hold:0|MPos:0.000,0.000,0.000|Bf:15,128|FS:675.5,24000|Ov:120,100,100|WCO:0.000,-5.200,306.351|A:SFM>
        // <Idle,MPos:0.000,0.000,0.000,WPos:0.000,0.000,0.000>
        var match = message.match(/^<(.*)>$/)[1];
        // Hold:0|MPos:0.000,0.000,0.000|Bf:15,128|FS:0,0|WCO:0.000,0.000,306.351
        // Idle,MPos:0.000,0.000,0.000,WPos:0.000,0.000,0.000
        if (message.includes(",MPos:") || message.includes(",WPos:")) {
            var statusData = match.match(/(\w+)\,(.+)/);
            report.status = parseStatus(statusData[1]); // Idle
            var statusParams = statusData[2].match(/([a-zA-Z]+)\:([\d\,\.\-\|]+)\,?/g); // [ "MPos:0.000,0.000,0.000,", "WPos:0.000,0.000,0.000,", "Buf:0,", "RX:0,", "Lim:000" ]
            var buffer_1 = [];
            statusParams.forEach(function (param) {
                var paramData = param.split(":"); // [ "MPos", "0.000,0.000,0.000," ]
                var key = paramData[0];
                var value = paramData[1];
                if (key === "Buf")
                    buffer_1[0] = value.replace(",", "");
                else if (key === "RX")
                    buffer_1[1] = value.replace(",", "");
                else
                    report[constants_1.statusMap[key]] = value;
            });
            if (buffer_1.length > 0)
                report.buffer = buffer_1.join(",");
        }
        else {
            var params = match.split("|");
            // ["Hold:0", "MPos:0.000,0.000,0.000", "Bf:15,128", ...]
            report.status = parseStatus(params[0]); // "Hold:0"
            var paramsPairs = params.slice(1, params.length);
            paramsPairs.forEach(function (param) {
                var paramData = param.split(":");
                report[constants_1.statusMap[paramData[0]]] = paramData[1];
            });
        }
        if (typeof report.machinePosition == 'string') {
            report.machinePosition = extractor_utils_1.parseCoordinates(report.machinePosition);
        }
        if (typeof report.workPosition == 'string') {
            report.workPosition = extractor_utils_1.parseCoordinates(report.workPosition);
        }
        if (typeof report.workcoordinateOffset == 'string') {
            report.workcoordinateOffset = extractor_utils_1.parseCoordinates(report.workcoordinateOffset);
        }
        if (typeof report.accessories == 'string') {
            report.accessories = parseAccessories(report.accessories);
        }
        else if (report.accessories == undefined) {
            report.accessories = parseAccessories("");
        }
        if (typeof report.buffer == 'string') {
            report.buffer = parseBuffer(report.buffer);
        }
        if (typeof report.realtimeFeed == 'string') {
            report.realtimeFeed = parseFeeds(report.realtimeFeed);
        }
        if (typeof report.override == 'string') {
            report.override = parseOverride(report.override);
        }
        if (typeof report.pins == 'string') {
            report.pins = parsePins(report.pins);
        }
        return {
            data: report,
            type: 'status',
            input: message
        };
    },
    newBuildOptions: function (newBuildOptions) {
        var message = newBuildOptions.replace("[", "").replace("]", "");
        var msg;
        if (message.includes("NEWOPT:")) {
            var messageData = message.split(":");
            msg = messageData[1].split(',');
        }
        else
            msg = [message];
        var data = {
            message: msg !== null && msg !== void 0 ? msg : '',
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
            RT: (msg.includes('RT+') ? 'RT+' : msg.includes('RT-') ? 'RT-' : null),
            hasSDCardStreaming: msg.includes('SD'),
            hasSpindleSync: msg.includes('SS'),
            hasManualToolChange: msg.includes('TC'),
            hasWifiStreaming: msg.includes('WIFI'),
        };
        return {
            data: data,
            type: 'newBuildOptions',
            input: message
        };
    },
    firmwareType: function (firmwareMessage) {
        var message = firmwareMessage.replace("[", "").replace("]", "");
        var data = {
            message: ''
        };
        if (message.includes("FIRMWARE:")) {
            var messageData = message.split(":");
            data.message = messageData[1];
        }
        else
            data.message = message;
        return {
            data: data,
            type: 'firmwareType',
            input: message
        };
    },
    driverType: function (driverMessage) {
        var message = driverMessage.replace("[", "").replace("]", "");
        var data = {
            message: ''
        };
        if (message.includes("DRIVER:")) {
            var messageData = message.split(":");
            data.message = messageData[1];
        }
        else
            data.message = message;
        return {
            data: data,
            type: 'driverType',
            input: message
        };
    },
    driverVersion: function (driverMessage) {
        var message = driverMessage.replace("[", "").replace("]", "");
        var data = {
            message: ''
        };
        if (message.includes("DRIVER VERSION:")) {
            var messageData = message.split(":");
            data.message = messageData[1];
        }
        else
            data.message = message;
        return {
            data: data,
            type: 'driverVersion',
            input: message
        };
    },
    driverOptions: function (driverMessage) {
        var message = driverMessage.replace("[", "").replace("]", "");
        var data = {
            message: ''
        };
        if (message.includes("DRIVER OPTIONS:")) {
            var messageData = message.split(":");
            data.message = messageData[1];
        }
        else
            data.message = message;
        return {
            data: data,
            type: 'driverOptions',
            input: message
        };
    },
    boardType: function (boardMessage) {
        var message = boardMessage.replace("[", "").replace("]", "");
        var data = {
            message: ''
        };
        if (message.includes("BOARD:")) {
            var messageData = message.split(":");
            data.message = messageData[1];
        }
        else
            data.message = message;
        return {
            data: data,
            type: 'boardType',
            input: message
        };
    },
    pluginType: function (pluginMessage) {
        var message = pluginMessage.replace("[", "").replace("]", "");
        var data = {
            message: ''
        };
        if (message.includes("PLUGIN:")) {
            var messageData = message.split(":");
            data.message = messageData[1];
        }
        else
            data.message = message;
        return {
            data: data,
            type: 'pluginType',
            input: message
        };
    },
    ipAddress: function (ipAddrMessage) {
        var message = ipAddrMessage.replace("[", "").replace("]", "");
        var data = {
            ip: ''
        };
        if (message.includes("PLUGIN:")) {
            var messageData = message.split(":");
            data.ip = messageData[1];
        }
        else
            data.ip = message;
        return {
            data: data,
            type: 'pluginType',
            input: message
        };
    },
};
// export type ReportParsersType = typeof ReportParsers;
var Extractor = /** @class */ (function () {
    function Extractor() {
    }
    Extractor.prototype.parse = function (type, data) {
        return exports.ReportExtractors[type](data);
    };
    return Extractor;
}());
exports.Extractor = Extractor;
