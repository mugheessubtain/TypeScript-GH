interface myCar {
    make: string
    model: number
    spec: {
        color: string
        // isAC
    }
}


type teacher = {
    teacherName: string
    exp: Number
}
type student = {
    studentName: string
    rollno: Number
}
/*         TYPE INTERSECTION */
const classRoom: teacher & student = {
    studentName: "mughees",
    exp: 6,
    rollno: 132,
    teacherName: "ali"
}
/* array types define */
// let fruits1:string[][]=[

// ["apple","banana"],
// ["peach","garpes"],
// "apppp"                         error
// ]


let fruits: (number | string | boolean)[][] = [

    ["apple", "banana"],
    ["peach", "garpes"],
    [23, 23, 12],
    [true,false]
]


let array: (number | string)[] = [
   23,"mughees",23
]
