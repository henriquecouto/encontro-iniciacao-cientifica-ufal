import firebase from 'firebase/app'
import 'firebase/storage'
const config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: "AIzaSyCQhP2kkU00rcMidV-ZpivdSzymV4Q3i_0",
    authDomain: "encontro-iniciacao-cientifica.firebaseapp.com",
    databaseURL: "https://encontro-iniciacao-cientifica.firebaseio.com",
    projectId: "encontro-iniciacao-cientifica",
    storageBucket: "encontro-iniciacao-cientifica.appspot.com",
    messagingSenderId: "176889798248",
    appId: "1:176889798248:web:6dfbce4066892f541865dd"
};
const app = firebase.initializeApp(config);

export default app;
export const storage = firebase.storage();