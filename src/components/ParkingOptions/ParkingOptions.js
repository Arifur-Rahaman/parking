import React from 'react';
import './ParkingOptions.css'
import optionImage from '../../assets/images/img-serv-copyright.webp'
import { Box, styled } from '@mui/system';
import {List, P} from '../HowWork/HowWork'
import { Grid, Stack } from '@mui/material';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import TimerIcon from '@mui/icons-material/Timer';
const OptionImage = styled('img')(({theme})=>({
    height: '350px',
    [theme.breakpoints.down('md')]:{
        height: '200px'
    }
}))
const OptionStack = styled('div')(({theme})=>({
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('md')]:{
       flexDirection: 'column-reverse' 
    }
}))

const ParkingOptions = ({showTittle}) => {
    const parkingOptions =[
        {
            optionTitle: 'Valet Parking',
            optionDetail: 'We offer valet parking service for restaurants, stores and other business in your city'
        },
        {
            optionTitle: 'Short-Term Lot',
            optionDetail: 'We offer Short-Term Lot parking service for restaurants, stores and other business in your city'
        },
        {
            optionTitle: 'Long-Term Lot',
            optionDetail: 'We offer Long-Term Lot parking service for restaurants, stores and other business in your city'
        },
        {
            optionTitle: 'Economy Lot',
            optionDetail: 'We offer Economy Lot parking service for restaurants, stores and other business in your city'
        },
        {
            optionTitle: 'Premimu Lot',
            optionDetail: 'We offer Premimu Lot parking service for restaurants, stores and other business in your city'
        },
        {
            optionTitle: 'Parking Garage',
            optionDetail: 'We offer Parking Garage for restaurants, stores and other business in your city'
        }
    ]
    return (
        <Box componant="div" sx={{p: '60px'}}>
            {showTittle && <List variant="h4" sx={{pb: '40px', color:'#13C33E'}}>Parking Options</List>}
            <Grid container sx={{textAlign: 'center'}}>
                <Grid item xs={12}  sm={4}>
                    {
                        parkingOptions.slice(0,3).map((po)=>(
                            <OptionStack>
                                <Box componant='div'>
                                    <List variant='h6' sx={{textAlign: 'right'}}>{po.optionTitle}</List>
                                    <P sx={{textAlign: 'right', fontWeight:'400'}}>{po.optionDetail}</P>
                                </Box>
                                <Box>
                                    <TimerIcon sx={{fontSize:'40px' ,color: 'green', padding: '20px 0 0 20px'}} />
                                </Box>
                            </OptionStack>
                        ))
                    }
                </Grid>
                <Grid item xs={12}  sm={4}> 
                    <OptionImage src={optionImage} alt="" />
                </Grid>
                <Grid item xs={12}  sm={4}>
                    {
                        parkingOptions.slice(3).map((po)=>(
                            <Stack direction='row' spacing={4}>
                                <Box sx={{paddingTop: '20px'}}>
                                    <LocalAtmIcon sx={{color: 'green', fontSize:'40px'}} />
                                </Box>
                                <Box componant='div'>
                                    <List 
                                    variant='h6' 
                                    sx={{textAlign: 'left'}}
                                    >
                                        {po.optionTitle}
                                    </List>
                                    <P sx={{textAlign: 'left', fontWeight:'400'}}>{po.optionDetail}</P>
                                </Box>
                                
                            </Stack>
                        ))
                    }
                </Grid>
                
            </Grid>
        </Box>
    );
};

export default ParkingOptions;