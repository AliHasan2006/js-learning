//  Aisa Function jo Dusre function ke ander aisa argument paas hota hai use call back function kehte hain

function sum(a,b) {
    console.log(a+b);
}

const add = (a,b,sumCallback) => {
  sumCallback(a,b);
}
 add(2,3,sum);

 