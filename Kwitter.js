function addUser(){
    user_name = document.getElementById("User_name").value;
    localStorage.setItem("Username", user_name)
    window.location = "Kwiter_room.html";
}