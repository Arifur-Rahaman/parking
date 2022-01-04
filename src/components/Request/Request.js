import { Stack } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { bookingContext } from '../../App';
import DriverDetails from '../DriverDetails/DriverDetails';
import { MainButton } from '../OwnerDetails/OwnerDetails';

const Request = () => {
    const [{from, to, parkNo, vehicleType}]=useContext(bookingContext);
    return (
        <Box componant='div' sx={{width: '100%'}}>
           
                <Box componant='div' sx={{pl: '50px'}}>
                    <DriverDetails from={from} to={to} parkNo={parkNo} vehicleType={vehicleType} fromOwnerPage={true}/>
                    <Stack direction={{xs: 'column', md:'row'}}>
                        <Link to="details" style={{textDecoration: 'none'}}>
                            <MainButton sx={{color: 'white'}}>Request Accept</MainButton>
                        </Link>
                        <MainButton 
                        sx={ (theme)=>({
                            [theme.breakpoints.down('sm')]:{
                                mt: '20px'
                            },
                            [theme.breakpoints.up('sm')]:{
                                ml: '20px'
                            },
                            
                            color: 'white'
                        })}
                        >
                        Requent Cancel
                        </MainButton>
                    </Stack>
                </Box>
            
        </Box>
    );
};

export default Request;