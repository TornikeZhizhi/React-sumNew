import React from 'react';
import {useParams,Link}  from "react-router-dom";
const Shirt = () => {

    const params = useParams()

    return (
        <div>
            {params.id}
        </div>
    );
};

export default Shirt;