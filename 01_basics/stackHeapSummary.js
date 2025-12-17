/* 
              ++++DataTypes+++++

    1.) Primitive (Stack Based Mermory System)
    2.) Non Primitive (Heap basesd Memory System)       

1.) Primitive Datatypes => String, Number, Boolearn, null, undefined, Symbol, BigInt
2.) Non Primitive Datatypes => Function, Object, Array

Primitive DataTypes copy milti hai Exixsting Variable ki.
Non Primitive DataTypes Refrence Milta hai exixsting variable ka.

*/
// For Primitve Data Type
let x = "Ali Hasan";
console.log(x);

let y = x; // y= x= Ali Hasan
console.log(y);

y = "Ali Abbas"; // y = Ali Abbas
console.log(y);

console.log(x); // x = Ali Hasan

//For non Primitive Data Type

let user1 = {
  email: "user1@gmail.com",
  upiID: "123@ybl",
};

console.log(user1.email);

let user2 = user1;
user2.email = "user2@gmail.com";

console.log(user2.email);  // user2@gmail.com
console.log(user1.email);  // user2@gmail.com

let array1 = ['raza','askari','shariq'];
console.log(array1);
let array2 = array1;
array2[2] = 'oldMan'
console.log(array2);
console.log(array1);



