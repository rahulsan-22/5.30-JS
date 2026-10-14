//!Example 1:
// var a = "Hi";
// function outer() {
//   let b = "There";
//   const c = "I am";
//   console.log(a);
//   function inner() {
//     let d = "Dumb";
//     console.log(c + " " + d);
//   }
//   inner()
// }
// outer()

//!Example 2:
console.log("Start")
function counter() {
    let count = 0;
    return function () {
        count++;
        console.log(count);
    };
}
const increment = counter();
increment();
increment();
increment();
