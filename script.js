console.log("Cart JS Loaded");
let navbar = document.querySelector(".navbar");
let searchform = document.querySelector(".search-form");
let cartItem = document.querySelector(".cart-items-container");


const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");


console.log(cartItems);
console.log(cartTotal);

// Open / Close Cart
document.querySelector("#cart-btn").onclick = function(e){

    e.stopPropagation();

    navbar.classList.remove("active");
    searchform.classList.remove("active");

    cartItem.classList.toggle("active");

};

let cart = [];

document.querySelectorAll(".add-to-cart").forEach(btn=>{

    btn.onclick=(e)=>{

        e.preventDefault();
        console.log("Button Clicked");

        const item={
            name:btn.dataset.name,
            price:Number(btn.dataset.price),
            image:btn.dataset.img,
            qty:1
        };

        const exist=cart.find(product=>product.name===item.name);

        if(exist){

            exist.qty++;

        }else{

            cart.push(item);

        }

        updateCart();

    }

});

function updateCart(){

    console.log("updateCart called");
    console.log(cart);

    cartItems.innerHTML="";

    let total=0;

    cart.forEach((item,index)=>{

        total+=item.price*item.qty;

        cartItems.innerHTML+=`

        <div class="cart-item">

            <span class="fa fa-times remove-item" data-index="${index}"></span>

            <img src="${item.image}">

            <div class="content">

                <h3>${item.name}</h3>

                <div class="price">

                $${item.price.toFixed(2)} × ${item.qty}

                </div>

            </div>

        </div>

        `;

    });

    cartTotal.innerHTML="$"+total.toFixed(2);

    document.querySelectorAll(".remove-item").forEach(btn=>{

        btn.onclick=()=>{

            cart.splice(btn.dataset.index,1);

            updateCart();

        }

    });

}

// // Close cart when clicking outside
// document.addEventListener("click", function(e){

//     if(
//         !e.target.closest(".cart-items-container") &&
//         !e.target.closest("#cart-btn")
//     ){
//         cartItem.classList.remove("active");
//     }

// });