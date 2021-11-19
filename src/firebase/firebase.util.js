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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const documentSnapshot = await userRef.get()

    if (!documentSnapshot.exists) {
        const {displayName, email} = userAuth
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('Error awaiting user reference! ', error)
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
