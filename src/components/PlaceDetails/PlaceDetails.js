import { Box } from '@mui/system';
import React from 'react';
import { useParams } from 'react-router';
import Footer from '../Footer/Footer';
import HowWork from '../HowWork/HowWork';
import NavBar from '../NavBar/NavBar';
import OwnerDetails from '../OwnerDetails/OwnerDetails';

const PlaceDetails = () => {
    const {placeId} = useParams()
    return (
        <Box sx={{width: "100%"}}>
            <NavBar/>
            <OwnerDetails palaceId={placeId}/>
            <HowWork showTittle={false}/>
            <Footer/>
        </Box>
    );
};

export default PlaceDetails;