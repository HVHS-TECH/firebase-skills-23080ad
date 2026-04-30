/**************************************************************
 **************************************************************
 **                                                          **
 ** script.js is where you will write most of your code.     **
 **                                                          **
 **************************************************************
 **************************************************************/

const HTML_OUTPUT = document.getElementById("databaseOutput");

/**************************************************************/
// helloWorld()
// Demonstrate a minimal write to firebase
// This function replaces the entire database with the message "Hello World"
// 
// This uses the set() operation to write the key:value pair "message":"Hello World"
// The ref('/') part tells the operation to write to the base level of the database "/"
// This means it replaces the whole database with message:Hello World
/**************************************************************/
function Hello() {
  console.log("Running Hello()")
  firebase.database().ref('/').set(
    {
      message: 'Kia Ora!'
    }
  )
}

//***Goodbye***/
function Goodbye() {
  console.log("Running Goodbye()")
  firebase.database().ref('/').set(
    {
      message: 'Kia kite ano!'
    }
  )
}

/***Simple Read***/
function simpleRead() {
  console.log("Reading Message");
  firebase.database().ref('/').child('message').once('value', display, fb_readError)
  console.log("Leaving simple read");
}

/**Display**/
function display(snapshot) {
  //checking for errors
  var dbData = snapshot.val();
  if (dbData == null) {
    console.log("There was no record when trying to read the message");
  } else {
    //displaying the message object
    console.log("The message is: " + dbData);
    HTML_OUTPUT.innerHTML = snapshot.val();
  }
}

/***fb_readError***/
function fb_readError(error) {
  console.log("THERE WAS AN ERROR READING YOUR MESSAGE");
  console.error(error);
}

/***fb_readListener***/
function fb_readListener() {
  console.log("Read Listener");
  firebase.database().ref('/message').on('value', display, fb_logDatabaseRead)
}

//readlistener call back
function fb_logDatabaseRead() {
  //displaying the message object
  console.log(highScoreTable);
}

//Create a scoring table and populate it
function updateScores() {
  console.log("Updating scores");
  highScoreTable = {
    highScores: {
      game1: {

        Person: 50,
        human: 70,
        player: 10,


      },
      game2: {

        Person: 39,
        human: 11,
        player: 98,


      }
    }
  }
  //craetes the high score table then sets it here
  firebase.database().ref('/').set(highScoreTable)
  console.log("Scores Updated!");
}

//add a new user and score
// function addFolk() {
//   firebase.database().ref('/game1/users/folk/').set(322578598)
//   console.log(highScoreTable["folk"]);
// }

//read the current highscores
function fb_readHighScores() {
  console.log("Reading highscores");
  firebase.database().ref('/highScores/game1').once('value', fb_displayAllHighscores, fb_readError);
}

//display the current highscore
function fb_displayAllHighscores(snapshot) {
  let highScores = snapshot.val()
  console.log("Person got " + highScores["Person"] + " Points")

  //users in game1
  let names = Object.keys(highScores);
  console.log(names);

  for(i = 0; i < names.length; i++){
    let key = names[i];
    console.log("Score " + (i+1) + " is for " + key + ". They scored " + highScores[key] + " points.");
  }
}

// function fb_displayAllHighscores(snapshot) {
//   let highScores = snapshot.val()
//   console.log("Person got " + highScores["Person"] + " Points")

//   //users in game1
//   let names = Object.keys(highScores);
//   console.log(names);

//   for(i = 0; i < names.length; i++){
//     let key = names[i];
//     console.log("Score " + (i+1) + " is for " + key + ". They scored " + highScores[key] + " points.");
//   }
// }
//runs the readlistener auto on page load. since loading it once causes it to go forever
fb_readListener();
