//! Destructuring
// It is a process of unpacking or extracting the values from array or object and storing into a variable.
// ES6(2015)

//! Array Destructuring
let season = ["Summer", "Rainy", "Winter"]

//*Traditional Way
let summer = season[0]
let rainy = season[1]
let winter = season[2]
console.log(summer)
console.log(rainy)
console.log(winter)

//*Destructuring Way
let [s1, s2, s3] = season
console.log(s1)
console.log(s2)
console.log(s3)

//!Skipping Elements
let cars = ["Kia", "Bmw", "Maruti", "MG"]
let [, c1, , c2] = cars
console.log(c1)
console.log(c2)

//! Default Values
let bikes = ["Tvs", "Yamaha", "Bajaj"]
let [, b1, , b2 = "Ktm"] = bikes
console.log(b1)
console.log(b2)

//! Swapping Variables
let x = 10;
let y = 20;
[y, x] = [x, y]
console.log(x);
console.log(y);

//! Object Destructuring
let user = {
  name: "Pavan",
  age: 20
}

//*Traditional Way
let userName = user.name
let userAge = user.age
console.log(userName)
console.log(userAge)

//*Destructuring Way
let { name, age } = user
console.log(name)
console.log(age)

//! Renaming Variables
let food = {
  title: "Biryani",
  type: "Chicken",
  price: 200
}
let { type: category, price: value } = food
console.log(category)
console.log(value)

//! Default Values in Objects
let liquor = {
  brand: "Oc",
  qty: 90,
}
let { brand, price = 90 } = liquor
console.log(brand)
console.log(price)

//! Nested Object Destructuring
let trainer = {
  name: "Monty",
  skills: {
    technical: {
      frontend: ["Html", "Css"],
      backend:["Python","Django"]
    }
  }
}
let { skills: { technical: { backend: [, sub] } } } = trainer
console.log(sub)

//! Function Parameter Destructuring
function displayMobileInfo({brand,model,color}) {
  console.log(brand)
  console.log(model)
  console.log(color)
}
displayMobileInfo({brand:"Iphone",model:15,color:"black"})