import { Grid, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import React from 'react';
import { CounterBox } from '../Counter/Counter';
import ElectricCarIcon from '@mui/icons-material/ElectricCar';
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';
import BatteryAlertIcon from '@mui/icons-material/BatteryAlert';
import LocalConvenienceStoreIcon from '@mui/icons-material/LocalConvenienceStore';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import EngineeringIcon from '@mui/icons-material/Engineering';

const IconContainer=styled('div')({
    backgroundColor: 'white',
    padding: '20px',
    borderRadious: '5px'
})
const ParkingAmenities = () => {
    return (
        <Box component='div' sx={{backgroundColor: 'whitesmoke', p: '60px 0 60px 0'}}>
            <Typography variant='h4' sx={{pb:'60px',textAlign: 'center', fontWeight: 'bold', color:'#13C33E'}}>Parking Amenities</Typography>
            <Grid container spacing={2}>
                {
                    ["Open Air Covered Parking",
                     "Parking Open 24 Hours",
                     "Guaranted Reservation",
                     "Electrical Vehicle Charging",
                     "Free Battery Jump Services",
                     "Free Tire Inflation Services"
                    ].map((amenities, index)=>(
                        <Grid item sm={2}>
                            <CounterBox sx={{padding: '30px', textAlign: 'center'}}>
                                <IconContainer>
                                        {index===0 && <LocalParkingIcon sx={{color: 'green'}}/>}
                                        {index===1 && <LocalConvenienceStoreIcon sx={{color: 'green'}}/>}
                                        {index===2 && <EnhancedEncryptionIcon sx={{color: 'green'}}/>}
                                        {index===3 && <ElectricCarIcon sx={{color: 'green'}}/>}
                                        {index===4 && <BatteryAlertIcon sx={{color: 'green'}}/>}
                                        {index===5 && <EngineeringIcon sx={{color: 'green'}}/>}

                                </IconContainer>
                                <Typography variant='subtittle1' sx={{paddingTop: '10px'}}>{amenities}</Typography>
                            </CounterBox>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    );
};

export default ParkingAmenities;