class AcTemp {
    private _temp: number           //_before class name property indictes for Js
    constructor(t: number) {
        this._temp = t
    }


    get getTemp() {
        return this._temp;
    }
    set setTemp(newTemp: number) {
        if (newTemp < 25) {
            console.log("bill ayeega");
        }
        console.log(newTemp);


    }
}

const temp = new AcTemp(16)
console.log(temp);   // error private property outside the wolrd nahi 
console.log(temp.getTemp);
temp.setTemp = 20;

/* POLYMORPHURISSM AND  */
class Animal {
    name: String
    constructor(n: string) {
        this.name = n;
    }
    makeSound() {
        console.log("animal making sound");

    }
}

class Lion extends Animal {
    isKing: boolean;
    constructor(name: string, k: boolean) {
        super(name)
        this.isKing = k
    }
    makeSound() {
        console.log("lion is Roaring");
    }
}
const lion1 = new Lion("SHERUU", true)
console.log(lion1);
lion1.makeSound()





































/* ABSTRUCATION  */

abstract class Laptop {
    ram: string
    screen: number
    constructor(r: string, s: number) {
        this.ram = r;
        this.screen = s
    }
    abstract SSD(): void
    poweron() {
        console.log("power on ");

    }
}


class Dell extends Laptop {
    constructor(r: string, s: number) {
        super(r, s)
    }
    SSD(): void {
        console.log("1 TB");
    }
}
// let Dell=new Laptop()  //error

let dell = new Dell("16gb", 3);
console.log(dell);

dell.SSD()
dell.poweron()












// ternary operators

// condition?if:else






let teacher="Female"
let ans= teacher==="male"?"sir":"madam"
console.log(ans);










let newAge = Math.random() > 0.6 ? "khan" : 60
console.log(newAge);
