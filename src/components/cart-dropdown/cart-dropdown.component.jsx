import React from "react";
import './cart-dropdown.styles.scss';
import CustomButton from "../custom-button/custom-button.component";

const CardDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-item'/>
        <CustomButton>GO TO CHECOUT</CustomButton>
    </div>
)

export default CardDropdown