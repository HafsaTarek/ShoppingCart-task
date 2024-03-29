let links = document.querySelector("#links")
let userInfo = document.querySelector("#userInfo")
let user = document.querySelector("#user")

if(localStorage.getItem("username")){  
    links.remove()
    userInfo.style.display="flex"
    // userInfo.style.justifyContent="space-evenly"
    user.innerHTML = localStorage.getItem("username")
}


// let logOut = document.querySelector("#logout")

// logOut.addEventListener("click" , function(){
//     localStorage.clear();
//     setTimeout( () => {
//         window.location="Login.html"
//     },500)
// })

