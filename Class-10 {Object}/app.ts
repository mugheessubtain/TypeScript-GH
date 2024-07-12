// let fruit={
//     fruitName:"Apple",
//     price:200,
//     season:"Summer"

// }
// console.log(fruit);
// console.log(fruit.fruitName);
// console.log(fruit.price);
// console.log(fruit.season);



// object is used for structured values more information about one element or entity




// let students = [{
//     name: "Mughees",
//     rollno: 3216,
//     timing: "7 to 10"
// },
// {
//     name: "Mutahir",
//     rollno: 3217,
//     timing: "7 to 10"
// }
// ]

// console.log(students[0]);
// name kisy call ho ga agr index na pata hoa
/*                ASSIGNING TYPES TO A VARIABLE       */





// type mycar = {
//     make: string,
//     model: number,
//     variant: string,
//     start: () => void,
//     maxspeed: () => string,
//     isAc: () => boolean
// }                           
// let car: mycar = {
//     make: "toyota",
//     model: 2023,
//     variant: "1600cc",
//     start: () => {
//         console.log("my car is started");

//     },
//     maxspeed: () => {
//         return "max speed is 100km/h"
//     },
//     isAc: () => true

// }
// console.log(car.maxspeed(), car.start(), car.isAc());
// function can be used in object only not in array  







type Slip = {
    customerName: string,
    products: {
        productName: string
        price: number,
        isTasty: () => string
    }
}
const  slip : Slip = {
    customerName: "Ali",
    products: {
    productName: "Cake",
    price: 2300,
    isTasty: () => "cake is tasty"
    }
    }
console.log(slip.products.isTasty());



















// make array that contain 10 objects have name and color property then print the objext where color is white

