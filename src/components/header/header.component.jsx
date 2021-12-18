import React from 'react';
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "../../assets/crown.svg";
import {auth} from "../../firebase/firebase.util";
import {connect} from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CardDropdown from "../cart-dropdown/cart-dropdown.component";
import {selectCurrentUser} from "../../redux/user/user.selectors";
import {selectCartHidden} from "../../redux/cart/cart.selectors";
import {createStructuredSelector} from "reselect";
import {HeaderContainer, LinkOption, LogoContainer, OptionsContainer} from "./header.styles";

const Header = ({currentUser, cartDropdownHidden}) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo'/>
        </LogoContainer>
        <OptionsContainer>
            <LinkOption to='/shop'>
                SHOP
            </LinkOption>
            <LinkOption to='/shop'>
                CONTACT
            </LinkOption>
            {
                currentUser
                    ? <LinkOption to='/' onClick={() => auth.signOut()}>SIGN OUT</LinkOption>
                    : <LinkOption to='/signin'>SIGN IN/UP</LinkOption>
            }
            <CartIcon/>
        </OptionsContainer>
        {
            cartDropdownHidden ? null : <CardDropdown/>
        }
    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    cartDropdownHidden: selectCartHidden,
})

export default connect(mapStateToProps)(Header);