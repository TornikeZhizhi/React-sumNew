import Button from '../../helpers/Button';
import React, { useContext } from 'react';
import { CartContext } from "../../ContextApi/ShopContext";
import { useHistory } from "react-router-dom";
// import { CartContext } from '../../contexts/cart.context';


// import CartItem from '../cart-item/cart-item.component';

const CartDropdown = () => {

//context data
 const {cartData} = useContext(CartContext);
  const history = useHistory()
 //local storage
  // const localStorageData = JSON.parse(localStorage.getItem("localCartData"))
  // console.log(localStorageData)


  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
       
            <>
            {cartData.length > 0 ? 
               cartData.map(item=>

                <div className='cart-item-container' key={item.id}>
                  <img src={item.imageUrl} alt={`${item.name}`} />
                  <div className='item-details'>
                    <span className='name'>{item.name}</span>
                    <span className='price'>
                      {item.quantity} x ${item.price}
                    </span>
                  </div>
                </div>

              ):  <span className='empty-message'>Your cart is empty</span>  
          }
            
            </>
          
      </div>
        <Button buttonType="inverted" onClick={ ()=> history.push("/checkout")}>Checkout</Button>
    </div>
  );
};

export default CartDropdown;
