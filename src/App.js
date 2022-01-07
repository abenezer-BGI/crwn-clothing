import React, {useEffect} from "react";
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import {Route, Routes} from "react-router-dom";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-up-and-sign-in/sign-in-and-sign-up.component";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "./redux/user/user.selectors";
import CheckoutPage from "./pages/checkout/checkout.component";
import CollectionPage from "./pages/collection/collection.component";
import ShopPage from "./pages/shop/shop.component";
import CollectionOverviewContainer from "./components/collection-overview/collection-overview.container";
import {checkUserSession} from "./redux/user/user.action";

const App = ({checkUserSession}) => {

    useEffect(() => {
        checkUserSession()
    }, [checkUserSession])

    return (
        <div>
            <Header/>
            <Routes>
                <Route exact path='/' element={<HomePage/>}/>
                <Route path='shop' element={<ShopPage/>}>
                    <Route path='' element={<CollectionOverviewContainer/>}/>
                    <Route path=':collectionId' element={<CollectionPage/>}/>
                </Route>
                <Route exact path='signin' element={<SignInAndSignUpPage/>}/>
                <Route exect path='checkout' element={<CheckoutPage/>}/>
            </Routes>
        </div>
    )

}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

const mapDispatchToProps = (dispatch) => ({
    checkUserSession: () => dispatch(checkUserSession())
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
