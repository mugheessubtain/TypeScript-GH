interface StudentsProps{
    name:string
    private rollNo:number
    timing:string
}


class Students implements StudentsProps{
    name:string
      rollNo:number
    timing:string
    readonly courseName:string="GIAIC"
    constructor(n:string,r:number,t:string){
        this.name=n
        this.rollNo=r
        this.timing=t
    }
    getDetails(){

    }
}
let s=new Students("mughees",16,"7-10")
console.log(s);
























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

















class Bank {
    private _balance: number
    static myPin: number = 12354
    static cheque: number = 1
    constructor(b: number) {
        this._balance = b
    }
    get myBal() {
        return this._balance
    }
    set deposit(cash: number) {
        console.log(cash + this._balance);

    }
    set withDraw(cash: number) {
        console.log(this._balance - cash);

    }
}

//INSTANCE
let b = new Bank(3000)
console.log(b.myBal);
b.deposit = 120;
b.withDraw = 50;
console.log(Bank.myPin);
// jo cheez constractor ka part nahi banani ho wo static ma likhy gy


if (Bank.myPin == 1234) {
    let b = new Bank(3000)
    console.log(b.myBal);
    b.deposit = 120;
    b.withDraw = 50;
} else {
    console.log("Invlaid creds");

}

let b=new Bank(3000)
console.log(b.myBal);
b.deposit=120;
b.withDraw=50;
console.log(Bank.cheque++);



let b2=new Bank(3000)
console.log(b2.deposit..myBal);
b2.deposit=120;
b2.withDraw=50;
console.log(Bank.cheque++);