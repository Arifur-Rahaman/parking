import { Button, Paper, Rating, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';

const ClickedPlaceDetails = ({ selectedPlace }) => {
    const { address,  name,  email} = selectedPlace
    return (
        <Stack alignItems='center'>
            <Paper sx={{ width: '500px' }}>
                <Typography sx={{color: '#13C33E'}} variant='h5' align='center'>Your Clicked Place</Typography>
                <Link to={"placeDetails/" + email} style={{ textDecoration: 'none' }}>
                    <Button sx={{ width: '100%', color: 'black' }}>
                        <Box componant="div" sx={{ display: 'flex', flexDirection: 'column', padding: '15px' }}>
                            <Typography variant='h6'>{name}</Typography>
                            <Typography variant='caption'>{address}</Typography>
                            <Typography variant='caption'>{email}</Typography>
                        </Box>
                    </Button>
                </Link>
            </Paper>
        </Stack>
    );
};

export default ClickedPlaceDetails;