import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAIgBodPbzdoY3WgXb_gMhOnx--nDaqwHY",
  authDomain: "catch-of-the-day-2f9e3.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-2f9e3.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());
//named export
export { firebaseApp };
//default export
export default base;
