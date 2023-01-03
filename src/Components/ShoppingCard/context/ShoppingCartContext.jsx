import React, { createContext, useContext, useState } from 'react';


const ShoppingCartContext = createContext()

export function useShoppingCart(){
    return useContext(ShoppingCartContext)
}

const del = ()=>{

}
export function ShoppingCartProvider({children}){
    const [cartItems, setCartItems] = useState([])
    const cartQuantity = cartItems.reduce((quantity,item)=>
        item.quantity + quantity, 0
    )

    function getItemQuantity(id){

        // const item = cartItems.find(item=>item.id===id)
        // if (item) {
        //     return item.quantity
        // } else {
        //     return 0;
        // }
  
        // if (cartItems.find(item=>item.id===id)) {
        //     return cartItems.find(item=>item.id===id).quantity
        // } else {
        //     return 0;
        // }

        return cartItems.find(item=>item.id===id)?.quantity || 0
    }



    function increaseCardQuantity(id){
        setCartItems(currItems=>{
       
            if (currItems.find(item => item.id === id) == null) {
                return [...currItems, { id, quantity: 1 }]
            } else {
                return currItems.map(item=>{
                    if(item.id === id){
                        return {...item, quantity:item.quantity + 1}
                    }else {
                        return item
                    }
                })
            }
        })
    }
    function decreaseCardQuantity(id){

        setCartItems(currItems=>{
            if(currItems.find(item=>item.id === id)?.quantity === 1){
                return currItems.filter(item=>item.id !== id)
            }else {
                return currItems.map(item=>{
                    if(item.id === id){
                        return {...item, quantity:item.quantity - 1}
                    }else {
                        return item
                    }
                })
            }
        })
    }
    function removeFromCart(id){
        setCartItems(curItems=>{
            return curItems.filter( item => item.id !== id)
        })
    }
    return(
        <ShoppingCartContext.Provider  value={{getItemQuantity,
        increaseCardQuantity,
        decreaseCardQuantity,
        removeFromCart,
        cartItems,
        cartQuantity
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}