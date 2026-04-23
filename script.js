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
function Hello(){
  console.log("Running Hello()")
  firebase.database().ref('/').set(
    {
      message: 'Kia Ora!'
    }
  )
}

//***Goodbye***/
function Goodbye(){
  console.log("Running Goodbye()")
  firebase.database().ref('/').set(
    {
      message: 'Kia kite ano!'
    }
  )
}

/***Simple Read***/
function simpleRead(){
  console.log("Reading Message");
  firebase.database().ref('/').child('messuuuge').once('value', displayRead);
  display(snapshot);
  console.log("Leaving simple read");
}

/***Display Read***/
function displayRead(snapshot) {
  console.log("Running displayRead(), the message is: " + snapshot.val())
  HTML_OUTPUT.innerHTML = snapshot.val();
}


/**find where this goes**/
function display(snapshot){
  var dbData = snapshot.val();
  if (dbData == null){
    console.log("There was no record when trying to read the message");
  } else {
    console.log("The message is: " + dbData)
  }

}