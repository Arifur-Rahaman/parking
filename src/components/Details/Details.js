import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
    const {bookingId} = useParams();
    const [bookingData, setBookingData] = useState({})
    useEffect(()=>{
        fetch(`http://localhost:5000/booking/${bookingId}`)
        .then(res=>res.json())
        .then(data=>setBookingData({...data}))
    }, [bookingId])
    const { driverName,driverEmail, driverPhone, ownerEmail, ownerName, ownerPhone, ownerAddress, from, to, parkNo, id} = bookingData
    console.log("====booking data",bookingData)

    return (
        <Box component='div'>
            { 
            Object.keys(bookingData).length === 0
            ? <p>Loading.........</p>
            :<>
                <Typography variant='h4' align='center'>Booking Details</Typography>
                <Box componant='div' sx={{paddingTop: '20px'}}>
                    <Stack direction={{xs: "column", md: "row"}} justifyContent='center'>
                        <Box componant='div' sx={{borderRight: '1px solid black', padding: '20px'}}>
                            <Typography variant='h6'>{driverName}</Typography>
                            <Typography variant='h6'>{driverEmail}</Typography>
                            <Typography variant='h6'>{driverPhone}</Typography>
                        </Box>
                        <Box componant='div' sx={{padding: '20px'}}>
                            <Typography variant='h6'>{ownerName}</Typography>
                            <Typography variant='h6'>{ownerPhone}</Typography>
                            <Typography variant='h6'>{ownerEmail}</Typography>
                            <Typography variant='subtitle1'>{ownerAddress}</Typography>
                        </Box>

                    </Stack>
                    <Stack justifyContent='center' alignItems='center'>
                        <Box componant='div' sx={{padding: '20px'}}>
                            <Typography>{}</Typography>
                            <Typography variant='h6'>Booking Time: {from} - {to}</Typography>
                            <Typography variant='h6'>Booking Place: {parkNo} </Typography>
                            <Typography variant='subtitle1'>Transaction Id: <span style={{color:'#333'}}> {id}</span></Typography>
                        </Box>
                    </Stack>
                </Box>
                </>
                }
            </Box>
    );
};

export default Details;