import { initializeApp } 
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";


import { getFirestore, collection, addDoc, getDocs }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


 // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyD4i0tv37z6RVaIyrEp3or3_l83hOO-dA8",
    authDomain: "my-test-website-7954d.firebaseapp.com",
    projectId: "my-test-website-7954d",
    storageBucket: "my-test-website-7954d.firebasestorage.app",
    messagingSenderId: "5359500453",
    appId: "1:5359500453:web:f3d0c0aed10583196d214c"
  };



const app = initializeApp(firebaseConfig);


const db = getFirestore(app);



window.addData = async function(){

let name = document.getElementById("name").value;


await addDoc(collection(db,"people"),{

name:name

});


alert("saved");

loadData();

}



async function loadData(){

let list=document.getElementById("list");

list.innerHTML="";


const querySnapshot = await getDocs(collection(db,"people"));


querySnapshot.forEach((doc)=>{


let li=document.createElement("li");

li.innerText=doc.data().name;


list.appendChild(li);


});


}


loadData();
