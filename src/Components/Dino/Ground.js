import React, { useRef } from 'react';
import ground from "./imgs/ground.png";



let leftProp1 = 0;
let leftProp2 = 3300;

const SPEED = 3;

export const tokua = (groundImg,groundImg2) =>{

    groundImg.current.style.left = leftProp1  + "px"
    groundImg2.current.style.left = leftProp2 + "px"

    leftProp1 = leftProp1 - SPEED
    leftProp2 = leftProp2 - SPEED

    if(leftProp1 <= -3300){
        leftProp1 = 0;
    }

    if(leftProp2 <= 0){
        leftProp2 = 3300;  
    }

}


        