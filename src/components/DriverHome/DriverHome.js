import React from 'react';
import AvailablePlaces from '../AvailablePlaces/AvailablePlaces';
import Footer from '../Footer/Footer';
import HowWork from '../HowWork/HowWork';
import NavBar from '../NavBar/NavBar';

const DriverHome = () => {
    return (
        <div style={{width:'100%'}}>
            <NavBar/>
            <AvailablePlaces/>
            <HowWork showTittle={false}></HowWork>
            <Footer></Footer>
        </div>
    );
};

export default DriverHome;