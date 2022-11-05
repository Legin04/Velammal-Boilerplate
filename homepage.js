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


  let Div = document.createElement("div");
  Div.classList.add("col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5");
  Div.innerHTML =`<figure class="effect-ming tm-video-item">
  <img src="img/img-03.jpg" alt="Image" class="img-fluid">
  <figcaption class="d-flex align-items-center justify-content-center">
      <h2>Clocks</h2>
      <a href="photo-detail.html">View more</a>
  </figcaption>                    
</figure>`
  let element = `<div class="d-flex justify-content-between tm-text-gray">
  <span class="tm-text-gray-light">18 Oct 2020</span>
  <span>9,906 views</span>
</div>`;
Div.insertAdjacentHTML('beforeend',element)


let containerDiv = document.getElementById("cont");
containerDiv.appendChild(Div);