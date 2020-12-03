const firebaseConfig = {
  apiKey: "AIzaSyBoo0xHQZSMUNvE0aFvttNTsnf7Vk5SGzI",
  authDomain: "superliker-fb.firebaseapp.com",
  databaseURL: "https://superliker-fb.firebaseio.com",
  projectId: "superliker-fb",
  storageBucket: "superliker-fb.appspot.com",
  messagingSenderId: "991458248696",
  appId: "1:991458248696:web:4d5461238e3edf2129b80d",
  measurementId: "G-42V1PERSCP"
};
firebase.initializeApp(firebaseConfig);
var db = firebase.database();
var adminRef = db.ref('admin');
var nama = $_POST['nama'];
var email = $_POST['email'];
var sandi = $_POST['sandi'];



