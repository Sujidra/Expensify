import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyATcSGcMBW-0zRujPberPd4KYoQiXu-v_g",
    authDomain: "expensify-ee802.firebaseapp.com",
    databaseURL: "https://expensify-ee802.firebaseio.com",
    projectId: "expensify-ee802",
    storageBucket: "expensify-ee802.appspot.com",
    messagingSenderId: "110413853743",
    appId: "1:110413853743:web:120aeb34f3fd7678e402da",
    measurementId: "G-WR5WGNKQH4"
  };

firebase.initializeApp(firebaseConfig)
/*firebase.database().ref().set({
    name:"suji",
    age:10,
    studies:{
        collage:"psg",
        marks:81
    }
})*/
export {firebase as default};