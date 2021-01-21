// import * as firebase from "firebase";
import firebase from "firebase/app";
require("firebase/auth");
require("firebase/database");

const firebaseConfig = {
    apiKey: "AIzaSyAI1ErfBT8pzDWw0k1U8zE_m4UycGJPmnU",
    authDomain: "nabogrande-eeeed.firebaseapp.com",
    databaseURL: "https://nabogrande-eeeed-default-rtdb.firebaseio.com",
    projectId: "nabogrande-eeeed",
    storageBucket: "nabogrande-eeeed.appspot.com",
    messagingSenderId: "604118235476",
    appId: "1:604118235476:web:c561693766948c718cb0c1",
    measurementId: "G-R5C28XNF0N",
};

firebase.initializeApp(firebaseConfig);
//firebase.database().ref().set({ name: "tom" });
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

// database
//     .ref("expenses/12345")
//     .set({ description: "tom", amount: 12345, createdAt: 9900000 })
//     .then(() => {
//         console.log("synced");
//     })
//     .catch((e) => {
//         console.log("error ", e);
//     });

export { firebase, googleAuthProvider, database as default };

// database
//     .ref()
//     .once("value")
//     .then((snapshot) => {
//         const x = snapshot.val();
//         console.log(x);
//     });

// database.ref().on("value", (snapshot) => console.log(snapshot.val()));
// // ordatabase.ref("attr").set({ height: 60, weight: 200 });
