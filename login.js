console.clear();

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
import {
  getDatabase,
  ref,
  set,
  update,
} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-database.js";

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

const loginBtn = document.getElementById("login");
const signupBtn = document.getElementById("signup");
const sign_up = document.getElementById("s-button");
const log_in = document.getElementById("l-button");
const s_button = document.getElementById("s-button");
const l_button = document.getElementById("l-button");

loginBtn.addEventListener("click", (e) => {
  let parent = e.target.parentNode.parentNode;
  Array.from(e.target.parentNode.parentNode.classList).find((element) => {
    if (element !== "slide-up") {
      parent.classList.add("slide-up");
    } else {
      signupBtn.parentNode.classList.add("slide-up");
      parent.classList.remove("slide-up");
    }
  });
});

signupBtn.addEventListener("click", (e) => {
  let parent = e.target.parentNode;
  Array.from(e.target.parentNode.classList).find((element) => {
    if (element !== "slide-up") {
      parent.classList.add("slide-up");
    } else {
      loginBtn.parentNode.parentNode.classList.add("slide-up");
      parent.classList.remove("slide-up");
    }
  });
});

sign_up.addEventListener("click", sign_up_f, false);
log_in.addEventListener("click", log_in_f, false);

function sign_up_f() {
  // Get field data
  const name_s = document.getElementById("s_name").value;
  const email = document.getElementById("s_email").value;
  const password = document.getElementById("s_password").value;

  // Validations
  if (
    validate_email(email) == false ||
    validate_password(password) == false ||
    validate_field(name_s) == false
  ) {
    alert("Please enter valid details");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then(function () {
      var user = auth.currentUser;
      alert("  User Created  ");

      var user_data = {
        email: email,
        name_s: name_s,
        last_login: Date.now(),
      };

      set(ref(database, "users/" + user.uid), user_data);
    })
    .catch(function (err) {
      var error_code = err.code;
      var error_msg = err.message;

      alert(error_msg);
    });
}

function log_in_f() {
  //Get Data fields
  const email = document.getElementById("l_email").value;
  const password = document.getElementById("l_password").value;

  //validates
  if (validate_email(email) == false || validate_password(password) == false) {
    alert("Please enter valid details");
    return;
  }

  signInWithEmailAndPassword(auth, email, password)
    .then(function () {
      var user = auth.currentUser;
      alert("  User Logged In");

      var user_data = {
        last_login: Date.now(),
      };

      update(ref(database, "users/" + user.uid), user_data);
    })
    .catch(function (err) {
      var error_code = err.code;
      var error_msg = err.message;

      alert(error_msg);
    });
}

function validate_email(email) {
  const expression = /^[^@]+@\w+(\.\w+)+\w$/;
  if (expression.test(email) == true) {
    return true;
  } else {
    return false;
  }
}

function validate_password(password) {
  if (password < 6) {
    return false;
  } else {
    return true;
  }
}

function validate_field(field) {
  if (field == null) {
    return false;
  }

  if (field.length <= 0) {
    return false;
  } else {
    return true;
  }
}
