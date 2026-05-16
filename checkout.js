import { db } from "./firebase.js";
import { addDoc, collection } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

let cart = JSON.parse(localStorage.getItem("cart")) || [];

window.placeOrder = async function(){

let name = document.getElementById("name").value;
let phone = document.getElementById("phone").value;
let payment = document.getElementById("payment").value;

let total = cart.reduce((sum,i)=>sum+i.price,0);

await addDoc(collection(db,"orders"),{
name,
phone,
items:cart,
total,
paymentMethod:payment,
paymentStatus:"Pending",
orderStatus:"Processing",
date:new Date().toLocaleString()
});

alert("Order Placed!");

localStorage.removeItem("cart");
window.location.href="index.html";

}