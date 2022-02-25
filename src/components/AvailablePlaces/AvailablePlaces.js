import React from 'react';
import Rating from '@mui/material/Rating';
import { Button, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import {Link } from "react-router-dom";
const AvailablePlaces = ({parkDetail}) => {
    return (
        <Box sx={{p:'60px'}}>
        <Typography variant='h4' sx={{textAlign: 'center', color: "#1AA40E", padding: "0 0 40px 0"}}>Available Places</Typography>
        <Grid container xs={12}>
            {
                parkDetail.map((place,i)=>{
                    const {area, address, ratings, ownerName,id} = place;
                    
                    return(
                    <Grid item xs={12} md={3}>
                        <Link to={"placeDetails/"+id} style={{ textDecoration: 'none'}}>
                        <Button sx={{width: '100%', color: 'black'}}>
                            <Paper elevation={8} sx={{display: 'flex', flexDirection: 'column', borderRight: '1px solid black', padding: '15px'}}>
                                <Typography variant='h5'>{area}</Typography>
                                <Typography variant='h6'>{ownerName}</Typography>
                                <Typography variant='caption'>{address}</Typography>
                                <Typography><Rating name="read-only" value= {ratings} readOnly sx={{color: 'black'}}/></Typography>
                            </Paper>
                        </Button>
                        </Link>
                    </Grid>
                )})
            }
        </Grid>
        </Box>
    );
};

export default AvailablePlaces;