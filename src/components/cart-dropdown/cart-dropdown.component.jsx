import React from "react";
import './cart-dropdown.styles.scss';
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import {connect} from "react-redux";

const CardDropdown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {/*{!cartItems.empty > 0 ? cartItems.map((cartItem)=> <CartItem key={cartItem.id} item={cartItem}/>):<div className='empty-list'><label className='label'>Cart is Empty</label> </div>}*/}
            {cartItems.map((cartItem)=> <CartItem key={cartItem.id} item={cartItem}/>)}
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = ({cart: {cartItems}}) => ({
    cartItems
})

export default connect(mapStateToProps)(CardDropdown)