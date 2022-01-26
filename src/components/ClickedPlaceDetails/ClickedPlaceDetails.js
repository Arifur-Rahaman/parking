import { Button, Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';

const ClickedPlaceDetails = ({selectedPlace}) => {
    const {area, address, ratings, ownerName,id} = selectedPlace
    return (
        <div>
            <Link to={"placeDetails/"+id} style={{ textDecoration: 'none'}}>
                <Button sx={{width: '100%', color: 'black'}}>
                    <Box componant="div" sx={{display: 'flex', flexDirection: 'column', padding: '15px'}}>
                        <Typography variant='h5'>{area}</Typography>
                        <Typography variant='h6'>{ownerName}</Typography>
                        <Typography variant='caption'>{address}</Typography>
                        <Typography><Rating name="read-only" value= {ratings} readOnly sx={{color: 'black'}}/></Typography>
                    </Box>
                </Button>
                </Link>
        </div>
    );
};

export default ClickedPlaceDetails;