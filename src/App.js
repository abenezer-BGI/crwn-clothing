import React from "react";
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import {Route, Routes} from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-up-and-sign-in/sign-in-and-sign-up.component";
import {auth} from "./firebase/firebase.util";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: null,
        }
    }

    unsubscribeFromAuth = null
    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged( (user) => {
            this.setState({currentUser: user})
            console.log(user)
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
            ;
    }
}

export default App;
