import { db } from './firebase.js';

import {
collection,
getDocs
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

/* PRODUCTS LOAD */

const box = document.getElementById("products");

async function loadProducts(){

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

}

loadProducts();

/* HERO SLIDER */

let heroSlides = document.querySelectorAll(".hero-slide");

let currentHero = 0;

setInterval(()=>{

heroSlides[currentHero].classList.remove("active");

currentHero++;

if(currentHero >= heroSlides.length){
currentHero = 0;
}

heroSlides[currentHero].classList.add("active");

},4000);

/* MOBILE MENU */

let menuBtn = document.querySelector(".menu-btn");

let nav = document.querySelector("nav");

menuBtn.onclick = ()=>{
nav.classList.toggle("active");
}

/* CART */

function updateCartCount(){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

document.getElementById("cart-count").innerText = cart.length;

}

updateCartCount();

window.addCart = function(name,price){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

cart.push({
name,
price
});

localStorage.setItem("cart",JSON.stringify(cart));

updateCartCount();

alert("Added To Cart");

}