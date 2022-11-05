console.clear();

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getAuth,} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
import {  getDatabase, ref, set, update,} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-database.js";

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
const database = getDatabase();