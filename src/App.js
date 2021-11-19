import React from "react";
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import {Route, Routes} from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-up-and-sign-in/sign-in-and-sign-up.component";
import {auth, createUserProfileDocument} from "./firebase/firebase.util";

class App extends React.Component {
    unsubscribeFromAuth = null

    constructor(props) {
        super(props);

        this.state = {
            currentUser: null,
        }
    }

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);
                this.setState({currentUser: userAuth})
                userRef.onSnapshot((snapshot => {
                    this.setState({
                        id: snapshot.id,
                        ...snapshot.data()
                    })
                }))

            } else {
                this.setState({currentUser: userAuth})
            }

        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser}/>
                <Routes>
                    <Route exact path='/' element={<HomePage/>}/>
                    <Route exact path='/shop' element={<ShopPage/>}/>
                    <Route exact path='/signin' element={<SignInAndSignUpPage/>}/>
                </Routes>
            </div>
        )
    }
}

export default App;
