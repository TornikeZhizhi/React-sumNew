import React, { useState } from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import classes from "./Resources.module.css";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';
import ResourceInputHook from "./ResourcesHook/ResourcesInputHook";


const EditInputs = (props)=>{

    const  [name, setName] = ResourceInputHook(props.name);
    const  [age, setAge] = ResourceInputHook(props.age);
    

    const oNconfirmEditHandler = () =>{

        const cData = {
            name:name,
            age:age
        }
        // console.log(props)
        props.confirmedEditHandler(cData,props.id)
    }

    return (
        <>
     
         <TextField  value={name} onChange={setName} style={{marginRight:"10px"}}
          id="outlined-basic" label="Name" 
          variant="outlined" type="text" />
        <TextField
         value={age} onChange={setAge} label="Age"
         variant="filled"  id="outlined-number" type="number"/>
          <Button  onClick={oNconfirmEditHandler} style={{marginTop:"10px"}} startIcon={<EditIcon/>} variant="contained">
                 Confirm  Edit
            </Button> 
        

        </>
    )

}



export default EditInputs;