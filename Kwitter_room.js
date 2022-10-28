const firebaseConfig = {
    apiKey: "AIzaSyDQQF6zNyo92WLAWTYYbEuDnemmk-7PlEg",
    authDomain: "kwitter-ff2eb.firebaseapp.com",
    databaseURL: "https://kwitter-ff2eb-default-rtdb.firebaseio.com",
    projectId: "kwitter-ff2eb",
    storageBucket: "kwitter-ff2eb.appspot.com",
    messagingSenderId: "63690606155",
    appId: "1:63690606155:web:449ba09003b084091b6fce",
    measurementId: "G-S1C4DW92LZ"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
User_name = loclaStorage.getItem("User_name");
document.getElementById("User_name").innerHTML = "Welcome" + User_name + "!";
function Addroom(){
    room_name = document.getElementById("room_name").value
    firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
     localStorage.setItem("room_name", room_name);
}