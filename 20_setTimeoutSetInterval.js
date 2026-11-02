//!setTimeout() and setInterval()
// are higher order methods used to perform asynchronous operations.
// asynchronous operations are those which takes some time to execute.
// time or the delay should be defined in terms of milliseconds
// 1s = 1000ms

//!setTimeout(fn,time)
// executes a fn only once after a specified delay

//*Example 1:
// setTimeout(() => {
//   console.log("Tinnara?")
// },5000)

//*Example 2:
// function greet() {
//   console.log("Good Evening Guys 😉")
// }
// setTimeout(greet,5000)

//*Example 3:
// function printFood(food) {
//   console.log("My fav food is "+food)
// }
// setTimeout(printFood,3000,"Biryani")

//!clearTimeout()
setTimeout(() => {
  document.writeln("<h1>Rahul Sir is very gud let not shoot at him</h1>")
  clearTimeout(murderPlan)
},3000)
let murderPlan = setTimeout(() => {
  document.writeln("<h1>Shoot at Rahul Sir 🔫</h1>")
},5000)

//!setInterval(fn,time)
// executes a fn multiple times after every specified delay

//*Example 1:
// setInterval(() => {
//  document.writeln("<h1>Chai Kavala?</h1>")
// },1000)

//*Example 2:
// function askSomething() {
//   document.writeln("<h1>How is your life going on....?</h1>")
// }
// setInterval(askSomething,1000)

//*Example 3:
// function printOtp(min, max) {
//   console.log("Your 4 digit otp is " + Math.floor(Math.random() * (max - min + 1) + min))
// }
// setInterval(printOtp,1000,1000,9999)

//!clearInterval()
let count = Number(prompt("Enter a value"));
let timer = setInterval(() => {
  document.writeln(`<h1>${count}</h1>`)
  count--
  if (count < 0) {
    clearInterval(timer)
    document.writeln("<h1>Time Completed...</h1>")
  }
},1000)