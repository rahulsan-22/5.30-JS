//! Strings
// Strings are sequence of characters used to represent text in js
// Strings are immutable (Original string cannot be modified after creation)

//!Ways of creating a string

//*1)Single Quotes ('')
// let trainer = 'Pavan';
// console.log(trainer) //Pavan
// console.log(typeof trainer) //string

//*2)Double Quotes ("")
// let subject = "Core Java";
// console.log(subject) //Core Java
// console.log(typeof subject) //string

//*3)Template Literals (``)
// let durationInDays = `90`
// console.log(durationInDays) //90
// console.log(typeof durationInDays) //string

//*Intresting Facts about ``(Backticks)
//@ES6
//@supports interpolation ${}
// let user = "Monty";
// let title = "Model"
// let age = 25
// console.log(`My name is ${title} ${user} and my age is ${age + 5} years old`)
//@multi-line string
// console.log(`
// Good
// Evening
// ...`)

//!Accessing the characters of a string
// To achieve we use the concept of indexing
// Index values always starts with 0
// let vehicle = "Bus";
// console.log(vehicle[0]) //B
// console.log(vehicle[2]) //s
// console.log(vehicle[100]) //undefined
// console.log(vehicle[-1]) //undefined

//!Strings are immutable?
// let greet = "Hi"
// console.log(greet) //Hi
// greet[1] = "o"
// console.log(greet) //Hi
//Immutable, because cannot be modified once created

//!Length
// let restaurant = "Krishnapatnam"
// console.log(restaurant.length) //13
// console.log(restaurant[restaurant.length-1]) //m
// console.log(restaurant[restaurant.length-2]) //a

//!Methods

//!1)toUpperCase()
// let str1 = "mArKeR"
// console.log(str1.toUpperCase())

//!2)toLowerCase()
// let str2 = "mArKeR"
// console.log(str2.toLowerCase())

//!3)trim()
// let str3 = "      JAVA   SCRIPT   "
// console.log(str3.trim())

//!4)at(index)
// let str4 = "Hello"
// console.log(str4.at(0)) //H
// console.log(str4.at(4)) //o
// console.log(str4.at(100)) //undefined
// console.log(str4.at(-1)) //o

//!5)slice(startIndex,endIndex)
// extract a portion of a string and return a new string
// startIndex is included where endIndex is excluded
// negative index is supported
// if startIndex is greater than endIndex it returns ""
// if only startIndex is specified it starts extracting from that index till the last character
let str5 = "Classes starts at 06.30"
console.log(str5.slice(3)) //sses starts at 06.30
console.log(str5.slice(7,10)) // st
console.log(str5.slice(10,11)) //a
console.log(str5.slice(11,11)) //""
console.log(str5.slice(-6,-2)) // 06.
console.log(str5.slice(4,-6)) //ses starts at
console.log(str5.slice(-6,4)) //""
console.log(str5.slice(10,2)) //""

//!6)substring(startIndex,endIndex)
// extract a portion of a string and return a new string
// startIndex is included where endIndex is excluded
// negative index will be converted to zero
// if startIndex is greater than endIndex it returns swap their indexes
// if only startIndex is specified it starts extracting from that index till the last character
let str6 = "Classes starts at 06.30"
console.log(str6.substring(3)) //sses starts at 06.30
console.log(str6.substring(7,10)) // st
console.log(str6.substring(10,11)) //a
console.log(str6.substring(11,11)) //""
console.log(str6.substring(-6,-2)) //""
console.log(str6.substring(4,-6)) //Clas
console.log(str6.substring(-6,4)) //Clas
console.log(str6.substring(10,2)) //asses st