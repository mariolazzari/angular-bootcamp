"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Car_1 = require("./Car");
// types
var myName = "Mario";
var anyType = undefined;
var ten = 10;
var yes = true;
var nothing = null;
var undef = undefined;
// type inference
var name2 = "Mario";
// name = 10; -> error
var sentence = "Mario is fine.";
//sentence.includes("is");
// functions
var addNumbers = function (a, b) { return a + b; };
var joinStrings = function (a, b) { return a + b; };
// object
var post = { title: "Post one", daysOld: 1, published: true };
// method
var printPost = function (post) { return post.title + " (" + post.daysOld + ")"; };
// Class
var Car = /** @class */ (function () {
    /*
    public color: string;
    private year: number;
  
    constructor(color: string, year: number) {
      this.color = color;
      this.year = year;
    }
    */
    // shortcut
    /**
     *
     */
    function Car(color, year) {
        this.color = color;
        this.year = year;
    }
    Car.prototype.drive = function () {
        console.log("Vrooooom");
    };
    return Car;
}());
var car = new Car("red", 2020);
car.drive();
console.log(car);
// decorators
/*
const Component = (target: any) => {
  console.log(target);
};

@Component
class NewCar {}
*/
var extCar = new Car_1.Car();
console.log(extCar.drive());
// Generics
var ValueHolder = /** @class */ (function () {
    function ValueHolder() {
    }
    return ValueHolder;
}());
var numberHolder = new ValueHolder();
numberHolder.value = "3";
// generic fx
var valueWrapper = function (value) {
    return [value];
};
var value = valueWrapper(5);
console.log(value);
