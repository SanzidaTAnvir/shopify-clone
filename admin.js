import { db } from './firebase.js';

import {
collection,
addDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

/* ADD PRODUCT */

window.addProduct = async function(){

const name = document.getElementById("name").value;

const price = document.getElementById("price").value;

const img = document.getElementById("img").value;

if(name === "" || price === "" || img === ""){

alert("Please Fill All Fields");

return;

}

try{

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

}catch(error){

console.log(error);

alert("Firebase Error");

}

}