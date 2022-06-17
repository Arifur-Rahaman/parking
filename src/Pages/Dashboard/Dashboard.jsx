import { CircularProgress, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Dashboard = () => {
    const [driverBooking, setDriverBooking] = useState([])
    const [ownerBooking, setOwnerBooking] = useState([])
    const { email } = useParams();
    useEffect(() => {
        fetch(`http://localhost:5000/driverBooking?email=${email}`)
            .then(res => res.json())
            .then(data => setDriverBooking([...data]))
    }, [email])

    useEffect(() => {
        fetch(`http://localhost:5000/ownerBooking?email=${email}`)
            .then(res => res.json())
            .then(data => setOwnerBooking([...data]))
    }, [email])

    return (
        <Box component='div' sx={{ width: '100%', p: '0px 32px' }}>
            <Box component='div' sx={{ mb: '86px' }}>
                <Typography variant='h6' sx={{ m: '24px 0' }}>All bookings whre you are a driver: </Typography>
                <>
                    {

                        driverBooking.length > 0
                            ? <Grid container spacing={2}>
                                {
                                    driverBooking.map((booking) => (
                                        <Grid item xs={12} md={3} >
                                            <Paper elevation={8} sx={{ display: 'flex', flexDirection: 'column', padding: '15px' }}>
                                                <Typography variant='subtitle1'>Owner Name: {booking.ownerName}</Typography>
                                                <Typography variant='subtitle1'>Phone: {booking.ownerPhone}</Typography>
                                                <Typography variant='subtitle1' component='p'> Address: {booking.ownerAddress}</Typography>
                                                <Typography>Time: {booking.from} - {booking.to}</Typography>
                                                <Typography>Place: {booking.parkNo}</Typography>
                                                <Typography variant='subtitle1'>Booking Time: {booking?.bookingTime}</Typography>
                                            </Paper>
                                        </Grid>
                                    ))
                                }
                            </Grid>
                            : <CircularProgress />

                    }
                </>
            </Box>

            <Box component='div'>
                <Typography variant='h6' sx={{ m: '24px 0' }}>All bookings whre you are a owner: </Typography>
                {ownerBooking.length > 0

                    ? <Grid container spacing={2}>
                        {
                            ownerBooking.map((booking) => (
                                <Grid item xs={12} md={3} >
                                    <Paper elevation={8} sx={{ display: 'flex', flexDirection: 'column', padding: '15px' }}>
                                        <Typography variant='subtitle1'>Driver Name: {booking.driverName}</Typography>
                                        <Typography variant='subtitle1'>Phone: {booking.driverPhone}</Typography>
                                        <Typography>Time: {booking.from} - {booking.to}</Typography>
                                        <Typography>Place: {booking.parkNo}</Typography>
                                        <Typography variant='subtitle1'>Booking Time: {booking?.bookingTime}</Typography>
                                        <Typography variant='caption'>Transaction id: {booking.id}</Typography>
                                        <Typography variant='subtitle1'>Booking Time: {booking?.bookingTime}</Typography>
                                    </Paper>
                                </Grid>
                            ))
                        }
                    </Grid>
                    : <CircularProgress />
                }
            </Box>

        </Box>
    );
};

export default Dashboard;