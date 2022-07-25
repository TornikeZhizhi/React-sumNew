import React, { useEffect, useState, useRef } from 'react';
import classes from "./shirtdraw.module.css";
import {useParams,Link}  from "react-router-dom";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Draggable from "react-draggable";
import ClothData from './ShirtData.js';


const Shirt = () => {
    const params = useParams()
    const [dataCloth,setDataCloth] = useState([])

    const [imgIndex, setImgIndex] = useState(0)
    const [mainImg,setMainImg] = useState("yellow-shirt-front.png");
    
    const [inputText, setInputText] = useState("");
    const [font, setFont] = useState(16);

    const [position, setPosition] = useState({ x: 0, y: 0 });

    const trackPos = (data) => {
      setPosition({ x: data.x, y: data.y });
    };
  

   
  

//   useEffect(()=>{
    // alert("s")
    // params.id == "shirt" ?setDataCloth(ClothData[0]) : setDataCloth(ClothData[1])

    // console.log(dataCloth,ClothData[1])

    // setMainImg(ClothData[0].src[imgIndex].front);
//   },[imgIndex])  


    const inputHandler = (event)=>{
        setInputText(event.target.value)
    }

    const fontHandler = (event)=>{
        setFont(event.target.value)
    }



  const changeColorHandler = ((index)=>{
    // alert("ss")
    setMainImg(ClothData[0].src[index].front);
    setImgIndex(index)
    // console.log(mainImg)

  })


  const frontHandler = (()=> {
    setMainImg(ClothData[0].src[imgIndex].front);
  })
  const backHandler = (()=> {
    setMainImg(ClothData[0].src[imgIndex].back);
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
                <AccordionDetails className={classes.accordion_details}>
                    <div className={classes.accordion_body}>
                        <label className={classes.accordion_label} >Text:</label>
                        <input className={classes.accordion_input} onInput={inputHandler} type="text" name="text"/>
                    </div>
                    <div className={classes.accordion_body}>
                        <label className={classes.accordion_label} >Font Size:</label>
                        <input className={classes.accordion_input} onInput={fontHandler} type="number" name="text"/>
                    </div>
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
                    <div className='front' onClick={frontHandler}>Front</div>
                    <div className='back' onClick={backHandler}>Back</div>    
                </div>
                <div className={classes.colors}>
                    {ClothData[0].colors.map((bgColor,index)=>
                        <span onClick={()=>changeColorHandler(index)} key={index} style={{background:bgColor}}></span>
                    )}
                </div>
                <div className={classes.shirt_body}>
                       <img src={require('./imgs/'+mainImg+'')}/>
                       <div className={classes.dragable_container}>
                         <Draggable  bounds={{top: -10, left: -10, right: 30, bottom: 180}}
                                    onDrag={(e, data) => trackPos(data)}
                                
                                >
                            <span style={{fontSize:font+"px"}}>{inputText}</span>
                            </Draggable>
                       </div>
                </div>
            </div>
       
        </div>
    );
};

export default Shirt;