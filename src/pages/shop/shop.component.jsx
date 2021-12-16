import React from 'react';
import '../../redux/shop/shop.data';
import {Outlet} from "react-router-dom";

const ShopPage = () => {
    return (
        <div className='shop-page'>
            <Outlet/>
        </div>
    )
}

export default ShopPage;