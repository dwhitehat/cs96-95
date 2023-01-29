var firebaseConfig = {
    apiKey: "AIzaSyCujmuqsuIQa-O8njfjmaQMM4iIwXzj_tE",
    authDomain: "kwitter-893d7.firebaseapp.com",
    databaseURL: "https://kwitter-893d7-default-rtdb.firebaseio.com",
    projectId: "kwitter-893d7",
    storageBucket: "kwitter-893d7.appspot.com",
    messagingSenderId: "265693091425",
    appId: "1:265693091425:web:6b6a2db648d188217d3c20"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() 
{firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code

//End code
});});}
getData();

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            Purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "chat.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "chat.html";
}