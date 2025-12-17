const array1 = [1,2,3];
const array2 = [3,4,5];
const newArray = array1+array2;
// console.log(newArray);
console.log(...array1);
const objArr = [
    {
        name: "Ali Hasan",
        code: 123
    },
    // {
    //     name:"Ali Abbas",
    //     code:345
    // },
    // {
    //     name:"abbas",
    //     code:346
    // }
]

// console.log(...objArr);

const newObj ={
    name:"ali",
    code:344
}

const newSpreadedArray = [{name:"hi",code:34},...objArr];
// console.log(newSpreadedArray);

const sampleObj = {
    name:"asf",
    if:56,
    df:false
}

console.log(...sampleObj, df = !sampleObj.df );
