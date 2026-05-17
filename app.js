import { db } from './firebase.js';

import {
collection,
getDocs
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

/* =========================
MOBILE MENU
========================= */

const menuBtn = document.querySelector(".menu-btn");

const nav = document.querySelector("nav");

menuBtn.onclick = ()=>{
nav.classList.toggle("active");
};

/* =========================
LOAD PRODUCTS
========================= */

const box = document.getElementById("products");

async function loadProducts(){

try{

const querySnapshot = await getDocs(collection(db,"products"));

querySnapshot.forEach((doc)=>{

const p = doc.data();

box.innerHTML += `

<div class="card">

<img src="${p.img}">

<div class="card-content">

<h3>${p.name}</h3>

<p>৳ ${p.price}</p>

<button onclick='addCart("${p.name}",${p.price})'>
Add To Cart
</button>

</div>

</div>

`;

});

}catch(error){

console.log(error);

box.innerHTML = `

<h2 style="text-align:center;">
Products Failed To Load
</h2>

`;

}

}

loadProducts();

/* =========================
CART
========================= */

function updateCart(){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

document.getElementById("cart-count").innerText = cart.length;

}

updateCart();

window.addCart = function(name,price){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

cart.push({
name,
price
});

localStorage.setItem("cart",JSON.stringify(cart));

updateCart();

alert(name + " Added To Cart");

}