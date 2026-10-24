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
// console.log(Array.isArray("Manoj")) //false
// console.log(Array.isArray(["Manoj"])) //true
// console.log(Array.isArray({})) //false
// console.log(Array.isArray([])) //true

//! 2)toString()
// Converts Array to String
// let luggage = ["Brush","FaceWash","Clothes","Bedsheet"]
// console.log(luggage.toString()) //Brush,FaceWash,Clothes,Bedsheet
// console.log(typeof luggage.toString()) //string

//! 3)concat()
// Combines multiple arrays into a single array
// let frontend = ["Html", "Css", "Js"]
// let backend = ["Java", "Python"]
// let database = ["Sql"]
// console.log(frontend.concat("React.js",backend,database)) //['Html', 'Css', 'Js', 'React.js', 'Java', 'Python', 'Sql']

//! 4)join(separator)
// Converts array to string by combining multiple elements with the separator in between.
// let festivals = ["Dasara", "Diwali", "Christmas", "Sankranthi"]
// console.log(festivals.join("-")) //Dasara-Diwali-Christmas-Sankranthi
// console.log(festivals.join(" ")) //Dasara Diwali Christmas Sankranthi

//! 5)reverse()
// Reverses the array
// let foodStall = ["Parata", "Chicken 65", "Boneless Fish"];
// console.log(foodStall.reverse()) //['Boneless Fish', 'Chicken 65', 'Parata']

//! 6)includes(searchElement,startIndex)
// Checks whether searchElement is present or not in the given original Array
// If present it returns true else returns false.
// startIndex defines from where the element should be searched.
// Negative Index is supported.
// let dasara = ["Chicken", "Mutton", "Fish", "Prawns", "Chicken", "Mutton", "Kallu"]
// console.log(dasara.includes("Prawns")) //true
// console.log(dasara.includes("Bobbatu")) //false
// console.log(dasara.includes("Mutton",1)) //true
// console.log(dasara.includes("Fish",4)) //false
// console.log(dasara.includes("Fish",-5)) //true
// console.log(dasara.includes("Fish", -100)) //true

//! 7)indexOf(searchElement,startIndex)
// returns the index of the first occurence of the searchElement from the original Array
// If present it returns its index value else returns -1.
// startIndex defines from where the element should be searched.
// Negative Index is supported.
// let bonalu = ["Chicken", "Mutton", "Fish", "Prawns", "Chicken", "Mutton", "Kallu"]
// console.log(bonalu.indexOf("Prawns")) //3
// console.log(bonalu.indexOf("Bobbatu")) //-1
// console.log(bonalu.indexOf("Mutton",1)) //1
// console.log(bonalu.indexOf("Fish",4)) //-1
// console.log(bonalu.indexOf("Chicken",-5)) //4
// console.log(bonalu.indexOf("Chicken",-100)) //0

//!8)slice(startIndex,endIndex)
// used to extract a portion of an array and return a new array.
// startIndex is inclusive where endIndex is exclusive
// Negative index is supported
// If startIndex is greater than endIndex it return empty array []
// let sweets = ["Jalebi", "Kalakand", "Laddu", "SoanPapdi", "Kaju", "Rasmalai"]
// console.log(sweets.slice(3)) //["SoanPapdi", "Kaju", "Rasmalai"]
// console.log(sweets.slice(2,4)) //['Laddu', 'SoanPapdi']
// console.log(sweets.slice(4,5)) //['Kaju']
// console.log(sweets.slice(4,4)) //[]
// console.log(sweets.slice(1,-2)) //['Kalakand', 'Laddu', 'SoanPapdi']
// console.log(sweets.slice(-5,-3)) //['Kalakand', 'Laddu']
// console.log(sweets.slice(-100,1)) //['Jalebi']
// console.log(sweets.slice(5,2)) //[]
// console.log(sweets.slice(-2,-5)) //[]

//!9)splice(startIndex,deleteCount,elementsToBeAdded)
// modify the array elements
// returns the array of deleted elements
// affects the original array
// negative start index is supported

//*Adding Elements
// let sports = ["Cricket", "Hockey", "VolleyBall", "FootBall"]
// console.log(sports.splice(2, 0, "Badminton", "Kabbadi")) //[]
// console.log(sports) //['Cricket', 'Hockey', 'Badminton', 'Kabbadi', 'VolleyBall', 'FootBall']

//*Deleting Elements
// let hobbies = ["Sleeping", "Cooking", "Scrolling", "Chatting", "Reading"]
// console.log(hobbies.splice(2, 2)) //['Scrolling', 'Chatting']
// console.log(hobbies) //['Sleeping', 'Cooking', 'Reading']

//*Modifying Elements 1
// let cars = ["Kia", "Thar", "Bmw", "Audi", "Tesla"]
// console.log(cars.splice(0, 2, "Alto", "Nano", "Verna")) //['Kia', 'Thar']
// console.log(cars) //['Alto', 'Nano', 'Verna', 'Bmw', 'Audi', 'Tesla']

//*Modifying Elements 2
// let bikes = ["Ktm", "Tvs", "GT", "Pulsar", "Honda", "Splendor"]
// console.log(bikes.splice(-3, 100, "Chetak")) //["Pulsar", "Honda", "Splendor"]
// console.log(bikes) //['Ktm', 'Tvs', 'GT', 'Chetak']

//!Higher Order Methods

//*1)forEach(function(element,index,array))
// let mobile = ["Samsung", "Oppo", "Nokia", "Vivo"]
// mobile.forEach((element, index, array) => {
//   console.log(element.toLowerCase())
//   console.log(element.length)
//   console.log(index)
//   console.log(array)
// })

//*2)map(function(element,index,array))
// let laptops = ["Samsung", "Oppo", "Nokia", "Vivo"]
// laptops.map((element, index, array) => {
//   console.log(element.toLowerCase())
//   console.log(element.length)
//   console.log(index)
//   console.log(array)
// })

//* forEach() vs map()
// let numbers = [2, 5, 10]

// let forEachOutput = numbers.forEach((num) => {
//   return num * num
// })
// console.log(forEachOutput) //undefined

// let mapOutput = numbers.map((num) => {
//   return num * num
// })
// console.log(mapOutput) //[4,25,100]

//*3)filter(fn(element,index,array))
// let marks = [45, 75, 90, 35, 15]
// let filteredMarks = marks.filter((ele) => {
//   return ele > 50
// })
// console.log(filteredMarks) //[75,90]

//*4)find(fn(element,index,array))
// let findMarks = marks.find((ele) => {
//   return ele > 50
// })
// console.log(findMarks) //75

//*5)some(fn(element,index,array))
// let someMarks = marks.some((ele) => {
//   return ele > 50
// })
// console.log(someMarks) //true

//*6)every(fn(element,index,array))
// let everyMarks = marks.every((ele) => {
//   return ele > 50
// })
// console.log(everyMarks) //true

//*7)reduce(fn(accumulator,element,index,array),initialValue)
// let integers = [1, 2, 3, 4, 5];
// let result = integers.reduce((sum,ele) => {
//   return sum+=ele
// }, 0)
// console.log(result)

//*8)sort(compareFn)
let numbers = [5, 1,10,45,333,3, 2, 4]
console.log(numbers.sort()) //[1, 10, 2, 3, 333, 4, 45, 5]
console.log(numbers.sort((a,b)=>a-b)) //[1, 2, 3, 4, 5, 10, 45, 333]
console.log(numbers.sort((a,b)=>b-a)) //[333, 45, 10, 5, 4, 3, 2, 1]