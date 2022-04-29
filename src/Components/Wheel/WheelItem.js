import React, { useEffect, useState } from 'react';


const WheelItem = () => {
    const [wheelAnime, setWheelAnime] = useState(false)
    const [lastRotation, setLastRotation] = useState(0)
    const [initialSpinRotation, setInitialSpinRotation] = useState(0)
    const [wheelOffset, setwheelOffset] = useState(0);
    const [spinValue, setSpinValue] = useState(0);

    // let spinValue = 0;
    let sectionAmount = 16;
    let spinCount = 5;
    let initialRotationDeg = 0;
    let winningNumber = 1;


    function updateAnimationNumbers(prizeSection) {
        spinValue = (360 * spinCount) - (prizeSection * 360 / sectionAmount) + initialRotationDeg - wheelOffset;
        
    
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
            bla {initialSpinRotation}
        <div className="bonus-game__wrapper">
          <div className="bonus-game__wheel">
            <div className={`wheel ${wheelAnime ? 'anime' : null}`}>
              <div className="wheel__button" onClick={startHandler}></div>
              <div className="wheel__arrow"></div>
              <div id='spinning' className={`wheel__white ${wheelAnime ? 'spinning' : null}`}
                style={{transform:`rotate(${initialSpinRotation}deg)`}}>
                <div className="wheel__mid">
                  <div className="wheel__inner">
                    <div className="wheel__element">
                      <div className="wheel__element-anker">
                        <div className="wheel__element-white"></div>
                        <div className="wheel__element-inactive"></div>
                        <div className="wheel__element-active">
                          <div className="wheel__element-fire"></div>
                        </div>
                        <div className="wheel__element-content">
                          <div className="wheel__element-text">1000₾</div>
                          <div className="wheel__element-icon gel"></div>
                        </div>
                      </div>
                    </div>
                    <div className="wheel__element">
                      <div className="wheel__element-anker">
                        <div className="wheel__element-white"></div>
                        <div className="wheel__element-inactive"></div>
                        <div className="wheel__element-active">
                          <div className="wheel__element-fire"></div>
                        </div>
                        <div className="wheel__element-content">
                          <div className="wheel__element-text">5₾</div>
                          <div className="wheel__element-icon p2p"></div>
                        </div>
                      </div>
                    </div>
                    <div className="wheel__element">
                      <div className="wheel__element-anker">
                        <div className="wheel__element-white"></div>
                        <div className="wheel__element-inactive"></div>
                        <div className="wheel__element-active">
                          <div className="wheel__element-fire"></div>
                        </div>
                        <div className="wheel__element-content">
                          <div className="wheel__element-text black">10₾</div>
                          <div className="wheel__element-icon dice"></div>
                        </div>
                      </div>
                    </div>
                    <div className="wheel__element">
                      <div className="wheel__element-anker">
                        <div className="wheel__element-white"></div>
                        <div className="wheel__element-inactive"></div>
                        <div className="wheel__element-active">
                          <div className="wheel__element-fire"></div>
                        </div>
                        <div className="wheel__element-content">
                          <div className="wheel__element-text">10₾</div>
                          <div className="wheel__element-icon p2p"></div>
                        </div>
                      </div>
                    </div>
                    <div className="wheel__element">
                      <div className="wheel__element-anker">
                        <div className="wheel__element-white"></div>
                        <div className="wheel__element-inactive"></div>
                        <div className="wheel__element-active">
                          <div className="wheel__element-fire"></div>
                        </div>
                        <div className="wheel__element-content">
                          <div className="wheel__element-text black">20₾</div>
                          <div className="wheel__element-icon dice"></div>
                        </div>
                      </div>
                    </div>
                    <div className="wheel__element">
                      <div className="wheel__element-anker">
                        <div className="wheel__element-white"></div>
                        <div className="wheel__element-inactive"></div>
                        <div className="wheel__element-active">
                          <div className="wheel__element-fire"></div>
                        </div>
                        <div className="wheel__element-content">
                          <div className="wheel__element-text">10000₾</div>
                          <div className="wheel__element-icon gel"></div>
                        </div>
                      </div>
                    </div>
                    <div className="wheel__element">
                      <div className="wheel__element-anker">
                        <div className="wheel__element-white"></div>
                        <div className="wheel__element-inactive"></div>
                        <div className="wheel__element-active">
                          <div className="wheel__element-fire"></div>
                        </div>
                        <div className="wheel__element-content">
                          <div className="wheel__element-text black">50₾</div>
                          <div className="wheel__element-icon dice"></div>
                        </div>
                      </div>
                    </div>
                    <div className="wheel__element">
                      <div className="wheel__element-anker">
                        <div className="wheel__element-white"></div>
                        <div className="wheel__element-inactive"></div>
                        <div className="wheel__element-active">
                          <div className="wheel__element-fire"></div>
                        </div>
                        <div className="wheel__element-content">
                          <div className="wheel__element-text">20₾</div>
                          <div className="wheel__element-icon p2p"></div>
                        </div>
                      </div>
                    </div>
                    <div className="wheel__element">
                      <div className="wheel__element-anker">
                        <div className="wheel__element-white"></div>
                        <div className="wheel__element-inactive"></div>
                        <div className="wheel__element-active">
                          <div className="wheel__element-fire"></div>
                        </div>
                        <div className="wheel__element-content">
                          <div className="wheel__element-text black">1₾</div>
                          <div className="wheel__element-icon dice"></div>
                        </div>
                      </div>
                    </div>
                    <div className="wheel__element">
                      <div className="wheel__element-anker">
                        <div className="wheel__element-white"></div>
                        <div className="wheel__element-inactive"></div>
                        <div className="wheel__element-active">
                          <div className="wheel__element-fire"></div>
                        </div>
                        <div className="wheel__element-content">
                          <div className="wheel__element-text">50₾</div>
                          <div className="wheel__element-icon p2p"></div>
                        </div>
                      </div>
                    </div>
                    <div className="wheel__element">
                      <div className="wheel__element-anker">
                        <div className="wheel__element-white"></div>
                        <div className="wheel__element-inactive"></div>
                        <div className="wheel__element-active">
                          <div className="wheel__element-fire"></div>
                        </div>
                        <div className="wheel__element-content">
                          <div className="wheel__element-text">250</div>
                          <div className="wheel__element-icon gel"></div>
                        </div>
                      </div>
                    </div>
                    <div className="wheel__element">
                      <div className="wheel__element-anker">
                        <div className="wheel__element-white"></div>
                        <div className="wheel__element-inactive"></div>
                        <div className="wheel__element-active">
                          <div className="wheel__element-fire"></div>
                        </div>
                        <div className="wheel__element-content">
                          <div className="wheel__element-text">100₾</div>
                          <div className="wheel__element-icon p2p"></div>
                        </div>
                      </div>
                    </div>
                    <div className="wheel__element">
                      <div className="wheel__element-anker">
                        <div className="wheel__element-white"></div>
                        <div className="wheel__element-inactive"></div>
                        <div className="wheel__element-active">
                          <div className="wheel__element-fire"></div>
                        </div>
                        <div className="wheel__element-content">
                          <div className="wheel__element-text black">2₾</div>
                          <div className="wheel__element-icon dice"></div>
                        </div>
                      </div>
                    </div>
                    <div className="wheel__element">
                      <div className="wheel__element-anker">
                        <div className="wheel__element-white"></div>
                        <div className="wheel__element-inactive"></div>
                        <div className="wheel__element-active">
                          <div className="wheel__element-fire"></div>
                        </div>
                        <div className="wheel__element-content">
                          <div className="wheel__element-text">1₾</div>
                          <div className="wheel__element-icon p2p"></div>
                        </div>
                      </div>
                    </div>
                    <div className="wheel__element">
                      <div className="wheel__element-anker">
                        <div className="wheel__element-white"></div>
                        <div className="wheel__element-inactive"></div>
                        <div className="wheel__element-active">
                          <div className="wheel__element-fire"></div>
                        </div>
                        <div className="wheel__element-content">
                          <div className="wheel__element-text black">5₾</div>
                          <div className="wheel__element-icon dice"></div>
                        </div>
                      </div>
                    </div>
                    <div className="wheel__element">
                      <div className="wheel__element-anker">
                        <div className="wheel__element-white"></div>
                        <div className="wheel__element-inactive"></div>
                        <div className="wheel__element-active">
                          <div className="wheel__element-fire"></div>
                        </div>
                        <div className="wheel__element-content">
                          <div className="wheel__element-text">2₾</div>
                          <div className="wheel__element-icon p2p"></div>
                        </div>
                      </div>
                    </div>
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