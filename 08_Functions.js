//!Function Declaration
//Most commonly used functions.
//declared using function keyword and a function name.

//!1)Normal Function
//simple task
//*Example 1:
// function normal() {
//   console.log("Wake up Guys....")
// }
// normal()

//*Example 2:
// function findingPow() {
//   console.log(2**3)
// }
// findingPow()

//!2)Parameterized Function
//accepts the value inside the fn through parameters
//arguments - are the values passed during function call
//parameters - are the variables that accepts the arguments
// function findingProduct(a,b) {
//   console.log(a*b)
// }
// findingProduct(2,5)
// findingProduct(3)
// findingProduct()
// findingProduct(1, 2, 3)

//!3)Return Function
//It is the function that sends a value back using return keyword
//return keyword ends the fn execution
//value sent by the return keyword can be stored in a variable or used later.

//*Example 1:
// function greet() {
//   return "Hello Manoj"
// }
// let result = greet()
// console.log(result)

//*Example 2:
// function food(item) {
//   return "My fav food is "+item
// }
// console.log(food("Biryani"))
// console.log(food("Mandi"))

//!Function Expression
//are those where a function is stored inside a variable.
//In Function Expression, functions are treated as values.

//!1)Anonymous Function
//are those which doesnot have a function name.
//mostly used as callback fn

//*Example 1:
// let anonymous1 = function () {
//   console.log("Ac Working....")
// }
// anonymous1()

//*Example 2:
// let anonymous2 = function(firstName,lastName) {
//   return "My fullname is "+firstName+" "+lastName
// }
// console.log(anonymous2("Virat","Kohli"))
// console.log(anonymous2("Rohit","Sharma"))

//!2) Arrow Function
// ES6(2015)
// provide shorter syntax to design a fn
// doesnot have function keyword as well as function name
// mostly used in modern js and react.js

//*Example 1:
// let arrow1 = () => {
//   console.log("I am arrow function...")
// }
// arrow1()

//*Example 2:
// let arrow2 = (a, b) => {
//   console.log(a - b)
// }
// arrow2(50, 30)
// arrow2(70, 10)

//*Types (Based on return keyword)

//@1)Explicit Return Arrow function
//To return a value in arrow fn if we use return keyword it is explicit return arrow function
// let findingPow1 = (a,b) => {
//   return a**b
// }
// console.log(findingPow1(2,3))

//@2)Implicit Return Arrow function
// To return a value in arrow fn if we dont use return keyword it is implicit return arrow function
// curly braces should not be used
// single line expressions
// let findingPow2 = (a,b) => a**b
// console.log(findingPow2(2,3))

//!3)Immediately Invoked Function Expression (IIFE)
//fn should be executed immediately after creation.
//these type of fn are wrapped inside a () and should be called using the same ()
//single time use
//avoid global scope pollution.

//*Example 1
// (function normal() {
//   console.log("I am Normal IIFE")
// })();

//*Example 2:
// (function (a, b) {
//   console.log(a + b)
// })(2, 3);

//*Example 3:
// let result = ((a, b) => a ** b)
// console.log(result(2,3))

//!Higher Order Function and Callback Function
//A function can be a hof if -

//i) function accepts another function as an argument
//The function passed as a value(argument) to hof is called as callback fn
//*Example 1:
// function greet(name) {
//   console.log("Good Evening " + name)
// }
// function user(name, fn) {
//   fn(name) //greet("Manoj")
// }
// user("Manoj", greet)
// user("Prasad", greet)

//*Example 2:
// let add = (a, b) => a + b
// let sub = (a, b) =>  a - b
// let mul = (a, b) =>  a * b
// let div = (a, b) =>  a / b
// let calculator = (a, b, fn) => fn(a, b)  //add(10,20) //30
// console.log(calculator(10, 20, add))
// console.log(calculator(10, 20, sub))
// console.log(calculator(10, 20, mul))
// console.log(calculator(10, 20, div))

//ii) function returns another function

//*Example 1:
// function outer() {
//   console.log("Outer Function Executed")
//   return function inner() {
//     console.log("Inner Function Executed")
//   }
// }
//@1st way of executing
// let res = outer()
// res()
//@2nd way of executing (Currying)
// outer()()

//*Example 2:
// let qspiders = () => {
//   let trainer = "Monty";
//   return () => {
//     let subject = "Python";
//     return () => {
//       let durationInDays = 90;
//       return () => {
//         console.log("My name is "+trainer+" i teach "+subject+" in "+durationInDays+" days")
//       }
//     }
//   }
// }
//@1st way of executing
// let res1 = qspiders()
// let res2 = res1()
// let res3 = res2()
// res3()

//@2nd way of executing (Currying)
// qspiders()()()()

//!Function Currying
//It is the process of transforming a function taking multiple arguments into nested series of function taking single argument

//*Function taking multiple arguments
function add1(a, b, c) {
  return a + b + c
}
console.log(add1(10, 20, 30))

//*Nested series of function taking single argument
function add2(a) {
  return function (b) {
    return function (c) {
      return a + b + c
    }
  }
}
console.log(add2(10)(20)(30))

//*Implicit return arrow function
let add3 = a => b => c => a + b + c
console.log(add3(10)(20)(30))
