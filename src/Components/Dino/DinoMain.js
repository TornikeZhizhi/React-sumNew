import React, { useEffect, useRef } from 'react';
import ground from "./imgs/ground.png";
import defDino from "./imgs/dino-stationary.png"
import GroundComponent from './Ground';

import { tokua } from './Ground';

const DinoMain = () => {

let lastTime = 0;

let groundImg = useRef()
let groundImg2 = useRef()
const update = (time)=>{



    if (lastTime === null){
        lastTime = time;
        window.requestAnimationFrame(update);
        return
    }
    const  delta = time - lastTime;


    tokua(groundImg,groundImg2)

    lastTime = time;
    window.requestAnimationFrame(update)
 }


useEffect(()=>{

    update()

},[])







    return (
    
            <div className="world" data-world> 
            <div className="score" data-score>0</div>
            <div className="start-screen" data-start-screen>Press Any Key To Start</div>
                <img ref={groundImg}  src={ground} className="ground" data-ground style={{left:0}} />
                <img ref={groundImg2}  src={ground} className="ground" data-ground style={{left:"300px"}} />
                <img  src={defDino} className="dino" data-dino />
            </div> 
     
    );
};

export default DinoMain;