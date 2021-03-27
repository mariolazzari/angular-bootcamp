"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
var Car = /** @class */ (function () {
    function Car() {
        this.year = 2000;
    }
    Car.prototype.drive = function () {
        return "I am driving.";
    };
    return Car;
}());
exports.Car = Car;
