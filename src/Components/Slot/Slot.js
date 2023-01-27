import React, { useEffect } from 'react';
import { useState } from 'react';
import "./slot.css"; 

import SlotData  from "./SlotData.json";





const Slot = () => {

  const prizes =[
    [
     {name:"kurdeni", id:1},
     {name:"apple", id:2},
     {name:"chery", id:3},
     {name:"citrus", id:4},
     {name:"watermelon", id:5},
     {name:"kurdeni", id:6},
     {name:"kurdeni", id:7},
     {name:"apple", id:8},
     {name:"chery", id:9},
     {name:"citrus", id:10},
     {name:"watermelon", id:11},
     {name:"kurdeni", id:12},
     {name:"kurdeni", id:14},
     {name:"apple", id:15},
     {name:"apple", id:16},
   ],
    [
     {name:"kurdeni", id:1},
     {name:"apple", id:2},
     {name:"chery", id:3},
     {name:"citrus", id:4},
     {name:"watermelon", id:5},
     {name:"kurdeni", id:6},
     {name:"kurdeni", id:7},
     {name:"apple", id:8},
     {name:"chery", id:9},
     {name:"citrus", id:10},
     {name:"watermelon", id:11},
     {name:"kurdeni", id:12},
     {name:"kurdeni", id:14},
     {name:"apple", id:15},
     {name:"apple", id:16},
   ],
    [
     {name:"kurdeni", id:1},
     {name:"apple", id:2},
     {name:"chery", id:3},
     {name:"citrus", id:4},
     {name:"watermelon", id:5},
     {name:"kurdeni", id:6},
     {name:"kurdeni", id:7},
     {name:"apple", id:8},
     {name:"chery", id:9},
     {name:"citrus", id:10},
     {name:"watermelon", id:11},
     {name:"kurdeni", id:12},
     {name:"kurdeni", id:14},
     {name:"apple", id:15},
     {name:"apple", id:16},
   ]
  
   
 ]

const [slotArray1, setSlotArray1] = useState(prizes[0]);
const [slotArray2, setSlotArray2] = useState(prizes[1]);
const [slotArray3, setSlotArray3] = useState(prizes[2]);

const [slotAnime, setSlotAnime] = useState(false);



const [initialSpinRotation1, setInitialSpinRotation1] = useState(0);



let rotationIndex  = prizes[0].length * 100  - 220;
let inRotation;
let winningNumber = 1




const  keyframeAnimation =(winningNumber)=> {    
 inRotation = rotationIndex - (winningNumber * 100);


    const CSSTemplate = `
        @keyframes spinning {
        from { transform: translateY(-20px); }
        to {  transform: translateY(${inRotation}px); }
        }

         @keyframes spinning2 {
           from { transform: translateY(-20px); }
           to {  transform: translateY(${inRotation}px); }
           }

         @keyframes spinning3 {
           from { transform: translateY(-20px); }
           to {  transform: translateY(${inRotation}px); }
           }
     `;

    const $style = document.createElement("style");
    document.head.appendChild($style);
    $style.innerHTML = CSSTemplate;
   

}


// const winfunction = ()=>{

//   slotArray1[13].name = "kurdeni";
//   slotArray2[13].name = "kurdeni";
//   slotArray3[13].name = "kurdeni";
// }

const startHandler = ()=>{
  keyframeAnimation(winningNumber)

  // winfunction()

  setSlotAnime(true)
}


const thirdSlotAnimeEnd = ()=>{
  setSlotAnime(false)
  setInitialSpinRotation1(rotationIndex - (winningNumber * 100));
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
          
              <div id='levelOneSlot'  className={"slot__levelOne-anker" + (slotAnime ? " spinning" : "")}
               style={{transform:`translateY(${initialSpinRotation1}px)`}} >
                {slotArray1.map((item,index)=>
                  <div className={"slot__levelOne-item"} key={index}>
                    <div className="slot__levelOne-itemWrapper">
                      <div className={item.name}></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
        
     
            <div className="slot__levelTwo">
         
              <div id='levelTwoSlot'  className={"slot__levelTwo-anker" + (slotAnime ? " spinning2": "")}
                style={{transform:`translateY(${initialSpinRotation1}px)`}}>
              {slotArray2.map((item,index)=>
                <div className={"slot__levelTwo-item"} key={index}>
                  <div className="slot__levelTwo-itemWrapper">
                    <div className={item.name}></div>
                  </div>
                </div>
              )}
              </div>
            </div> 
               <div className="slot__levelThree">
            
              <div id='levelTreeSlot' onAnimationEnd={thirdSlotAnimeEnd} className={"slot__levelThree-anker" + (slotAnime ?  " spinning3" : "")}
              style={{transform:`translateY(${initialSpinRotation1}px)`}}>
              {slotArray3.map((item,index)=>
                <div className={"slot__levelThree-item"} key={index}>
                  <div className="slot__levelThree-itemWrapper">
                    <div className={item.name}></div>
            
                  </div>
                </div>
                 )}
  
              </div>
            </div> 
          </div>
          <div className="box">
            <div className="box__info"></div>
            <div className="box__spinButton" onClick={startHandler}>SPIN</div>
            <div className="box__giftBox"></div>
          </div>
        </div>
    );
};

export default Slot;