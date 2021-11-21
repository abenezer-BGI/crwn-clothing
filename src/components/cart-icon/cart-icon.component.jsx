import React from 'react';
import './cart-icon.styles.scss';
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";
import {connect} from "react-redux";
import {toggleCartDropdownHidden} from "../../redux/cart/cart.actions";

const CartIcon = ({toggleCartDropdownHidden, cartItemsCount}) => (
    <div className='cart-icon' onClick={toggleCartDropdownHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{cartItemsCount > 0 ? cartItemsCount : 0}</span>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    toggleCartDropdownHidden: () => dispatch(toggleCartDropdownHidden())
})

const mapStateToProps = ({cart: {cartItems}}) => ({
    cartItemsCount: cartItems.map((cartItems) => cartItems.quantity)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)