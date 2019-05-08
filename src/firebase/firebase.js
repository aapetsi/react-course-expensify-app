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
database.ref().set({
  name: "Apetsi Ampiah",
  age: 28,
  isSingle: false,
  location: {
    city: "Accra",
    country: "Ghana"
  }
});

// database.ref().set("This is my data.");

database.ref("age").set(27);
database.ref("location/city").set("Kumasi");

database.ref("attributes").set({
  height: 189,
  weight: 84
});
