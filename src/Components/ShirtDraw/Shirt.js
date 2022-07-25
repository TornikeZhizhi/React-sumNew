import React, { useEffect, useState } from 'react';
import classes from "./shirtdraw.module.css";
import {useParams,Link}  from "react-router-dom";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import ClothData from './ShirtData.js';


const Shirt = () => {
    const params = useParams()
    const [dataCloth,setDataCloth] = useState([])

    const [imgIndex, setImgIndex] = useState(0)
    const [mainImg,setMainImg] = useState("yellow-shirt-front.png")

  useEffect(()=>{
    // alert("s")
    // params.id == "shirt" ?setDataCloth(ClothData[0]) : setDataCloth(ClothData[1])

    // console.log(dataCloth,ClothData[1])

    setMainImg(ClothData[0].src[imgIndex].front);
  },[imgIndex])  


  const changeColorHandler = ((index)=>{
    // alert("ss")
    // setMainImg(ClothData[0].src[index].front);
    setImgIndex(index)
    // console.log(mainImg)

  })


    return (
        <div className={classes.shirt_inner_fluid}>
            {console.log(mainImg)}

            <div className={classes.accordion_container}>
                <h3>Design Your Product</h3>
             <Accordion className={classes.accordion}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography>Add Text</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className={classes.accordion}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                >
                <Typography>Add Img</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
                </AccordionDetails>
            </Accordion>
            </div>
            <div className={classes.shirt_inner_container}>
                <div className={classes.front_back}>
                    <div className='front'>Front</div>
                    <div className='back'>Back</div>    
                </div>
                <div className={classes.colors}>
                    {ClothData[0].colors.map((bgColor,index)=>
                        <span onClick={()=>changeColorHandler(index)} key={index} style={{background:bgColor}}></span>
                    )}
                </div>
                <div className={classes.shirt_body}>
                       <img src={require('./imgs/'+mainImg+'')}/>
                </div>
            </div>
       
        </div>
    );
};

export default Shirt;