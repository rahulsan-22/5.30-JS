//!Async-Await
// Both are keywords introduced in ES8(2017).
// They provide a cleaner way to deal with promises.
// They are built upon promises.
// They help to avoid long then(),catch() blocks

//!async
// async keyword should be attached before a function
// async functions always returns a promise even if it is a simple value.

//*Example 1:
async function askSomething() {
  return "How is your life going on?"
}
console.log(askSomething())
askSomething().then((res) => {
  console.log(res)
})

//*Example 2:
async function add(a, b) {
  return a + b
}
console.log(add(5, 3))
add(5, 3)
  .then((res) => {
    console.log(res)
  })

//!await
// await keyword works only inside async functions.
// await keyword pauses the execution until the promise is settled.


//!Example 1

//*Promise
let winePromise = new Promise((resolve, reject) => {
  let wines = false;
  if (wines) {
    resolve("Promise got resolved")
  } else {
    reject("Promise got rejected")
  }
})
console.log(winePromise)

//*then(),catch(),finally()
winePromise.then((res) => {
  console.log(res)
})
  .catch((err) => {
    console.log(err)
  })
  .finally(() => {
    console.log("Done")
  })

//*async-await
async function wineResult() {
  try {
    let res = await winePromise
    console.log(res)
  } catch (err) {
    console.log(err)
  } finally {
    console.log("Done")
  }
}
wineResult()

//!Example 2:
let weekend = new Promise((resolve, reject) => {
  let cricket = true;
  if (cricket) {
    resolve("Let play on this weekend")
  } else {
    reject("Lets plan some other time")
  }
})

//*then(),catch(),finally()
weekend.then((res) => {
  console.log(res)
})
  .catch((err) => {
    console.log(err)
  })
  .finally(() => {
    console.log("Done")
  })

//*async-await
async function weekendData() {
  try {
    let res = await weekend
    console.log(res)
  } catch (err) {
    console.log(err)
  } finally {
    console.log("Done")
  }
}
weekendData()