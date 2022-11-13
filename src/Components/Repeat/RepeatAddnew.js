import React, { useState } from 'react';




const RepeatAddnew = (props) => {

    const [name,setName] = useState("")
    const [age,setAge] = useState(0)


    const nameHandler =(event)=> {
        setName(event.target.value)
    }
    const ageHandler =(event)=> {
        setAge(event.target.value)
    }

    const addHandler = (event)=>{
        event.preventDefault()
        const data = {
            name:name,
            age:age
        }

        props.listHandler(data)


    }


    return (
        <div>
            <input type="text" onChange={nameHandler} placeholder='add name' value={name}/>
            <input type="number" onChange={ageHandler}  placeholder='add age' value={age}/>
            <button onClick={addHandler}>add todo</button>
        </div>
    );
};

export default RepeatAddnew;