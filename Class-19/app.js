var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AcTemp = /** @class */ (function () {
    function AcTemp(t) {
        this._temp = t;
    }
    Object.defineProperty(AcTemp.prototype, "getTemp", {
        get: function () {
            return this._temp;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AcTemp.prototype, "setTemp", {
        set: function (newTemp) {
            if (newTemp < 25) {
                console.log("bill ayeega");
            }
            console.log(newTemp);
        },
        enumerable: false,
        configurable: true
    });
    return AcTemp;
}());
var temp = new AcTemp(16);
console.log(temp); // error private property outside the wolrd nahi 
console.log(temp.getTemp);
temp.setTemp = 20;
/* POLYMORPHURISSM AND  */
var Animal = /** @class */ (function () {
    function Animal(n) {
        this.name = n;
    }
    Animal.prototype.makeSound = function () {
        console.log("animal making sound");
    };
    return Animal;
}());
var Lion = /** @class */ (function (_super) {
    __extends(Lion, _super);
    function Lion(name, k) {
        var _this = _super.call(this, name) || this;
        _this.isKing = k;
        return _this;
    }
    Lion.prototype.makeSound = function () {
        console.log("lion is Roaring");
    };
    return Lion;
}(Animal));
var lion1 = new Lion("SHERUU", true);
console.log(lion1);
lion1.makeSound();
/* ABSTRUCATION  */
var Laptop = /** @class */ (function () {
    function Laptop(r, s) {
        this.ram = r;
        this.screen = s;
    }
    Laptop.prototype.poweron = function () {
        console.log("power on ");
    };
    return Laptop;
}());
var Dell = /** @class */ (function (_super) {
    __extends(Dell, _super);
    function Dell(r, s) {
        return _super.call(this, r, s) || this;
    }
    Dell.prototype.SSD = function () {
        console.log("1 TB");
    };
    return Dell;
}(Laptop));
// let Dell=new Laptop()  //error
var dell = new Dell("16gb", 3);
console.log(dell);
dell.SSD();
dell.poweron();
// ternary operators
// condition?if:else
var teacher = "madam";
var ans = teacher === "male" ? console.log("sir") : console.log("madam");
var newAge = Math.random() > 0.6 ? "khan" : 60;
console.log(newAge);
