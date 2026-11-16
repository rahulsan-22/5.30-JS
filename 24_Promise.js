//!Promise
//Promise is a object which is used to handle asynchronous operation.
//Asynchronous operation - are those which takes some time to execute (setInterval,setTimeout,Dom Manipulation,Fetching the data from API etc....)
//Promise represents a value which may be available now,later or never.
//Promises are mainly used to avoid callback hell.

//!State/Phases
//3 states or phases
//1)Pending
//2)Fulfilled
//3)Rejected

//!Example
// let p = new Promise((resolve, reject) => {
//   let pistaHouse = false;
//   if (pistaHouse) {
//     resolve("Promise got resolved")
//   } else {
//     reject("Promise got rejected")
//   }
// })
// console.log(p)
// console.log(typeof p)

//!To Handle the promise there are 2 ways
//1)then(),catch() and finally()
//2)async and await
// p.then((res)=>{
//   console.log(`${res} Lets go inside n have something`)
// })
// .catch((err)=>{
//   console.log(`${err} Sorry guys i am busy`)
// })
// .finally(()=>{
//   console.log("Done")
// })

//!Promise Chaining
Promise.resolve(10)
  .then((res) => {
   return res*2
  }).then((res) => {
    return res/4
  }).then((res) => {
    console.log(res)
  })

//!Promise.resolve()
Promise.resolve("Hello")
  .then((res) => {
    console.log(res)
  })

//!Promise.reject()
Promise.reject("Bye")
  .catch((err) => {
    console.log(err)
  })

//!Promise.all()
Promise.all([
  Promise.resolve("Html"),
  Promise.resolve("Css"),
  Promise.resolve("Js")
]).then((res) => {
  console.log(res)
})