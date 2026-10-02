//!JAVASCRIPT OPERATORS

//! 1. ARITHMETIC OPERATORS
//!Ex: +  -  *  /  %  **

//* ADDITION (+)
// console.log(10 + 20) //30
// console.log(10 + "20") //1020
// console.log("10" + 20) //1020
// console.log(10 + true) //11
// console.log(10 + false) //10
// console.log(10 + null) //10
// console.log(10 + undefined) //NaN
// console.log(10 + 20 + "JS") //30JS
// console.log("JS" + 10 + 20) //JS1020
// console.log(typeof (10 + "20")) //string

//* SUBTRACTION (-)
// console.log(20 - 10) //10 
// console.log(20 - "10") //10
// console.log("50" - "20") //30
// console.log(20 - true) //19
// console.log(20 - false) //20
// console.log(20 - null) //20
// console.log(20 - undefined) //NaN
// console.log(20 - "abc") //NaN
// console.log(typeof (20 - "10")) //number

//* MULTIPLICATION (*)
// console.log(5 * 5) //25
// console.log(5 * "5") //25 
// console.log("5" * "2") //10
// console.log(5 * true) //5
// console.log(5 * false) //0
// console.log(5 * null) //0
// console.log(5 * undefined) //NaN
// console.log(5 * "abc") //NaN
// console.log(typeof (5 * "5")) //number

//* DIVISION (/)
// console.log(10 / 2) //5
// console.log(10 / "2") //5
// console.log("20" / "2") //10
// console.log(10 / true) //10
// console.log(10 / false) //Infinity
// console.log(10 / null) //Infinity
// console.log(10 / undefined) //NaN
// console.log(10 / "abc") //NaN
// console.log(typeof (10 / "2")) //number

//* MODULUS (%)
// console.log(10 % 2) //0
// console.log(10 % 3) //1
// console.log(10 % "3") //1
// console.log(10 % true) //0
// console.log(10 % false) //NaN
// console.log(10 % null) //NaN
// console.log(10 % undefined) //NaN

//* EXPONENT (**)
// console.log(2 ** 2) //4
// console.log(10 ** 2) //100

//! 2. INCREMENT & DECREMENT OPERATORS

//* PRE INCREMENT
// let a = 10
// console.log(++a) //11
// console.log(a) //11

//* POST INCREMENT
// let b = 20
// console.log(b++) //20
// console.log(b) //21

//* PRE DECREMENT
// let c = 15
// console.log(--c) //14
// console.log(c) //14

//* POST DECREMENT
// let d = 25
// console.log(d--) //25
// console.log(d) //24

//! 3. COMPARISON / RELATIONAL OPERATORS
//!Ex: > < >= <= == === != !==
// let num1 = 10
// let num2 = 20
// let num3 = "10"
// console.log(num1 > num2) //false
// console.log(num1 < num2) //true
// console.log(num1 >= num3) //true
// console.log(num1 <= num3) //true
// console.log(num1 == num3) //true
// console.log(num1 === num3) //false
// console.log(num1 != num3) //false
// console.log(num1 !== num3) //true
// console.log(false == 0) //true
// console.log(false === 0) //false
// console.log(null == undefined) //true
// console.log(null === undefined) //false
// console.log("" == 0) //true
// console.log("" === 0) //false

//! 4. LOGICAL OPERATORS
//!Ex: && || !
// let x = 10
// let y = 20
// let z = "10"

//* LOGICAL AND (&&)
// console.log(x < y && y > x) //true
// console.log(x === z && y > x) //false
// console.log(true && true && true) //true
// console.log(true && false) //false
// console.log(10 && 20) //20
// console.log(0 && 20) //0
// console.log("" && "JS") //""

//* LOGICAL OR (||)
// console.log(x > y || y > x) //true
// console.log(x === z || y < x) //false
// console.log(10 || 20) //10
// console.log(0 || 20)  //20
// console.log("" || "JavaScript") //"Javascript"

//* LOGICAL NOT (!)
// console.log(!true) //false
// console.log(!false) //true
// console.log(!(10 > 5)) //false
// console.log(!(10 < 5)) //true

//! 5. ASSIGNMENT OPERATORS
//! += -= *= /= %=

//* +=
let num = 10
num += 5
console.log(num) //15
num += "10"
console.log(num) //1510

//* -=
let num4 = 20
num4 -= 5
console.log(num4) //15
num4 -= "5"
console.log(num4) //10

//* *=
let num5 = 5
num5 *= 2
console.log(num5) //10
num5 *= "2"
console.log(num5) //20

//* /=
let num6 = 20
num6 /= 2
console.log(num6) //10
num6 /= "2"
console.log(num6) //5

//* %=
let num7 = 10
num7 %= 3
console.log(num7) //1
num7 %= "2"
console.log(num7) //1

//! 6. TERNARY / CONDITIONAL OPERATOR
//!Syntax: condition ? trueBlock : falseBlock

//* EXAMPLE 1
let attendingJsClass = false;
attendingJsClass ? console.log("Js chala easy subject") : console.log("Js chala difficult subject")

//* EXAMPLE 2
let value = 5
let result = value % 2 == 0 ? value + " is a even number" : value + " is a odd number"
console.log(result)

//! 7. UNARY OPERATORS

//* UNARY PLUS (+)
console.log(+"10") //10
console.log(typeof +"10") //number
console.log(+"100abc") //NaN

//* UNARY MINUS (-)
console.log(-"10") //-10
console.log(-true) //-1
console.log(-false) //-0