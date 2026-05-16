import { db } from "./firebase.js";
import { collection, addDoc, getDocs, deleteDoc, doc } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

/* ADD PRODUCT */
window.addProduct = async function(){

let name=document.getElementById("name").value;
let price=document.getElementById("price").value;
let img=document.getElementById("img").value;

await addDoc(collection(db,"products"),{
name,price,img
});

loadProducts();
}

/* LOAD PRODUCTS */
async function loadProducts(){

let box=document.getElementById("productList");
box.innerHTML="";

let snap=await getDocs(collection(db,"products"));

snap.forEach((d)=>{

let p=d.data();

box.innerHTML+=`
<div>
<img src="${p.img}" width="100">
<h4>${p.name}</h4>
<p>৳${p.price}</p>
<button onclick="del('${d.id}')">Delete</button>
</div>
`;
});

}

/* DELETE */
window.del = async function(id){
await deleteDoc(doc(db,"products",id));
loadProducts();
}

/* LOAD ORDERS */
async function loadOrders(){

let box=document.getElementById("orders");
box.innerHTML="";

let snap=await getDocs(collection(db,"orders"));

snap.forEach((d)=>{

let o=d.data();

box.innerHTML+=`
<div>
<h4>${o.name}</h4>
<p>৳${o.total}</p>
<p>${o.orderStatus}</p>
</div>
`;
});

}

loadProducts();
loadOrders();