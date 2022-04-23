import React, { useContext } from 'react';
import "./shop.css";
import Button from '../helpers/Button';
import {CartContext} from "../ContextApi/ShopContext";


const ShopCard = ({product}) => {

    const {setOnCartData} = useContext(CartContext)

    const {name,price ,imageUrl,id} = product;
    

    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType="inverted" onClick={()=>setOnCartData(product)}>
                Add to card
            </Button>
         </div>
    );
};

export default ShopCard;