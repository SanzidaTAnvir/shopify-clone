import { db } from "./firebase.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

/* CART */
let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* LOAD PRODUCTS */
async function loadProducts(){

let box = document.getElementById("products");
box.innerHTML = "";

let snap = await getDocs(collection(db,"products"));

snap.forEach((d)=>{

let p = d.data();

box.innerHTML += `
<div class="card">
<img src="${p.img}">
<h3>${p.name}</h3>
<p>৳${p.price}</p>
<button onclick='addCart("${p.name}",${p.price})'>Add to Cart</button>
</div>
`;
});

}

window.addCart = function(name,price){

cart.push({name,price});
localStorage.setItem("cart",JSON.stringify(cart));
alert("Added to cart");

}

loadProducts();