import React from 'react';
import './cart-icon.styles.scss';
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";
import {connect} from "react-redux";
import {toggleCartDropdownHidden} from "../../redux/cart/cart.actions";
import {selectCartItemsCount} from "../../redux/cart/cart.selectors";
import {createStructuredSelector} from "reselect";

const CartIcon = ({toggleCartDropdownHidden, cartItemsCount}) => (
    <div className='cart-icon' onClick={toggleCartDropdownHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{cartItemsCount}</span>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    toggleCartDropdownHidden: () => dispatch(toggleCartDropdownHidden())
})

const mapStateToProps = createStructuredSelector({
    cartItemsCount: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)