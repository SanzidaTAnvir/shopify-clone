import { db } from './firebase.js';

import {
collection,
addDoc,
getDocs,
deleteDoc,
doc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

/* ADD PRODUCT */

window.addProduct = async function(){

const name = document.getElementById("name").value;

const price = document.getElementById("price").value;

const img = document.getElementById("img").value;

if(name === "" || price === "" || img === ""){

alert("Fill All Fields");

return;

}

await addDoc(collection(db,"products"),{

name:name,
price:Number(price),
img:img

});

document.getElementById("msg").innerHTML =
"✅ Product Added Successfully";

document.getElementById("name").value = "";
document.getElementById("price").value = "";
document.getElementById("img").value = "";

loadProducts();

}

/* LOAD PRODUCTS */

const productBox = document.getElementById("product-list");

async function loadProducts(){

productBox.innerHTML = "";

const querySnapshot =
await getDocs(collection(db,"products"));

querySnapshot.forEach((item)=>{

const p = item.data();

productBox.innerHTML += `

<div class="product-card">

<img src="${p.img}">

<div class="product-info">

<h3>${p.name}</h3>

<p>৳ ${p.price}</p>

<button onclick="deleteProduct('${item.id}')">
Delete
</button>

</div>

</div>

`;

});

}

loadProducts();

/* DELETE PRODUCT */

window.deleteProduct = async function(id){

await deleteDoc(doc(db,"products",id));

loadProducts();

}