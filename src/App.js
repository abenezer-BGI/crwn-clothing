import React from "react";
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import {Route, Routes} from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-up-and-sign-in/sign-in-and-sign-up.component";
import {auth, createUserProfileDocument} from "./firebase/firebase.util";
import {connect} from "react-redux";
import {setCurrentUser} from "./redux/user/user.action";
import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "./redux/user/user.selectors";
import CheckoutPage from "./pages/checkout/checkout.component";

class App extends React.Component {

    unsubscribeFromAuth = null

    componentDidMount() {
        const {setCurrentUserToState} = this.props
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);
                setCurrentUserToState(userAuth)
                userRef.onSnapshot((snapshot => {
                    setCurrentUserToState({
                        id: snapshot.id,
                        ...snapshot.data()
                    })
                }))

            } else {
                setCurrentUserToState(userAuth)
            }

        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header/>
                <Routes>
                    <Route exact path='/' element={<HomePage/>}/>
                    <Route exact path='/shop' element={<ShopPage/>}/>
                    <Route exact path='/signin' element={<SignInAndSignUpPage/>}/>
                    <Route exect path={'/checkout'} element={<CheckoutPage/>}/>
                </Routes>
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

const mapDispatchToProps = (dispatch) => ({
    setCurrentUserToState: (user) => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
