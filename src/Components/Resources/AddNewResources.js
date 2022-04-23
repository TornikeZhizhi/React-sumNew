import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { v4 as uuidv4 } from 'uuid';
import ResourceInputHook from "./ResourcesHook/ResourcesInputHook";
import AlertMassage from "./Helpers/SnackBar";
const AddNewResources = (props)=>{

    const [name,setName, setNameClear] = ResourceInputHook("");
    const [age, setAge, setAgeClear] = ResourceInputHook("");

    const [status, setStatusBase] = React.useState("");


const submitHandler= (event)=> {
  
    event.preventDefault()
    const resourceData = {
        edit:false,
        name:name,
        age:age,
        id:uuidv4()
    }
    props.resourceAddHandler(resourceData);
    setNameClear()
    setAgeClear()
    setStatusBase({ msg: "Resouce Added... !!!", key: Math.random() });
}


    return (
        <Box onSubmit={submitHandler}
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField onChange={setName} value={name} id="outlined-basic" label="Name" variant="outlined" type="text" />
          <TextField onChange={setAge} value={age} label="Age" variant="filled"  id="outlined-number" type="number"/>
            <Button type="submit" variant="contained">Add Resources</Button>
            {status ? <AlertMassage key={status.key} message={status.msg} /> : null}
        </Box>
      );

}

export default AddNewResources;