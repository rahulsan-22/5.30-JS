//!Primitive Datatypes

//!1)Number
// var num = 10;
// var discount = 55.5
// console.log(num) //10
// console.log(typeof num) //number
// console.log(discount) //55.5
// console.log(typeof discount) //number

//!2)String
// let trainer = "Monty";
// let letter = 'r'
// let subject = `Javascript`
// console.log(trainer) //Monty
// console.log(typeof trainer) //string
// console.log(letter) //r
// console.log(typeof letter) //string
// console.log(subject) //Javascript
// console.log(typeof subject) //string

//!3)Boolean
// const feelingSleepy = true;
// const understandingJs = false;
// console.log(feelingSleepy) //true
// console.log(typeof feelingSleepy) //boolean
// console.log(understandingJs) //false
// console.log(typeof understandingJs) //boolean

//!4)Undefined -- absence of a value for a variable
// var food;
// console.log(food) //undefined
// console.log(typeof food) //undefined

//!5)Null -- intentional absence of a value for a variable
// var snacks = null;
// console.log(snacks); //null
// console.log(typeof snacks); //object (historical bug in js)

//!6) BigInt
let amount = 12345678912345678912345n
console.log(amount) //12345678912345678912345n
console.log(typeof amount) //bigint

//!7) Symbol
let trainer = Symbol("Monty");
let model = Symbol("Monty");
console.log(trainer == model) //false
console.log(trainer) //Symbol(Monty)
console.log(typeof trainer) //symbol

//!Non - Primitive / Reference Datatypes

//!1) Arrays -- used to store multiple d/f values
let snacks = ["Samosa", "Kachori", "PaniPuri"]
let user = ["Pavan", 26, true, null, undefined]
console.log(snacks) //["Samosa", "Kachori", "PaniPuri"]
console.log(typeof snacks) //object
console.log(user) //["Pavan", 26, true, null, undefined]
console.log(typeof user) //object

//!2) Objects -- used to store in the form of key-value pair
let obj = {
  title: "Jim-Jam",
  category: "Biscuit",
  price:10
}
console.log(obj) //{title: 'Jim-Jam', category: 'Biscuit', price: 10}
console.log(typeof obj) //object

//!3) Functions -- resuable block of code used to perform a specific task
function askQuestion() {
  console.log("Are you guys feeling bored ?")
}
askQuestion()
askQuestion()
askQuestion()
console.log(typeof askQuestion)