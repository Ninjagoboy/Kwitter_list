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
User_name = localStorage.getItem("Username");
document.getElementById("User_name").innerHTML = "Welcome" + Username + "!";
function Addroom(){
    room_name = document.getElementById("room_name").value
    firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
     localStorage.setItem("room_name", room_name);
     window.location = "Kwitter_page.html"
}

function redirectToRoomName(name){
  localStorage.setItem("room_name", room_name);
     window.location = "Kwitter_page.html"
}
function logout(){
  localStorage.removeItem("User_name");
  localStorage.removeItem("romm_name");
  window.location = "index.html"
}
function getData(){
  firebase.database().ref("/").on('value', 
  function(snapshot) 
  { document.getElementById("output").innerHTML = ""; 
  snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; Room_names = childKey; 
    console.log("Room Name - " + Room_names);
     row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
  document.getElementById("output").innerHTML += row; }); });
}