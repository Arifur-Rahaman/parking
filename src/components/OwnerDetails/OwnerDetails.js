import { Button, CardActions, Grid, Rating, Stack, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import TextField from '@mui/material/TextField';
import { bookingContext } from '../../App';
import { MainButton } from '../../Shared/Buttons';
import parkOwnerContext from '../../context/parkOwnerContext';
const ParkSlotButton = styled(Button)(({theme})=>({
    color: 'white',
    display:'inline-block',
    backgroundColor: 'black',
    '&:hover': {
        backgroundColor: 'blue',
        fontWeight: 'bold',
    },
    "&:disabled": {
        backgroundColor: 'gray'
      }
    

}))
const OwnerDetails = ({ownerEmail}) => {

    const [startTime, setStartTime] =useState(null);
    const [endTime, setEndTime] = useState(null);
    const [clickedButton, setClickedButton] = useState(null)
    const [vehicle, setVehicle] = React.useState('');
    const [bookingDetails, setBookingDetails] = useContext(bookingContext);
    const {ownerInfo, setOwnerInfo} = useContext(parkOwnerContext)
    useEffect(()=>{
        const url = `https://safe-brook-97366.herokuapp.com/user?email=${ownerEmail}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setOwnerInfo(data[0]))
    }, [])


    const handleChange = (event) => {
        setVehicle(event.target.value);
    };
    const handleStartTimeChange = (event) => {
          setStartTime(event.target.value);
      };
    const handleEndTimeChange =(event)=>{
        setEndTime(event.target.value)
    }
    const handleClick = (event)=>{
        setClickedButton(event.target.innerText);
    }
    const handleBooking = ()=>{
        setBookingDetails({from: startTime, to: endTime, parkNo: clickedButton, vehicleType: vehicle, price: 15});
    }
    return (
        <Box sx={{p:'60px 0'}}>
        <Typography variant='h4' align='center' sx={{color: '#13C33E', pb: '40px'}}>Parking Owner Details</Typography>
        <Grid 
            container
            justifyContent = "space-around"
            alignItems = 'center'
            sx={{flexDirection: {xs:'column', md:'row'}}}

            
            >
            <Grid item>
                <Box componant="div" sx={{display: 'flex', flexDirection: 'column', padding: '15px'}}>
                    <Typography variant='h4'>{ownerInfo?.name}</Typography>
                    <Typography variant='h6'>{ownerInfo?.email}</Typography>
                    <Typography variant='caption'>{ownerInfo?.address}</Typography>
                    {/* <Rating name="read-only" value= {data.ratings} readOnly sx={{color: 'black'}}/> */}
                </Box>
            </Grid>
            <Grid item>
                <Typography variant='h6'>Total Place for pariking: 50ft/50ft</Typography>
                <Box sx={{width:'400px', display:'flex', flexWrap:'wrap', gap:'4px', justifyContent:'stretch'}}>
                    {
                        ownerInfo?.parkingSlots?.map(slot=>(
                            <ParkSlotButton onClick={handleClick} disabled={slot.booked} sx={{backgroundColor: clickedButton===`${slot.slotName}`? 'blue': 'black'}}>{slot.slotName}</ParkSlotButton> 
                        ))
                    }
                </Box>
                <Box component='div'>
                    <Typography variant='h6' align='center' sx={{color: '#13C33E'}}>Select Time:</Typography>
                    <Stack component="form" noValidate spacing={3} direction='row' justifyContent='space-between' sx={{pt: "10px", width:'340px'}}>
                        <TextField fullWidth
                            id="time"
                            label="From"
                            type="time"
                            defaultValue="07:30"
                            InputLabelProps={{
                            shrink: true,
                            }}
                            inputProps={{
                            step: 300, // 5 min
                            }}
                            sx={{ width: 150 }}
                            onChange={handleStartTimeChange}
                        />
                        <TextField fullWidth
                            id="time"
                            label="To"
                            type="time"
                            defaultValue="08:30"
                            InputLabelProps={{
                            shrink: true,
                            }}
                            inputProps={{
                            step: 300, // 5 min
                            }}
                            sx={{ width: 150 }}
                            onChange = {handleEndTimeChange}
                        />
                    </Stack>
                </Box>

                <Box component='div' sx={{ width:'340px', mt: '10px'}}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Vehicle</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={vehicle}
                        label="Vehile"
                        onChange={handleChange}
                        >
                        <MenuItem value={'Car'}>Car</MenuItem>
                        <MenuItem value={'Byke'}>Byke</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

            </Grid>

        </Grid>

        <CardActions sx={{ justifyContent: "center" }}>
                <Link to="booking" state={{from: startTime, to:endTime, parkNo: clickedButton, vehicleType: vehicle}} style={{textDecoration: 'none'}}>
                    <MainButton size="large" variant="contained" onClick={handleBooking} >Book Now</MainButton>
                </Link>
        </CardActions>
        </Box>
    );
};

export default OwnerDetails;