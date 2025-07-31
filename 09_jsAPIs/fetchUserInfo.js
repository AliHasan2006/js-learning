async function promiseConsume() {
    try {
        const response =await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json();
        console.log(response);
         console.log(data);
    } catch (error) {
     console.log(402);   
    }
}
promiseConsume();


// const url = 'https://api.github.com/users/hiteshchoudhary';

// (async function getData() {
//     try {
//         console.log("Getting Data...");
//     let response = await fetch(url);
//         // console.log(response); // data in json string Format
//     const data = await response.json(); // now data is in json obect format
//     console.log(data['name']); // data in actual js obect format
// }
//     catch (error) {
//         console.log("402");   
//     }
// })();
