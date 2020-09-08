const express = require('express');
const bodyParser = require("body-parser");
const fs = require('fs');

const app = express();

app.use(express.static(__dirname + '/public/'));
app.use(express.static(__dirname + '/dataBase/'));
app.use(express.static(__dirname + '/chat/'));
app.use(express.static(__dirname + '/game/'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get('/game', function(req, res) {
  res.sendFile(__dirname + "/game/game.html");
});

app.get('/chat', function(req, res) {
  res.sendFile(__dirname + "/chat/chat.html");
});

app.get('/trains', function(req, res) {
  res.sendFile(__dirname + "/public/html/trains.html");
});

app.get('/programms', function(req, res) {
  res.sendFile(__dirname + "/public/html/programms.html");
});

app.get('/complexes', function(req, res) {
  res.sendFile(__dirname + "/public/html/complexes.html");
});

app.get('/constructor', function(req, res) {
  res.sendFile(__dirname + "/public/html/constructor.html");
});

app.get('/motivation', function(req, res) {
  res.sendFile(__dirname + "/public/html/motivation.html");
});

app.get('/confidence', function(req, res) {
  res.sendFile(__dirname + "/public/html/confidence.html");
});

app.get('/license', function(req, res) {
  res.sendFile(__dirname + "/public/html/license.html");
});

app.get('/ourTeam', function(req, res) {
  res.sendFile(__dirname + "/public/html/ourTeam.html");
});

app.get('/tops', function(req, res) {
  res.sendFile(__dirname + "/public/html/tops.html");
});

app.get('/complexAss', function(req, res) {
  res.sendFile(__dirname + "/public/html/forComplexes/complexAss.html");
});

app.get('/complexBiceps', function(req, res) {
  res.sendFile(__dirname + "/public/html/forComplexes/complexBiceps.html");
});

app.get('/complexHandsome', function(req, res) {
  res.sendFile(__dirname + "/public/html/forComplexes/complexHandsome.html");
});

app.get('/complexLegs', function(req, res) {
  res.sendFile(__dirname + "/public/html/forComplexes/complexLegs.html");
});

app.get('/complexPress', function(req, res) {
  res.sendFile(__dirname + "/public/html/forComplexes/complexPress.html");
});

app.get('/complexPretty', function(req, res) {
  res.sendFile(__dirname + "/public/html/forComplexes/complexPretty.html");
});

app.get('/allEasy', function(req, res) {
  res.sendFile(__dirname + "/public/html/forComplexes/allEasy.html");
});

app.get('/allMedium', function(req, res) {
  res.sendFile(__dirname + "/public/html/forComplexes/allMedium.html");
});

app.get('/allHard', function(req, res) {
  res.sendFile(__dirname + "/public/html/forComplexes/allHard.html");
});

app.get('/assEasy', function(req, res) {
  res.sendFile(__dirname + "/public/html/forComplexes/assEasy.html");
});

app.get('/assMedium', function(req, res) {
  res.sendFile(__dirname + "/public/html/forConstructor/assMedium.html");
});

app.get('/assHard', function(req, res) {
  res.sendFile(__dirname + "/public/html/forConstructor/assHard.html");
});

app.get('/backEasy', function(req, res) {
  res.sendFile(__dirname + "/public/html/forConstructor/backEasy.html");
});

app.get('/backMedium', function(req, res) {
  res.sendFile(__dirname + "/public/html/forConstructor/backMedium.html");
});

app.get('/backHard', function(req, res) {
  res.sendFile(__dirname + "/public/html/forConstructor/backHard.html");
});

app.get('/breastEasy', function(req, res) {
  res.sendFile(__dirname + "/public/html/forConstructor/breastEasy.html");
});

app.get('/breastMedium', function(req, res) {
  res.sendFile(__dirname + "/public/html/forConstructor/breastMedium.html");
});

app.get('/breastHard', function(req, res) {
  res.sendFile(__dirname + "/public/html/forConstructor/breastHard.html");
});

app.get('/enduranceEasy', function(req, res) {
  res.sendFile(__dirname + "/public/html/forConstructor/enduranceEasy.html");
});

app.get('/enduranceMedium', function(req, res) {
  res.sendFile(__dirname + "/public/html/forConstructor/enduranceMedium.html");
});

app.get('/enduranceHard', function(req, res) {
  res.sendFile(__dirname + "/public/html/forConstructor/enduranceHard.html");
});

app.get('/fitnessEasy', function(req, res) {
  res.sendFile(__dirname + "/public/html/forConstructor/fitnessEasy.html");
});

app.get('/fitnessMedium', function(req, res) {
  res.sendFile(__dirname + "/public/html/forConstructor/fitnessMedium.html");
});

app.get('/fitnessHard', function(req, res) {
  res.sendFile(__dirname + "/public/html/forConstructor/fitnessHard.html");
});

app.get('/handsEasy', function(req, res) {
  res.sendFile(__dirname + "/public/html/forConstructor/handsEasy.html");
});

app.get('/handsMedium', function(req, res) {
  res.sendFile(__dirname + "/public/html/forConstructor/handsMedium.html");
});

app.get('/handsHard', function(req, res) {
  res.sendFile(__dirname + "/public/html/forConstructor/handsHard.html");
});

app.get('/legsEasy', function(req, res) {
  res.sendFile(__dirname + "/public/html/forConstructor/legsEasy.html");
});

app.get('/legsMedium', function(req, res) {
  res.sendFile(__dirname + "/public/html/forConstructor/legsMedium.html");
});

app.get('/legsHard', function(req, res) {
  res.sendFile(__dirname + "/public/html/forConstructor/legsHard.html");
});

app.get('/pressEasy', function(req, res) {
  res.sendFile(__dirname + "/public/html/forConstructor/pressEasy.html");
});

app.get('/pressMedium', function(req, res) {
  res.sendFile(__dirname + "/public/html/forConstructor/pressMedium.html");
});

app.get('/pressHard', function(req, res) {
  res.sendFile(__dirname + "/public/html/forConstructor/pressHard.html");
});

app.get('/shouldersEasy', function(req, res) {
  res.sendFile(__dirname + "/public/html/forConstructor/shouldersEasy.html");
});

app.get('/shouldersMedium', function(req, res) {
  res.sendFile(__dirname + "/public/html/forConstructor/shouldersMedium.html");
});

app.get('/shouldersHard', function(req, res) {
  res.sendFile(__dirname + "/public/html/forConstructor/shouldersHard.html");
});

app.get('/8cubics', function(req, res) {
  res.sendFile(__dirname + "/public/html/forProgramms/8cubics.html");
});

app.get('/90-60-90', function(req, res) {
  res.sendFile(__dirname + "/public/html/forProgramms/90-60-90.html");
});

app.get('/endurance', function(req, res) {
  res.sendFile(__dirname + "/public/html/forProgramms/endurance.html");
});

app.get('/fitness', function(req, res) {
  res.sendFile(__dirname + "/public/html/forProgramms/fitness.html");
});

app.get('/ironArms', function(req, res) {
  res.sendFile(__dirname + "/public/html/forProgramms/ironArms.html");
});

app.get('/powerfulBreast', function(req, res) {
  res.sendFile(__dirname + "/public/html/forProgramms/powerfulBreast.html");
});

app.get('/roundShoulders', function(req, res) {
  res.sendFile(__dirname + "/public/html/forProgramms/roundShoulders.html");
});

app.get('/sexyAss', function(req, res) {
  res.sendFile(__dirname + "/public/html/forProgramms/sexyAss.html");
});

app.get('/sexyLegs', function(req, res) {
  res.sendFile(__dirname + "/public/html/forProgramms/sexyLegs.html");
});

app.get('/wiseBack', function(req, res) {
  res.sendFile(__dirname + "/public/html/forProgramms/wiseBack.html");
});

app.get('/ass', function(req, res) {
  res.sendFile(__dirname + "/public/html/forTrains/ass.html");
});

app.get('/biceps', function(req, res) {
  res.sendFile(__dirname + "/public/html/forTrains/biceps.html");
});

app.get('/breast', function(req, res) {
  res.sendFile(__dirname + "/public/html/forTrains/breast.html");
});

app.get('/calves', function(req, res) {
  res.sendFile(__dirname + "/public/html/forTrains/calves.html");
});

app.get('/cardio', function(req, res) {
  res.sendFile(__dirname + "/public/html/forTrains/cardio.html");
});

app.get('/endurance', function(req, res) {
  res.sendFile(__dirname + "/public/html/forTrains/endurance.html");
});

app.get('/forearm', function(req, res) {
  res.sendFile(__dirname + "/public/html/forTrains/forearm.html");
});

app.get('/legBiceps', function(req, res) {
  res.sendFile(__dirname + "/public/html/forTrains/legBiceps.html");
});

app.get('/neck', function(req, res) {
  res.sendFile(__dirname + "/public/html/forTrains/neck.html");
});

app.get('/oblique', function(req, res) {
  res.sendFile(__dirname + "/public/html/forTrains/oblique.html");
});

app.get('/press', function(req, res) {
  res.sendFile(__dirname + "/public/html/forTrains/press.html");
});

app.get('/quadriceps', function(req, res) {
  res.sendFile(__dirname + "/public/html/forTrains/quadriceps.html");
});

app.get('/shoulders', function(req, res) {
  res.sendFile(__dirname + "/public/html/forTrains/shoulders.html");
});

app.get('/trapeze', function(req, res) {
  res.sendFile(__dirname + "/public/html/forTrains/trapeze.html");
});

app.get('/triceps', function(req, res) {
  res.sendFile(__dirname + "/public/html/forTrains/triceps.html");
});



app.get('/registration', function(req, res) {
  res.sendFile(__dirname + "/dataBase/registration.html");
});

// const urlencodedParser = bodyParser.urlencoded({extended: false});
app.use(express.urlencoded());
var jsonParser = bodyParser.json();




//REGISTRATION

// app.post("/registr",jsonParser, function (request, response) {
//   console.log(request.body);
//   if(!request.body) return response.sendStatus(400);
//   // console.log(request.body);
//   // response.sendFile(__dirname + "/dataBase/registration.html");
//   // var json = JSON.stringify(request.body);
//   // console.log(json);
//   var answer = {
//     user: {
//       login: request.body.login,
//       password: request.body.password,
//       name: request.body.name
//     },
//     registration: 0,
//     loginError: 0
//   };
//   // console.log(answer.user.login);

//   var bd = fs.readFile("users.txt", "utf8", (err, data) => {
//     if (err) {
//       console.log("no bd, i created");
//       var buf = [{login:"admin", password: "lulv", name:"admin"}];
//       // console.log(buf[0].login);
//       fs.writeFileSync("users.txt", JSON.stringify(buf));
//       data = fs.readFileSync("users.txt", "utf8");
//       // console.log(JSON.stringify(buf));
//     }
//     var bdContent = JSON.parse(data);
//     var duplicateUsers = 0;
//     for (var i in bdContent) {
//       if (bdContent[i].login == request.body.login) {
//         console.log("already is!");
//         duplicateUsers = 1;
//         answer.loginError = 1;
//         // response.set('Content-Type', 'text/json');
//         response.json(answer);
//       }
//     }
//     if (!duplicateUsers) {
//       bdContent[bdContent.length] = {login: request.body.login, password: request.body.password, name: request.body.name};
//       fs.writeFileSync("users.txt", JSON.stringify(bdContent));
//       answer.registration = 1;
//       response.json(answer);
//       console.log("bd updated sucessfully!");
//     }
//   });
// });




//WEBSOCKET GAME
// const sio = require('socket.io').listen(8081);
// var users = 0;
// var color = 'blue';
// var sellID = 84;
// var clients = [];
// var positions = [];

// sio.sockets.on('connection', (socket) => {
//   var userObject = {
//     myID: -1,
//     myColor: '404',
//     mySell: -1,
//     socketID: socket.id
//   }
//   users++;
//   if (users == 1) {
//     color = 'blue';
//     sellID = 84;
//   }
//   if (users == 2) {
//     color = 'red';
//     sellID = 85;
//   } else if (users == 3) {
//     color = 'green';
//     sellID = 86;
//   }
//   positions[socket.id] = sellID;
//   // console.log("i am alive");
//   var needToUnshiftFirst = 0;
//   var needToUnshiftSecond = 0;

//   if (users > 2) {
//     for (var i = 0; i < clients.length; i++) {
//       // console.log(clients[i].myID + '\n');
//       if (clients[i].myID == 2) {
//         needToUnshiftSecond = 0;
//         break;
//       } else needToUnshiftSecond = 1;
//     }
//     if (needToUnshiftSecond) {
//       userObject.myID = 2;
//       userObject.myColor = 'red';
//       userObject.mySell = 85;
//       clients.splice(1, 0, userObject);
//       socket.json.send({'socketID': userObject.socketID, 'answerID': 0, 'currentID': 2, 'color': 'red', 'sellID': 85});
//       socket.broadcast.json.send({'answerID': 1, 'currentID': 2, 'color': 'red', 'sellID': 85});
//     }
//   }

//   if (users > 1) {
//     for (var i = 0; i < clients.length; i++) {
//       if (clients[i].myID == 1) {
//         needToUnshiftFirst = 0;
//         break;
//       } else needToUnshiftFirst = 1;
//     }
//     if (needToUnshiftFirst) {
//       userObject.myID = 1;
//       userObject.myColor = 'blue';
//       userObject.mySell = 84;
//       clients.unshift(userObject);
//       socket.json.send({'socketID': userObject.socketID, 'answerID': 0, 'currentID': 1, 'color': 'blue', 'sellID': 84});
//       socket.broadcast.json.send({'answerID': 1, 'currentID': 1, 'color': 'blue', 'sellID': 84});
//     }
//   }
//   if (!needToUnshiftFirst && !needToUnshiftSecond) {
//     userObject.myID = users;
//     userObject.myColor = color;
//     userObject.mySell = sellID;
//     clients.push(userObject);
//     socket.json.send({'socketID': userObject.socketID, 'answerID': 0, 'currentID': users, 'color': color, 'sellID': sellID});
//     socket.broadcast.json.send({'answerID': 1, 'currentID': users, 'color': color, 'sellID': sellID});
//   }
//   // console.log(clients);
//   if (users > 1) {
//     for (var i = 0; i < users; i++) {
//       socket.json.send({'answerID': 1, 'currentID': clients[i].myID, 'color': clients[i].myColor, 'sellID': clients[i].mySell});
//     }
//   }
//   socket.on('message', function(data) {
//     // console.log(socket.id);
//     /////////////////////
//     data = JSON.parse(data);




//     if (data.answerID == 3) {
//       data.sellID += 13;
//       for (var i = 0; i < clients.length; i++) {
//         if (data.myID == clients[i].myID) {
//           clients[i].mySell = data.sellID;
//         }
//       }
//     }

//     if (data.answerID == 4) {
//       data.sellID -= 13;
//       for (var i = 0; i < clients.length; i++) {
//         if (data.myID == clients[i].myID) {
//           clients[i].mySell = data.sellID;
//         }
//       }
//     }

//     if (data.answerID == 5) {
//       data.sellID -= 1;
//       for (var i = 0; i < clients.length; i++) {
//         if (data.myID == clients[i].myID) {
//           clients[i].mySell = data.sellID;
//         }
//       }
//     }

//     if (data.answerID == 6) {
//       data.sellID += 1;
//       for (var i = 0; i < clients.length; i++) {
//         if (data.myID == clients[i].myID) {
//           clients[i].mySell = data.sellID;
//         }
//       }
//     }
//     positions[socket.id] = data.sellID;
//     // console.log(data);
//     // console.log(clients);
//     console.log(positions);
//     data.answerID = 3;
//     socket.json.send(data);
//     socket.broadcast.json.send(data);
//   });



//   socket.on('disconnect', function() {
//     for (var i = 0; i < clients.length; i++) {
//       if (userObject.myID == clients[i].myID) {
//         socket.broadcast.json.send({'answerID': 2, 'currentID': clients[i].myID, 'color': clients[i].myColor, 'sellID': clients[i].mySell});
//         clients.splice(i, 1);
//       }
//     }
//     // console.log(clients);
// 		users--;
// 	});
// });


app.listen(3000, '127.0.0.1');
console.log("Server has started.");