//!BOM
// Bom stands for Browser Object Model.
// Bom allows Javascript to interact with the browser
// Bom provides information related to browser (height,width,navigating,dialog etc...)
// Bom is provided by the browser to javascript
// To interact with our browser we have window object

//!Window
// console.log(window)

//!Alert()
let bom1 = () => {
  alert("Dont fall in love or else youll die 💀")
}

//!Confirm()
let bom2 = () => {
  confirm("Do you really want to fall in love?")
}

//!Alert() and Confirm()
let bom3 = () => {
  let result = confirm("Do you really want to fall in love?")
  if (result) {
    alert("Dont fall in love or else youll die 💀")
  } else {
    alert("Well done you saved your life 😉")
  }
}

//!Prompt()
let bom4 = () => {
  let num1 = Number(prompt("Enter first number", 0))
  let num2 = Number(prompt("Enter second number", 0))
  console.log(num1 + num2)
}

//!Open()
let a;
let bom5 = () => {
  a = open("https://www.flipkart.com/", "_blank", "height=400,width=500,top=150,left=500")
}

//!Close()
let bom6 = () => {
  a.close()
}

//!Print()
let bom7 = () => {
  print()
}

//!innerHeight and outerHeight
console.log(`innerHeight is ${innerHeight}`)
console.log(`outerHeight is ${outerHeight}`)

//!innerWidth and outerWidth
console.log(`innerWidth is ${innerWidth}`)
console.log(`outerWidth is ${outerWidth}`)

//!Location object
console.log(location)

//*href
console.log(location.href)

//*host
console.log(location.host)

//*hostname
console.log(location.hostname)

//*port
console.log(location.port)

//*protocol
console.log(location.protocol)

//*reload()
let bom8 = () => {
  location.reload()
}

//*assign()
let bom9 = () => {
  location.assign("https://www.youtube.com/")
}

//*replace()
let bom10 = () => {
  location.replace("https://www.amazon.com/")
}

//!History Object

//*length
console.log(history.length)

//*forward()
let bom11 = () => {
  history.forward()
}

//*back()
let bom12 = () => {
  history.back()
}

//*go() -- forward
let bom13 = () => {
  history.go(5)
}

//*go() -- back
let bom14 = () => {
  history.go(-4)
}

//!Navigator Object

//*onLine
console.log(navigator.onLine)

//*languages
console.log(navigator.languages)

//*geolocation
let bom15 = () => {
  navigator.geolocation.getCurrentPosition((position) => {
    console.log(position.coords.latitude)
    console.log(position.coords.longitude)
  })
}

//!Web Storage Systems

//!sessionStorage

//*setItem()
sessionStorage.setItem("name","Manoj")
sessionStorage.setItem("age",23)
sessionStorage.setItem("place", "Bihar")

//*getItem()
console.log(sessionStorage.getItem("name"))
console.log(sessionStorage.getItem("age"))
console.log(sessionStorage.getItem("isMarried"))

//*removeItem()
sessionStorage.removeItem("place")

//*clear()
sessionStorage.clear()

//!localStorage

//*setItem()
localStorage.setItem("name","Manoj")
localStorage.setItem("age",23)
localStorage.setItem("place", "Bihar")

//*getItem()
console.log(localStorage.getItem("name"))
console.log(localStorage.getItem("age"))
console.log(localStorage.getItem("isMarried"))

//*removeItem()
localStorage.removeItem("place")

//*clear()
localStorage.clear()