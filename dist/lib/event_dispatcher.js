"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventHandler = void 0;
var extractor_1 = require("./extractor");
;
var EventHandler = /** @class */ (function () {
    function EventHandler() {
        this.listeners = [];
    }
    EventHandler.prototype.emit = function (type, data) {
        this.listeners.forEach(function (listener) {
            if (listener.type === type) {
                listener.func(data);
            }
        });
    };
    EventHandler.prototype.on = function (type, func) {
        if (type == 'all') {
            this.addToAllListeners(func);
        }
        else {
            this.listeners.push({ type: type, func: func });
        }
    };
    EventHandler.prototype.removeListener = function (type, func) {
        var _this = this;
        // let index = this.listeners.indexOf({ type, func })
        this.listeners.forEach(function (listener, index) {
            if (listener.type == type && listener.func == func) {
                _this.listeners.splice(index, 1);
            }
        });
    };
    EventHandler.prototype.addToAllListeners = function (func) {
        var keys = [];
        keys.push.apply(keys, __spreadArrays(Object.keys(extractor_1.ReportExtractors), ['unknown']));
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            this.on(key, func);
        }
    };
    return EventHandler;
}());
exports.EventHandler = EventHandler;
