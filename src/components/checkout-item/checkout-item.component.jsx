import React from "react";
import {connect} from "react-redux";
import {addItem, clearItem, removeItem} from "../../redux/cart/cart.actions";
import {
    CheckoutItemContainer,
    CheckoutItemImageContainer, CheckoutTableQuantityArrow, CheckoutTableQuantityValue, CheckoutTableRemoveButton,
    CheckoutTableTitleName, CheckoutTableTitlePrice,
    CheckoutTableTitleQuantity
} from "./checkout-item.styles";

const CheckoutItem = ({cartItem: {imageUrl, name, price, quantity, id}, cartItem, clearItem, addItem, removeItem}) => (
    <CheckoutItemContainer>
        <CheckoutItemImageContainer>
            <img alt={'item'} src={imageUrl}/>
        </CheckoutItemImageContainer>
        <CheckoutTableTitleName>{name}</CheckoutTableTitleName>
        <CheckoutTableTitleQuantity>
            <CheckoutTableQuantityArrow className={'arrow'} onClick={() => removeItem(cartItem)}>&#10094;</CheckoutTableQuantityArrow>
            <CheckoutTableQuantityValue className={'value'}>{quantity}</CheckoutTableQuantityValue>
            <CheckoutTableQuantityArrow className={'arrow'} onClick={() => addItem(cartItem)}>&#10095;</CheckoutTableQuantityArrow>
        </CheckoutTableTitleQuantity>
        <CheckoutTableTitlePrice >{price}</CheckoutTableTitlePrice>
        <CheckoutTableRemoveButton onClick={() => clearItem(id)}>&#10005;</CheckoutTableRemoveButton>
    </CheckoutItemContainer>
)

const mapDispatchToProps = (dispatch) => ({
    clearItem: (itemId) => dispatch(clearItem(itemId)),
    addItem: (item) => dispatch(addItem(item)),
    removeItem: (item) => dispatch(removeItem(item)),
})

export default connect(null,mapDispatchToProps)(CheckoutItem)