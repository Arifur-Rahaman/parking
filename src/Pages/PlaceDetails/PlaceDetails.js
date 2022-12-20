import { Box } from '@mui/system';
import React from 'react';
import { useParams } from 'react-router';
import Footer from '../../components/Footer/Footer';
import HowWork from '../../components/HowWork/HowWork';
import NavBar from '../../components/NavBar/NavBar';
import OwnerDetails from '../../components/OwnerDetails/OwnerDetails';

const PlaceDetails = () => {
    const {parkId} = useParams()
    return (
        <Box sx={{width: "100%"}}>
            <NavBar/>
            <OwnerDetails parkId={parkId}/>
            <HowWork showTittle={false}/>
            <Footer/>
        </Box>
    );
};

export default PlaceDetails;