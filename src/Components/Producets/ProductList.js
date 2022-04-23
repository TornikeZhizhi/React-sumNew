import React, { useEffect, useState } from "react";
import {NavLink,Link } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    // textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const ProductList = (props)=> {
    return (
        <> 
        {props.posts.map((data)=>(
            <Grid item xs={6} key={data.id}>
               <Item>
                   <Typography variant="h5" color="#000" m={2} textTransform="capitalize">
                         {data.title.slice(0,10)}
                   </Typography>
                     <Divider></Divider>
                   <Typography variant="h6" p={2}>
                     {data.body.split(' ').splice(0,5).join(' ') + "..."}
                   </Typography>

                    <Button variant="contained"
                     component={Link}
                     to={`/products/${data.id}`}
                     href="#contained-buttons">
                        Read More...</Button>
               </Item>
            </Grid>
          ))}
      </>
    )

  }


  export default ProductList;