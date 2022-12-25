import React, { useState } from 'react';

const InputHook = (nameValue) => {

    const [value,setInput] = useState(nameValue)
    
    const setInputHandler = (event) => {
        setInput(event.target.value)
    }
    
    const setInputClear = ()=>{
        setInput("")
    }
      
    return [value,setInputHandler,setInputClear]
};

export default InputHook;