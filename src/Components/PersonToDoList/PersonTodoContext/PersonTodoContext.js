
import React, {Component, createContext, useState} from "react";

export const PersonToDoTheme = createContext();

const PersonTodoContext = (props)=> {

 const [ToDoData, setToDoData] = useState([])
 const [searchWord, setSearchWord] = useState("")


    const addDataHandler = (data)=>{
        setToDoData([...ToDoData,data])
    }

    const deleteHandler= (id)=>{
     const delData = ToDoData.filter(item=>{
         return item.uuid !== id
    })
 
     setToDoData(delData)
    }

return(
    <PersonToDoTheme.Provider value={{
        ToDoData:ToDoData,
        addDataHandler:addDataHandler,
        deleteHandler:deleteHandler,
        setSearchWord:setSearchWord,
        searchWord:searchWord
        }}>
        {props.children}
    </PersonToDoTheme.Provider>
    )
    
}
export default PersonTodoContext;