import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import {connect} from "react-redux";
import {selectCartItems} from "../../redux/cart/cart.selectors";
import {createStructuredSelector} from "reselect";
import {useNavigate} from "react-router-dom";
import {toggleCartDropdownHidden} from "../../redux/cart/cart.actions";
import {CartDropdownContainer, CartItemsContainer, EmptyMessage} from "./cart-dropdown.styles";

const CartDropdown = ({cartItems, dispatch}) => {
    const navigate = useNavigate()
    return (
        <CartDropdownContainer>
            <CartItemsContainer>
                {
                    cartItems.length ? cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem}/>) :
                        <EmptyMessage>Cart is Empty </EmptyMessage>
                }
            </CartItemsContainer>
            <CustomButton onClick={() => {
                navigate('/checkout')
                dispatch(toggleCartDropdownHidden())
            }}>GO TO CHECKOUT</CustomButton>
        </CartDropdownContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default connect(mapStateToProps)(CartDropdown)