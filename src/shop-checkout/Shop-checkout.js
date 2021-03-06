import React, { useContext } from 'react';
import { CartContext } from '../ContextApi/ShopContext';
import CheckoutItem from './checkout-item.component';
const ShopCheckout = () => {
    // const { cartItems, cartTotal } = useContext(CartContext);
  
    const {cartData,cartTotal} = useContext(CartContext)
  console.log(cartData)

    return (
      <div className='checkout-container'>
        <div className='checkout-header'>
          <div className='header-block'>
            <span>Product</span>
          </div>
          <div className='header-block'>
            <span>Description</span>
          </div>
          <div className='header-block'>
            <span>Quantity</span>
          </div>
          <div className='header-block'>
            <span>Price</span>
          </div>
          <div className='header-block'>
            <span>Remove</span>
          </div>
        </div>
        {cartData.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <div className='total'>TOTAL: ${cartTotal}</div>
      </div>
    );
  };
  

export default ShopCheckout;






