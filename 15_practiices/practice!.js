// function isPalindrome(word) {
//   let reversed = word.split("").reverse().join("");
//   return word === reversed;
// }

// console.log(isPalindrome("madam")); // Output: true
// console.log(isPalindrome("")); // Output: false

// let sampleVAr = "HEllO";
// console.log(reverse(sampleVAr));
// let x = "5";
// let y = "8";
// let z = x + y;
// console.log(z);
// let a = 10;
// console.log(x);
// a = "Ali";
// console.log(a);
// let arr= [80,80,80,80,80];
// let sum =0;
// let maxMarks= arr.length;
// let avgMarks;
// for (let index = 0; index < arr.length; index++) {
//     sum=sum+arr[index];
//     }
// avgMarks= sum/maxMarks
//    console.log(`Avg MArks of Student: ${avgMarks}`);

// let str1 = "hello";
// let str2 = "world!";
// let combination = (...str1,...str2)
//     let sampleString = "Ali";
//   const stringToArray = Array.from(sampleString);
//   console.log(stringToArray);
  

// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false
//         if (!error) {
//             resolve({username: "javascript", password: "123"})
//         } else {
//             reject('ERROR: JS went wrong')
//         }
//     }, 1000)
// });

// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromiseFive();
// fetch('https://api.github.com/users/hiteshchoudhary')
// .then((response) => {
//     return response.json()
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => console.log(error))

console.log("1")
console.log("2");
// async function get() {
//     await found3();
// }
function found3(){
    setTimeout(()=>{
        console.log("3");
    },3000);
};
found3()
console.log("4");
console.log("5");
