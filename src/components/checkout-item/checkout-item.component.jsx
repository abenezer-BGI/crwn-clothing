import React from "react";
import './checkout-item.styles.scss';
import {connect} from "react-redux";
import {addItem, clearItem, removeItem} from "../../redux/cart/cart.actions";

const CheckoutItem = ({cartItem: {imageUrl, name, price, quantity, id}, cartItem, clearItem, addItem, removeItem}) => (
    <div className={'checkout-item'}>
        <div className={'image-container'}>
            <img alt={'item'} src={imageUrl}/>
        </div>
        <span className={'name'}>{name}</span>
        <span className={'quantity'}>
            <div className={'arrow'} onClick={() => removeItem(cartItem)}>&#10094;</div>
            <span className={'value'}>{quantity}</span>
            <div className={'arrow'} onClick={() => addItem(cartItem)}>&#10095;</div>
        </span>
        <span className={'price'}>{price}</span>
        <div className={'remove-button'} onClick={() => clearItem(id)}>&#10005;</div>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    clearItem: (itemId) => dispatch(clearItem(itemId)),
    addItem: (item) => dispatch(addItem(item)),
    removeItem: (item) => dispatch(removeItem(item)),
})

export default connect(null,mapDispatchToProps)(CheckoutItem)