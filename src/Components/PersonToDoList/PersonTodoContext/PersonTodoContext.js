
import React, {Component, createContext, useState, useEffect} from "react";

export const PersonToDoTheme = createContext();

const PersonTodoContext = (props)=> {

 const [ToDoData, setToDoData] = useState([])
 const [searchWord, setSearchWord] = useState("")
 const [sortWord, setWord] = useState("")


 const [items, setItems] = useState(['apple', 'zanana', 'orange']);


    useEffect(()=>{
        // const sortArray = type => {
            const types = {
              name: 'name',
              income: 'income',
            };
            const sortProperty = types[sortWord];

            let sorted;
            if(sortWord == "income"){
                 sorted = [...ToDoData].sort((a, b) => b[sortProperty] - a[sortProperty]);
            }else {
                 sorted = [...ToDoData].sort((a, b) => a[sortProperty].localeCompare(b[sortProperty]));
            }
            
            setToDoData(sorted);
        //   };
      
        // sortArray(sortWord);


    },[sortWord])

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
        searchWord:searchWord,
        setWord:setWord,
        sortWord:sortWord,
        }}>
        {props.children}
    </PersonToDoTheme.Provider>
    )
    
}
export default PersonTodoContext;