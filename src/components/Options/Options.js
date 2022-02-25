import { Box } from '@mui/material';
import Discount from '../../components/Discount/Discount'
import React, { useContext } from 'react';
import Tariffs from '../Tariffs/Tariffs';
import Footer from '../Footer/Footer';
import ParkingAmenities from '../ParkingAmenities/ParkingAmenities';
import HowWork from '../HowWork/HowWork';
import ParkingOptions from '../ParkingOptions/ParkingOptions';
import { authContext } from '../../App';
import NavBar from '../NavBar/NavBar';
import SubHeader from '../SubHeader/SubHeader';

const Options = () => {
    const [{email}, setSingedInUser] = useContext(authContext);
    return (
        <Box sx={{width: '100%'}}>
            {email&& <NavBar></NavBar>}
            <SubHeader title={'Parking Options'}></SubHeader>
            <ParkingOptions showTittle={false}></ParkingOptions>
            <ParkingAmenities></ParkingAmenities>
            <Discount></Discount>
            <Tariffs></Tariffs>
            <HowWork></HowWork>
            <Footer></Footer>
        </Box>
    );
};

export default Options;