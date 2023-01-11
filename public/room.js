// //nethaka liwwe mama danna
  
// var socket = io();
// var messages = document.getElementById("messages");
// var form = document.getElementById("form");
// var input = document.getElementById('input');
// var roomNameSaved = window.localStorage.getItem('roomName');
// socket.emit("myRoom", roomNameSaved);

// var scrollInterval = setInterval(function () {
//   document.documentElement.scrollTop = document.documentElement.scrollHeight;
// }, 50);
// socket.emit("userJoined", "userRequestData");

// let oldMessages = window.localStorage.getItem('messages');
// if (oldMessages != "" && oldMessages != null) {
//   let vidasara = oldMessages.split(",");
//   vidasara.forEach((e) => {
//     var n = document.createElement('li');
//     n.textContent = e;
//     messages.appendChild(n);
//   })
// }

// socket.on("Id", (arg, callback) => {
//   console.log(arg);
//   const socketId = arg;
//   callback("Id recieved");
// });
// var name = window.localStorage.getItem('name');
// console.log(name);
// function onlySpaces(str) {
//   return str.trim().length === 0;
// }

// //write a message
// form.addEventListener('submit', function (e) {
//   e.preventDefault();
//   let i = onlySpaces(input.value);
//   if (input.value != "" && input.value != null && input.value != ' ' && i == false) {
//     let message = name + " : " + input.value;
//     socket.emit('message', { room: roomNameSaved, name: name, message: input.value });
//     input.value = '';
//   }
// });
// function emitName() {
//   socket.emit("name", name);
// }
// let messageArray = [];
// setTimeout(emitName, 1000);

// //entering to room
// socket.on("roomGreeting", (arg, callback) => {
//   var item = document.createElement('li');
//   item.textContent = arg;
//   messages.appendChild(item);
//   item.style.padding = "0.4rem 1rem";
//   item.style.borderRadius = "25px";
//   item.style.display = "block";
//   item.style.marginLeft = "auto";
//   item.style.marginRight = "auto";
//   item.style.border = "none";
//   item.style.backgroundColor = "#473360";
//   item.style.color = "#939393";
//   document.querySelector(".icon").innerText = roomNameSaved[0];
//   document.querySelector(".Usernamen").innerText = roomNameSaved;
//   input.value = "";
// })
// socket.on('messageRedirect', function (msg) {
//   var item = document.createElement('li');
//   var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
//   item.innerHTML = msg.replace(exp, "<a href='$1' target='_blank'>$1</a>");
//   messages.appendChild(item);
//   const scroll = document.querySelector("#messages");
//   scroll.scrollTop = scroll.scrollHeight;
//   messageArray.push(msg);
//   window.scrollTo({
//     left: 0,
//     top: scroll.scrollHeight,
//     behavior: "smooth",
//   });

//   window.scrollTo({ left: 0, top: scroll.scrollHeight, behavior: "smooth" });
//   messageArray.push(msg);
//   window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
//   window.localStorage.setItem('messages', messageArray);

// });


// function writeMyMessage(msg) {
//   var item = document.createElement('li');
//   item.setAttribute("id", "myMessage");
//   item.style.backgroundColor = "rgb(149, 97, 247)";
//   item.style.borderBottomRightRadius = "0";
//   item.style.borderBottomLeftRadius = "12px";
//   item.style.marginRight = "2rem";
//   item.style.marginLeft = "auto";
//   item.style.textAlign = "right";
//   item.style.border = "1px solid #9f6efb";
//   item.style.animation = "FadeNew 1s";
//   var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
//   item.innerHTML = msg.replace(exp, "<a href='$1' target='_blank'>$1</a>");
//   messages.appendChild(item);
//   const scroll = document.querySelector("#messages");
//   scroll.scrollTop = scroll.scrollHeight;
//   messageArray.push(msg);
//   window.scrollTo({
//     left: 0,
//     top: scroll.scrollHeight,
//     behavior: "smooth",
//   });
//   window.scrollTo({ left: 0, top: scroll.scrollHeight, behavior: "smooth" });
// }

// socket.on('messageRedirectToClient', function (msg) {
//   writeMyMessage(msg);
//   messageArray.push(msg);
//   window.localStorage.setItem('messages', messageArray);
// })
// let users = [];

// socket.on("nameRedirectOnLoad", (arg, responce) => {
//   arg.forEach(createElement())
//   function createElement() {
//     var name = arg;
//     if (document.querySelector(".members").innerText == "") {
//     document.querySelector(".members").innerText = name;
//   } else {
//     document.querySelector(".members").innerText = document.querySelector("h2").innerText + " , " + name;
//   }
//   }
// })
// socket.on("nameRedirect", (arg, callback) => {
//   users.push(arg);
//   console.log(users);
//   var name = arg;
//   if (document.querySelector(".members").innerText == "") {
//     document.querySelector(".members").innerText = name;
//   } else {
//     document.querySelector(".members").innerText = document.querySelector("h2").innerText + " , " + name;
//   }
// })