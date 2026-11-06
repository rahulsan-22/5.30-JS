//!DOM
// DOM stands for Document Object Model
// DOM represents Html document into a tree like structure of objects.
// DOM is created whenever our webpage reloads.
// DOM helps to access,modify,add,delete,style... html elements
// document - represents dom

//!Document
// console.log(document)

//!Access the elements

//*1)getElementById()
// let h1Tag = document.getElementById("heading")
// console.log(h1Tag)

// let paraTag = document.getElementById("para")
// console.log(paraTag)

//*2)getElementsByClassName()
// let images = document.getElementsByClassName("poster")
// console.log(images)

//*3)getElementsByTagName()
// let inputs = document.getElementsByTagName("input")
// console.log(inputs)

//*4)querySelector()

//@Id
// let headingTag1 = document.querySelector("#heading")
// console.log(headingTag1)

//@Class
// let poster1 = document.querySelector(".poster")
// console.log(poster1)

//@Tag
// let inputTag1 = document.querySelector("input")
// console.log(inputTag1)

//*5)querySelectorAll()

//@Id
// let headingTag2 = document.querySelectorAll("#heading")
// console.log(headingTag2)

//@Class
// let poster2 = document.querySelectorAll(".poster")
// console.log(poster2)

//@Tag
// let inputTag2 = document.querySelectorAll("input")
// console.log(inputTag2)

//!Accessing and changing text content

//*Accessing
// let pTag = document.getElementById("para")
// console.log(pTag)
// console.log(`innerText: ${pTag.innerText}`)
// console.log(`textContent: ${pTag.textContent}`)
// console.log(`innerHTML: ${pTag.innerHTML}`)

//*Changing
// let divTag = document.querySelector("#content")
// console.log(divTag)
// divTag.innerText = "Hello from innerText"
// divTag.textContent = "Hello from textContent"
// divTag.innerHTML = `<h1 style=color:red;>Hello from innerHTML</h1>
// <p> This is a sample paragraph</p>
// <button>Click</button>
// `

//!Stylings

//*Single
let h2Tag = document.getElementById("greet")
console.dir(h2Tag)
h2Tag.style.color = "white"
h2Tag.style.background = "red"

//*Collection
let headingTag2 = document.querySelectorAll("#greet")
console.log(headingTag2)
for (let i = 0; i < headingTag2.length; i++) {
  headingTag2[i].style.color = "purple"
  headingTag2[i].style.background = "aqua"
}