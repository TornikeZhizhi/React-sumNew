import React, { useState } from 'react';
import ResourceInputHook from '../Resources/ResourcesHook/ResourcesInputHook';



const TodoBox = ({cardText,index,editHandler, removeCard}) => {

    const [todoValue, setTodoValue ] = ResourceInputHook(cardText)
    const [editToggler, setEditToggler] = useState(false)

    const onEditHandler = ()=>{
        setEditToggler(false)
        editHandler(todoValue,index)
    }

    const editOpenHandler = ()=>{
        setEditToggler(!editToggler)
    }

    const deletHandler =()=> {
        removeCard(index)
    }

    return (
        <div className='todo_card' key={index}>
            <div className='todo_edit' onClick={()=>editOpenHandler(index)}>
               {editToggler && <ul>
                            <li onClick={deletHandler}>Delete</li>
                        </ul>
                }
            </div>
            <div>
                {cardText} 
            </div>
            {editToggler && 
               <div className='edit_wrapper'>
                <textarea value={todoValue} onChange={setTodoValue}></textarea>
                <button onClick={onEditHandler}>Save</button>
       
              </div>}
    </div>
    );
};

export default TodoBox;