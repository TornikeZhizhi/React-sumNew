import React, { useState } from 'react';
import AxiosFetcher from './AxiosFetcher';

import InputHook from './InputHook';



    const AxiosData = ()=>{

        // const [query, setQuery] = useState(1)

        // input hook
        const [inputValue,setInputValue,setInputClear] = InputHook("")
        const [selectValue,setSelectValue] = InputHook(1)

        //axios hook
        const { titleData, loading} = AxiosFetcher(selectValue)
 
    return (
        <div>
            
            <div className='selectHook' style={{padding:"50px 50px 0px"}}>
                <div>
                    {loading ? "loading..." :  titleData?.title}
                </div>
                <select style={{width:"300px"}} onChange={setSelectValue}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                </select>
            </div>

            <br/>
            <div className='inputhook' style={{padding:"10px 50px"}}>
                <input value={inputValue} type="text" onChange={setInputValue} />
                <br/>
                <span onClick={setInputClear}>{inputValue}</span>
            </div>


        
    
        </div>
    );
};

export default AxiosData;