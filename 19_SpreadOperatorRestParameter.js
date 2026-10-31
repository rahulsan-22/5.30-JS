//!Spread Operator and Rest Parameter
// ES6 (2015)
// ...

//!Spread Operator
// used to expand the values of an array or object into individual values

//!Arrays

//*Copying the elements
let randomThings = ["Marker", "Watch", "Tv", "Mobile"]
let copiedArray = [...randomThings]
console.log(copiedArray) //['Marker', 'Watch', 'Tv', 'Mobile']

//*Merging
let outdoorSports = ["Cricket", "Football", "Volleyball"]
let indoorSports = ["Badminton", "Chess"]
let sports = [...outdoorSports, ...indoorSports, "Carrom"]
console.log(sports)

//!Objects

//*Copying the properties
let snacks = {
  title: "Samosa",
  qty: 2,
  price: 15
}
let copiedObj = { ...snacks }
console.log(copiedObj) //{title: 'Samosa', qty: 2, price: 15}

//*Merging
let movie = {
  title: "Paradise"
}
let cast = {
  hero: "Nani",
  heroine: "Kayadu Lohar"
}
let cinema = {
  ...movie,
  ...cast,
  title: "Jersey"
}
console.log(cinema) //{title: 'Jersey', hero: 'Nani', heroine: 'Kayadu Lohar'}

//!Functions
let numbers = [10, 20, 30]
function add(a, b, c) {
  console.log(a + b + c)  //60
}
add(...numbers)

//!Rest Parameter
// Gather the values into a single array

//! Functions
function demo(...val) {
  console.log(val) //[1,2,3,4,5,6,7,8]
}
demo(1, 2, 3, 4, 5, 6, 7, 8)

//! Example (Sum)
function remo(...num) {
  let sum = 0;
  for (let val of num) {
    sum = sum + val
  }
  console.log(sum) //15
}
remo(1, 2, 3, 4, 5)

//! Rest Parameter with Normal Parameters
function love(boy, girl, ...problems) {
  console.log("Name:" + boy)
  console.log("Girlfriend:" + girl)
  console.log("Problem:" + problems)
}
love("Manoj", "Manjula", "Time", "Drinking", "Money")

//! Array Destructuring
let drinks = ["Coke", "Sprite", "Soda", "Thumsup"]
let [d1, ...d2] = drinks
console.log(d1) //Coke
console.log(d2) //['Sprite', 'Soda', 'Thumsup']

//! Object Destructuring
let stuffs = {
  item1: "Peanuts",
  item2: "Omlet",
  item3: "Boneless Fish",
  item4: "Chicken Pakoda"
}
let { item1, ...items } = stuffs
console.log(item1) //Peanuts
console.log(items) //{item2: 'Omlet', item3: 'Boneless Fish', item4: 'Chicken Pakoda'}
