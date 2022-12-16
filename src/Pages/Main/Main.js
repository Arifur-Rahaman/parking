import React from 'react';
import Counter from '../../components/Counter/Counter';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import HowWork from '../../components/HowWork/HowWork';
import ParkingAmenities from '../../components/ParkingAmenities/ParkingAmenities';
import ParkingOptions from '../../components/ParkingOptions/ParkingOptions';
const Main = () => {
    return (
        <div className="main">
            <Header></Header>
            <HowWork showTittle={true}></HowWork>
            <ParkingOptions showTittle={true}></ParkingOptions>
            <Counter></Counter>
            <ParkingAmenities></ParkingAmenities>
            <Footer></Footer>
        </div>
    );
};

export default Main;