import React from 'react';
import {ReactComponent as Logo} from "../../assets/crown.svg";
import {connect} from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {selectCurrentUser} from "../../redux/user/user.selectors";
import {selectCartHidden} from "../../redux/cart/cart.selectors";
import {createStructuredSelector} from "reselect";
import {HeaderContainer, LinkOption, LogoContainer, OptionsContainer} from "./header.styles";
import {signOutStart} from "../../redux/user/user.action";

const Header = ({currentUser, cartDropdownHidden, signUserOut}) => (
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
                    ? <LinkOption to='/' onClick={signUserOut}>SIGN OUT</LinkOption>
                    : <LinkOption to='/signin'>SIGN IN/UP</LinkOption>
            }
            <CartIcon/>
        </OptionsContainer>
        {
            cartDropdownHidden ? null : <CartDropdown/>
        }
    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    cartDropdownHidden: selectCartHidden,
})

const mapDispatchToProps = (dispatch) => ({
    signUserOut: () => dispatch(signOutStart()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);