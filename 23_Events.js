//!Events
//Events are actions or occurences that happens on our webpage.
//Javascript detects events and executes specific code.
//Events make webpages interactive and dynamic.
//Event Handling means responding to a event
//Function that executes when event occurs is known as event handler.

//!Examples:
//Clicking upon button
//Typing into input field
//Submitting the form
//Loading your webpage etc...

//!Ways to handle events
//1)Inline Events
//2)Dom Property
//3)addEventListener (most recommended)

//!DOM PROPERTY
// let h1Tag = document.getElementById("heading")
// h1Tag.onclick = () => {
//   h1Tag.style.color = "red"
//   h1Tag.style.background = "yellow"
// }

// let h2Tag = document.getElementById("greet");
// h2Tag.ondblclick = () => {
//   h2Tag.style.border="2px solid red"
// }
//!addEventListener(event,fn,useCapture)
// let paraTag = document.getElementById("para")
// paraTag.addEventListener("click", () => {
//   paraTag.style.color = "yellow"
//   paraTag.style.background = "green"
// })
// let pTag = document.getElementById("request")
// pTag.addEventListener("dblclick", () => {
//   pTag.style.color="white"
//   pTag.style.background="purple"
// })

//!Event Object
// let form = document.querySelector('form')
// form.addEventListener("submit", (e) => {
//   e.preventDefault()
//   console.log(e)
//   console.log(e.target)
//   console.log(e.type)
//   console.log(e.target[1].value)
//   console.log(e.target[2].value)
//   console.log("Logged in Successfully 🥳")
// })

//!Focus,Input,Change,Blur
// let inputTag = document.getElementById("searchField");

//*Focus
// inputTag.addEventListener("focus", (e) => {
//   e.target.style.outline = "2px solid red"
// })

//*Input
// inputTag.addEventListener("input", (e) => {
//   console.log(e.target.value)
// })

//*Change
// inputTag.addEventListener("change", (e) => {
//   e.target.style.height="200px"
// })

//*Blur
// inputTag.addEventListener("blur", (e) => {
//    e.target.style.outline = "2px solid green"
// })

//! Keyup and keydown
// let textarea = document.querySelector("textarea");

//*keyup
// textarea.addEventListener("keyup", (e) => {
//   console.log(e)
//   console.log("Key is UP")
// })

//*keydown
// textarea.addEventListener("keydown", (e) => {
//   console.log(e)
//   console.log("Key is DOWN")
// })

//!DOMContentloaded
// document.addEventListener("DOMContentLoaded", (e) => {
//   console.log(e)
//   console.log("Dom Created")
// })

//!Event Propagation
// It is the process of travelling of events from one element to another.

//!Phases of Event Propagation

// let outer = document.getElementById("outer")
// let inner = document.getElementById("inner")

//*1)Event Bubbling Phase
// Propagation of Event from target element to parent element.
// outer.addEventListener("click", () => {
//   alert("Outer Box Clicked 💥")
// },false)

// inner.addEventListener("click", () => {
//   alert("Inner Box Clicked 🥳")
// },false)

//*2)Event Capturing Phase
// Propagation of Event from Parent element to target element.
// outer.addEventListener("click", () => {
//   alert("Outer Box Clicked 💥")
// },true)

// inner.addEventListener("click", () => {
//   alert("Inner Box Clicked 🥳")
// }, true)

//!Interview
//If one is true and the other is false it always starts from true value
// outer.addEventListener("click", () => {
//   alert("Outer Box Clicked 💥")
// },false)

// inner.addEventListener("click", () => {
//   alert("Inner Box Clicked 🥳")
// },true)

//!stopProgation()
// outer.addEventListener("click", () => {
//   alert("Outer Box Clicked 💥")
// },false)

// inner.addEventListener("click", (e) => {
//   alert("Inner Box Clicked 🥳")
//   e.stopPropagation()
// },false)

//!Event Delegation
//Attaching single event to the parent instead of attachinh to indvidual child elements
let courses = document.getElementById("courses")
courses.addEventListener("click", (e) => {
  console.log(e.target.innerHTML)
})