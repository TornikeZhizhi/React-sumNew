import React, { useEffect, useState } from 'react';
import axios from 'axios';


const AxiosFetcher = (query)=>{

    const [titleData, setAxiosData] = useState([])
    const [loading, setIsLoading] = useState(true)


    useEffect(()=>{

        if(query){
           axios.get('https://jsonplaceholder.typicode.com/posts/'+query)
            .then(response=>{
                // console.log(titleData)
                setAxiosData(response.data)
                setIsLoading(false);
            })
        }

    },[query])

    return {titleData, loading}
};

export default AxiosFetcher;