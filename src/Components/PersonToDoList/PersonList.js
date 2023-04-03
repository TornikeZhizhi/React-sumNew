import React, { useContext } from 'react';
import { PersonToDoTheme } from './PersonTodoContext/PersonTodoContext';
import "./Prs.css";

const PersonList = () => {


    let ctx = useContext(PersonToDoTheme)




    return (
        <div className='td_wrapper'>
            {ctx.ToDoData.map( (item)=>{
  
              if(item.name.includes(ctx.searchWord)) {
                return (
         
                  <div className='td_list' key={item.uuid}>
                      <span className='close' onClick={()=>{
                        ctx.deleteHandler(item.uuid)
                      }}> X </span>
                    {item.img == "" ? <img src='https://www.hallmarktour.com/img/profile-img.jpg' alt=''/> :
                    <>
                      <img src={item.img} alt=''/>
                      <span>{item.img}</span>
                    </>
                    }

                    <div className='name'>
                        <span>{item.name}  {item.lastName}</span>
                    </div>
                    <h4>Income: {item.income}</h4>
                  
                </div>
                
                )
              }
                
                
                })}
        </div>
    );
};

export default PersonList;