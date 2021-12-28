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

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey)

    const batch = firestore.batch();

    objectsToAdd.forEach((objectToAdd) => {
        const newDocumentRef = collectionRef.doc()
        batch.set(newDocumentRef, objectToAdd)
    })

    return await batch.commit()
}

/**
 * Make a promise based firebase data fetching
 */
export const getCurrentUserPromise = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged((userAuth) => {
            unsubscribe()
            resolve(userAuth)
        },reject)
    })
}

/**
 * Convert the provided array into a normalized JSON
 * @param collections
 * @returns {*}
 */
export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map((doc) => {
        const {title, items} = doc.data()

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items,
        }
    })

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection
        return accumulator
    }, {})

}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
googleAuthProvider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(googleAuthProvider);

export default firebase;
