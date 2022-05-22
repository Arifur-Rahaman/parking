import { Grid,Stack, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext, useEffect, useState } from 'react';
import userContext from '../../context/userContext';
import { MainButton, SecondaryButton } from '../../Shared/Buttons';
import jwt_decode from "jwt-decode";

const Profile = () => {
    const { profileInfo, setProfileInfo } = useContext(userContext)

    useEffect(() => {
        setParkingSlots(profileInfo?.slots);
    }, [profileInfo?.slots])

    useEffect(() => {
        const token = localStorage.getItem('idToken')
        const decoded = jwt_decode(token)
        const url = `http://localhost:5000/user?email=${decoded.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProfileInfo(data[0])
            })
    }, [])


    const setParkingSlots = (parkNumber) => {
        const slots = [];
        for (let i = 0; i < parkNumber; i++) {
            slots[i] = {
                slotName: `P${i + 1}`,
                booked: false
            }
        }
        const newProfileInfo = { ...profileInfo }
        newProfileInfo.parkingSlots = slots;
        setProfileInfo(newProfileInfo)
    }

    const handleInputChange = (e) => {
        const newProfileInfo = { ...profileInfo }
        newProfileInfo[e.target.name] = e.target.value;
        setProfileInfo(newProfileInfo);
    }

    const handleLocationInputChange = (e) =>{
        const newProfileInfo = { ...profileInfo }
            newProfileInfo.location = {
                ...profileInfo.location,
                [e.target.name]: Number(e.target.value)
            };
            setProfileInfo(newProfileInfo);
    }

    const handleLocation = () => {
        const getLocation = (position) => {
            const newProfileInfo = { ...profileInfo }
            newProfileInfo.location = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            setProfileInfo(newProfileInfo);
        }
        const handleError = (err) => {
            console.log(err)
        }
        navigator.geolocation.getCurrentPosition(getLocation, handleError);
    }

    const handleUpdateProfileInfo = () => {
        delete profileInfo._id;
        fetch('http://localhost:5000/user/update', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(profileInfo)
        })
            .then(res => res.json())
            .then(data => console.log(data));

    }

    
    
    return (
        <Box component='div' sx={{ width: '100%', p: '0 64px' }}>
            <p>Manage Profile</p>
            <Box>
                <Typography variant='subtitle1' sx={{ border: '1px solid #ddd', borderBottom: 'none', p: '16px' }}>Basic Info</Typography>
                <Stack rowGap='16px' sx={{ border: '1px solid #ddd', p: '16px' }}>
                    <Grid container>
                        <Grid item md='1'>
                            <Typography variant='subtitle'>Name</Typography>
                        </Grid>
                        <Grid md='11'>
                            <TextField fullWidth size='small' variant="outlined" name='name' value={profileInfo?.name} onChange={handleInputChange} />
                        </Grid>
                    </Grid>
                    <Grid container direction='row' alignItems='center' spacing={4}>
                        <Grid item md='1'>
                            <Typography variant='subtitle'>Phone</Typography>
                        </Grid>
                        <Grid item md='11'>
                            <TextField fullWidth id="outlined-basic" size='small' variant="outlined" name='phone' value={profileInfo?.phone} onChange={handleInputChange} />
                        </Grid>
                    </Grid>
                </Stack>
            </Box>
            <Box>
                <Typography variant='subtitle1' sx={{ border: '1px solid #ddd', borderBottom: 'none', p: '16px' }}>Park Info</Typography>
                <Stack rowGap='16px' sx={{ border: '1px solid #ddd', p: '16px' }}>
                    <Grid container>
                        <Grid item md='1'>
                            <Typography variant='subtitle'>Address </Typography>
                        </Grid>
                        <Grid md='11'>
                            <TextField fullWidth id="outlined-basic" size='small' variant="outlined" onChange={handleInputChange} name='address' value={profileInfo?.address} />
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item md='1'>

                        </Grid>
                        <Grid item md='11'>
                            <SecondaryButton onClick={handleLocation}>Acces Location</SecondaryButton>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item md='1'>
                            <Typography variant='subtitle'>Latitude </Typography>
                        </Grid>
                        <Grid md='11'>
                            <TextField fullWidth id="outlined-basic" size='small' name='lat' variant="outlined" onChange={handleLocationInputChange} value={profileInfo?.location?.lat} />
                        </Grid>
                    </Grid>
                    <Grid container direction='row' alignItems='center' spacing={4}>
                        <Grid item md='1'>
                            <Typography variant='subtitle'>Longitude</Typography>
                        </Grid>
                        <Grid item md='11'>
                            <TextField fullWidth id="outlined-basic" size='small' name='lng' variant="outlined" onChange={handleLocationInputChange} value={profileInfo?.location?.lng} />
                        </Grid>
                    </Grid>
                    <Grid container direction='row' alignItems='center' spacing={4}>
                        <Grid item md='1'>
                            <Typography variant='subtitle'>Number of Slots</Typography>
                        </Grid>
                        <Grid item md='11'>
                            <TextField fullWidth id="outlined-basic" size='small' variant="outlined" name='slots' value={profileInfo?.slots} onChange={handleInputChange} />
                        </Grid>
                    </Grid>
                    <Box component='div' textAlign='right'>
                        <MainButton onClick={handleUpdateProfileInfo}>Update Profile</MainButton>
                    </Box>
                </Stack>
            </Box>
        </Box>
    );
};

export default Profile;