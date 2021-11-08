import firebase from "firebase/compat";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDfo3jubV8jGEUeqnfOUW95AH-Jtc8N93s",
    authDomain: "crwn-db-3dedc.firebaseapp.com",
    projectId: "crwn-db-3dedc",
    storageBucket: "crwn-db-3dedc.appspot.com",
    messagingSenderId: "616114070940",
    appId: "1:616114070940:web:cb58b464ddc1b664c39459",
    measurementId: "G-82ZPB1VR9K"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
