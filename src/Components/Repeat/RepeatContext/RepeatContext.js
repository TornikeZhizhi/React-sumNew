import React, {Component, createContext, useState} from "react";

export const RepeatTheme = createContext();

const RepeatContext = (props)=> {

 const [isDarkMode, setisDarkMode] = useState(true)


  const toggleTheme = ()=>{
    console.log("ait")
        setisDarkMode(!isDarkMode)
    }

return(
    <RepeatTheme.Provider value={{isDarkMode:isDarkMode,
        toggleTheme:toggleTheme}}>
        {props.children}
    </RepeatTheme.Provider>
    )
    
}
export default RepeatContext;