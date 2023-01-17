import React, { useRef, useState } from 'react';

import {useDroppable} from '@dnd-kit/core';
import TodoBox from './TodoBox';




const TreloMain = (props) => {

    const textRef = useRef()
    const [listData, setListData] = useState([])
    const [listProgressData, setListProgressData] = useState([])
    const [dummyButtonToggler, setdummyButtonToggler] = useState(false)

    const [error, setError] = useState(false)

    const addDummyCard = ()=>{
        setdummyButtonToggler(true)
    }

    const removetextarea = ()=>{
        setdummyButtonToggler(false)

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


    const onEnterHandler = (e)=>{

        if (e.key === "Enter") {
            addCard()
        }
    }



    const removeCard = (delIndex,dataType)=>{
        if(dataType == "todo"){
            const removedItem =  listData.filter((item,id)=>{
                return id !== delIndex
            })
            setListData(removedItem)
        }else if (dataType == "progress"){
            const removedItem =  listProgressData.filter((item,id)=>{
                return id !== delIndex
            })
            setListProgressData(removedItem)

        }
       
    }

    const editHandler = (val,ind, dataType)=>{

        if (dataType == "todo"){
            const editData = listData.map((data,index)=>{
                return  ind == index ? {...data,cardText:val} : data
            })
            setListData(editData)
        }else if (dataType == "progress"){
            const editData = listProgressData.map((data,index)=>{
                return  ind == index ? {...data,cardText:val} : data
            })
            setListProgressData(editData)
        }
  

    }

    
    const moveProgress = (ind,dataType)=>{
        if (dataType == "todo"){
         listData.map((item,index)=>{
            if(ind === index){
                return  setListProgressData([...listProgressData,{cardText:item.cardText}])
            }
        })
        removeCard(ind,"todo")
        }else if(dataType == "progress"){
            listProgressData.map((item,index)=>{
                if(ind === index){
                    return  setListData([...listData,{cardText:item.cardText}])
                }
            })
            removeCard(ind,"progress")

        }
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
                                <TodoBox key={ind} removeCard={removeCard} cardText={item.cardText} index={ind} editHandler={editHandler} moveProgress={moveProgress} dataType="todo"/>
                        )
                    }
                    })}
                    {dummyButtonToggler && <>
                    <textarea ref={textRef} onKeyPress={onEnterHandler} className='todo_textarea' placeholder='Enter a title for this card...'>
                    </textarea> 
                        {error && <span className='error'>Please Write Text</span>}
                      </>}



                    <div className="task_list_footer">
                        {!dummyButtonToggler && <div className='list_add_card' onClick={addDummyCard}>+ Add Card</div>}
                        {dummyButtonToggler && <> <div className='list_add_card blue' onClick={addCard}>Add Card</div>
                        <div className='list_removeCard' onClick={removetextarea}>X</div> </>}
                    </div>
                </div>


                <div className='task_list_continer in_progress'>
                    <div className='todo_list_header'>
                        <div className='todo_title'>In Progress</div>
                        <div className='todo_property'>...</div>
                    </div>
                    {listProgressData.map((item,ind)=>{
                        if(item.cardText.length > 0){
                            return (
                        <TodoBox key={ind} removeCard={removeCard} cardText={item.cardText} index={ind} editHandler={editHandler} moveProgress={moveProgress} dataType="progress"/>
              
                        )
                    }
                    })}
                        
                    {/* <div className="task_list_footer">
                        <div className='list_add_card'>+ Add Card</div>
                    </div> */}
                </div>
                {/* <div className='task_list_continer done'>
                     <div className='todo_list_header'>
                        <div className='todo_title'>Done</div>
                        <div className='todo_property'>...</div>
                    </div>

                    <div className="task_list_footer">
                        <div className='list_add_card'>+ Add Card</div>
                    </div>
                </div> */}
        
            </div>
        </>
    )
};
 
export default TreloMain;
