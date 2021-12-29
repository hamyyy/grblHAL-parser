"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseCoordinates = exports.axisTypes = void 0;
exports.axisTypes = ['x', 'y', 'z', 'a', 'b', 'c'];
function parseCoordinates(position) {
    // example input: "23.3242,102.2234,0.4200"
    var coordinates = position.split(",");
    var obj = {
        x: 0,
        y: 0,
        z: 0,
        a: 0,
        b: 0,
        c: 0,
    };
    for (var i = 0; i < coordinates.length; i++) {
        obj[exports.axisTypes[i]] = parseFloat(coordinates[i]);
    }
    return obj;
}
exports.parseCoordinates = parseCoordinates;
