import React from 'react';
import formatCurrency from '../utilities/formatCurrency';

let quantity = 1;
const StoreItem = ({name,imgUrl,price}) => {
    return (
         <div className='store_box'>
                 <img src={imgUrl} alt="" />
                 <div className='store_info'>
                     <h3>
                         {name}
                     </h3>
                     <span>{formatCurrency(price) }</span>
                 </div>
                 {quantity == 0 ?<div className='add_card'>
                    add to card
                 </div>
                 : <div className='add_card_box'>
                        <div className='add_img'>-</div>
                        <div className='add_box_middle'>
                            <span>1 in cart</span>
                            <div className='remove'>remove</div>
                        </div>
                        <div className='add_img'>+</div>
                    </div>
                    }
             </div>
       
    );
};

export default StoreItem;