//!Objects
// are non-primitive types used to store the data in the form of key-value pairs.
// combination of key and value is known as property.
// can store different datatypes.
// are dynamic in size.
// are mutable.
// are generally used to represent real-world entity.

//!Creation of Object

//* 1)Literal Way
let bioData1 = {
  name: "Monty",
  age: 30,
  isMarried: true,
  hasExGirlfriends: undefined,
  hasAttitude: null,
  skills: ["Motivation", "Singing", "Dancing"],
  subject: () => "Python",
  address: {
    place: "Gulbarga",
    pincode: 500035
  }
}
console.log(bioData1)
console.log(typeof bioData1)

//* 2)Constructor Way
let bioData2 = new Object()
bioData2.name = "Pavan"
bioData2.age = 26
bioData2.isMarried = false
bioData2.hasExGirlfriends = undefined
bioData2.hasAttitude = null
bioData2.skills = ["Cooking", "Singing", "Dancing"]
bioData2.subject = () => "Core Java"
bioData2.address = {
  place: "Mysore",
  pincode: 500035
}
console.log(bioData2)
console.log(typeof bioData2)

//!Ways of accessing the properties of an object

//*1)Dot Notation
console.log(bioData1.name)
console.log(bioData2.skills)
console.log(bioData1.subject())
console.log(bioData2.address.place)

//*2)Box/Bracket Notation
console.log(bioData1["name"])
console.log(bioData2["skills"])
console.log(bioData1["subject"]())
console.log(bioData2["address"]["place"])

//!Why Box/Bracket Notation ?????
let simpleObj = {
  name: "Someone",
  age: 18,
  place: "Hyd"
}
for (let key in simpleObj) {
  console.log(key) //name //age //place
  console.log(simpleObj[key]) //Someone //18 //Hyd
}

//! Playing with Objects
let biscuit = {
  name: "Jim-Jam",
  price: 10,
  piece: 6
}
console.log(biscuit) //{name: 'Jim-Jam', price: 10, piece: 6}

//*Adding the properties
biscuit.company = "Britannia"
console.log(biscuit) //{name: 'Jim-Jam', price: 10, piece: 6, company: 'Britannia'}

//*Modifying the property
biscuit.price = 15
console.log(biscuit) //{name: 'Jim-Jam', price: 15, piece: 6, company: 'Britannia'}

//*Deleting the property
delete biscuit.piece
console.log(biscuit) //{name: 'Jim-Jam', price: 15, company: 'Britannia'}
