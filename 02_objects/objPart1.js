
let mySym = Symbol("key1");

const jsUser = {
name: "Ali",
"Full Name": "Ali Hasan",
email: "ah560@gmail.com",
[mySym]: "SymbolKey2",
isLoggedIn: false,
LoggenInDays: ["Friday","Saturday"]
}

console.log(jsUser["email"]);
console.log(jsUser["Full Name"]);
console.log(jsUser.isLoggedIn);

jsUser.LoggedInMsg = function printMsg () {
    console.log(`Hello jsUSer ${this["Full Name"]}!`);
    console.log(`SuccessFully LogIn with email: ${this.email}`);
    this.isLoggedIn = true;
     }
     console.log(jsUser.LoggedInMsg);

// console.log(jsUser.LoggedInMsg.printMsg());
console.log(jsUser.isLoggedIn);
console.log(jsUser["LoggenInDays"]);

