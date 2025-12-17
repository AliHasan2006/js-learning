//  some operations with spread (...) operator

const obj1 = {
    name: "Ali",
    category: "General",
    srNumber: 10
}

const obj2 = {
    name: "Hasan",
    category: "General",
    srNumber: 11
}
let obj3 = {
    name: "Atul",
    category: "General",
    srNumber: 12
}
const obj4 = {
    name: "John",
    category: "OBC",
    srNumber: 13
}

let arr = [obj1,obj2];
let arr2 = [obj3,obj4]
console.log({...obj3},...arr);
let combineArr = [...arr,...arr2];
console.log(combineArr);


