import React,{useContext} from "react";
import {NavLink,Link } from "react-router-dom"
import classes from "./header.module.css";
import DayNightSwitcher from "./HeaderSwitch/DayNightSwitcher.js";
import HeaderSwitchContext from "../ContextApi/HeaderSwitcherContext";
import {SwitcherTheme} from "../ContextApi/HeaderSwitcherContext.js";
import ShopCart from "../shop/shop-cart/Shop-cart";
const Header = () => {

    const ctx = useContext(SwitcherTheme);
    // console.log(ctx)
    return (
        <header className={`${classes.header} ${ctx.isDarkMode?classes.dark:classes.day}`}>

            <nav>
                <ul>
                    <li><NavLink exact activeClassName={classes.active} to="/">Main</NavLink></li>
                    <li><NavLink activeClassName={classes.active} to="/products">Products</NavLink></li>
                    <li><NavLink activeClassName={classes.active} to="/resource">Resource</NavLink></li>
                    <li><NavLink activeClassName={classes.active} to="/hangman">Hangman</NavLink></li>
                    <li><NavLink activeClassName={classes.active} to="/wheel">Wheel</NavLink></li>
                    <li><NavLink activeClassName={classes.active} to="/shirt-draw">Shirt-Draw</NavLink></li>
                    <li><NavLink activeClassName={classes.active} to="/type-game">Type-Game</NavLink></li>
                    {/* <li><NavLink activeClassName={classes.active} to="/slot">Slot-Game</NavLink></li> */}
                    <li><NavLink activeClassName={classes.active} to="/axios">axios</NavLink></li>
                    <li><NavLink activeClassName={classes.active} style={{color:"yellow"}} to="/home">home</NavLink></li>
                    <li><NavLink activeClassName={classes.active} style={{color:"yellow"}} to="/store">store</NavLink></li>
                    <li><NavLink activeClassName={classes.active} style={{color:"yellow"}} to="/about">about</NavLink></li>
                    {/* <li><NavLink activeClassName={classes.active} to="/toast">Toast</NavLink></li> */}
                </ul>
                <DayNightSwitcher></DayNightSwitcher>
                <ShopCart />
            </nav>

        </header>
    )
}


export default Header;