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
import EditInputs from "./EditInputs";


    const StoredResource = (props)=>{
            console.log(props.filterWord)
        const  [name, setName] = ResourceInputHook(props.name);
        const  [age, setAge] = ResourceInputHook(props.age);
      
        const [isEdit, setIsEdit] = useState(false);

        const deleteId = (id)=>{
            props.resourceDeleteHandler(id)
        }
        const editId = (id)=>{
            props.resourceEditIdeHandler(id)
        }

    if(props.resourceData.length < 1) {

        return <h2 style={{textAlign:"center",marginTop:"20px", color:"red"}}>Resoruces Not Found...</h2>
    }

    
    return (
        <>
        {props.resourceData.map( (data)=>(

            <Card sx={{ minWidth: 275 }} m={2} className={classes.relative} key={data.id}>

               {data.edit ? <div style={{padding:"10px"}}>

                <EditInputs 
                 confirmedEditHandler={props.confirmedEditHandler}
                 name={data.name}
                  age={data.age} id={data.id}></EditInputs>
               </div> :
            
            <>  
                 {data.name.includes(props.filterWord) ? <> <CardContent>
                <Typography variant="h5" component="div">
                     სახელი - {data.name}
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    ასაკი - {data.age}
                    </Typography>
                  
                </CardContent>
                    <Button onClick={deleteId.bind(this,data.id)} startIcon={<DeleteIcon />}  className={classes.delete} variant="contained" color="error">
                        Delete
                    </Button>
                    <Button  onClick={editId.bind(this,data.id)}  className={classes.edit} startIcon={<EditIcon/>} variant="contained">
                        Edit
                    </Button> 
                <Box mb={2}></Box> </> :null}
               
                </>
                     }
                </Card>
    
    
        ))}
        </>
    )

}

export default StoredResource;