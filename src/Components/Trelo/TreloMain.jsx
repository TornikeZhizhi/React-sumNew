import React, { useRef, useState } from 'react';

import {useDroppable} from '@dnd-kit/core';
import TodoBox from './TodoBox';




const TreloMain = (props) => {

    const textRef = useRef()
    const [listData, setListData] = useState([])
    const [dummyButtonToggler, setdummyButtonToggler] = useState(false)

    const [error, setError] = useState(false)

    const addDummyCard = ()=>{
        setdummyButtonToggler(true)
    }

    const addCard = ()=>{
        if(textRef.current.value.length > 0){
            setdummyButtonToggler(false);
            setListData([...listData,{cardText:textRef.current.value}])
            setError(false)
        }else {
            setError(true)
        }
    }

    const removeCard = (delIndex)=>{
       const removedItem =  listData.filter((item,id)=>{
            return id !== delIndex
        })
        setListData(removedItem)
    }

    const editHandler = (val,ind)=>{
        const editData = listData.map((data,index)=>{
            return  ind == index ? {...data,cardText:val} : data
        })
        setListData(editData)

       
    }

    return (

        <>
            <div className="task_container">

                <div className='task_list_continer to_do'>
                    <div className='todo_list_header'>
                        <div className='todo_title'>To Do</div>
                        <div className='todo_property'>...</div>
                    </div>


                    {listData.map((item,ind)=>{
                        if(item.cardText.length > 0){
                            return (
                                <TodoBox removeCard={removeCard} cardText={item.cardText} index={ind} editHandler={editHandler}/>
                        )
                    }
                    })}
                    {dummyButtonToggler && <>
                    <textarea ref={textRef} className='todo_textarea' placeholder='Enter a title for this card...'>
                    </textarea> 
                        {error && <span className='error'>Please Write Text</span>}
                      </>}



                    <div className="task_list_footer">
                        {!dummyButtonToggler && <div className='list_add_card' onClick={addDummyCard}>+ Add Card</div>}
                        {dummyButtonToggler && <> <div className='list_add_card blue' onClick={addCard}>Add Card</div>
                        <div className='list_removeCard' onClick={removeCard}>X</div> </>}
                    </div>
                </div>


                {/* <div className='task_list_continer in_progress'>
                    <div className='todo_list_header'>
                        <div className='todo_title'>In Progress</div>
                        <div className='todo_property'>...</div>
                    </div>

                    <div class="task_list_footer">
                        <div className='list_add_card'>+ Add Card</div>
                    </div>
                </div>
                <div className='task_list_continer done'>
                     <div className='todo_list_header'>
                        <div className='todo_title'>Done</div>
                        <div className='todo_property'>...</div>
                    </div>

                    <div class="task_list_footer">
                        <div className='list_add_card'>+ Add Card</div>
                    </div>
                </div> */}
        
            </div>
        </>
    )
};
 
export default TreloMain;
