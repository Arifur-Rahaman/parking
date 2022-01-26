import React from 'react';
import Rating from '@mui/material/Rating';
import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import {Link } from "react-router-dom";
const AvailablePlaces = ({parkDetail}) => {
    return (
        <>
        <Typography variant='h4' sx={{textAlign: 'center', color: "#1AA40E", padding: "0 0 20px 0"}}>Available Places</Typography>
        <Grid container xs={12}>
            {
                parkDetail.map((place,i)=>{
                    const {area, address, ratings, ownerName,id} = place;
                    
                    return(
                    <Grid item xs={3}>
                        <Link to={"placeDetails/"+id} style={{ textDecoration: 'none'}}>
                        <Button sx={{width: '100%', color: 'black'}}>
                            <Box componant="div" sx={{display: 'flex', flexDirection: 'column', borderRight: '1px solid black', padding: '15px'}}>
                                <Typography variant='h5'>{area}</Typography>
                                <Typography variant='h6'>{ownerName}</Typography>
                                <Typography variant='caption'>{address}</Typography>
                                <Typography><Rating name="read-only" value= {ratings} readOnly sx={{color: 'black'}}/></Typography>
                            </Box>
                        </Button>
                        </Link>
                    </Grid>
                )})
            }
        </Grid>
        </>
    );
};

export default AvailablePlaces;