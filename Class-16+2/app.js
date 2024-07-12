// interface StudentsProps{
//     name:string
//     rollNo:number
//     timing:string
// }
// 
// class Students implements StudentsProps{
//     name:string
//      protected rollNo:number
//     timing:string
//     readonly courseName:string="GIAIC"
//     constructor(n:string,r:number,t:string){
//         this.name=n
//         this.rollNo=r
//         this.timing=t
//     }
//     getDetails(){
//     }
// }
// let s=new Students("mughees",16,"7-10")
// console.log(s);
// class Students2 {
//     name: string
//     protected rollNo: number
//     private timing: string
//     readonly courseName: string = "GIAIC"
//     constructor(n: string, r: number, t: string) {
//         this.name = n
//         this.rollNo = r
//         this.timing = t
//     }
//     getDetails() {
//         return ``
//     }
// }
// let s = new Students2("mughees", 16, "7-10")
// console.log(s);
var Bank = /** @class */ (function () {
    function Bank(b) {
        this._balance = b;
    }
    Object.defineProperty(Bank.prototype, "myBal", {
        get: function () {
            return this._balance;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Bank.prototype, "deposit", {
        set: function (cash) {
            console.log(cash + this._balance);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Bank.prototype, "withDraw", {
        set: function (cash) {
            console.log(this._balance - cash);
        },
        enumerable: false,
        configurable: true
    });
    Bank.myPin = 12354;
    return Bank;
}());
//INSTANCE
var b = new Bank(3000);
console.log(b.myBal);
b.deposit = 120;
b.withDraw = 50;
console.log(Bank.myPin);
