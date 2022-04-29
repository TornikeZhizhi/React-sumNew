import React, { useEffect, useState } from 'react';


const WheelArray = [
    {text:"1000₾", iconClass:"gel", textBlack:false,activeClass:false},
    {text:"5₾", iconClass:"p2p", textBlack:false,activeClass:false},
    {text:"10₾", iconClass:"dice", textBlack:true,activeClass:false},
    {text:"100₾", iconClass:"p2p", textBlack:false,activeClass:false},
    {text:"20₾", iconClass:"dice", textBlack:true,activeClass:false},
    {text:"10000₾", iconClass:"gel", textBlack:false,activeClass:false},
    {text:"50₾", iconClass:"dice", textBlack:true,activeClass:false},
    {text:"20₾", iconClass:"gel", textBlack:false,activeClass:false},
    {text:"1₾", iconClass:"dice", textBlack:true,activeClass:false},
    {text:"20₾", iconClass:"p2p", textBlack:false,activeClass:false},
    {text:"250₾", iconClass:"gel", textBlack:false,activeClass:false},
    {text:"300₾", iconClass:"p2p", textBlack:false,activeClass:false},
    {text:"50₾", iconClass:"dice", textBlack:true,activeClass:false},
    {text:"1500₾", iconClass:"p2p", textBlack:false,activeClass:false},
    {text:"1700₾", iconClass:"dice", textBlack:true,activeClass:false},
    {text:"1000₾", iconClass:"p2p", textBlack:false,activeClass:false},
]

const WheelItem = () => {
    const [wheelAnime, setWheelAnime] = useState(false)
    const [initialSpinRotation, setInitialSpinRotation] = useState(0)
    const [wheelOffset, setwheelOffset] = useState(0);

    let spinValue = 0;
    let sectionAmount = 16;
    let spinCount = 5;
    let winningNumber = 1;
    

    function updateAnimationNumbers(prizeSection) {
        spinValue = (360 * spinCount) - (prizeSection * 360 / sectionAmount) - wheelOffset;
        
    
        const CSSTemplate = `
            @keyframes spinning {
            from { transform: rotate(${initialSpinRotation}deg); }
            to {  transform: rotate(${initialSpinRotation + spinValue}deg); }
            }
        `;
        const $style = document.createElement("style");
        document.head.appendChild($style);
        $style.innerHTML = CSSTemplate;
       
    }


    const startHandler = () => {

        // winningNumber = Math.floor(Math.random() * 16 + 1)

        updateAnimationNumbers(winningNumber)
        setWheelAnime(true);

        document.getElementById("spinning").addEventListener("animationend", function() {
            
       
            let SynSpinRotation;
            setInitialSpinRotation((prev)=>{
                 return prev + spinValue
            })
            SynSpinRotation = initialSpinRotation + spinValue
            setWheelAnime(false)
            setwheelOffset(SynSpinRotation % 360)
     
        }, {once : true})

    }


    return (
        <div className="bonus-game">
         {initialSpinRotation}
        <div className="bonus-game__wrapper">
          <div className="bonus-game__wheel">
            <div className={`wheel ${wheelAnime ? 'anime' : null}`}>
              <div className={`wheel__button ${wheelAnime ? 'inactive':null}`} onClick={startHandler}></div>
              <div className="wheel__arrow"></div>
              <div id='spinning' className={`wheel__white ${wheelAnime ? 'spinning' : null}`}
                style={{transform:`rotate(${initialSpinRotation}deg)`}}>
                <div className="wheel__mid">
                  <div className="wheel__inner">
                  

                    {WheelArray.map(item=>
                        <div className="wheel__element">
                        <div className="wheel__element-anker">
                        <div className="wheel__element-white"></div>
                        <div className="wheel__element-inactive"></div>
                        <div className="wheel__element-active">
                            <div className="wheel__element-fire"></div>
                        </div>
                        <div className="wheel__element-content">
                            <div className={`wheel__element-text ${item.textBlack ? "black":null}`}> {item.text}</div>
                            <div className={`wheel__element-icon ${item.iconClass}`}></div>
                        </div>
                        </div>
                        </div>
                        
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

export default WheelItem;