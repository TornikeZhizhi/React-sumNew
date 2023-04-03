import React, { useContext, useRef, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import "./Prs.css"
import { PersonToDoTheme } from './PersonTodoContext/PersonTodoContext';
import { v4 as uuidv4 } from 'uuid';
const PrsHeader = () => {



let ctx = useContext(PersonToDoTheme)

let nameRef = useRef("");
let lastNameRef = useRef("");
let IncomeRef = useRef("");


const [imageUrl, setImageUrl] = useState("");

const fileBrowseHandler = (event) => {
        let value = URL.createObjectURL(event.target.files[0]);
        setImageUrl(value);
};


const refreshInput = ()=>{
    nameRef.current.value = "";
    lastNameRef.current.value = "";
    IncomeRef.current.value = "";
    setImageUrl("");

}


function hasNumber(myString) {
    return /\d/.test(myString);
  }
const saveHandler = ()=>{

    const data = {
        name:nameRef.current.value,
        lastName:lastNameRef.current.value,
        income:IncomeRef.current.value,
        img:imageUrl,
        uuid:uuidv4()
    }  
   

   if(hasNumber(nameRef.current.value) 
    || hasNumber(lastNameRef.current.value) ){
        alert("put only string in name and lastname")
   }else if (nameRef.current.value.length < 1 || 
            lastNameRef.current.value < 1 || IncomeRef.current.value.length < 1){
        alert("please fill fields")
   }else if(imageUrl == ""){
     alert("please upload image")
   }
   else {
    ctx.addDataHandler(data)
    refreshInput()
   }

  
 

}


    return (
        <>
        <div className='header_inputs header_top'>
            <TextField inputRef={nameRef} className="header_input_list" label="First Name" variant="outlined" />
            <TextField inputRef={lastNameRef}  className="header_input_list" label="Last Name" variant="outlined" />
            <TextField inputRef={IncomeRef}  className="header_input_list" label="Income" variant="outlined" />
            <Button  className="header_input_list header_upload" variant="contained" component="label">
                Upload Image
                <input onChange={fileBrowseHandler} hidden type="file" />
            </Button>
            <Button  className="header_input_list button_save" onClick={saveHandler} variant="outlined" size='large'>
                     Save 
                </Button>
        </div>
        </>
    );
};

export default PrsHeader;