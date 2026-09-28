//!Primitive Datatypes

//!1)Number
var num = 10;
var discount = 55.5
console.log(num) //10
console.log(typeof num) //number
console.log(discount) //55.5
console.log(typeof discount) //number

//!2)String
let trainer = "Monty";
let letter = 'r'
let subject = `Javascript`
console.log(trainer) //Monty
console.log(typeof trainer) //string
console.log(letter) //r
console.log(typeof letter) //string
console.log(subject) //Javascript
console.log(typeof subject) //string

//!3)Boolean
const feelingSleepy = true;
const understandingJs = false;
console.log(feelingSleepy) //true
console.log(typeof feelingSleepy) //boolean
console.log(understandingJs) //false
console.log(typeof understandingJs) //boolean

//!4)Undefined -- absence of a value for a variable
var food;
console.log(food) //undefined
console.log(typeof food) //undefined

//!5)Null -- intentional absence of a value for a variable
var snacks = null;
console.log(snacks); //null
console.log(typeof snacks); //object (historical bug in js)