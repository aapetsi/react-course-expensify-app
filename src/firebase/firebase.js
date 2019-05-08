import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBwpex41Y29qtpS9uKoyNQ78ItERunj6iU",
  authDomain: "expensify-5ea39.firebaseapp.com",
  databaseURL: "https://expensify-5ea39.firebaseio.com",
  projectId: "expensify-5ea39",
  storageBucket: "expensify-5ea39.appspot.com",
  messagingSenderId: "524930469884",
  appId: "1:524930469884:web:82731d9c1312fba1"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };

// // child_removed
// database.ref("expenses").on("child_removed", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref("expenses").on("child_changed", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// child_added
// database.ref("expenses").on("child_added", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref("expenses").on("value", snapshot => {
//   const expenses = [];
//   snapshot.forEach(childSnapshot => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// });

// database
//   .ref("expenses")
//   .once("value")
//   .then(snapshot => {
//     const expenses = [];
//     snapshot.forEach(childSnapshot => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });

// database.ref("expenses").push({
//   description: "rent",
//   note: "",
//   amount: 109500,
//   createdAt: 6546897987846564
// });

// database.ref("expenses").push({
//   description: "phone bill",
//   note: "",
//   amount: 5900,
//   createdAt: 65468979846564
// });

// database.ref("expenses").push({
//   description: "food",
//   note: "",
//   amount: 1200,
//   createdAt: 66897987846564
// });

// const firebaseNote = {
//   notes: {
//     apoisdfk: {
//       title: "first note",
//       body: "this is my note"
//     },
//     asdkfjiof: {
//       title: "another note",
//       body: "another note body"
//     }
//   }
// };

// database.ref("notes").push({
//   title: "course topics",
//   body: "python, react native"
// });

// const notes = [
//   {
//     id: 12,
//     body: "this is my note",
//     title: "first note"
//   },
//   {
//     id: 7,
//     body: "this is my note",
//     title: "second note"
//   }
// ];

// database.ref("notes").set(notes);

// database.ref().on("value", snapshot => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// const onValueChange = database
//   .ref()
//   .on("value", snapshot => console.log(snapshot.val()));

// setTimeout(() => {
//   database.ref("age").set(29);
// }, 3000);

// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 6000);

// setTimeout(() => {
//   database.ref("age").set(30);
// }, 9000);

// database
//   .ref()
//   .once("value")
//   .then(snapshot => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch(e => console.log("Error fetching data", e));

// database
//   .ref()
//   .set({
//     name: "Apetsi Ampiah",
//     age: 28,
//     job: { title: "Software Developer", company: "Google" },
//     stressLevel: 6,
//     location: {
//       city: "Accra",
//       country: "Ghana"
//     }
//   })
//   .then(() => {
//     console.log("Data is saved");
//   })
//   .catch(error => {
//     console.log("This failed.", error);
//   });

// database.ref().update({
//   stressLevel: 9,
//   "job/company": "Amazon",
//   "location/city": "Tamale"
// });

// database.ref("age").set(27);
// database.ref("location/city").set("Kumasi");

// database.ref("attributes").set({
//   height: 189,
//   weight: 84
// });
