//!Hoisting
// is a JS default behaviour in which the declarations are moved to the top of the scope before code execution.
// here variable and function declarations are processed before execution.
// due to this sometimes we can access the varibles or function even before their declarations

//!Variables
// console.log(a); //undefined
// var a = 10;

// console.log(b); //Uncaught ReferenceError: Cannot access 'b' before initialization
// let b = 20;

// console.log(c); //Uncaught ReferenceError: Cannot access 'c' before initialization
// const c = 30;

//!TDZ (Temporal Dead Zone)
// It is the time duration between the variable creation and its initialization

//!Functions

//!Function Declaration
// greet()
// function greet() {
//   console.log("Good Night Sir")
// }

//!Function Expression
//Hoisting in the case of function expression depends on variable declaration.

//*var
// anything() //Uncaught TypeError: anything is not a function
// var anything = () => {
//   console.log("anything")
// }

//*let
// something() //Uncaught ReferenceError: Cannot access 'something' before initialization
// let something = () => {
// console.log("something")
// }

//*const
// everything()
// const everything = () => {
// console.log("everything")
// }

//!HOISTING & TDZ FINAL SUMMARY


// | Type                              | Hoisted? | Initial Value During Hoisting | Can Access Before Declaration? | TDZ Applies? | Output Before Declaration |
// |-----------------------------------|-----------|-------------------------------|--------------------------------|--------------|---------------------------|
// | var Variable                      | Yes       | undefined                     | Yes                            | No           | undefined                 |
// | let Variable                      | Yes       | Uninitialized                 | No                             | Yes          | ReferenceError            |
// | const Variable                    | Yes       | Uninitialized                 | No                             | Yes          | ReferenceError            |
// | Function Declaration              | Yes       | Entire Function Stored        | Yes                            | No           | Function Executes         |
// | Function Expression with var      | Yes       | undefined                     | NO                             | No           | TypeError                 |
// | Function Expression with let      | Yes       | Uninitialized                 | No                             | Yes          | ReferenceError            |
// | Function Expression with const    | Yes       | Uninitialized                 | No                             | Yes          | ReferenceError            |