import React from 'react';
import StoreItem from '../components/StoreItem';
import storeItems from "../data/items.json"
const Store = () => {
    return (

            <div className='store_container'>
            {storeItems.map(item=>
             
                <StoreItem {...item} />
                )}
            </div>
    );
};

export default Store;