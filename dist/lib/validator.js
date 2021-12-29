"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validator = exports.Validators = void 0;
exports.Validators = {
    status: function (data) {
        // <Hold:0|MPos:0.000,0.000,0.000,0.000,0.000,0.000|Bf:15,128|FS:675.5,24000|Ov:120,100,100|WCO:0.000,-5.200,306.351|A:SFM|Pn:POXYZABCDRHSEBT|A:SMFT>
        return /^<.*>$/.test(data);
    },
    ok: function (data) {
        // ok
        return /^ok$/.test(data);
    },
    grblInit: function (data) {
        //GrblHAL 1.1f ['$' or '$HELP' for help]
        //Grbl 1.1f ['$' for help]
        //Grbl 1.1f [giberish]
        return /^Grbl(HAL)?\s?v?(\d+\.\d+.)\s\[.+\]$/.test(data);
    },
    alarm: function (data) {
        return /^ALARM:.+$/.test(data);
    },
    error: function (data) {
        return /^error:.+$/.test(data);
    },
    grblSetting: function (data) {
        // $xxx=###
        return /^\$\d+\=.+$/.test(data) || /^\$N\d+\=(.*)?$/.test(data);
    },
    buildVersion: function (data) {
        return /^\[(VER:)?(\d\.\d\w).+\:.*\]$/.test(data);
    },
    buildOptions: function (data) {
        return /^\[OPT\:.*\]$/.test(data);
    },
    newBuildOptions: function (data) {
        return /^\[NEWOPT\:.*\]$/.test(data);
    },
    firmwareType: function (data) {
        return /^\[FIRMWARE:.*\]$/.test(data);
    },
    driverType: function (data) {
        return /^\[DRIVER:.*\]$/.test(data);
    },
    driverVersion: function (data) {
        return /^\[DRIVER VERSION:.*\]$/.test(data);
    },
    driverOptions: function (data) {
        return /^\[DRIVER OPTIONS:.*\]$/.test(data);
    },
    boardType: function (data) {
        return /^\[BOARD:.*\]$/.test(data);
    },
    pluginType: function (data) {
        return /^\[PLUGIN:.*\]$/.test(data);
    },
    ipAddress: function (data) {
        return /^\[IP:.*\]$/.test(data);
    },
    gcodeState: function (data) {
        return /^\[.+(G\d).+(M\d).+\]$/.test(data);
    },
    helpMessage: function (data) {
        return /^\[HLP\:.*\]$/.test(data);
    },
    gcodeSystem: function (data) {
        return /^\[(G\d+(\.\d+)?|TLO)\:.*\]$/.test(data);
    },
    probePoint: function (data) {
        return /^\[PRB\:.*\]$/.test(data);
    },
    echo: function (data) {
        return /^\[echo\:.*\]$/.test(data);
    },
    gcodeStartupLine: function (data) {
        return /^\>?.+\:?ok$/.test(data);
    },
    message: function (data) {
        return /^\[MSG:.*\]$/.test(data);
        if (/^\[((?!G|VER:|TLO|OPT|HLP|echo|PRB).+)\]$/.test(data)) {
            return !/^\[(VER:)?(\d\.\d\w).+\:.*\]$/.test(data);
        }
        return false;
    }
};
var Validator = /** @class */ (function () {
    function Validator() {
    }
    Validator.prototype.is = function (type, data) {
        // if (type == 'all') {
        //   const results: { [key in T]?: boolean } = {};
        //   for (let key in Validators) {
        //     results[key](Validators[key](data));
        //   }
        //   return results;
        // }
        return exports.Validators[type](data);
    };
    return Validator;
}());
exports.Validator = Validator;
