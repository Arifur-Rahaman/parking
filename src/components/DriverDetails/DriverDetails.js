import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext } from 'react';
import userContext from '../../context/userContext';

const DriverDetails = ({from, to, parkNo, vehicleType, fromOwnerPage}) => {
    const {profileInfo} = useContext(userContext)
    return (
        <Box>
            <Typography variant='h4' sx={{color: "#1AA40E", padding: "0 0 10px 0"}}>{ fromOwnerPage? 'Car Booking Details': 'Your Details' }</Typography>
            <Typography variant='h6'>{profileInfo?.name}</Typography>
            <Typography variant='subtitle1'>Mobile Number: {profileInfo?.phone}</Typography>
            <Typography variant='subtitle1'>Booking Time: {from} - {to}</Typography>
            <Typography variant='subtitle1'>Booking Place: {parkNo}</Typography>
            <Typography sx={{color: 'blue'}} variant='subtitle1'>Vehicle: {vehicleType}</Typography>
        </Box>
    );
};

export default DriverDetails;