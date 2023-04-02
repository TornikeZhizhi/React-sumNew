import React, { useState ,useContext} from 'react';
import TextField from '@mui/material/TextField';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { PersonToDoTheme } from './PersonTodoContext/PersonTodoContext';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const PersonFilters = () => {

    const [age, setAge] = useState("")

    const handleChange = (event) => {
        setAge(event.target.value);
      };

      let ctx = useContext(PersonToDoTheme)

    return (
        <div className='person_filters'>
            <div className='weather'></div>
                <Paper
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                >
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search Google Maps"
                        inputProps={{ 'aria-label': 'search google maps' }}
                        onChange={(e)=>{
                            ctx.setSearchWord(e.target.value)
                        }}
                    />
                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>


                </Paper>
            <FormControl className='filter_select'>
                <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
                >
                <MenuItem value={"name"}>First Name</MenuItem>
                <MenuItem value={"lastname"}>Last Name</MenuItem>
                <MenuItem value={"income"}>Income</MenuItem>
                </Select>
              </FormControl>
              

        </div>
    );
};

export default PersonFilters;