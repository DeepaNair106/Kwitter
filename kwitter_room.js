// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDGCt9LGXPuoq7E2aEQh6l_Sthz8f0YkwA",
      authDomain: "kwitter-69426.firebaseapp.com",
      databaseURL: "https://kwitter-69426-default-rtdb.firebaseio.com",
      projectId: "kwitter-69426",
      storageBucket: "kwitter-69426.appspot.com",
      messagingSenderId: "124498048061",
      appId: "1:124498048061:web:819588ea646b2244c26654"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("userName");
document.getElementById("display").innerHTML = "Welcome " + user_name + "!";

function addRoom() {

      room_name = document.getElementById("roomName").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";



}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoom(this.id)'>#"+Room_names+"</div> <hr>";
                   document.getElementById("output").innerHTML += row;     
                  //End code
            });
      });
}
getData();

function redirectToRoom(name){

localStorage.setItem("room_name",name);
window.location = "kwitter_page.html";

}

function logout(){

localStorage.removeItem("userName");
localStorage.removeItem("room_name");
window.location = "kwitter.html";

}
