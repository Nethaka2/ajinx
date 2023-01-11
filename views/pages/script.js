var x = document.getElementById('mainBtns');
x.style.display = "none";



function show(){
 

  if(x.style.display === "none"){
    x.style.display = "block";
  }else {
    x.style.display = "none";
  }
}
function privateChat(){

  var box = document.getElementById('people')
  box.style.display ="none";
  if(box.style.display === "none"){
    box.style.display = "block";
  }else{
    box.style.display = "none";
  }
}

var input = document.getElementById('Username')
var mainbtns = document.getElementById('mainbtns')
var btn = document.getElementById('go')
var mainC = document.getElementById('mainC')
var private1 = document.getElementById('private')
var login = document.getElementById('login')
var roomName = document.getElementById('roomName');


function startRoom() {

  if(roomName.value){
    window.localStorage.setItem('roomName', roomName.value);
    window.location.href = "/room.html";
    window.alert("Redirecting")
  }else{
    window.alert("please enter a room")
  }
}
var userVal = document.getElementById("username");

function submit(){
  if(userVal.value){
  window.localStorage.setItem(userVal.value);
  }
}
function loadMain(){
  window.location.href = "chatRoom.html"
}
