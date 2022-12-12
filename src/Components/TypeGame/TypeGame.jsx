import React, { useEffect, useState } from 'react';

import classes from "./TypeGame.module.css";







const TypeGame = () => {

    const typeText = "type text"
    const [text, setText ] = useState([]);

    const [textareaText, setTextAreaText] = useState()


    const textareaHandler =(e)=> {
        setTextAreaText(e.target.value);

    }

    useEffect(()=>{
        let updatedArray = text;

        for (let k = 0; k < text.length; k++) {
            for (let i = 0; i < textareaText.length; i++) {
                if(text[k].letter == textareaText[i]){
                    updatedArray[k].active = true
                }

            }
        }
        setText(updatedArray)
        console.log("aba")
    },[textareaText])

    useEffect(()=>{
        let sumData = [];
        typeText.split("").map((data)=>{
            sumData.push({letter:data,active:false})
        })
        setText(sumData)
    },[])

    


    return (
        <div className={classes.test}>
            <div className={classes.score}>0</div>
            <span style={{color:"white"}}>

           {JSON.stringify(text)}
            </span>
            <div className={classes.typeContainer}>

                <div className={classes.typeText}>
                    {text?.map((textData, index)=>{

                      return  <span className={"red " + (textData.active ? classes.green : "" )} key={index}>{textData.letter}</span>

                    })}
                </div>
                <textarea className={classes.textare} onChange={textareaHandler}></textarea>

            </div>
        </div>
    );
};

export default TypeGame;