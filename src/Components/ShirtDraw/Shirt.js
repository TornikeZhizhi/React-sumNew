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
import { SketchPicker } from 'react-color';

import { Rnd } from "react-rnd";



import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


const Shirt = () => {

    // const style = {
    //     display: "flex",
    //     alignItems: "center",
    //     justifyContent: "center",
    //     border: "solid 1px #ddd",
    //     background: "red"
    //   };
    const params = useParams()
    const [dataCloth,setDataCloth] = useState([])

    const [imgIndex, setImgIndex] = useState(0)
    const [mainImg,setMainImg] = useState("yellow-shirt-front.png");
    
    const [inputText, setInputText] = useState("Valhala");
    const [font, setFont] = useState(16);
    const [googleFont, setGoogleFont] = useState('Roboto');
    const [fontWeight, setFontWeight] = useState('300');
    const [colorPicker, setColorPicker] = useState('#000');


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
        if(event.target.value < 100){
            setFont(event.target.value)
        }
    }



  const changeColorHandler = ((index)=>{
    // alert("ss")
    setMainImg(ClothData[0].src[index].front);
    setImgIndex(index)
    // console.log(mainImg)

  })

  const handleColorChangeComplete =(color)=>{
    console.log(color.hex)
    setColorPicker(color.hex)
    // this.setState({ background: color.hex });
  }
 

  const handleChange = (event) => {
    setGoogleFont(event.target.value);
  };
  const fontWeightHandler = (event) => {
    setFontWeight(event.target.value);
  
  };


  const frontHandler = (()=> {
    setMainImg(ClothData[0].src[imgIndex].front);
  })
  const backHandler = (()=> {
    setMainImg(ClothData[0].src[imgIndex].back);
  })

    return (
        <div className={classes.shirt_inner_fluid}>

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
                        <input className={classes.accordion_input} value={inputText}  onInput={inputHandler} type="text" name="text"/>
                    </div>
                    <div className={classes.accordion_body}>
                        <label className={classes.accordion_label} >Font Size:</label>
                        <input className={classes.accordion_input} value={font} onInput={fontHandler} type="number" name="text" max="5"/>
                    </div>
                    <div className={classes.accordion_body}>
                        <label className={classes.accordion_label} >Font</label>
                        <Select className={classes.ui_select}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={googleFont}
                            label="font"
                            onChange={handleChange}
                            >
                            <MenuItem value={"Roboto"}>Roboto</MenuItem>
                            <MenuItem value={"Dancing Script,cursive"}>Dancing Script</MenuItem>
                            <MenuItem value={"Shadows Into Light"}>'Shadows Into Light'</MenuItem>
                        </Select>
                    
                    </div>

                    <div className={classes.accordion_body}>
                        <label className={classes.accordion_label} >FontWeight</label>
                         <Select className={classes.ui_select}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={fontWeight}
                            label="fontweight"
                            onChange={fontWeightHandler}
                            >
                            <MenuItem value={"300"}>300</MenuItem>
                            <MenuItem value={"400"}>400</MenuItem>
                            <MenuItem value={"500"}>500</MenuItem>
                            <MenuItem value={"600"}>600</MenuItem>
                            <MenuItem value={"700"}>700</MenuItem>
                            <MenuItem value={"800"}>800</MenuItem>
                        </Select>
                    </div>

                    <div className={classes.accordion_body}>
                    <label className={classes.accordion_label} >Color</label>
   
                    <SketchPicker
                        className={classes.colorPicker}
                        color={ colorPicker }
                        onChangeComplete={ handleColorChangeComplete }
                    />

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
                <AccordionDetails className={classes.accordion_details}>
                <div className={classes.accordion_body}>
                    <div className={classes.addImage}>

                        {ClothData[0].drawImages.map((images,index)=>
                        <div className={classes.drawimg_wrapper}>

                            <img  src={require('./imgs/'+images+'')} key={index} />
                            <span className={classes.add}>Add</span>
        
                        </div>
                    )}

                    </div>
                </div>
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
                        {/* <Rnd
                             bounds="parent"
                         // style={style}
                        default={{
                        x: 0,
                        y: 0,
                        width: 120,
                        height:30
                        }}
                    >
                    {inputText}
                    </Rnd> */}
                         <Draggable  bounds={{top: -10, left: -10, right: 130, bottom: 180}}
                                    onDrag={(e, data) => trackPos(data)}
                                
                                >
                                    
                            <span style={{fontSize:font+"px", 
                            fontFamily:googleFont, 
                            fontWeight:fontWeight,
                            color:colorPicker}}>  {inputText}</span>
                            </Draggable>
                       </div>
                </div>
            </div>
       
        </div>
    );
};

export default Shirt;