// // setTimeout(()=>{
// //   console.log("mughees")
// // },3000)
// // console.log(3);
// // console.log(2);
// // console.log(1);

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
                resolve("We Won")
            }, 1500);
        }
        else {
            console.log("match in progress");
            reject("we lost")
        }
    })
}

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

async function getData(){
    try{
    
    let res = await matchResult()
    console.log(res);
    }
    catch(error){
        console.log("error",error);
        
    }    
    
}
getData()