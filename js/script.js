const password = document.getElementById("password");
const confirmPassword = document.getElementById("password-confirm");
const matchPassword = document.getElementById("match");
confirmPassword.addEventListener("blur", (event) => {
  const value = event.target.value
  
  if (value.length && value != password.value) {
    matchPassword.classList.remove('hidden')
    password.classList.add("error")
    confirmPassword.classList.add("error")
  } else {
    matchPassword.classList.add('hidden')
    password.classList.remove("error")
    confirmPassword.classList.remove("error")
  }
})