//!DOM
// DOM stands for Document Object Model
// DOM represents Html document into a tree like structure of objects.
// DOM is created whenever our webpage reloads.
// DOM helps to access,modify,add,delete,style... html elements
// document - represents dom

//!Document
console.log(document)

//!Access the elements

//*1)getElementById()
let h1Tag = document.getElementById("heading")
console.log(h1Tag)

let paraTag = document.getElementById("para")
console.log(paraTag)

//*2)getElementsByClassName()
let images = document.getElementsByClassName("poster")
console.log(images)

//*3)getElementsByTagName()
let inputs = document.getElementsByTagName("input")
console.log(inputs)