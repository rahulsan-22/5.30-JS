//!1) If
// let area = "dilsukhnagar"
// if (area === "chaitanyapuri") {
//   console.log("Idi na area,yevaraina vaste addanga narikesta")
// }

//*Better Approach (Short-circuit AND)
// area === "chaitanyapuri" && console.log("Idi na area,yevaraina vaste addanga narikesta")

//!2) If-else
// if (area === "chaitanyapuri") {
//   console.log("Idi na area,yevaraina vaste addanga narikesta")
// } else {
//   console.log("Lets Compromise")
// }

//!3) Else-If Ladder
// let amount = 100;
// if (amount >= 350) {
//   console.log("Pista House Biryani")
// } else if (amount >= 250 && amount < 350) {
//   console.log("Mehfil Biryani")
// } else if (amount >= 150 && amount < 250) {
//   console.log("Bawarchi Biryani")
// } else {
//   console.log("Pg lo tinnu")
// }

//!4)Nested If
// let jsClass = true;
// let friendComingToInstitute = true;

// if (jsClass) {
//   if (friendComingToInstitute) {
//     console.log("Attend Js Class")
//   }
// }

//!5)Switch Statement

//*Example 1:
let trainer = "Rahul";
switch (trainer) {
  case "Pavan": console.log("Core Java Trainer");
    break;
  case "Monty": console.log("Python Trainer");
    break;
  case "Ravi Sir": console.log("Sql Trainer");
    break;
  default: console.log("Dont know which subject he/she takes");
}

//*Example 2:
let amount = 100;
switch (true) {
  case (amount >= 350): console.log("Pista House Biryani");
    break;
  case (amount >= 250 && amount < 350): console.log("Mehfil Biryani");
    break;
  case (amount >= 150 && amount < 250): console.log("Bawarchi Biryani");
    break;
  default: console.log("Pg lo tinnu");
}


