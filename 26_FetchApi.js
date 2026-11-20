//!Fetch API
// fetch() is a method used to make http request to the server.
// It allows Javascript to deal with apis.
// It replaces traditional xmlHTTPRequest() (XHR).
// It allows to GET,POST,PUT,PATCH and DELETE data from the server.
// fetch() always returns a promise.

//*Example 1:
// async function fetchingRecipeData() {
//   try {
//     let res = await fetch("https://dummyjson.com/recipes")
//     let { recipes } = await res.json()
//     console.log(recipes)
//     let fridge = document.getElementById("fridge")
//     recipes.forEach((item) => {
//       fridge.innerHTML += `
//       <tr>
//         <td>${item.id}</td>
//         <td>${item.name}</td>
//         <td>${item.cuisine}</td>
//         <td>${item.mealType}</td>
//         <td>${item.ingredients}</td>
//         <td>${item.instructions}</td>
//         <td><img src=${item.image} alt=${item.name} height=200 width=200></td>
//       </tr>
//       `
//     })
//   } catch (error) {
//     console.log(error)
//   }
// }
// fetchingRecipeData()


//*Example 2:
// async function fetchingProductsData() {
//   try {
//     let res = await fetch("https://fakestoreapi.com/products")
//     let products = await res.json()
//     console.log(products)
//     let fridge = document.getElementById('fridge')
//     products.forEach((item) => {
//       fridge.innerHTML += `
//       <tr>
//         <td>${item.id}</td>
//         <td>${item.title}</td>
//         <td>${item.description}</td>
//         <td>${item.category}</td>
//         <td><img src=${item.image} alt=${item.title} height=200 width=200></td>
//         <td>$${item.price}</td>
//       </tr>
//       `
//     })
//   } catch (error) {
//     console.log(error)
//   }
// }
// fetchingProductsData()

//*Example 3:
// async function fetchingUsersData() {
//   try {
//     let res = await fetch("https://api.github.com/users")
//     let users = await res.json()
//     console.log(users)
//   } catch (error) {
//     console.log(error)
//   }
// }
// fetchingUsersData()

//*Example 4:
async function fetchingDogsData() {
  try {
    let res = await fetch("https://dog.ceo/api/breeds/image/random")
    let { message } = await res.json()
    let imgTag = document.createElement("img")
    imgTag.src = message
    imgTag.height = 250
    imgTag.width = 250
    document.body.append(imgTag)
  } catch (error) {
    console.log(error)
  }
}
