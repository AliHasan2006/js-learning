const myArray = ['Ali','Sunny','Sonu','Hasan','Abbas'];
const myObj = {
    1: 'first',
    2: 'second',
    3: 'three',
    4:'four',
    5: 'five'
}

// console.log("Printing Array Value by For of loop");
// for(const arrayValue of myArray){
//     console.log(arrayValue); // output  Ali , Sunny , Sonu , Hasan , Abbas
// }
// console.log("Printing Array Value by For in loop");
// for(const arrayValue in myArray){
//     console.log(arrayValue); // 0 ,1 ,2, 3, 4
// }

// console.log("Printing Object Value by For of loop");
// for(const ObjValue of myObj){
//     console.log(ObjValue); // output  Error: myObj is not iterable
// }
// console.log("Printing Object Key by For in loop");
// for(const ObjKey in myObj){
//     console.log(ObjKey); // this print the key of Object => 0 ,1 ,2, 3, 4
// }
console.log("Printing Object Value by For in loop");
for(const objKey in myObj){
    console.log(`${objKey}: ${myObj[objKey]}`); // this print the key of Object => 0 ,1 ,2, 3, 4
}
