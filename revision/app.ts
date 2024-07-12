/* type aliases */
// type ko hi nam assign khar do

type FullName = string;
let myName: FullName = "Muhammad Mughees Subtain"

type Age = Number;
let age: Age = 18;


// Type Aliases allow defining types with a custom name (an Alias).

// Type Aliases can be used for primitives like string or more complex types such as objects and arrays:

type CarYear = number
type CarType = string
type CarModel = string
type Car = {
    year: CarYear,
    type: CarType,
    model: CarModel
}

const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"
const car: Car = {
    year: 2001,
    type: "Toyota",
    model: "Corolla"
}


type ProductsName = string;
let productsname: ProductsName[] = [
    "bread", "milk", "eggs", "dahi"
]

//diff bw type aliases and interface
// used to make object structure
// type in used for all primitive datatypes
//while interface is only used for objects


type ProductsName2 = {
    pName: string,
    price: number,
    isExperied: boolean,
    quantity: number
}

let product: ProductsName2 = {
    pName: "bread",
    price: 120,
    isExperied: true,
    quantity: 1
}

interface ProductsName3 {
    pName: string,
    price: number,
    isExperied: boolean,
    quantity: number
}

// interface name5= string
// only supports {}
























// nested object








interface ProductsName4 {
    pName: string,
    price: number,
    info: {
        isExpired: boolean
    }
}


let productsName4: ProductsName4 = {
    pName: "mughees",
    price: 120,
    info: {
        isExpired: false
    }
}

// console.log(productsName4.info.isExpired);

















let isFood = false
let cooking = () => {
    return new Promise((reslove, reject) => {
        console.log("food in process");
        if (isFood) {
            setTimeout(() => {
                reslove("fooed was amazing")
            },1500)
        }
        else {
            setTimeout(() => {
                reject("gas chali gai")
            },1500)
        }
    })
}
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









async function getResult(){
try{
    let res=await cooking()
    console.log(res);
    // return 
}
catch(err){
    console.log(err);
    
}
}
getResult()



//next function then get result called




















// sequential + fixed number of data is called tuples.
// jab apko phalay sa values pata hoo { enermiration pre defined values.}
// const enmus sirf values ay ga index sa access nahi khar sakhty value sa access hoty hein
// color.red
// set of predefined values






// ek sa zada type rakhni ho toh woh type unions hein
// 



// narrowing
// precise kharna datatype ko



// expilict casting 
// forcefully variable ko type assign kharna
// type assertion
// 









// do types ko mila khar ek type bana intersecion khalata haa(&)






// do object ko match kharna structal typing
//= laga khar compare kia
// properties same honi chaie
// ek tarf zada hein starl object 
//left ma zada haa toh error
// right ma zada toh error nahi haa

// phalay sa bany howy ma starling object

// optional and rest parameters
// null and undefined diff
// optional = undefined.
// ={} fresh object