"use strict";
/*


class -> object
class -> constructor
this refers class properties

inheritance
parent/base/super Class
child/derived Class









*/
class Car {
    constructor() {
        //Variable
        this.name = "fortuner";
        this.make = "toyota";
        this.year = 2023;
    }
}
// new keyword makes an object jo class likhi haa uss ka object banata haa
let myCar = new Car();
console.log(myCar);
/* STATIC CLASS AND OBJECT */
// class Person{
//     name:string="mughees"
//     age:number|string=16
// }
// let mySelf=new Person()
// console.log(mySelf.name);
/* DYNAMIC CLASSES AND OBJECTS */
class Person {
    constructor(n, a, e) {
        this.name = n;
        this.age = a;
        this.email = e;
    }
    getDetails() {
        return `My name is ${this.name} and My age is ${this.age}`;
    }
    favFood(food) {
        return `My name is ${this.name} and My age is ${this.age} And My favourite food is ${food}`;
    }
}
let mySelf = new Person("mughees", 230, "mugheessubatin@gmail.com");
console.log(mySelf);
mySelf.name = "mutahir";
console.log(mySelf.getDetails());
console.log(mySelf.favFood("Biryani"));
let mySelf2 = new Person("mutahir", 14, "mutahir@gmail.com");
console.log(mySelf2.favFood("karahi"));
// Inheritance
//Super /Base /Parent Class
class Vehicle {
    constructor(n, e, t) {
        this.name = n;
        this.engine = e;
        this.tyres = t;
    }
}
// Child/ Derived Class
class Car2 extends Vehicle {
    constructor(name, engine, tyres) {
        super(name, engine, tyres);
    }
}
class Bike extends Vehicle {
    constructor(name, engine, tyres) {
        super(name, engine, tyres);
    }
}
class Truck extends Vehicle {
    constructor(name, engine, tyres, w) {
        super(name, engine, tyres);
        this.containWeight = w;
    }
}
let car = new Car2("fortuner", "2600", 4);
console.log(car);
let bike = new Bike("125", "600", 2);
console.log(bike);
let truck = new Truck("125", "600", 2, 400);
console.log(bike);
