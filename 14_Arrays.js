//! Arrays
// Arrays are special object used to store multiple values into a single variable.
// Arrays can store different type of datas.
// Arrays are mutable (Orginal array can be changed after creation).
// Array length is not fixed.

//!Ways of Creating an Array

//* 1)Array Literal
// let snacks = ["Samosa","Pani Puri","Pav Bhaji","Bhel Puri"]
// console.log(snacks) //['Samosa', 'Pani Puri', 'Pav Bhaji', 'Bhel Puri']
// console.log(typeof snacks) //object

//* 2)Array Constructor
// let user = new Array("Monty",30,true,undefined)
// console.log(user) //['Monty', 30, true, undefined]
// console.log(typeof user) //object

//!Accessing the elements of an array
// To access the elements of an array we use the concept of indexing
// Index always starts with zero
// let actors = ["Prabhas", "Allu Arjun", "Ram Charan", "Nani"]
// console.log(actors[0]) //Prabhas
// console.log(actors[3]) //Nani
// console.log(actors[10]) //undefined
// console.log(actors[-1]) //undefined

//!Arrays are mutable?
// let cities = ["Hyderabad", "Banglore", "Chennai", "Mumbai"]
// console.log(cities) //['Hyderabad', 'Banglore', 'Chennai', 'Mumbai']
// cities[2] = "Kerala"
// console.log(cities) //['Hyderabad', 'Banglore', 'Kerala', 'Mumbai']

//!Length
// let companies = ["Tcs", "Infosys", "Wipro", "Amazon"]
// console.log(companies.length) //4
// console.log(companies[companies.length-1]) //Amazon
// console.log(companies[companies.length-2]) //Wipro

//!Methods to add and delete the elements of an array
// let chips = ["Kurkure", "Bingo", "Lays"]
// console.log(chips)

//*1)push(...items) -- adds the element at the end of an array
// chips.push("Wheels", "Chat-Pat")
// console.log(chips) //['Kurkure', 'Bingo', 'Lays', 'Wheels', 'Chat-Pat']

//*2)pop() -- deletes the last element of an array
// chips.pop()
// console.log(chips) //['Kurkure', 'Bingo', 'Lays', 'Wheels']

//*3)unshift(...items) -- adds the element at the beginning of the array
// chips.unshift("Pringles", "Jolo")
// console.log(chips) //['Pringles', 'Jolo', 'Kurkure', 'Bingo', 'Lays', 'Wheels']

//*4)shift() -- deletes the starting element of an array
// chips.shift()
// console.log(chips) //['Jolo', 'Kurkure', 'Bingo', 'Lays', 'Wheels']

//!Methods:

//! 1)Array.isArray()
// This method checks weather the given value is an Array or not
// If it is an array it returns true else false
console.log(Array.isArray("Manoj")) //false
console.log(Array.isArray(["Manoj"])) //true
console.log(Array.isArray({})) //false
console.log(Array.isArray([])) //true

//! 2)toString()
// Converts Array to String
let luggage = ["Brush","FaceWash","Clothes","Bedsheet"]
console.log(luggage.toString()) //Brush,FaceWash,Clothes,Bedsheet
console.log(typeof luggage.toString()) //string

//! 3)concat()
// Combines multiple arrays into a single array
let frontend = ["Html", "Css", "Js"]
let backend = ["Java", "Python"]
let database = ["Sql"]
console.log(frontend.concat("React.js",backend,database)) //['Html', 'Css', 'Js', 'React.js', 'Java', 'Python', 'Sql']

//! 4)join(separator)
// Converts array to string by combining multiple elements with the separator in between.
let festivals = ["Dasara", "Diwali", "Christmas", "Sankranthi"]
console.log(festivals.join("-")) //Dasara-Diwali-Christmas-Sankranthi
console.log(festivals.join(" ")) //Dasara Diwali Christmas Sankranthi

//! 5)reverse()
// Reverses the array
let foodStall = ["Parata", "Chicken 65", "Boneless Fish"];
console.log(foodStall.reverse()) //['Boneless Fish', 'Chicken 65', 'Parata']


