import React from 'react';
import Rating from '@mui/material/Rating';
import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import {Link } from "react-router-dom";
const AvailablePlaces = () => {
    const places = [1,2,3,4,5,6,7,8,9,10,11,12];
    return (
        <>
        <Typography variant='h4' sx={{textAlign: 'center', color: "#1AA40E", padding: "0 0 20px 0"}}>Available Places</Typography>
        <Grid container xs={12}>
            {
                places.map((place,i)=>(
                    <Grid item xs={3}>
                        <Link to={"placeDetails/"+i} style={{ textDecoration: 'none'}}>
                        <Button sx={{width: '100%', color: 'black'}}>
                            <Box componant="div" sx={{display: 'flex', flexDirection: 'column', borderRight: '1px solid black', padding: '15px'}}>
                                <Typography variant='h6'>Mirpur-1</Typography>
                                <Typography variant='caption'>Road 7, House: 13B/B</Typography>
                                <Rating name="read-only" value= '5' readOnly sx={{color: 'black'}}/>
                            </Box>
                        </Button>
                        </Link>
                    </Grid>
                ))
            }
        </Grid>
        </>
    );
};

export default AvailablePlaces;