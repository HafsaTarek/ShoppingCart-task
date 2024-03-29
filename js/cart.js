let choosenProducts=localStorage.getItem("choosenProducts") 
let allProducts=document.querySelector("#products")
let badge = document.querySelector(".badge")

if(choosenProducts){
    let item=JSON.parse(choosenProducts); //convert each one in choosenProducts to objects again
    drawProducts(item);
    badge.style.display="block"
    badge.innerHTML = item.length
}

function drawProducts(products){
    let y = products.map( (item) => {
            return ` 
           <div class="product-item">
            <img src= "${item.imageUrl}" alt= "${item.alt}" class="product-img">
            <div class="product-desc">
            <h2>${item.name} </h2>
            <p>jlhledjsnlfkdl</p>
            <span>${item.color}</span>
           </div><!-- /product-desc -->
           <div class="product-action">
               <button class="addToCart" onclick="removeFromCart(${item.id})" >Remove from cart</button>
              </div><!-- /product-action -->
           </div><!-- /product-item -->
        `
    })
    allProducts.innerHTML=y;
}

function removeFromCart(id) {
    let choosenProducts = localStorage.getItem("choosenProducts")
    let items = JSON.parse(choosenProducts)
    let removedItemIndex = items.findIndex(item => item.id == id)
    if (removedItemIndex !== -1) {
          items.splice(removedItemIndex, 1) // Remove only the item from array with index=index 

        localStorage.setItem("choosenProducts", JSON.stringify(items))
        drawProducts(items)

        badge.innerHTML = items.length
    }
}

