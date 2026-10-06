//!1)for Loop
// for (let i = 1; i <= 5; i++){
//   document.writeln("<h1>I love you</h1>")
// }

//!2)while loop
// let j = 1;
// while (j <= 3) {
//   document.writeln("<h2>I love you too</h2>")
//   j++;
// }

//!3)do-while loop
// let k = 1;
// do {
//   document.writeln("<h3>Lets Get Married</h3>")
//   k++
// }while(k<=0)

//!4)for-in loop -- itterate over object keys
let user = {
  name: "Pavan",
  age: 25,
  isMarried:true
}
for (let keys in user) {
  console.log(keys)
  console.log(user[keys])
}

//!5)for-of loop -- itterate over the values of string and array
let str = "Hai"
let arr = ["Html", "Css", "Js"]

for (let character of str) {
  console.log(character)
}

for (let element of arr) {
  console.log(element)
}