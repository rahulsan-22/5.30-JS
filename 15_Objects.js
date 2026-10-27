//!Objects
// are non-primitive types used to store the data in the form of key-value pairs.
// combination of key and value is known as property.
// can store different datatypes.
// are dynamic in size.
// are mutable.
// are generally used to represent real-world entity.

//!Creation of Object

//* 1)Literal Way
// let bioData1 = {
//   name: "Monty",
//   age: 30,
//   isMarried: true,
//   hasExGirlfriends: undefined,
//   hasAttitude: null,
//   skills: ["Motivation", "Singing", "Dancing"],
//   subject: () => "Python",
//   address: {
//     place: "Gulbarga",
//     pincode: 500035
//   }
// }
// console.log(bioData1)
// console.log(typeof bioData1)

//* 2)Constructor Way
// let bioData2 = new Object()
// bioData2.name = "Pavan"
// bioData2.age = 26
// bioData2.isMarried = false
// bioData2.hasExGirlfriends = undefined
// bioData2.hasAttitude = null
// bioData2.skills = ["Cooking", "Singing", "Dancing"]
// bioData2.subject = () => "Core Java"
// bioData2.address = {
//   place: "Mysore",
//   pincode: 500035
// }
// console.log(bioData2)
// console.log(typeof bioData2)

//!Ways of accessing the properties of an object

//*1)Dot Notation
// console.log(bioData1.name)
// console.log(bioData2.skills)
// console.log(bioData1.subject())
// console.log(bioData2.address.place)

//*2)Box/Bracket Notation
// console.log(bioData1["name"])
// console.log(bioData2["skills"])
// console.log(bioData1["subject"]())
// console.log(bioData2["address"]["place"])

//!Why Box/Bracket Notation ?????
// let simpleObj = {
//   name: "Someone",
//   age: 18,
//   place: "Hyd"
// }
// for (let key in simpleObj) {
//   console.log(key) //name //age //place
//   console.log(simpleObj[key]) //Someone //18 //Hyd
// }

//! Playing with Objects
// let biscuit = {
//   name: "Jim-Jam",
//   price: 10,
//   piece: 6
// }
// console.log(biscuit) //{name: 'Jim-Jam', price: 10, piece: 6}

//*Adding the properties
// biscuit.company = "Britannia"
// console.log(biscuit) //{name: 'Jim-Jam', price: 10, piece: 6, company: 'Britannia'}

//*Modifying the property
// biscuit.price = 15
// console.log(biscuit) //{name: 'Jim-Jam', price: 15, piece: 6, company: 'Britannia'}

//*Deleting the property
// delete biscuit.piece
// console.log(biscuit) //{name: 'Jim-Jam', price: 15, company: 'Britannia'}

//!Methods
// let chips = {
//   name: "Lays",
//   price: 5,
//   color: "Green"
// }

//*1)Object.keys(obj)
// console.log(Object.keys(chips)) //['name','price','color']

//*2)Object.values(obj)
// console.log(Object.values(chips)) //['Lays',5,'Green']

//*3)Object.entries(obj)
//Convert object into array of array (nested array) while returning the properties
// console.log(Object.entries(chips))
/*
[
   ['name', 'Lays'],
   ['price', 5],
   ['color','Green']
] */

//*4)Object.fromEntries(nestedArray)
//Convert nestedArray into object while returning the properties
// let movie = [
//   ['title', 'Paradise'],
//   ['hero', 'Nani'],
//   ['herione', 'Kayadu Lohar']
// ]
// console.log(Object.fromEntries(movie)) // {title:'Paradise',hero:'Nani',herione:'Kayadu Lohar'}

//*5)Object.assign(target,source)

//@String to Object
// let str = "Hi"
// console.log(Object.assign({}, str)) //{0: 'H', 1: 'i'}

//@Array to Object
// let arr = ["Html", "Css", "Js"]
// console.log(Object.assign({}, arr)) //{0: 'Html', 1: 'Css', 2: 'Js'}

//@Object to Object
// let obj = {
//   user: "Ajit",
//   age: 26
// }
// console.log(Object.assign({ place: "Hyd" }, obj)) //{place: 'Hyd', user: 'Ajit', age: 26}

//@Copying from str,arr and obj into target
// console.log(Object.assign({},str,arr,obj)) //{0: 'Html', 1: 'Css', 2: 'Js', user: 'Ajit', age: 26}

//*6)Object.seal()
let marker = {
  company: "Doms",
  price: 40
}
Object.seal(marker)
marker.color = "Black" //Not Possible
marker.price = 60 //Possible
delete marker.company //Not Possible
console.log(marker) //{company: 'Doms', price: 60}

//*7)Object.freeze()
let pen = {
  company: "Flair",
  price: 20
}
Object.freeze(pen)
pen.color = "Black" //Not Possible
pen.price = 40 //Not Possible
delete pen.company //Not Possible
console.log(pen) //{company: 'Flair', price: 20}

//!Checking Property Existence:
let subject = {
  title: "Js",
  duration: 45,
  difficultyLevel:"Medium"
}
console.log(subject)

//*in Operator -- checks own + inherited properties
console.log("title" in subject)
console.log("trainer" in subject)
console.log("toString" in subject)

//*hasOwnProperty() -- checks only the own properties
console.log(subject.hasOwnProperty("title"))
console.log(subject.hasOwnProperty("trainer"))
console.log(subject.hasOwnProperty("toString"))