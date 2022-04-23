import React, { useContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import pirosmani from "./imgs/pirosmani.jpg"
import ToastList from "./ToastList";
import ToastsContext from "./ToastContext";
import { ToastTheme } from "./ToastContext";

const ToastsMain = () => {
    
    const ToastData = useContext(ToastTheme);
    const [toast, setToast] = useState(ToastData);
    const [lastToast, setText] = useState("")


    useEffect(()=>{
        setText(toast[0].text)
    },[])

    const randomToast=()=>{

        if(toast.length !==0) {

            let toastLength = toast.length;
            console.log(toast.length,toast)
            let rndm = Math.floor(Math.random() * toastLength)
            
         setText(toast[rndm].text);
         
         const removeToast = toast.filter((item,ind)=>ind !== rndm)
         
         setToast(removeToast)
        }else {

            alert("ბოლო სადღეგრძელო დარჩა")
        }

        
    }


return (
  
    <Container p={10} className="toasts_container">
        <Typography variant="h3" m={3} style={{textAlign:"center"}}>მამაპაპური სადღეგრძელოები</Typography>
            <Box sx={{ flexGrow: 1,borderRadius:"5px" }}>
                <div className="toast_box">
                    <img src={pirosmani} alt="" />
                    <ToastList text={lastToast}></ToastList>
                    <button onClick={randomToast}>იპოვე შენი სადღეგრძელო</button>
                </div>
            </Box>
            <Box mb={20}></Box>
    </Container> 
    
)   
}


export default ToastsMain;