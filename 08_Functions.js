//!Function Declaration
//Most commonly used functions.
//declared using function keyword and a function name.

//!1)Normal Function
//simple task
//*Example 1:
function normal() {
  console.log("Wake up Guys....")
}
normal()

//*Example 2:
function findingPow() {
  console.log(2**3)
}
findingPow()

//!2)Parameterized Function
//accepts the value inside the fn through parameters
//arguments - are the values passed during function call
//parameters - are the variables that accepts the arguments
function findingProduct(a,b) {
  console.log(a*b)
}
findingProduct(2,5)
findingProduct(3)
findingProduct()
findingProduct(1, 2, 3)

//!3)Return Function
//It is the function that sends a value back using return keyword
//return keyword ends the fn execution
//value sent by the return keyword can be stored in a variable or used later.

//*Example 1:
function greet() {
  return "Hello Manoj"
}
let result = greet()
console.log(result)

//*Example 2:
function food(item) {
  return "My fav food is "+item
}
console.log(food("Biryani"))
console.log(food("Mandi"))