
import { Box } from '@mui/material';
import React, { useContext } from 'react';
import { bookingContext } from '../../App';
import Details from '../Details/Details';

const ConfirmRequest = () => {
    const [{from, to, parkNo}, setBookingDetails] = useContext(bookingContext);
    return (
        <Box componant='div' sx={{width: '100%'}}>
            <Details from={from} to={to} parkNo={parkNo}></Details>
        </Box>
    );
};

export default ConfirmRequest;