import React, { useEffect, useState } from 'react';

const RepeatList = (props) => {

    const [filterword, setfilterword]= useState("")

    const deleteHandler= (delIndex)=>{
        props.delHandler(delIndex)
    }

    const filterHandler=(e)=>{
      setfilterword(e.target.value)
    }

     useEffect(() => {
    // Update the document title using the browser API
      console.log("update")
    },[filterword]);

    return (
        <div>
            <input type="text" onChange={filterHandler} />
            {props.listData.map((data,index)=>{

              if(data.name.includes(filterword)){

                return  (
                  <li>name is {data.name} and age is {data.age} 
                  <span onClick={()=>deleteHandler(index)}>XX</span></li>
                )
              }
             

            })}
        </div>
    );
};

export default RepeatList;