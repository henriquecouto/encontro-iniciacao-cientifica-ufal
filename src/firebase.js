import firebase from "firebase/app";
import "firebase/storage";
const config = {
  apiKey: "AIzaSyA7zRLM6tJFILUB0CaiY_0pkaoEWwzZCWg",
  authDomain: "encontro-ic-seminario-pibiti.firebaseapp.com",
  projectId: "encontro-ic-seminario-pibiti",
  storageBucket: "encontro-ic-seminario-pibiti.appspot.com",
  messagingSenderId: "139861275480",
  appId: "1:139861275480:web:f361a31e668b41568fab2d",
  measurementId: "G-QE0X8P89ZB",
};
const app = firebase.initializeApp(config);
firebase.analytics();

export default app;
export const storage = firebase.storage();
