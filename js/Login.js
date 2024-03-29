let username = document.querySelector("#username")
let password = document.querySelector("#password")
let signInBtn = document.querySelector("#logIn")

let getUserName = localStorage.getItem("username")
let getPassword = localStorage.getItem("password")

signInBtn.addEventListener ("click" , function(e){
    e.preventDefault()
    if(username.value==="" || password.value===""){
        alert("Please, fill the remainig data")
     }else{
        if ( getUserName === username.value.trim() && getPassword === password.value.trim() ){
        
            setTimeout( () => { 
              window.location = "index.html"
            } , 500)
        
        }else{
           alert("Username or password is wrong please, try again")
        }
     }

})