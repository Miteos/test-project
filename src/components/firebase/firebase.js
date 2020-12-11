import firebase from 'firebase/app';
import 'firebase/firestore';


const config = {
    apiKey: "AIzaSyDYBn0OV0tmOWR_JECS9gwF5C_IKtbNUxo",
    authDomain: "test-project-ea9e5.firebaseapp.com",
    projectId: "test-project-ea9e5",
    storageBucket: "test-project-ea9e5.appspot.com",
    messagingSenderId: "927967199938",
    appId: "1:927967199938:web:1123400b7494544399715b"
};

firebase.initializeApp(config);

const projectFirestore = firebase.firestore();

export { projectFirestore };
