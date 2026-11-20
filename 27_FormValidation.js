let form = document.querySelector("form")
let nameField = document.getElementById("name")
let emailField = document.getElementById("email")
let phoneField = document.getElementById("phone")
let passwordField = document.getElementById("password")
let cpasswordField = document.getElementById("cpassword")
let passwordEye = document.getElementById("passwordEye")
let cpasswordEye = document.getElementById("cpasswordEye")
let errorInfo = document.getElementById("error_info")

//!Show/Hide Password Functionality
let isPasswordVisible = false;
passwordEye.addEventListener("click", () => {
  if (isPasswordVisible) {
    passwordField.type = "password"
    isPasswordVisible = false
    passwordEye.classList.replace("fa-eye-slash", "fa-eye")
  } else {
    passwordField.type = "text"
    isPasswordVisible = true
    passwordEye.classList.replace("fa-eye", "fa-eye-slash")
  }
})

//!Show/Hide Confirm Password Functionality
let isCPasswordVisible = false;
cpasswordEye.addEventListener("click", () => {
  if (isCPasswordVisible) {
    cpasswordField.type = "password"
    isCPasswordVisible = false
    cpasswordEye.classList.replace("fa-eye-slash", "fa-eye")
  } else {
    cpasswordField.type = "text"
    isCPasswordVisible = true
    cpasswordEye.classList.replace("fa-eye", "fa-eye-slash")
  }
})