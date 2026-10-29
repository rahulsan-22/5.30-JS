// console.log(Math)
// console.log(typeof Math)

//!PI
// console.log(Math.PI) //3.141592653589793

//!E
// console.log(Math.E) //2.718281828459045

//!SQRT2
// console.log(Math.SQRT2) //1.4142135623730951

//!ROUND() - rounds off
// console.log(Math.round(5.75)) //6
// console.log(Math.round(5.42)) //5

//!CEIL() - rounds up
// console.log(Math.ceil(4.5)) //5
// console.log(Math.ceil(4.2)) //5
// console.log(Math.ceil(4.000001)) //5

//!FLOOR() - rounds down
// console.log(Math.floor(4.5)) //4
// console.log(Math.floor(4.2)) //4
// console.log(Math.floor(4.000001)) //4

//!TRUNC() - removes the decimal part
// console.log(Math.trunc(4.5)) //4
// console.log(Math.trunc(-4.2)) //-4
// console.log(Math.trunc(4.000001)) //4

//!ABS - converts negative to a positive value
// console.log(Math.abs(4.5)) //4.5
// console.log(Math.abs(-4.2)) //4.2

//!SQRT() - finds square root
// console.log(Math.sqrt(81)) //9
// console.log(Math.sqrt(25)) //5

//!CBRT() - finds cube root
// console.log(Math.cbrt(27)) //3
// console.log(Math.cbrt(8)) //2

//!POW() -- Finds power value
// console.log(Math.pow(2, 3)) //8
// console.log(Math.pow(5, 5)) //3125
//*Alternative
// console.log(2 ** 3) //8
// console.log(5 ** 5) //3125

//!MAX()
// console.log(Math.max(5, 1, 4, 2, 3)) //5

//!MIN()
// console.log(Math.min(5, 1, 4, 2, 3)) //1

//!SIGN()
// console.log(Math.sign(10)) //1
// console.log(Math.sign(-10)) //-1
// console.log(Math.sign(0)) //0
// console.log(Math.sign(-0)) //-0

//!RANDOM()
console.log(Math.random())

//* Random number between 0 and 9
console.log(Math.floor(Math.random() * 10))

//* Random number between 1 and 10
console.log(Math.floor(Math.random() * 10) + 1)

//* Random number between 1 and 100
console.log(Math.floor(Math.random() * 100) + 1)

//* Random number between min and max
let min = 1000
let max = 9999
console.log(Math.floor(Math.random() * (max - min + 1) + min))
