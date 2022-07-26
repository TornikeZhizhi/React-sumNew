import React,{useEffect,useState} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import classes from "./shirtdraw.module.css";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { SketchPicker } from 'react-color';
const SideBar = (props) => {



const inputHandler = (event)=>{
    props.inputHandler(event.target.value)
}

const fontHandler = (event)=> {
    props.fontHandler(event.target.value)
}
const handleChange = (event)=> {
    props.handleChange(event.target.value)
}

const fontWeightHandler = (event)=> {
    props.fontWeightHandler(event.target.value)
}

const handleColorChangeComplete = (value)=> {
    props.handleColorChangeComplete(value)
}


const addImageHandler = (imgSrc)=> {
    props.addImageHandler(imgSrc)
}



    return (
        <div className={classes.accordion_container}>
                <h3>Design Your Product</h3>
             <Accordion className={classes.accordion}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography>Add Text</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.accordion_details}>
                    <div className={classes.accordion_body}>
                        <label className={classes.accordion_label} >Text:</label>
                        <input className={classes.accordion_input} value={props.inputText}  onInput={inputHandler} type="text" name="text"/>
                    </div>
                    <div className={classes.accordion_body}>
                        <label className={classes.accordion_label} >Font Size:</label>
                        <input className={classes.accordion_input} value={props.font} onInput={fontHandler} type="number" name="text" max="5"/>
                    </div>
                    <div className={classes.accordion_body}>
                        <label className={classes.accordion_label} >Font</label>
                        <Select className={classes.ui_select}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={props.googleFont}
                            label="font"
                            onChange={handleChange}
                            >
                            <MenuItem value={"Roboto"}>Roboto</MenuItem>
                            <MenuItem value={"Dancing Script,cursive"}>Dancing Script</MenuItem>
                            <MenuItem value={"Shadows Into Light"}>'Shadows Into Light'</MenuItem>
                        </Select>
                    
                    </div>

                    <div className={classes.accordion_body}>
                        <label className={classes.accordion_label} >FontWeight</label>
                         <Select className={classes.ui_select}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={props.fontWeight}
                            label="fontweight"
                            onChange={fontWeightHandler}
                            >
                            <MenuItem value={"300"}>300</MenuItem>
                            <MenuItem value={"400"}>400</MenuItem>
                            <MenuItem value={"500"}>500</MenuItem>
                            <MenuItem value={"600"}>600</MenuItem>
                            <MenuItem value={"700"}>700</MenuItem>
                            <MenuItem value={"800"}>800</MenuItem>
                        </Select>
                    </div>

                    <div className={classes.accordion_body}>
                    <label className={classes.accordion_label} >Color</label>
   
                    <SketchPicker
                        className={classes.colorPicker}
                        color={ props.colorPicker }
                        onChangeComplete={ handleColorChangeComplete }
                    />

                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion className={classes.accordion}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                >
                <Typography>Add Img</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.accordion_details}>
                <div className={classes.accordion_body}>
                    <div className={classes.addImage}>

                        {props.dataCloth.drawImages.map((images,index)=>
                        <div className={classes.drawimg_wrapper}>

                            <img  src={require('./imgs/'+images+'')} key={index} />
                            <span onClick={()=>addImageHandler(images)} className={classes.add}>Add</span>
        
                        </div>
                    )}

                    </div>
                </div>
                </AccordionDetails>
            </Accordion>
            </div>
    );
};

export default SideBar;