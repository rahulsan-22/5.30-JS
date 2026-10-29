//!Current Date and Time
// let currentDate = new Date()
// console.log(currentDate) //Wed Oct 28 2026 19:55:08 GMT+0530 (India Standard Time)

//!Specific Date
// let specificDate = new Date("1947-08-15")
// console.log(specificDate) //Fri Aug 15 1947 05:30:00 GMT+0530 (India Standard Time)

//!Specific Date and Time
// let specificDateTime = new Date("1947-08-15T15:30:00")
// console.log(specificDateTime) //Fri Aug 15 1947 15:30:00 GMT+0530 (India Standard Time)

//!Using Parameters
// let date = new Date(2000, 3, 1, 2, 45, 20, 200)
// console.log(date) //Sat Apr 01 2000 02:45:20 GMT+0530 (India Standard Time)

//!Date Object (GET Methods)
// let d1 = new Date()
// console.log(d1)

//*getFullYear()
// console.log(d1.getFullYear()) //2026

//*getMonth()
// console.log(d1.getMonth()) //9

//*getDate()
// console.log(d1.getDate()) //29

//*getDay()
// console.log(d1.getDay()) //4

//*getHours()
// console.log(d1.getHours()) //18

//*getMinutes()
// console.log(d1.getMinutes()) //37

//*getSeconds()
// console.log(d1.getSeconds()) //1

//*getMilliseconds()
// console.log(d1.getMilliseconds()) //555

//*getTime()
// console.log(d1.getTime()) //1793279374091

//!Date Object (SET Methods)
// let d2 = new Date()
// console.log(d2)

//*setFullYear()
// d2.setFullYear(2004)
// console.log(d2)

//*setMonth()
// d2.setMonth(1)
// console.log(d2)

//*setDate()
// d2.setDate(5)
// console.log(d2)

//*setHours()
// d2.setHours(10)
// console.log(d2)

//*setMinutes()
// d2.setMinutes(30)

//*setSeconds()
// d2.setSeconds(59)

//*setMilliseconds()
// d2.setMilliseconds(555)
// console.log(d2)

//!Formatting METHODS
// let d3 = new Date()

// console.log(d3.toDateString())
// console.log(d3.toLocaleDateString())

// console.log(d3.toTimeString())
// console.log(d3.toLocaleTimeString())

// console.log(d3.toLocaleString())

//! DateConstructor.now()
// Returns the number of milliseconds elapsed since midnight, January 1, 1970 Universal Coordinated Time (UTC).
// console.log(Date.now()) //1793280035351

//!Interview Questions

//* Calculate Age
let birthYear = 1994
let currentYear = new Date().getFullYear()
console.log(`Your Age is ${currentYear - birthYear}`)

//* Check Current Day
let dayIndex = new Date().getDay()
switch (dayIndex) {
  case 0: console.log("Sunday");
    break;
  case 1: console.log("Monday");
    break;
  case 2: console.log("Tuesday");
    break;
  case 3: console.log("Wednesday");
    break;
  case 4: console.log("Thursday");
    break;
  case 5: console.log("Friday");
    break;
  case 6: console.log("Saturday");
    break;
  default: console.log("Invalid Day")
}

//* Days Between Two Dates
let dateA = new Date("2026-10-29")
let dateB = new Date("2027-01-01")
let differnce = dateB.getTime() - dateA.getTime()
let totalDays = differnce / (1000 * 60 * 60 * 24)
console.log(totalDays)

