import React, { useContext } from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { useShoppingCart } from '../../Components/ShoppingCard/context/ShoppingCartContext';
import { CartContext } from "../../ContextApi/ShopContext";

const ShopCart = () => {

    const {isCartOpen,setIsCartOpen, cartData} = useContext(CartContext)

    const toggleDropdown = ()=> setIsCartOpen(!isCartOpen)

    // const localStorageData = JSON.parse(localStorage.getItem("localCartData"))
    const {cartQuantity} = useShoppingCart()
    
    return (
        <div className='cart-icon-container' onClick={toggleDropdown}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{cartData.length}</span>
            <span className='item-count' style={{left:"26px"}}>{cartQuantity}</span>
         </div>
    );
};

export default ShopCart;