import React from 'react';
import Rating from '@mui/material/Rating';
import { Button, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
const AvailablePlaces = ({ parkDetail }) => {
    const token = localStorage.getItem('idToken')
    const decoded = jwt_decode(token)
    return (
        <Box sx={{ p: '60px' }}>
            <Typography variant='h4' sx={{ textAlign: 'center', color: "#1AA40E", padding: "0 0 40px 0" }}>Available Parking Areas</Typography>
            <Grid container xs={12} justifyContent='center'>
                {
                    parkDetail.map((place, i) => {
                        const { name, address, email, location } = place;
                        const userEmail = decoded.email === email
                        return (
                            <>
                                {
                                    !userEmail && location?.lat && location?.lng && <Grid item xs={12} md={3}>
                                        <Link to={"placeDetails/" + email} style={{ textDecoration: 'none' }}>
                                            <Button sx={{ width: '100%', color: 'black' }}>
                                                <Paper elevation={8} sx={{ display: 'flex', flexDirection: 'column', padding: '15px' }}>
                                                    <Typography variant='h6'>{name}</Typography>
                                                    <Typography variant='subtitle1' component='p'>{address}</Typography>
                                                    <Typography variant='subtitle1' component='p' sx={{ textTransform: 'lowercase' }}>{email}</Typography>
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