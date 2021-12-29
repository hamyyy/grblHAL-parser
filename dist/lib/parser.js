"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrblHALParser = void 0;
var validator_1 = require("./validator");
var event_dispatcher_1 = require("./event_dispatcher");
var extractor_1 = require("./extractor");
var GrblHALParser = /** @class */ (function () {
    function GrblHALParser() {
        this.validator = new validator_1.Validator();
        this.extractor = new extractor_1.Extractor();
        this.events = new event_dispatcher_1.EventHandler();
        this.implemented = true;
        this.on = this.events.on.bind(this.events);
        this.removeListener = this.events.removeListener.bind(this.events);
        if (Object.keys(validator_1.Validators).length !== Object.keys(extractor_1.ReportExtractors).length) {
            this.implemented = false;
        }
        else {
            var a1 = Object.keys(validator_1.Validators);
            var a2 = Object.keys(extractor_1.ReportExtractors);
            a1.sort();
            a2.sort();
            for (var i = 0; i < a1.length; i++) {
                if (a1[i] != a2[i]) {
                    this.implemented = false;
                    break;
                }
            }
        }
        if (!this.implemented) {
            console.warn("\x1b[33m\n\nWARNING: \x1b[35mValidators \x1b[33mand/or \x1b[31mExtractors \x1b[33mnot fully implemented yet\x1b[0m");
            var arr = [Object.keys(validator_1.Validators), Object.keys(extractor_1.ReportExtractors)];
            var swapped = false;
            arr.sort(function (a, b) { return a.length - b.length; });
            if (arr[0].length != Object.keys(validator_1.Validators).length)
                swapped = true;
            for (var i = arr[0].length - 1; i >= 0; i--) {
                if (arr[1].includes(arr[0][i])) {
                    arr[1].splice(arr[1].indexOf(arr[0][i]), 1);
                    arr[0].splice(i, 1);
                }
            }
            for (var _i = 0, _a = arr[0]; _i < _a.length; _i++) {
                var k = _a[_i];
                console.warn((swapped ? "\x1b[31m" : "\x1b[35m") + "%s\x1b[0m", k);
            }
            for (var _b = 0, _c = arr[1]; _b < _c.length; _b++) {
                var k = _c[_b];
                console.warn((swapped ? "\x1b[35m" : "\x1b[31m") + "%s\x1b[0m", k);
            }
            throw new Error("Error: Validators and Extractors do not match.");
        }
    }
    Object.defineProperty(GrblHALParser.prototype, "listeners", {
        get: function () { return this.events.listeners; },
        enumerable: false,
        configurable: true
    });
    ;
    GrblHALParser.prototype.parseData = function (data) {
        var str = data.trim();
        if (str == "")
            return;
        var keys = [];
        keys.push.apply(keys, Object.keys(extractor_1.ReportExtractors));
        var emitted = false;
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            if (this.validator.is(key, str)) {
                var statusData = this.extractor.parse(key, str);
                this.events.emit(key, statusData);
                emitted = true;
                break;
            }
        }
        if (!emitted) {
            var unknownData = { input: str, type: 'unknown' };
            this.events.emit('unknown', unknownData);
        }
    };
    return GrblHALParser;
}());
exports.GrblHALParser = GrblHALParser;
