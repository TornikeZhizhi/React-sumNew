import { useContext } from 'react';

import { CartContext } from '../ContextApi/ShopContext';


const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const {removeItemToCart} = useContext(CartContext)


  // const { clearItemFromCart, addItemToCart, removeItemToCart } =
  //   useContext(CartContext);

  // const clearItemHandler = () => clearItemFromCart(cartItem);
  // const addItemHandler = () => addItemToCart(cartItem); 
  const removeItemHandler = () => removeItemToCart(cartItem);

  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className='name'> {name} </span>
      <span className='quantity'>
        <div className='arrow' >
          &#10094;
        </div>
        <span className='value'>1</span>
        <div className='arrow' >
          &#10095;
        </div>
      </span>
      <span className='price' > {price}</span>
      <div className='remove-button' onClick={removeItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
