
import React, {Component, createContext, useEffect, useState} from "react";
import axios from "axios";

export const ProductsTheme = createContext();

const ProductsContext = (props)=> {

    const [posts, setPosts] = useState([]);
    const [isLoading,setIsLoading] = useState(true);

    useEffect(()=>{

        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            setPosts(response.data.slice(0,15))
            setIsLoading(false)
        })

    },[])

return(
    <ProductsTheme.Provider value={{posts:posts,isLoading:isLoading}}>
        {props.children}
    </ProductsTheme.Provider>
    )
    
}
export default ProductsContext;



