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
//YOUR FIREBASE LINKS

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
console.log("Room Name - "+ Room_names);
row = "<div class='room_name' id=" + Room_names+"onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;
//End code
 } });  }); }
getData();

function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });

    document.getElementById("msg").value = "";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}