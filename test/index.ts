import { GrblHALParser } from '../lib/parser';
// let { GrblParser } = require("../lib/parser")


import * as util from 'util';

const parser = new GrblHALParser();

parser.on('all', (data) => {
    console.log(util.inspect(data, false, null, true), '\n');
});

parser.parseData('G0');
parser.parseData('ok');
parser.parseData('error:300');
parser.parseData('<Hold:0|MPos:0.000,1.111,2.222,3.333,4.444,5.555|Bf:15,128|FS:675.5,24000|Ov:120,100,100|WCO:0.000,-5.200,306.351|A:SFMT|Pn:POXYZABCDRHSEBT>');
parser.parseData('ggfawa');
parser.parseData('[ggfawa]');
parser.parseData('<ggfawa>');
