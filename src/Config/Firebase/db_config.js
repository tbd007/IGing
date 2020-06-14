import firebase from 'firebase';



export const DB_CONFIG = {
    apiKey: "AIzaSyB7vHAZtaBbeqos78-mjJZpawRPogo701s",
    authDomain: "flashcards-react-8ff66.firebaseapp.com",
    databaseURL: "https://flashcards-react-8ff66.firebaseio.com",
    projectId: "flashcards-react-8ff66",
    storageBucket: "flashcards-react-8ff66.appspot.com",
    messagingSenderId: "318745993742",
    appId: "1:318745993742:web:52e8742976b99567a9525f"
}

const Firebase = firebase.initializeApp(DB_CONFIG);
export default Firebase
