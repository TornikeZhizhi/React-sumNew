import React, { useEffect, useRef, useState } from 'react';
import "./css/wheel.css";
import WheelItem from './WheelItem';
import Dummy_WheelArray from "./WheelData.json";

const Wheel = () => {

    const [wheelArray, setWheelArray] = useState(Dummy_WheelArray);
    const [wheelAnime, setWheelAnime] = useState(false)
    const [initialSpinRotation, setInitialSpinRotation] = useState(0)
    const [wheelOffset, setwheelOffset] = useState(0);
    const [spinValue, setSpinValue] = useState(0)

    const spinDiv = useRef()
      
    // console.log(spinDiv , "ds")
    let spinValueLive = 0;
    let sectionAmount = 16;
    let spinCount = 5;
    let winningNumber = 1;
    
    // useEffect(()=>{
    //     spinDiv.current.focus()
    //     console.log(spinDiv.current)  

    // },[])

    useEffect(()=>{
        setTimeout(()=>{
            wheelArray.map(item=>{
                if(item.activeClass == true) {
                     removeActiveClass()
                     
                }
            })
        },3300)


    },[wheelArray])

    const updateAnimationNumbers = (prizeSection)=> {
       spinValueLive = (360 * spinCount) - (prizeSection * 360 / sectionAmount) - wheelOffset;
        setSpinValue((360 * spinCount) - (prizeSection * 360 / sectionAmount) - wheelOffset)
        const CSSTemplate = `
            @keyframes spinning {
            from { transform: rotate(${initialSpinRotation}deg); }
            to {  transform: rotate(${initialSpinRotation + spinValueLive}deg); }
            }
        `;
        // console.log(initialSpinRotation, spinValue)
        const $style = document.createElement("style");
        document.head.appendChild($style);
        $style.innerHTML = CSSTemplate;
        // console.log(spinValue)
    }


    const addActiveClass = () => {
        const updateArray = wheelArray.map(item=>{
            if(item.id == winningNumber){
                console.log(item.id, winningNumber)
                return {...item,activeClass:true}
            }else {
                return item
            }
        })
        setWheelArray(updateArray)
    }

    const removeActiveClass = () =>{
        const updateArray2 = wheelArray.map(item=>{
            return {...item,activeClass:false}
    })
         setWheelArray(updateArray2)
    }

    const animationEndHandler = ()=>{
      let SynSpinRotation;
      console.log(spinValue)

      setInitialSpinRotation((prev)=>{

        
           return prev + spinValue
      })

      
      SynSpinRotation = initialSpinRotation + spinValue
      setWheelAnime(false)

      // console.log(SynSpinRotation % 360)
      setwheelOffset(SynSpinRotation % 360)
      
      addActiveClass()

      setTimeout(()=>{

          alert("You win")
      },2000)
      
    }

    const startHandler = () => {
     

        winningNumber = 1

        updateAnimationNumbers(winningNumber)
        setWheelAnime(true);

        // document.getElementById("spinning").addEventListener("animationend", function() {
            
       
        //     let SynSpinRotation;
        //     setInitialSpinRotation((prev)=>{
        //          return prev + spinValue
        //     })
        //     SynSpinRotation = initialSpinRotation + spinValue
        //     setWheelAnime(false)
        //     setwheelOffset(SynSpinRotation % 360)
            
        //     addActiveClass()

        //     setTimeout(()=>{

        //         alert("You win")
        //     },2000)
           

        // }, {once : true})

    }


    return (
        <div className="bonus-game">
         {initialSpinRotation}
         <input ref={spinDiv} type="text" />
        <div className="bonus-game__wrapper">
          <div className="bonus-game__wheel">
            <div className={`wheel ${wheelAnime ? 'anime' : null}`}>
              <div className={`wheel__button ${wheelAnime ? 'inactive':null}`} onClick={startHandler}></div>
              <div className="wheel__arrow"></div>
              <div id='spinning' onAnimationEnd={animationEndHandler}  className={`wheel__white ${wheelAnime ? 'spinning' : null}`}
                style={{transform:`rotate(${initialSpinRotation}deg)`}}>
                <div className="wheel__mid">
                  <div className="wheel__inner">
                  

                    {wheelArray.map(item=>
                      <WheelItem 
                        textBlack={item.textBlack}
                        iconClass={item.iconClass}
                        activeClass={item.activeClass}
                        text={item.text}
                        key={item.id}/>
                        )}
                    <div className="wheel__shadow"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Wheel;