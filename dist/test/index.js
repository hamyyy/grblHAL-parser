"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var parser_1 = require("../lib/parser");
// let { GrblParser } = require("../lib/parser")
var util = __importStar(require("util"));
var parser = new parser_1.GrblHALParser();
parser.on('all', function (data) {
    console.log(util.inspect(data, false, null, true));
});
parser.parseData('G0');
parser.parseData('ok');
parser.parseData('error: 5');
parser.parseData('<Hold:0|MPos:0.000,0.000,0.000,0.000,0.000,0.000|Bf:15,128|FS:675.5,24000|Ov:120,100,100|WCO:0.000,-5.200,306.351|A:SFMT|Pn:POXYZABCDRHSEBT>');
parser.parseData('ggfawa');
parser.parseData('[ggfawa]');
parser.parseData('<ggfawa>');
