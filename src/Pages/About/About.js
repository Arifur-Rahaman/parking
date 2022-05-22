import { Box } from '@mui/system';
import React from 'react';
import AirportParking from '../../components/AirportParking/AirportParking';
import CustomerReviews from '../../components/CustomerReviews/CustomerReviews';
import Footer from '../../components/Footer/Footer';
import Counter from '../../components/Counter/Counter'
import History from '../../components/History/History';
import SubHeader from '../../components/SubHeader/SubHeader';

const About = () => {
    return (
        <Box sx={{width: '100%'}}>
            <SubHeader title={'About'}></SubHeader>
            <AirportParking/>
            <Counter></Counter>
            <History></History>
            <CustomerReviews/>
            <Footer></Footer>
        </Box>
    );
};

export default About;