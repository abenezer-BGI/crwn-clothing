import React from 'react';
import './header.styles.scss';
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "../../assets/crown.svg";
import {auth} from "../../firebase/firebase.util";
import {connect} from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CardDropdown from "../cart-dropdown/cart-dropdown.component";

const Header = ({currentUser,cartDropdownHidden}) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
                {
                    currentUser
                    ?<Link to='/' className='option' onClick={() => auth.signOut()}>SIGN OUT</Link>
                    :<Link className='option' to='/signin'>SIGN IN/UP</Link>
                }
                <CartIcon/>
        </div>
        {
            cartDropdownHidden? null :<CardDropdown/>
        }
    </div>
)

const mapStateToProps = ({user:{currentUser}, cart: {hidden}}) => ({
    currentUser,
    cartDropdownHidden: hidden,
})

export default connect(mapStateToProps)(Header);