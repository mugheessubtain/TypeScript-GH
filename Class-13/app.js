"use strict";
// // setTimeout(()=>{
// //   console.log("mughees")
// // },3000)
// // console.log(3);
// // console.log(2);
// // console.log(1);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// let products = [{
//     name: "mughees",
//     price: 123
// }]
// // main function 
// function One(cb: () => void) {
//     console.log("fetching");
//     setTimeout(() => {
//         cb();
//     }, 3000)
// }
// // call back
// function Two() {
//     console.log(products);
// }
// One(Two)
/*                      PROMISES             */
// Promise -> resolve -> .then -> response
// Promise -> reject -> .catch -> error
// let myFun = () => {
//     return new Promise((resolve, reject) => {
//             // resolve("Data Fetched")  // DAta come from API or DataBase
//             reject("errorr")
//     });
// };
// myFun()
// .then((response) => {
//     console.log(response);
// })
// .catch((error) => {
//     console.log(error);
// })
let isVictory = false;
let matchResult = () => {
    return new Promise((resolve, reject) => {
        if (isVictory) {
            console.log("match in progress");
            setTimeout(() => {
                resolve("We Won");
            }, 1500);
        }
        else {
            console.log("match in progress");
            reject("we lost");
        }
    });
};
// matchResult()
//     .then((Response) => {
//         console.log(Response);
//         return "man of the match BABAR"
//     })
//     .catch((Response) => {
//         console.log(Response);
//         return "USA should loss"
//     })
// more than one .then or .catch is called Chaining.
// passing the pillow concept
// .then((response) => {
//     console.log(response);
//     return "60 off 10"
// })
// .then((response) => {
//     console.log(response);
//     return "10 sixs"
// // })
// .then((response) => {
//     console.log(response);
// })
// .finally(() => {
//     console.log("Come back home");
// })
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let res = yield matchResult();
            console.log(res);
        }
        catch (error) {
            console.log("error", error);
        }
    });
}
getData();
