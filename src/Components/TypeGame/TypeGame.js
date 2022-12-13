import React, { useEffect, useRef, useState } from 'react';

import classes from "./TypeGame.module.css";







const TypeGame = () => {

    const typeText = "Rea"
    const [text, setText ] = useState([]);

    const [textareaText, setTextAreaText] = useState()

    const [gameRunning, setGameRunning] = useState(false);

    const [gameTime, setGameTime] = useState(0)
    
    const textareaHandler =(e)=> {
        setTextAreaText(e.target.value.toLowerCase());

    } 

    let interval = useRef()
    const startTimer = ()=> {

        interval.current = setInterval(() => {
            setGameTime(prev=>prev + 1)
        }, 1000);
  
    }
  
   

    useEffect(()=>{

        startTimer()
    },[])
  

    useEffect(()=>{
        // let updatedArray = text

        // for (let k = 0; k < text.length; k++) {
        //         if(text[k].letter == textareaText[k]){
        //             updatedArray[k].active = "green"
        //         }else if((textareaText.length -1) == k){
        //             updatedArray[k].active = "red" 
        //         }else {
        //             updatedArray[k].active = "black"
        //         }
        // }
        // setText(updatedArray)
        
        
        let test = 0;
        const editData = text.map((data,index)=>{  
            if(index >= textareaText.length){
                return  {...data,active:"black"}  
            }
            if(data.letter == textareaText[index]) {
                test++;
                return  {...data,active:"green"};
            }
            else if((textareaText.length -1 ) == index){
                return  {...data,active:"red"}  
            }
            else {
                return data
            }  
        })
        
        if(test==text.length && test > 0){
            console.log("you win, your time is", + gameTime );
            clearInterval(interval.current)
        }
        setText(editData)

    },[textareaText])



    // useEffect(()=>{
    //     console.log("gamoidaxaa")

    // },[text])

    useEffect(()=>{
        let sumData = [];
        typeText.toLowerCase().split("").map((data)=>{
            sumData.push({letter:data,active:"black"})
        })
        setText(sumData)
    },[])

  

    return (
        <div className={classes.test}>
            <div className={classes.header}>

            <span className={classes.smaltext}>Your Record: 0</span>
            <div className={classes.score}>{gameTime}</div>
            </div>
            <span style={{color:"white"}}>
           {/* {JSON.stringify(text)} */}
            </span>
            <div className={classes.typeContainer}>

                <div className={classes.typeText}>
                    {text?.map((textData, index)=>{

                      return  <span className={classes.black + " " + (textData.active == "green" ? classes.green : " " ) + 
                      (textData.active == "red" ? classes.red : " ")
                  } key={index}>{textData.letter}</span>

                    })}
                </div>
                <textarea className={classes.textare} onChange={textareaHandler}></textarea>

            </div>
        </div>
    );
};

export default TypeGame;