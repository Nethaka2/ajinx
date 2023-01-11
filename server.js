const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const fs = require('fs');
const { initializeApp } = require('firebase-admin/app');
const util = require('util');



var admin = require("firebase-admin");

var serviceAccount = require("./ajinx-93ecc-firebase-adminsdk-gyw8b-fd3c85081c.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://firebase-adminsdk-gyw8b@ajinx-93ecc.iam.gserviceaccount.com"
});
const { getDatabase } = require('firebase-admin/database');
// const { set } = require('firebase-admin/database');
const db = getDatabase();

const ref = db.ref('messages');

const usersRef = ref.child('messages');
usersRef.set({
  alanisawesome: {
    date_of_birth: 'June 23, 1912',
    full_name: 'Alan Turing'
  },
  gracehop: {
    date_of_birth: 'December 9, 1906',
    full_name: 'Grace Hopper'
  }
});

// function writeUserData(userId, name, email) {
//   set(ref(db, 'users/' + userId), {
//     username: name,
//     email: email
    
//   });
// }
// writeUserData("fuck", "eeee", "email");


// admin.initializeApp({
//   apiKey: "AIzaSyDnOgBTu6-cHbrv-Xa0dYmzDVXxjJr3nKE",
//     authDomain: "ajinxbuilder.firebaseapp.com",
//     databaseURL: "https://ajinxbuilder-default-rtdb.firebaseio.com",
//     projectId: "ajinxbuilder",
//     storageBucket: "ajinxbuilder.appspot.com",
//     messagingSenderId: "541811597059",
//     appId: "1:541811597059:web:e4a23a02c31321a15dd336"
// });

// const db = admin.database();




server.listen(3000, function () {
  console.log("Listening");
});

var total = 0;

console.log('system running!');
var param = "style";


app.use(express.static("public"));

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('pages/index')
})
app.get('/room', (req, res) => {
    res.render('pages/room')
})
app.get('/essential', (req, res) => {
    res.render('partials/essential')
})
app.get('/404', (req, res) => {
    res.render('pages/404')
})

var traffic = 0;
app.use((req, res, next) => {

  console.log(`${req.method} request received from ${req.ip} for ${req.url}`);

  let requestCount = 0;
  requestCount++;
  res.set('X-Request-Count', requestCount);
traffic = requestCount;
  next();
});
console.log("traffic: " + traffic);



io.on("connection", (socket) => {
  socket.emit("WriteFirebase", "hehe");
  socket.emit("/GEMINI started...");


  
  
  
var you = "you";
  socket.on("name", (arg, callback) => {
   
    socket.broadcast.emit("nameRedirect", arg);
    socket.emit("nameRedirect", you);
  })
  socket.on("myRoom", (arg, responce) => {
 
    socket.join(arg);
    let lovelyMessage = "Hi! Your in room" + " " + arg;
    io.to(arg).emit("roomGreeting", lovelyMessage);
  })
  var socketId = socket.id;
  socket.emit("Id", socketId, (responce) => {
      console.log(responce);
  })
  socket.on("feedback", function(data){
  
 let content = data.content;
    io.sockets.emit("writeFeedback", content);
    console.log(content);
  
  })
  socket.on('usernamePassword', function(data){
    var username = data.username;
    var password = data.password;
console.log(username + " " + password);
    io.sockets.emit('writeUserData', {username: username, password: password});
  })
 socket.on('signUpInfo', function(data){
   var name = data.name;
   var password = data.password;
   var email = data.email;
   var country = data.country;
   var data = [];
   data.push('name : ' + name);
   data.push('password : ' + password);
   data.push('email : ' + email);
   data.push('country : ' + country);
   console.log(data);
 })

  socket.on("message", function(data){
      
var name = data.name;
    
    var room = data.room;
    var message = data.message;
    if(message == "gemini/ start"){
      
      let messageToEmit = "<h4> GEMINI STARTED... </h4>";
      socket.emit("messageRedirectToClient", messageToEmit);
      messageToEmit = '';
    }
     if(message == "gemini/ what are you"){
      
      let messageToEmit = "<h4> NOTHING </h4>";
      socket.emit("messageRedirectToClient", messageToEmit);
      messageToEmit = '';
    }
else{
let messageToEmit =  name + " : " + message;
  
    let messageEmitToClient = "You" + ":" + " " + message;
   socket.broadcast.to(room).emit("messageRedirect", messageToEmit);
    socket.emit("messageRedirectToClient", messageEmitToClient);
}
  });
  
})

 app.use((req, res, next) => {
   res.status(404).render('pages/404')
 })