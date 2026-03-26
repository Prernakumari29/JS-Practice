let form = document.querySelector("form")
let email = document.querySelector("#email")
let password = document.querySelector("#password")

form.addEventListener("submit" , function(e){
    e.preventDefault();
     
    document.querySelector("#emailError").textContent =""

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/;
    let emailans = emailRegex.test(email.value)
    let passwordans = passwordRegex.test(password.value)

    if(!emailans){
       document.querySelector("#emailError").hidden = false
    document.querySelector("#emailError").textContent ="email is incorrect"

    }
    if(!passwordans){
        document.querySelector("#passwordError").hidden = false
    }

})