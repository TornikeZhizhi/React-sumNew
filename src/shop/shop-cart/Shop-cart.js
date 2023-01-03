import React, {useContext} from 'react';
import CartDropdown from './Shop-cart-dropdown';
import ShopCartItem from './Shop-cart-img';

import { CartContext } from "../../ContextApi/ShopContext";

const ShopCart = () => {

const {isCartOpen} = useContext(CartContext)

    return (
        <div>
                
           <ShopCartItem/> 
        {isCartOpen &&  <CartDropdown /> }  
        
        </div>
    );
};

export default ShopCart;