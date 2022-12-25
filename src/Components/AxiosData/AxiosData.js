import React, { useState } from 'react';
import AxiosFetcher from './AxiosFetcher';





    const AxiosData = ()=>{

        const [query, setQuery] = useState(1)
        const { titleData, loading} = AxiosFetcher(query)
   
 
    return (
        <div>
         
            {!loading &&  titleData?.title}
            <br/>

            <select style={{width:"300px"}} onChange={(e)=>{
                 setQuery(e.target.value)
                 }}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
            </select>
       
         
        </div>
    );
};

export default AxiosData;