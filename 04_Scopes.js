//!Global Scope
// var a = 10;
// let b = 20;
// const c = 30;
// console.log(a) //10
// console.log(b) //20
// console.log(c) //30

// function wakeUp() {
//   console.log(a) //10
//   console.log(b) //20
//   console.log(c) //30
// }
// wakeUp()

// {
//   console.log(a) //10
//   console.log(b) //20
//   console.log(c) //30
// }

// console.log(window.a) //10
// console.log(window.b) //undefined
// console.log(window.c) //undefined

//!Local / Function Scope
// function anything() {
//   {
//     var biscuit1 = "Jim-Jam";
//     let biscuit2 = "Oreo";
//     const biscuit3 = "HideNSeek";
//   }
//   console.log(biscuit1) //Jim-Jam
//   console.log(biscuit2) //Uncaught ReferenceError: biscuit2 is not defined
//   console.log(biscuit3) //Uncaught ReferenceError: biscuit3 is not defined
// }
// anything()

//*Outside the fn
// console.log(biscuit1) //Uncaught ReferenceError: biscuit1 is not defined
// console.log(biscuit2) //Uncaught ReferenceError: biscuit2 is not defined
// console.log(biscuit3) //Uncaught ReferenceError: biscuit3 is not defined

//!Block Scope
// {
//   var snacks1 = "PaniPuri"
//   let snacks2 = "Samosa"
//   const snacks3 = "FrenchFries"
//   console.log(snacks1) //PaniPuri
//   console.log(snacks2) //Samosa
//   console.log(snacks3) //FrenchFries
// }

// console.log(snacks1) //PaniPuri
// console.log(snacks2) //Uncaught ReferenceError: snacks2 is not defined
// console.log(snacks3) //Uncaught ReferenceError: snacks3 is not defined

//!Lexical Scope
function outer() {
  var chips1 = "Lays"
  let chips2 = "Bingo"
  const chips3 = "SpicyWheels"
  function inner() {
    console.log(chips1) //Lays
    console.log(chips2) //Bingo
    console.log(chips3) //SpicyWheels
  }
  inner()
}
outer()