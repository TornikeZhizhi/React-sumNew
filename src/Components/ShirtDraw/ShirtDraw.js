import React from 'react';
import classes from "./shirtdraw.module.css";
import {NavLink,Link } from "react-router-dom";
const ShirtDraw = () => {
    return (
        <div className={classes.apparel_fluid}>

            <div className={classes.apparel_banner}>
                <img src='https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'/>
            </div>
            <h2 className='appearel_title'>
               Apparel
            </h2>

            <div className={classes.apparel_boxes}>
                <div className={classes.apparel_box}>
                    <Link  to={`/shirt-draw/shirt`}>
                        <div className={classes.apparel_img}>
                            <img src={require('./imgs/yellow-shirt-front.png')}/>
                        </div>
                        <div className={classes.apparel_text}>Shirt</div>
                    </Link>
                </div>

                <div className={classes.apparel_box}>
                     <Link  to={`/shirt-draw/hoodie`}>
                        <div className={classes.apparel_img}>
                            <img src={require('./imgs/light-pink.png')}/>
                        </div>
                        <div className={classes.apparel_text}>Hoodie</div>
                    </Link>
                </div>


            </div>


        </div>
    );
};

export default ShirtDraw;