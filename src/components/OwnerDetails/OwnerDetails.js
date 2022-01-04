import { Button, CardActions, Grid, Rating, Stack, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import TextField from '@mui/material/TextField';
import { bookingContext } from '../../App';

const BookedButton = styled(Button)(({theme})=>({
    color: 'white',
    backgroundColor: 'lightgray',
    
}))
const UnBookedButton = styled(Button)(({theme})=>({
    color: 'white',
    backgroundColor: 'black',
    '&:hover': {
        backgroundColor: 'blue',
        fontWeight: 'bold',
    },
    

}))
export const MainButton = styled(Button)(({theme})=>({
    width: '200px', 
    height: '30px', 
    backgroundColor: '#13C33E',
    '&:hover': {
        backgroundColor: '#3A3B3C',
    },
}))
const OwnerDetails = (props) => {
    const [startTime, setStartTime] =useState(null);
    const [endTime, setEndTime] = useState(null);
    const [clickedButton, setClickedButton] = useState(null)
    const [vehicle, setVehicle] = React.useState('');

    const [bookingDetails, setBookingDetails] = useContext(bookingContext);

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
        setBookingDetails({from: startTime, to: endTime, parkNo: clickedButton, vehicleType: vehicle});
    }
   
      
    return (
        <Box>
        <Typography variant='h4' align='center' sx={{color: '#13C33E', paddingBottom: '10px'}}>Parking Owner Details</Typography>
        <Grid 
            container
            justifyContent = "space-around"
            alignItems = 'center'
            sx={{flexDirection: {xs:'column', md:'row'}}}

            
            >
            <Grid item>
                <Box componant="div" sx={{display: 'flex', flexDirection: 'column', padding: '15px'}}>
                    <Typography variant='h4'>Jacky Mong Marma</Typography>
                    <Typography>{"ID:"+props.palaceId}</Typography>
                    <Typography variant='h6'>Mirpur-1</Typography>
                    <Typography variant='caption'>Road 7, House: 13B/B</Typography>
                    <Rating name="read-only" value= '5' readOnly sx={{color: 'black'}}/>
                </Box>
            </Grid>
            <Grid item>
                <Typography variant='h6'>Total Place for pariking: 50ft/50ft</Typography>
                <Stack direction='row' spacing={2}  sx={{padding: '10px'}}>
                    <BookedButton variant='contained' disabled>P1</BookedButton>
                    <UnBookedButton onClick={handleClick} sx={{backgroundColor: clickedButton==='P2'? 'blue': 'black'}} >P2</UnBookedButton>
                    <UnBookedButton onClick={handleClick} sx={{backgroundColor: clickedButton==='P3'? 'blue': 'black'}}>P3</UnBookedButton>
                    <UnBookedButton  onClick={handleClick} sx={{backgroundColor: clickedButton==='P4'? 'blue': 'black'}}>P4</UnBookedButton>
                </Stack>
                <Box component='div'>
                    <Typography variant='h6' align='center' sx={{color: '#13C33E'}}>Select Time:</Typography>
                    <Stack component="form" noValidate spacing={3} direction='row' sx={{pt: "10px"}}>
                        <TextField
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
                        <TextField
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

                <Box sx={{ minWidth: 160, padding: '10px' }}>
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
                    <MainButton size="large" variant="contained" onClick={handleBooking} >Booking</MainButton>
                </Link>
        </CardActions>
        </Box>
    );
};

export default OwnerDetails;