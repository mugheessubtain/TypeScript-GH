"use strict";
/* type aliases */
// type ko hi nam assign khar do
Object.defineProperty(exports, "__esModule", { value: true });
let myName = "Muhammad Mughees Subtain";
let age = 18;
const carYear = 2001;
const carType = "Toyota";
const carModel = "Corolla";
const car = {
    year: 2001,
    type: "Toyota",
    model: "Corolla"
};
let productsname = [
    "bread", "milk", "eggs", "dahi"
];
let product = {
    pName: "bread",
    price: 120,
    isExperied: true,
    quantity: 1
};
let productsName4 = {
    pName: "mughees",
    price: 120,
    info: {
        isExpired: false
    }
};
// console.log(productsName4.info.isExpired);
let isFood = false;
let cooking = () => {
    return new Promise((reslove, reject) => {
        console.log("food in process");
        if (isFood) {
            setTimeout(() => {
                reslove("fooed was amazing");
            }, 1500);
        }
        else {
            setTimeout(() => {
                reject("gas chali gai");
            }, 1500);
        }
    });
};
// cooking().then((res) => {
//     console.log(res);
//   return "biryani"
// })
// .catch((err)=>{
// console.log(err);
// return "order from hotel"
// })
// .then((res)=>{
//     console.log(res);
// })
// then and catch promise return kharta haa
//isslia catch ly bd ka responce ky then ma ay ga
// intelligence ma then and catch ka option dy ga
async function getResult() {
    try {
        let res = await cooking();
        console.log(res);
    }
    catch (err) {
        console.log(err);
    }
}
getResult();
