let username=document.querySelector("#username")
let email=document.querySelector("#email")
let password=document.querySelector("#password")
let signUpBtn=document.querySelector("#signUp")

signUpBtn.addEventListener("click",function(e){
    e.preventDefault()
    if(username.value==="" || email.value==="" || password.value===""){
       alert("Please, fill the remainig data")
    }else{

        localStorage.setItem("username",username.value)
        localStorage.setItem("email",email.value)
        localStorage.setItem("password",password.value)

        setTimeout(() => {
            window.location="Login.html"
        }, 500);
    }
})