console.clear();

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getAuth,} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
import {  getStorage, ref as sRef ,  getDownloadUrl,} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyApJFatbxamgzVSw3uMtjsBrlXVce6YOoA",
  authDomain: "vhackathon-27e8e.firebaseapp.com",
  databaseURL: "https://vhackathon-27e8e-default-rtdb.firebaseio.com",
  projectId: "vhackathon-27e8e",
  storageBucket: "vhackathon-27e8e.appspot.com",
  messagingSenderId: "421517765892",
  appId: "1:421517765892:web:0efcb22725b6a104313451",
  measurementId: "G-M75BJ0M1WW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize variables

const auth = getAuth(app);



//------------------//

var files = [];
var reader = new FileReader()

document.body.onload = addElement;

function addElement(img, text, desc) {
  // create a new div element
  const newDiv = document.createElement("div");
  newDiv.class = "col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5"

  // and give it some content
  const newContent = document.createTextNode("Hi there and greetings!");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}

addElement()
