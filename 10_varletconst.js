//!Declaration without initialization
var a;
console.log(a); //undefined

let b;
console.log(b); //undefined

const c;
console.log(c); //Uncaught SyntaxError: Missing initializer in const declaration

//!Re-assignment
var sir = "Deva";
sir = "Rahul";
console.log(sir); //Rahul

let bunkClass = "Boring";
bunkClass = "Fun";
console.log(bunkClass); //Fun

const subject = "Python Programming";
subject = "Javascript";
console.log(subject); //Uncaught TypeError: Assignment to constant variable.

//!Re-Declaration
var snacks = "Samosa"
var snacks = "Pani-Puri"
console.log(snacks); //PaniPuri

let softDrinks = "Coke";
let softDrinks = "Sprite";
console.log(softDrinks) //Uncaught SyntaxError: Identifier 'softDrinks' has already been declared

const food = "Biryani";
const food = "Pulav";
console.log(food); //Uncaught SyntaxError: Identifier 'food' has already been declared

//!Attached to window?
var skill1 = "Html"
let skill2 = "Css"
const skill3 = "Js"
console.log(window.skill1) //Html
console.log(window.skill2) //undefined
console.log(window.skill3) //undefined