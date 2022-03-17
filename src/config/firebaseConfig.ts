import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/auth";

firebase.initializeApp({
  apiKey: "AIzaSyClWMtDQSGyU2q_tzh_UfyiR3vBdYaB9W8",
  authDomain: "sale-ticket-fff82.firebaseapp.com",
  projectId: "sale-ticket-fff82",
  storageBucket: "sale-ticket-fff82.appspot.com",
  messagingSenderId: "963470371115",
  appId: "1:963470371115:web:db02cf0da8afde274bbd6e",
})
const storeTicket = firebase.firestore().collection("tickets");

export { storeTicket}
export default firebase;
