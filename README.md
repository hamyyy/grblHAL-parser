# grblhal-parser

**This project inspired by [grbl-parser](https://www.npmjs.com/package/grbl-parser), it was used as a template and modified to support types and extra grblHAL features**

Grbl and GrblHAL machine parser library written in typescript

Provides an event-based callbacks to parse any strings grbl may output.

Supports Grbl 0.9, 1.0, 1.1 and GrblHAL 1.1 (untested with grbl 0.8)

## Installation

```bash
npm install grblhal-parser --save
```

## Usage

```js
const { GrblHALParser } = require("grblhal-parser")
```

ES6
```ts
import { GrblHALParser } from 'grblhal-parser';

const parser = new GrblHALParser();

parser.on('alarm', data => {});
parser.on('status', data => {});
parser.on('ok', data => {});
parser.on('all', data => {});

parser.parseData('G0');
parser.parseData('ok');
parser.parseData('error: 5');
```

## Other links
- [In-browser example](https://runkit.com/5812b6009d0cb70013f5b92b/59179e16a8b8390011a55e1f)
- [grbl](https://github.com/gnea/grbl)
- [node-serialport](https://github.com/EmergingTechnologyAdvisors/node-serialport)
