import React, { useState } from "react";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import StoredResource from "./StoredResources";
import AddNewResources from "./AddNewResources";
import TextField from '@mui/material/TextField';
import Ptest from "../Producets/Ptest";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const ResourcesMain = (props) => {

    const [resourceData, setResourceData] = useState([])
    const [filterName, setFilterName] = useState("")

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };


    //resources Handlers
    
    const resourceAddHandler= (data)=> {
        setResourceData([...resourceData,data])
    }

    const resourceDeleteHandler= (id)=> {
        const deletedData = resourceData.filter(item=>item.id !== id)
        setResourceData(deletedData)
    }

   const resourceEditIdeHandler =(id)=> {
      const editData = resourceData.map(data=>{    
          return data.id == id ?  {...data,edit:true}  : data 
      })
      setResourceData(editData)
   }

   const confirmedEditHandler =(newData,id)=>{
      const editData = resourceData.map(data=>{
          return data.id === id ? {...data,name:newData.name, age:newData.age,edit:false} : data
      })
      setResourceData(editData)
   }


   const filteredResouce =(event)=> {

     setFilterName(event.target.value)
     
   }
   let filterInput;
    if(resourceData.length > 0){
      
       filterInput = <TextField onChange={filteredResouce} id="outlined-basic" 
       label="search resouces..." variant="outlined" type="text" style={{display:"block",width:300, margin:"20px auto"}} />
    }



    return (
        <Container p={10}>
          {/* <Ptest></Ptest> */}
            <Typography variant="h3" m={3} style={{textAlign:"center"}}>Resources</Typography>
            <Box sx={{ flexGrow: 1,borderRadius:"5px" }}>
                <Grid container spacing={1}>
                    <Box className="resource_wrapper" sx={{ width: '60%', margin:"0 auto" }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        {/* <Tabs value={value} onChange={handleChange} 
                        aria-label="basic tabs example">
                            <Tab label="Add New Resources" {...a11yProps(0)} />
                            <Tab label=" Stored Resources" {...a11yProps(1)} />
                        </Tabs> */}
                        </Box>
                       
                           
                           <AddNewResources
                           resourceAddHandler={resourceAddHandler}>
                          </AddNewResources>
                    
                      
                             <>
                             {filterInput}
                             <StoredResource 
                            filterWord={filterName}
                            resourceData={resourceData}
                            confirmedEditHandler={confirmedEditHandler}
                            resourceEditIdeHandler={resourceEditIdeHandler}
                             resourceDeleteHandler={resourceDeleteHandler}>
                               
                            </StoredResource>
                            </>
                         
                    </Box>
                </Grid>
            </Box>
            <Box mb={20}></Box>
        </Container> 
    );

}


export default ResourcesMain;