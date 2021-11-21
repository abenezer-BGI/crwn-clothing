import React from 'react';
import './header.styles.scss';
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "../../assets/crown.svg";
import {auth} from "../../firebase/firebase.util";
import {connect} from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CardDropdown from "../cart-dropdown/cart-dropdown.component";
import {selectCurrentUser} from "../../redux/user/user.selectors";
import {selectCartHidden} from "../../redux/cart/cart.selectors";
import {createStructuredSelector} from "reselect";

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

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    cartDropdownHidden: selectCartHidden,
})

export default connect(mapStateToProps)(Header);