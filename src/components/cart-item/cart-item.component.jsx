import React from "react";
import {CartItemContainer, ItemDetailsContainer, CartItemName, CartItemImage} from "./cart-item.styles";

const CartItem = ({item:{imageUrl, name, price, quantity}}) => (
    <CartItemContainer>
        <CartItemImage src={imageUrl} alt='item'/>
        <ItemDetailsContainer className='item-details'>
            <CartItemName className='name'>{name}</CartItemName>
            <span>{quantity} x ${price}</span>
        </ItemDetailsContainer>
    </CartItemContainer>
)

export default CartItem