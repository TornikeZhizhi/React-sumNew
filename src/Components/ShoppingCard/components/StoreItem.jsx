import React from 'react';
import { useShoppingCart } from '../context/ShoppingCartContext';
import formatCurrency from '../utilities/formatCurrency';


const StoreItem = ({name,imgUrl,price,id}) => {

    

    const {getItemQuantity,
        increaseCardQuantity,
        decreaseCardQuantity,
        removeFromCart} = useShoppingCart()

        const quantity = getItemQuantity(id)
    return (
         <div className='store_box'>
                 <img src={imgUrl} alt="" />
                 <div className='store_info'>
                     <h3>
                         {name}
                     </h3>
                     <span>{formatCurrency(price) }</span>
                 </div>
                 {quantity == 0 ?<div className='add_card' onClick={()=>increaseCardQuantity(id)}>
                    add to card
                 </div>
                 : <div className='add_card_box'>
                        <div className='add_img' onClick={()=>decreaseCardQuantity(id)}>-</div>
                        <div className='add_box_middle'>
                            <span>{quantity} in cart</span>
                            <div className='remove' onClick={()=>removeFromCart(id)}>remove</div>
                        </div>
                        <div className='add_img' onClick={()=>increaseCardQuantity(id)}>+</div>
                    </div>
                    }
             </div>
       
    );
};

export default StoreItem;