import React from 'react';
import { Button, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { parkContext } from '../../context/parkContext';

const AvailablePlaces = () => {
    const {parkState} = useContext(parkContext)
    const {parks} = parkState
    return (
        <Box sx={{ p: '60px' }}>
            <Typography variant='h4' sx={{ textAlign: 'center', color: "#1AA40E", padding: "0 0 40px 0" }}>Available Parking Areas</Typography>
            <Grid container justifyContent='center'>
                {
                    parks.map((park, i) => {
                        const {address, _id} = park;
                        return (
                            <>
                                {
                                    <Grid item xs={12} md={3}>
                                        <Link to={"placeDetails/" + _id} style={{ textDecoration: 'none' }}>
                                            <Button sx={{ width: '100%', color: 'black' }}>
                                                <Paper elevation={8} sx={{ display: 'flex', flexDirection: 'column', padding: '15px' }}>
                                                    {/* <Typography variant='h6'>{name}</Typography> */}
                                                    <Typography variant='subtitle1' component='p'>{address}</Typography>
                                                    {/* <Typography variant='subtitle1' component='p' sx={{ textTransform: 'lowercase' }}>{email}</Typography> */}
                                                </Paper>
                                            </Button>
                                        </Link>
                                    </Grid>
                                }
                            </>
                        )
                    })
                }
            </Grid>
        </Box>
    );
};

export default AvailablePlaces;