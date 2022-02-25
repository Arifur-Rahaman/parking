import {Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Footer from '../Footer/Footer';
import HowWork from '../HowWork/HowWork';
import React, { useContext } from 'react';
import NavBar from '../NavBar/NavBar';
import Details from '../Details/Details';
import { bookingContext } from '../../App';

const BookingDetails = () => {
    // const location = useLocation();
    // const {from, to, parkNo} = location.state
    const [{from, to, parkNo}] = useContext(bookingContext);
    return (
        <Box component='div' sx={{width: '100%'}}>
            <NavBar></NavBar>
            <Box componant='div' sx={{p: '60px'}}>
                <Grid container justifyContent='center'>
                    <Grid item  sx={{backgroundColor: 'whitesmoke', padding: '20px', width: '80%'}}>
                        <Typography align='center'>Your request is processing. You will be confirmed soon</Typography>
                    </Grid>
                </Grid>
                <Details from={from} to={to} parkNo={parkNo}></Details>
                <p>hek</p>
            </Box>
            
            <HowWork showTittle={false}></HowWork>
            <Footer></Footer>

        </Box>
    );
};

export default BookingDetails;