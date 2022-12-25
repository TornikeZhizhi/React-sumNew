import React, { useEffect } from 'react';
import { useState } from 'react';
import "./slot.css"; 

import SlotData  from "./SlotData.json";



const Slot = () => {


// const turn = useStore(state=>state.turn);
// const removeTurn = useStore(state=>state.removeTurn);

const [slotArray, setSlotArray] = useState(SlotData)
const [slotAnime, setSlotAnime] = useState(false)

const [autoGame, setAutoGame] = useState(3)
const [autoGameToggler, setAutoGameToggler] = useState(false)

const [initialSpinRotation1, setInitialSpinRotation1] = useState(-20);
const [initialSpinRotation2, setInitialSpinRotation2] = useState(-20);
const [initialSpinRotation3, setInitialSpinRotation3] = useState(-20);

const [gameRunnig, setGameRunning] = useState(false)


let slotAnimation2 = false;
let slotAnimation3 = false;
let winningNumber = [2,2,2]
let section = 3

let transfortValue = 2680;

const  keyframeAnimation =(section,winningNumber)=> {

  
    let inRotation = transfortValue - (winningNumber[0] * 100);
    let inRotation2 = transfortValue - (winningNumber[1] * 100);
    let inRotation3 = transfortValue - (winningNumber[2] * 100);
    const CSSTemplate = `
        @keyframes spinning {
        from { transform: translateY(-20px); }
        to {  transform: translateY(${inRotation}px); }
        }

        @keyframes spinning2 {
          from { transform: translateY(-20px); }
          to {  transform: translateY(${inRotation2}px); }
          }

        @keyframes spinning3 {
          from { transform: translateY(-20px); }
          to {  transform: translateY(${inRotation3}px); }
          }
    `;

    const $style = document.createElement("style");
    document.head.appendChild($style);
    $style.innerHTML = CSSTemplate;
  

 
}

const resetFunction = (section)=>{
  setInitialSpinRotation1(-20)
  setInitialSpinRotation2(-20)
  setInitialSpinRotation3(-20)
}

const addActiveClass = (section) => {
 
}

const firtSlotAnimeEnD = ()=>{
  setInitialSpinRotation1(transfortValue - (winningNumber[0] * 100))
  setInitialSpinRotation2(transfortValue - (winningNumber[1] * 100))
  setInitialSpinRotation3(transfortValue - (winningNumber[2] * 100))
  setSlotAnime(false)   
  

  // initialSpinRotation1(-20)
  setTimeout(()=>{
    resetFunction()
    setAutoGame(prev=>prev - 1)
  },1000)
}

const secondSlotAnimeEnd = ()=> {
  
}

const thirdSlotAnimeEnd = ()=>{
   
}

const startHandler = ()=>{
  keyframeAnimation(1,winningNumber);
  setSlotAnime(true);
}

useEffect(()=>{
  if(autoGame > 0 && autoGameToggler){
    autostartHandler()
  }else {
    setAutoGameToggler(false)
  }
  
},[autoGame])

const autostartHandler = ()=>{
  keyframeAnimation(1,winningNumber);
  setSlotAnime(true);
  setAutoGameToggler(true)
}

    return (
        <div className="bonusGame__container">
          <div className="bonusGame__container-counter">
            <div className="bonusGame__container-counterAmount">2</div>
            <div className="bonusGame__container-counterText">დატრიალება</div>
          </div>
          <div className="slot">
            <div className="slot__base">
              <div className="slot__base-winnerFrame"></div>
            </div>
            <div className="slot__levelOneBackground"></div>
            <div className="slot__levelTwoBackground"></div>
            <div className="slot__levelThreeBackground"></div>

            <div className="slot__levelOne">
          
              <div id='levelOneSlot' onAnimationEnd={firtSlotAnimeEnD} className={"slot__levelOne-anker" + (slotAnime ? " spinning" : "")}
               style={{transform:`translateY(${initialSpinRotation1}px)`}} >
                {slotArray[0].map((item,index)=>
                  <div className={"slot__levelOne-item" + (item.activeClass ? " active" : "")} key={index}>
                    <div className="slot__levelOne-itemWrapper">
                      <div className={item.iconClass + (item.activeClass ? " active": "")}></div>
                      <div className="slot__levelOne-amount">{item.text}</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
        

            <div className="slot__levelTwo">
         
              <div id='levelTwoSlot' onAnimationEnd={secondSlotAnimeEnd} className={"slot__levelTwo-anker" + (slotAnime ? " spinning2": "")}
                style={{transform:`translateY(${initialSpinRotation2}px)`}}>
              {slotArray[1].map((item,index)=>
                <div className={"slot__levelTwo-item"  + (item.activeClass ? " active" : "")} key={index}>
                  <div className="slot__levelTwo-itemWrapper">
                    <div className={item.iconClass}></div>
                    <div className="slot__levelTwo-amount">{item.text}</div>
                  </div>
                </div>
              )}
              </div>
            </div>
    
            <div className="slot__levelThree">
            
              <div id='levelTreeSlot' onAnimationEnd={thirdSlotAnimeEnd} className={"slot__levelThree-anker" + (slotAnime ?  " spinning3" : "")}
              style={{transform:`translateY(${initialSpinRotation3}px)`}}>
              {slotArray[2].map((item,index)=>
                <div className={"slot__levelThree-item" + (item.activeClass ? " active" : "")} key={index}>
                  <div className="slot__levelThree-itemWrapper">
                    <div className={item.iconClass + (item.activeClass ? " active" : "")}></div>
                    <div className="slot__levelThree-amount">{item.text}</div>
                  </div>
                </div>
                 )}
  
              </div>
            </div>
          </div>
          <div className="box">
            <div className="box__info"></div>
            <div className="box__spinButton" onClick={startHandler}>SPIN</div>
            <div className="box__spinButton" onClick={autostartHandler}>Auto</div>

            <div className="box__giftBox"></div>
          </div>
        </div>
    );
};

export default Slot;