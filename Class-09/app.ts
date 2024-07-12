// function split(){
//     arguments;
//     for(let i=0;i<arguments.length;i++){
//         let a=arguments[i];
//     }
// }


// function userName(): string {
//     console.log("mughees");// ONLY SHOW VALUE ON TERMINAL NOT TO ASSIGN VALUE TO THE FUNCTION 
//     return "mughees";// RETURN IS USED TO STORE OR RETURN VALUE TO FUNCTION {HELP TO READ VALUE OF JS TO FUNCTION }
// }
// console.log(userName());
// let ab = userName()


// let hello = () => {
//     console.log("hello js");
// }
// hello();


// const number = (noB) => {
//     return noB
// }
// let ab = number(3);
// console.log(ab);



// let isEven = (number: number):number => {
//     if (number % 2 === 0) {
//         console.log("Number is Even");
//     }
//     else {
//         console.log("number is odd");
//     }
//     return 5
// }
// isEven(4);
// isEven(5);



let cal = (no1=10, no2=20, op: string) => {
    if (op === "+") {
        console.log(no1 + no2);
    }
    else if (op === "-") {
        console.log(no1 - no2);

    }
    else if (op === "*") {
        console.log(no1 * no2);
    }
    else if (op === "/") {
        console.log(no1 / no2);

    }
}
cal(2, 2, "+");
cal(6, 2, "-");
cal(2, 6, "*");
cal(232, 12, "/");
cal(undefined,undefined,"+")                          // error// const












// block scope varible are area restricted there area are {}





// const ali=() =>{                        // why const
//     let name="ali"
//     console.log(name);
    
// }



// let army="Pak Army";  //global
// const  policeStation=()=>{               // why const or not use of camel case in function name why
//     let area="lyari police"
//     console.log(area);  // block
//     console.log(army); // global 
// }
// policeStation();
// // console.log(area);







// let teacher ="sir ameen ";
// function session(){
//     let teacher="ali";
//     console.log(teacher);  // always give priority to there nearst scope
    
// }
// console.log(teacher);
// session();


// session();
// console.log(teacher);
