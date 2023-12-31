let cartData = JSON.parse(localStorage.getItem("cart")) || [];
let container=document.getElementById("cart-container");
function displayData(){
container.innerHTML=""
cartData.forEach(function(product,index){
        let card = document.createElement("div")      
        let img = document.createElement("img");
        let name = document.createElement("h2");
        let description = document.createElement("p");
        let category = document.createElement("h4");
        let price = document.createElement("h3");
        let remove = document.createElement("button");
        let increment = document.createElement("button");
        let decrement = document.createElement("button");
        let quantity = document.createElement("span");


        img.src = product.product_image;
        name.innerText = product.name;
        price.innerText = `₹${product.price}`;
        description.innerText = product.description;
        remove.innerText = "Remove";
        increment.innerText = "+";
        decrement.innerText = "-";
        quantity.innerText = product.quantity;

        remove.addEventListener("click", function () {
          
          cartData = cartData.filter(function(ele){
            return ele.id!==product.id
          });
          localStorage.setItem("cart", JSON.stringify(cartData));
          displayData();
        });

        increment.addEventListener("click", function () {
          product.quantity++;
          localStorage.setItem("cart", JSON.stringify(cartData));
          displayData();
        });

        decrement.addEventListener("click", function () {
          if (product.quantity > 1) {
            product.quantity--;
            localStorage.setItem("cart", JSON.stringify(cartData));
            displayData();
          }
        });
        let totalData=document


        card.append(img, name, price, description,increment,quantity,decrement,remove);
        container.append(card);

});
let total = document.getElementById("cart-total");

      let sum = 0;
      for (let i = 0; i < cartData.length; i++) {
        sum += cartData[i].quantity * cartData[i].price;
      }
      total.innerText = sum;
}
displayData();