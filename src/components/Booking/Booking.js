import React, { useContext } from 'react';
import { Link} from 'react-router-dom';
import Box from '@mui/material/Box';
import Footer from '../Footer/Footer';
import HowWork from '../HowWork/HowWork';
import {Stack, Typography } from '@mui/material';
import { MainButton } from '../OwnerDetails/OwnerDetails';
import NavBar from '../NavBar/NavBar';
import DriverDetails from '../DriverDetails/DriverDetails';
import { bookingContext } from '../../App';
const Booking = () => {
    //const location = useLocation();
    //const {from, to, parkNo, vehicleType} = location.state
    const [{from, to, vehicleType, parkNo}, setBookingDetails] = useContext(bookingContext);
    return (
        <Box componant='div' sx={{width: '100%'}}>
            <NavBar></NavBar>
            <Box componant='div' sx={{paddingBottom: '20px'}}>
            <Stack direction={{xs: 'column',sm: 'row'}} justifyContent='space-around' alignItems='center'>
                <Stack direction='column' spacing={4}>
                    <Box>
                    <Typography variant='h4' sx={{textAlign: 'center', color: "#1AA40E", padding: "0 0 10px 0"}}>Parking Owner Details</Typography>
                        <Typography variant='h6'>Jacky Mong Marma</Typography>
                        <Typography variant='subtitle1'>Mobile Number: +8801826751369</Typography>
                        <Typography variant='subtitle1'>Mirpur-1</Typography>
                        <Typography variant='caption'>Road No. 7, 13-B/B</Typography>
                    </Box>
                    <DriverDetails from={from} to={to} vehicleType={vehicleType} parkNo={parkNo}/>
                </Stack>
                <Box>
                    <Typography variant='h6'>Total Parking Area: 50ft/50ft</Typography>
                </Box>
                
            </Stack>
            <Stack direction='row' justifyContent= 'center' alignItems='center'>
                
                <Link to="bookingDetails" style={{textDecoration: 'none'}}>
                <MainButton sx={{color: 'white'}}>Confirm Booking</MainButton>
                </Link>
            </Stack>
            </Box>
            <HowWork showTittle={false}></HowWork>
            <Footer></Footer>
        </Box>
    );
};

export default Booking;