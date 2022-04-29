import React, { useEffect, useState } from 'react';



const WheelItem = () => {

    const Dummy_WheelArray = [
        {text:"1000₾",id:0, iconClass:"gel", textBlack:false,activeClass:false},
        {text:"5₾",id:1, iconClass:"p2p", textBlack:false,activeClass:false},
        {text:"10₾",id:2, iconClass:"dice", textBlack:true,activeClass:false},
        {text:"100₾",id:3, iconClass:"p2p", textBlack:false,activeClass:false},
        {text:"20₾",id:4, iconClass:"dice", textBlack:true,activeClass:false},
        {text:"10000₾",id:5, iconClass:"gel", textBlack:false,activeClass:false},
        {text:"50₾",id:6, iconClass:"dice", textBlack:true,activeClass:false},
        {text:"20₾",id:7, iconClass:"gel", textBlack:false,activeClass:false},
        {text:"1₾",id:8, iconClass:"dice", textBlack:true,activeClass:false},
        {text:"20₾",id:9, iconClass:"p2p", textBlack:false,activeClass:false},
        {text:"250₾",id:10, iconClass:"gel", textBlack:false,activeClass:false},
        {text:"300₾",id:11, iconClass:"p2p", textBlack:false,activeClass:false},
        {text:"50₾",id:12, iconClass:"dice", textBlack:true,activeClass:false},
        {text:"1500₾",id:13, iconClass:"p2p", textBlack:false,activeClass:false},
        {text:"1700₾",id:14, iconClass:"dice", textBlack:true,activeClass:false},
        {text:"1000₾",id:15, iconClass:"p2p", textBlack:false,activeClass:false},
    ]
    
    const [wheelArray, setWheelArray] = useState(Dummy_WheelArray);
    const [wheelAnime, setWheelAnime] = useState(false)
    const [initialSpinRotation, setInitialSpinRotation] = useState(0)
    const [wheelOffset, setwheelOffset] = useState(0);
    // const [winIndex, setWinIndex] = useState(null)

    // console.log(wheelArray)
    let spinValue = 0;
    let sectionAmount = 16;
    let spinCount = 5;
    let winningNumber = 1;
    

    useEffect(()=>{
        setTimeout(()=>{
            wheelArray.map(item=>{
                if(item.activeClass == true) {
                    console.log("shevida");
                     removeActiveClass()
                }
            })
        },3300)
    },[wheelArray])

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

    const startHandler = () => {
     

        winningNumber = Math.floor(Math.random() * 16 + 1)

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
            
            addActiveClass()
           

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
                  

                    {wheelArray.map(item=>
                        <div className={`wheel__element ${item.activeClass?"active":null}`} key={item.id}>
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