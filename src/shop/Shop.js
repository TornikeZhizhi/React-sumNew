import React, { useContext } from "react";
import {useParams}  from "react-router-dom";

import ShopCard from "./Shop-card";
import {CartContext} from "../ContextApi/ShopContext";



const Shop = () => {
    const {shopData} = useContext(CartContext)
    return (
        <div className="products-container">
             
          { shopData.map(product=>(

            <ShopCard product={product} key={product.id} />     

            ))}
        </div>

    )
}


export default Shop;