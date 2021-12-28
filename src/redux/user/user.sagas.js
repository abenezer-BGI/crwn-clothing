import {all, call, put, takeLatest} from 'redux-saga/effects'
import {auth, createUserProfileDocument, getCurrentUserPromise, googleAuthProvider} from "../../firebase/firebase.util";
import UserActionTypes from "./user.action-types";
import {
    signInFailure,
    signInSuccess,
    signOutFailure,
    signOutSuccess,
    userSignUpFailure,
    userSignUpSuccess
} from "./user.action";

//Signs a user in
function* authUserSignIn(authUser) {
    try {
        const userRef = yield call(createUserProfileDocument, authUser)
        const userSnapshot = yield userRef.get()
        yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data()}))
    } catch (error) {
        yield put(signInFailure(error))
    }
}

//Google sign in
export function* signInWithGoogle() {
    try {
        const {user} = yield auth.signInWithPopup(googleAuthProvider);
        yield authUserSignIn(user)
    } catch (error) {
        yield put(signInFailure(error))
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

//Email and Password sign in
export function* signInWithEmailAndPassword({payload: {email, password}}) {
    try {
        const {user} = yield auth.signInWithEmailAndPassword(email, password)
        yield authUserSignIn(user)
    } catch (error) {
        yield put(signInFailure(error))
    }
}

export function* onEmailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmailAndPassword)
}

export function* signOut() {
    try {
        yield auth.signOut()
        yield put(signOutSuccess())
    } catch (error) {
        yield put(signOutFailure(error))
    }
}

export function* onSignOutStart() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUserPromise()
        if (!userAuth) return
        yield authUserSignIn(userAuth)
    } catch (error) {
        yield put(signInFailure(error))
    }
}

export function* onCheckUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* userSignUp({payload: {email, password, displayName}}) {
    try {
        const {user} = yield auth.createUserWithEmailAndPassword(email, password)
        yield put(userSignUpSuccess({user, additionalData: {displayName}}))
    } catch (error) {
        yield put(userSignUpFailure(error))
    }
}

export function* signInAfterSignUp({payload:{user, additionalData}}) {

}

export function* onSignUpStart() {
    yield takeLatest(UserActionTypes.SIGN_UP_START, userSignUp)
}

export function* onSignUpSuccess(){
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onSignOutStart),
        call(onCheckUserSession),
        call(onSignUpStart),
        call(onSignUpSuccess),
    ])
}
