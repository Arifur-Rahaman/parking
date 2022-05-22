import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Footer from '../../components/Footer/Footer';
import HowWork from '../../components/HowWork/HowWork';
import { Stack, Typography } from '@mui/material';
import { MainButton } from '../../Shared/Buttons'
import NavBar from '../../components/NavBar/NavBar';
import DriverDetails from '../../components/DriverDetails/DriverDetails';
import { bookingContext } from '../../App';
import parkOwnerContext from '../../context/parkOwnerContext';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../../components/CheckoutForm/CheckoutForm';
import jwt_decode from "jwt-decode";
import userContext from '../../context/userContext';

const Booking = () => {
    //const location = useLocation();
    const [{ from, to, vehicleType, parkNo }, setBookingDetails] = useContext(bookingContext);
    const { ownerInfo } = useContext(parkOwnerContext)
    const {setProfileInfo } = useContext(userContext)
    const stripePromise = loadStripe('pk_test_51L0lwtHGg1scLdsyE5VXYVDuwLHSm6FyJP5nArf3ohCOMY6zUiYdzR0PpBNcmEgpc5H6SyeHMWVzzuy9vATbb8CV00ZSCeeS6z')

    useEffect(()=>{
        const token = localStorage.getItem('idToken')
        if(token){
            const decoded = jwt_decode(token)
            const url = `http://localhost:5000/user?email=${decoded.email}`;
            fetch(url)
            .then(res => res.json())
            .then(data => {
                setProfileInfo(data[0]);
            })
        }
    }, [])

    return (
        <Box componant='div' sx={{ width: '100%' }}>
            <NavBar></NavBar>
            <Box componant='div' sx={{ p: '60px' }}>
                <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent='space-around' alignItems='center'>
                    <Stack direction='column' spacing={4}>
                        <Box>
                            <Typography variant='h4' sx={{ textAlign: 'center', color: "#1AA40E", padding: "0 0 10px 0" }}>Parking Owner Details</Typography>
                            <Typography variant='h6'>{ownerInfo?.name}</Typography>
                            <Typography variant='subtitle1'>Phone: {ownerInfo?.phone}</Typography>
                            <Typography variant='caption'>{ownerInfo?.address}</Typography>
                        </Box>
                        <DriverDetails from={from} to={to} vehicleType={vehicleType} parkNo={parkNo} />
                    </Stack>
                    <Box>
                        <Typography variant='h6'>Total Parking Area: 50ft/50ft</Typography>
                    </Box>

                </Stack>

                <Box component='div' sx={{ maxWidth:'1160px', m: '0 auto', pt: '32px'}}>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm />
                    </Elements>
                </Box>
                {/* <Stack direction='row' justifyContent='center' alignItems='center'>

                    <Link to="bookingDetails" style={{ textDecoration: 'none' }}>
                        <MainButton sx={{ color: 'white' }}>Confirm Booking</MainButton>
                    </Link>
                </Stack> */}
            </Box>
            <HowWork showTittle={false}></HowWork>
            <Footer></Footer>
        </Box>
    );
};

export default Booking;