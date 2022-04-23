
import React, {Component, createContext, useState} from "react";

export const SwitcherTheme = createContext();

const HeaderSwitchContext = (props)=> {

 const [isDarkMode, setisDarkMode] = useState(true)


  const toggleTheme = ()=>{
        setisDarkMode(!isDarkMode)
    }

return(
    <SwitcherTheme.Provider value={{isDarkMode:isDarkMode,
        toggleTheme:toggleTheme}}>
        {props.children}
    </SwitcherTheme.Provider>
    )
    
}
export default HeaderSwitchContext;