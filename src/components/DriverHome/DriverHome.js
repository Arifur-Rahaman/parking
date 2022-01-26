import React, { useState } from 'react';
import AvailablePlaces from '../AvailablePlaces/AvailablePlaces';
import Footer from '../Footer/Footer';
import HowWork from '../HowWork/HowWork';
import NavBar from '../NavBar/NavBar';
import parkDetail from '../../fakeData/fakeData';
import Map from '../Map/Map';
import ClickedPlaceDetails from '../ClickedPlaceDetails/ClickedPlaceDetails';

const DriverHome = () => {
    const [selectedPlace, setSelectedPlace] = useState({})
    console.log(selectedPlace)
    return (
        <div style={{width:'100%'}}>
            <NavBar/>
            <Map parkDetail={parkDetail} setSelectedPlace={setSelectedPlace}></Map>
            {
               ( Object.keys(selectedPlace).length !== 0) && <ClickedPlaceDetails selectedPlace={selectedPlace}></ClickedPlaceDetails>
            }
            <AvailablePlaces parkDetail={parkDetail}/>
            <HowWork showTittle={false}></HowWork>
            <Footer></Footer>
        </div>
    );
};

export default DriverHome;