/**************************************************************/
// fb_initialise()
// Initialize firebase, connect to the Firebase project.
// 
// Find the config data in the Firebase console. Cog wheel > Project Settings > General > Your Apps > SDK setup and configuration > Config
//
// Input:  n/a
// Return: n/a
/**************************************************************/

const firebaseConfig = {
  apiKey: "AIzaSyDoc6oIXoHAGvwK-8MUV-Q4tbx_wvK6UdA",
  authDomain: "aaron-shaji-12comp.firebaseapp.com",
  databaseURL: "https://aaron-shaji-12comp-default-rtdb.firebaseio.com",
  projectId: "aaron-shaji-12comp",
  storageBucket: "aaron-shaji-12comp.firebasestorage.app",
  messagingSenderId: "461472100432",
  appId: "1:461472100432:web:a8646dd71cda8238ee6155",
  measurementId: "G-9G30RS1KYT"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);



// This log prints the firebase object to the console to show that it is working.
// As soon as you have the script working, delete this log.
console.log("Firebase initialize finished:");
console.log(firebase);
