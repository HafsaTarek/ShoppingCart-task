let allProducts=document.querySelector("#products") //to draw items inside it

let links = document.querySelector("#links")
let userInfo = document.querySelector("#userInfo")
let user = document.querySelector("#user")

if(localStorage.getItem("username")){  
    links.remove()
    userInfo.style.display="flex"
    user.innerHTML = localStorage.getItem("username")
}

let logOut = document.querySelector("#logout")

logOut.addEventListener("click" , function(){
    localStorage.clear();
    setTimeout( () => {
        window.location="Login.html"
    },500)
})


let products =[
    {
        id:1,
        name:"iphone 12 pro max",
        imageUrl:"images/iphone 12 pro max.jpeg",
        alt:"iphone 12 pro max",
        color:"Blue"
    },

    {
        id:2,
        name:"iphone 13",
        imageUrl:"images/iphone 13.jpg",
        alt:"iphone 13",
        color:"Pink"
    },

    {
        id:3,
        name:"iphone 14 pro",
        imageUrl:" images/iphone 14 pro.jpeg",
        alt:"iphone 14 pro",
        color:"Purple"
    },

    {
        id:4,
        name:"iphone 11 pro max",
        imageUrl:"images/iphone 11 pro max.webp",
        alt:"iphone 11 pro max",
        color:"Gold"
    }

]

function drawItems (){

    let y = products.map( (item) =>{
     return `    <div class="product-item">
     <img src= "${item.imageUrl}" alt= "${item.alt}" class="product-img">
     <div class="product-desc">
     <h2>${item.name} </h2>
     <p>jlhledjsnlfkdl</p>
     <span>${item.color}</span>
    </div><!-- /product-desc -->
    <div class="product-action">
        <button class="addToCart" onclick="addtoCart(${item.id})" >Add To Cart</button>
        <i class="far fa-heart fav"></i>
       </div><!-- /product-action -->
    </div><!-- /product-item -->
`
    })

    allProducts.innerHTML = y;
}

drawItems()

let badge=document.querySelector(".badge")
let shoppingCart=document.querySelector(".cart-products div")

let addedItems= localStorage.getItem("choosenProducts") ? JSON.parse(localStorage.getItem("choosenProducts")) : []; //if there are products in local storage convert it to objects and put them in addedItems array else, addedItems will be empty array to save them


if(addedItems) {
    addedItems.map((item) => {
        shoppingCart.innerHTML += `<p>${item.name}</p>`; //to not override the added items and add the new ones to the old ones
    })
    badge.style.display = "block";
    badge.innerHTML = addedItems.length; 
}


  if(localStorage.getItem("username")){
    function addtoCart(id){
        let addedItem=products.find((item) => item.id==id)
        shoppingCart.innerHTML += `<p> ${addedItem.name} </p>`

        addedItems=[...addedItems,addedItem]
        localStorage.setItem("choosenProducts",JSON.stringify(addedItems))

        let cartProductLength=document.querySelectorAll(".cart-products div p") //I will retrieve all p in array named cartProductLength
        badge.style.display="block"
        badge.innerHTML=cartProductLength.length
    }
  }else{
    window.location="Login.html"
  }

/////////////show products div////////////

let productsCart=document.querySelector(".cart-products")
let addToCart=document.querySelector(".addToCart")


let cartIcon=document.querySelector(".shopping-cart")

cartIcon.addEventListener("click",check)

function check(){
    if(shoppingCart.innerHTML !=""){
        if(productsCart.style.display=="block"){
        productsCart.style.display="none"
    }else{
        productsCart.style.display="block"
    }
}
}


