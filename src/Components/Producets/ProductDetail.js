import React, { useEffect, useState } from "react";
import {useParams,Link}  from "react-router-dom";
import axios from "axios";
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
const Product = () => {

    const [title,setTitle] = useState();
    const [text,setText] = useState();
    const [isLoading,setIsLoading] = useState(true);
    const params = useParams()

    useEffect(()=>{

        axios.get('https://jsonplaceholder.typicode.com/posts/'+params.id)
        .then(response=>{
              setTitle(response.data.title);
              setText(response.data.body);
              setIsLoading(false);
        })

    },[])

    
    useEffect(()=>{

        axios.get('https://dummyjson.com/products/')
        .then(response=>{
              console.log(response)
        })

    },[])


    return (
        <>
        { isLoading ? 
            <Box sx={{ display: 'flex' , justifyContent:'center',marginTop:"10%"}}>
                <CircularProgress />
            </Box>
            :
        <Container>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}   justifyContent="center">
                    <Grid item xs={8} >
                        <Typography variant="h4" textTransform="capitalize" m={3} ml={0}>{title}</Typography>
                        <Typography textTransform="capitalize" variant="h5" mb={1}>{text}</Typography>  
                        <Button variant="contained"
                            component={Link}
                            to={`/products`}
                            href="#contained-buttons">
                                Go Back</Button>
                    </Grid>
                </Grid>
            </Box>
        </Container>
        }
    </>
    )
}


export default Product;