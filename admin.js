import { db } from './firebase.js';

import {
collection,
addDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

window.addProduct = async function(){

let name = document.getElementById("name").value;

let price = document.getElementById("price").value;
import { db } from './firebase.js';

import {
collection,
addDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

window.addProduct = async function(){

let name = document.getElementById("name").value;

let price = document.getElementById("price").value;
try{

await addDoc(collection(db,"products"),{

name:name,
price:Number(price),
img:img

});
document.getElementById("msg").innerText = "✅ Product Added Successfully";


document.getElementById("name").value = "";
document.getElementById("price").value = "";
document.getElementById("img").value = "";

}catch(error){

console.log(error);
alert("Error Adding Product");

}

}