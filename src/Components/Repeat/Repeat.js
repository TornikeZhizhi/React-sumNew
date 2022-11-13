import React, { useState, useContext } from 'react';
import RepeatAddnew from './RepeatAddnew';
import RepeatList from './RepeatList';
import { RepeatTheme } from './RepeatContext/RepeatContext';
import Drawcarbox from './Drawcarbox';


const Repeat = (props) => {

    //context
    const ctx = useContext(RepeatTheme);

    //context

    const [listData, setListData] = useState([])

    const listHandler =(data)=>{
        setListData([...listData,data])
    }

    const delHandler =(delIndex)=> {
        const deletedData = listData.filter((item,index)=>{
          return  index !== delIndex
        })
        setListData(deletedData)
    }


    return (
        <div>
            <button className={`${ctx.isDarkMode?"dark":"day"}`} onClick={ctx.toggleTheme}>context button</button>
            <RepeatAddnew listHandler={listHandler}></RepeatAddnew>
            <RepeatList  listData={listData} delHandler={delHandler} ></RepeatList>
            <Drawcarbox/>
        </div>
    );
};

export default Repeat;