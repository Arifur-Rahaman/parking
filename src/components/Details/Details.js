import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Details = ({from, to, parkNo}) => {
    return (
        <Box component='div'>
                <Typography variant='h4' align='center'>Booking Details</Typography>
                <Box componant='div' sx={{paddingTop: '20px'}}>
                    <Stack direction={{xs: "column", md: "row"}} justifyContent='center'>
                        <Box componant='div' sx={{borderRight: '1px solid black', padding: '20px'}}>
                            <Typography variant='h5'>Jacky Mong Marma</Typography>
                            <Typography variant='h5'>Mobile No. 01826751369</Typography>
                            <Typography variant='h5'>Mirpur 1</Typography>
                            <Typography variant='h5'>Road No. 7, House: 12-B/B</Typography>
                            <Typography variant='h5'>Booking Time: {from} - {to}</Typography>
                            <Typography variant='h5'>Booking Place: {parkNo}</Typography>

                        </Box>
                        <Box componant='div' sx={{padding: '20px'}}>
                            <Typography variant='h5'>Arifur Rahaman</Typography>
                            <Typography variant='h5'>Mobile No. 01727920991</Typography>
                            <Typography variant='h5'>Car No. C112090</Typography>
                        </Box>

                    </Stack>
                    <Stack justifyContent='center' alignItems='center'>
                        <Box componant='div' sx={{padding: '20px'}}>
                            <Typography variant='h6'>Booking Time: {from} - {to}</Typography>
                            <Typography variant='h6'>Booking Place: {parkNo}</Typography>
                        </Box>

                    </Stack>
                </Box>
            </Box>
    );
};

export default Details;