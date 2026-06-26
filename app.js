import { initializeApp } 
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";


import { getFirestore, collection, addDoc, getDocs }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


// YOUR FIREBASE CONFIG HERE

const firebaseConfig = {

apiKey: "YOUR KEY",
authDomain: "YOUR DOMAIN",
projectId: "YOUR PROJECT ID"

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
