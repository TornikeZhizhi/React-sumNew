import React, { useEffect, useState } from 'react';
import classes from "./shirtdraw.module.css";
import {useParams}  from "react-router-dom";
import Draggable from "react-draggable";
import ClothData from './ShirtData.js';
import { Rnd } from "react-rnd";
import SideBar from './SideBar';


const Shirt = () => {


    const params = useParams()
    const [dataCloth,setDataCloth] = useState(ClothData[0])

    const [imgIndex, setImgIndex] = useState(0)
    const [mainImg,setMainImg] = useState("yellow-shirt-front.png");
    
    const [inputText, setInputText] = useState("Valhala");
    const [font, setFont] = useState(16);
    const [googleFont, setGoogleFont] = useState('Roboto');
    const [fontWeight, setFontWeight] = useState('300');
    const [colorPicker, setColorPicker] = useState('#000');

    const [imgForDraw, setImgForDraw] = useState(null);
    const [toggleBorder, setToggleBorder] = useState(false);


   
  

   
  

  useEffect(()=>{
    if (params.id == "shirt"){
        setDataCloth(ClothData[0])
        setMainImg(ClothData[0].src[0].front)
    }else{
        setDataCloth(ClothData[1])
        setMainImg(ClothData[1].src[0].front)
    }
  },[])  

    const inputHandler = (value)=>{
        setInputText(value)
    }

    const fontHandler = (value)=>{
        if(value < 100){
            setFont(value)
        }
    }

    const changeColorHandler = ((index)=>{
        setMainImg(dataCloth.src[index].front);
        setImgIndex(index)
    })

    const handleColorChangeComplete =(color)=>{
        setColorPicker(color.hex)
    }
 
  const handleChange = (value) => {
    setGoogleFont(value);
  };
  const fontWeightHandler = (value) => {
    setFontWeight(value);
  
  };

  const addImageHandler = (imgSrc)=>{
    setImgForDraw(imgSrc)
  }

  const removeImg =()=> {
    setImgForDraw(null)
  }
  const removeText =()=> {
    setInputText("")
  }

  const toggleBorderHandler =()=> {
    setToggleBorder(!toggleBorder)
  }

  const frontHandler = (()=> {
    setMainImg(dataCloth.src[imgIndex].front);
  })
  const backHandler = (()=> {
    setMainImg(dataCloth.src[imgIndex].back);
  })

    return (
        <div className={classes.shirt_inner_fluid}>
            <SideBar inputHandler={inputHandler}
            inputText={inputText}
            fontHandler={fontHandler}
            font={font}
            handleChange={handleChange}
            googleFont={googleFont}
            fontWeightHandler={fontWeightHandler}
            fontWeight={fontWeight}
            handleColorChangeComplete={handleColorChangeComplete}
            colorPicker={colorPicker}
            addImageHandler={addImageHandler}
            dataCloth={dataCloth}></SideBar>

            <div className={classes.shirt_inner_container}>
                <div className={classes.front_back}>
                    <div className='front' onClick={frontHandler}>Front</div>
                    <div className='back' onClick={backHandler}>Back</div>
                    <div  className={classes.toggleBorders} onClick={toggleBorderHandler}>Toggle borders</div>
                </div>
                <div className={classes.colors}>
                    {dataCloth.colors.map((bgColor,index)=>
                        <span onClick={()=>changeColorHandler(index)} key={index} style={{background:bgColor}}></span>
                    )}
                </div>
                <div className={`${classes.shirt_body} ` + (toggleBorder ? classes.hidden : null)}>
                       <img src={require('./imgs/'+mainImg+'')}/>
                       <div className={classes.dragable_container}>
                       {imgForDraw &&  
                        <Rnd
                        className={classes.rdn}
                        bounds="parent"
                        default={{
                        x: 0,
                        y: 0,
                        width: 120,
                        height:120
                        }}> 
                         <img src={require('./imgs/'+imgForDraw+'')}/>
                        <span onClick={removeImg} className={classes.removeImg}>X</span>
                         </Rnd>
                        }  
                        {inputText && <span onClick={removeText} className={classes.removeImg}>X</span> }
                         <Draggable  bounds={{top: -50, left: -50, right: 330, bottom: 380}}>
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