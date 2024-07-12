"use strict";
// let age=true;
// console.log("type is",typeof age);
// JS allows and TS not allow this is a basic differnece between TS and JS
// let age:boolean=true;
// age=12
//  for changable value keyword is let it can contain all types
//   for unchangable value keyword is const it can contain all types
// var allow same variale many times which may cause problems
// let doesnot do this
// let nationality:string ="pakistani"; strong typing
// let accNumber:number = 03165623
// var firstName="mughees";
// var firstName="zaini";
// let secondName="subtain";
// let secondName="zaini" error
// const bankAccount=32165262
// bankAccount=03202 error 
// let a:number  = 15;
// let b:number  = 10;
// let result:number = a + b
// console.log(result)
// let c:number  = 15;
// let d:number  = 16;
// let result2:number = c-d;
// console.log(result2);
// BODMAS rule follow 
// let numb1=12;
// let numb2=13;
// let numb3=23;
// console.log(numb1*(numb2/numb3));
// let  numb1=0;
// console.log(numb1++);
// console.log(numb1++);
// console.log(numb1)
// let  numb1=0;
// console.log(numb1++);
// console.log(numb1);
// console.log(++numb1)
let a = 0;
let b = 5;
let c;
c = a++ + a++ + ++b + a++ + a-- + ++b;
//   0   + 1   + 6   + 2   +3   + seven 
console.log(c);
