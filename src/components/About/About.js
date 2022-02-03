import { Box } from '@mui/system';
import React from 'react';
import AirportParking from '../AirportParking/AirportParking';
import CustomerReviews from '../CustomerReviews/CustomerReviews';
import Footer from '../Footer/Footer';
import Counter from '../Counter/Counter'
import History from '../History/History';

const About = () => {
    return (
        <Box sx={{width: '100%'}}>
            <AirportParking/>
            <Counter></Counter>
            <History></History>
            <CustomerReviews/>
            <Footer></Footer>
        </Box>
    );
};

export default About;