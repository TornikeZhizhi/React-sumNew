import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import ProductList from "./ProductList";
import {ProductsTheme} from "../../ContextApi/ProductsContext.js"


const Products = () => {

    const ctx = useContext(ProductsTheme);
    // console.log(ctx)
  
    return (
        <>
    { ctx.isLoading ? 
        <Box sx={{ display: 'flex' , justifyContent:'center',marginTop:"10%"}}>
            <CircularProgress />
        </Box>
        :
        <Container p={10}>
            <Typography variant="h3" m={3} style={{textAlign:"center"}}>Products List</Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    <ProductList posts={ctx.posts}></ProductList>
                </Grid>
            </Box>
            <Box mb={20}></Box>
        </Container> }
        </>
    )
}


export default Products;