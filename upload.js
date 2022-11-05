import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getAuth,} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
//import {  getStorage, ref as sRef ,  getDownloadUrl,} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-storage.js";

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
const auth = getAuth(app);


//-----------------------------------------//

var files = [];
var reader = new FileReader();

var namebox = document.getElementById('namebox');
var extlab = document.getElementById('extlab');
var up_img = document.getElementById('up_img');
var upprogress = document.getElementById('upprogress');
var selBtn = document.getElementById('selBtn');
var upBtn = document.getElementById('upBtn');
var downBtn = document.getElementById('downBtn');

var input = document.createElement('input');
input.type = 'file';

input.onchange = e => {
    files = e.target.files;

    var extention = GetFileExt(files[0]);
    var name = GetFileName(files[0]);

    namebox.value = name
    extlab.innerHTML = extention;

    reader.readAsDataURL(files[0]);
}

reader.onload = function () {
    up_img.src = reader.result;
}

// ----UTILS-----//

selBtn.onclick = function () {
    input.click();
}

function GetFileExt(file) {
    var temp = file.name.split('.');
    var ext = temp.slice(temp.length-1, temp.length);
    return '.'+ext[0];
}

function GetFileName(file) {
    var temp = file.name.split('.');
    var file_name = temp.slice(0, -1).join('.');
    return file_name;  
}


