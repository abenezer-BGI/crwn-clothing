import React from 'react';
import {connect} from "react-redux";
import {toggleCartDropdownHidden} from "../../redux/cart/cart.actions";
import {selectCartItemsCount} from "../../redux/cart/cart.selectors";
import {createStructuredSelector} from "reselect";
import {CartIconContainer, ItemCount, ShoppingIconContainer} from "./cart-icon.styles";

const CartIcon = ({toggleCartDropdownHidden, cartItemsCount}) => (
    <CartIconContainer onClick={toggleCartDropdownHidden}>
        <ShoppingIconContainer/>
        <ItemCount>{cartItemsCount}</ItemCount>
    </CartIconContainer>
)

const mapDispatchToProps = (dispatch) => ({
    toggleCartDropdownHidden: () => dispatch(toggleCartDropdownHidden())
})

const mapStateToProps = createStructuredSelector({
    cartItemsCount: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)