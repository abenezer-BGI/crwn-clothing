import React from "react";
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import {Routes,Route} from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-up-and-sign-in/sign-in-and-sign-up.component";

function App() {
    return (
        <div>
            <Header/>
            <Routes>
                <Route exact path='/' element={<HomePage/>}/>
                <Route exact path='/shop' element={<ShopPage/>}/>
                <Route exact path='/signin' element={<SignInAndSignUpPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
