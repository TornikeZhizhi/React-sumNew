import React, { useState } from "react";

const ResourceInputHook = (initvalue)=>{

    const [input, setInput] = useState(initvalue);
    const setInputHandler = (event) => {
        
      setInput(event.target.value)
    }
    const setInputClear = ()=>{
        setInput("")
    }

    return [input, setInputHandler,setInputClear]


}


export default ResourceInputHook;