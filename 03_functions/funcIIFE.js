// Immideately Invoked Function Expression == > IIFE 
// this function is used to avoid global pollution
//  (Here We write our function definition)(this parantheses run the function immideately)
    
(
    function chai() {
        console.log("Please Get My Chai!");
    }
)();

// (
//      () => {
//         console.log("Please Get Code1");
        
//      }
// )();
(
    (name) => {
       console.log(`please get my ${name}`);
       
    }
)("Masala Chai");
// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TO ${name}`);
} )('hitesh')
