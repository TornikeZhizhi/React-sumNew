import { createContext ,useEffect,useState} from "react";

import SHOP_DATA  from "../shop-data.json";

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    shopData:SHOP_DATA,
    setShopData:()=>{},
    cartData:[],
    setCartData:()=>{},
    cartTotal:[],
    setCartTotal:()=>{},

  });




 const ShopProvider = ({children}) => {

    const [isCartOpen, setIsCartOpen] = useState(false);
    const [shopData , setShopData] = useState(SHOP_DATA);
    const [cartData , setCartData] = useState([]);
    const [cartTotal, setCartTotal] = useState(0)

    // console.log(cartData)
    let total = 0;
    useEffect(()=>{
        if(cartData.length > 0){
            cartData.map((item)=>{
                total = total + item.price
                setCartTotal(total)
            }) 
        }else {
            setCartTotal(0)
        }
    },[cartData])




    let existingCartItem ;
    const setOnCartData = (product) => {
        
        if(cartData.length > 0){
            existingCartItem = cartData.find(
                (cartItem) => cartItem.id === product.id
             );
        }
        if(existingCartItem == undefined){
            setCartData([...cartData,product]);

            // setCartTotal(prev=>prev + product.price);
            // let test = JSON.parse(localStorage.getItem("localCartData"))
            // localStorage.setItem("localCartData",JSON.stringify([...test,product]))
        }
    }

    const removeItemToCart = (product)=> {
       const removedData = cartData.filter(item=>{
            return item.id !== product.id
       }) 
       setCartData(removedData)
    }


    const value = {isCartOpen, setIsCartOpen, shopData, setShopData,
        cartData, setOnCartData ,cartTotal, removeItemToCart} 

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );

}

export default  ShopProvider;
