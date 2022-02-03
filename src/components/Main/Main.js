import React from 'react';
import Counter from '../Counter/Counter';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HowWork from '../HowWork/HowWork';
import ParkingAmenities from '../ParkingAmenities/ParkingAmenities';
import ParkingOptions from '../ParkingOptions/ParkingOptions';
import './Main.css';
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