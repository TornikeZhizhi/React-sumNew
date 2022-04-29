import React, { useEffect } from 'react';
import "./css/wheel.css";
import WheelItem from './WheelItem';




  //   wheel js

//   $(".wheel__button").click(function() {
//     $(this).addClass('inactive');
// });

//         var spinValue = 0;
//         var initialSpinRotation = 0;
//         var sectionAmount = 16;
//         var spinCount = 5;
//         var initialRotationDeg = 0;
//         var winningNumber = 0;
//         var wheelOffset = 0;
//         var freebetsWon = 0;

//         function updateAnimationNumbers(prizeSection) {
//             spinValue = (360 * spinCount) - (prizeSection * 360 / sectionAmount) + initialRotationDeg - wheelOffset;

//             console.log(winningNumber,"winningNumber");

//             const CSSTemplate = `
//                 @keyframes spinning {
//                 from { transform: rotate(${initialSpinRotation}deg); }
//                 to {  transform: rotate(${initialSpinRotation + spinValue}deg); }
//                 }
//             `;
//             $('head').append('<style id="keyframes">'+CSSTemplate+'</style>');
//         }

//         $(".wheel__button").click(function(){

//             $(".wheel").addClass("anime")
//             // winningNumber = prizeTranslations[0].PRIZE_ID];

//             winningNumber = Math.floor(Math.random() * 16);
        
//             setTimeout(() => {
//                 updateAnimationNumbers(winningNumber);
//                 $(".wheel__white").addClass('spinning');
                
//                 $(".spinning").one("animationend oAnimationEnd webkitAnimationEnd",
//                     function(event) {
//                     $(".wheel__white").removeClass("spinning");
//                     $(".wheel__element").removeClass("active");
//                     $(".wheel__button").removeClass("inactive");
                        
//                     $(".wheel__arrow").addClass("up")
//                     setTimeout(function(){
//                         $(".wheel-winner").fadeIn(250);

//                     },2500)
                    
//                     initialSpinRotation += spinValue;
//                     wheelOffset = initialSpinRotation % 360;
//                     // $(".wheel").removeClass("anime")
//                     // console.log(wheelOffset,"wheelOffset");
//                     // console.log(initialSpinRotation,"initialSpinRotation")
//                     $(".wheel__element").eq(winningNumber).addClass('active');
//                     $(".wheel__white").css({ 'WebkitTransform': 'rotate(' + initialSpinRotation + 'deg)'});
//                 });
//             }, 1000);
//         });

//         $(".wheel-winner__close, .wheel-winner__button").click(function(){
//             $(".wheel-winner").fadeOut(200);
//             $(".wheel").removeClass('anime');
//             $(".wheel__element").removeClass('active');
//             $(".wheel__arrow").removeClass("up")
//           })
    




const Wheel = () => {
    return (
        <WheelItem />
    );
};

export default Wheel;