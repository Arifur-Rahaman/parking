import React, { useContext, useEffect, useState } from 'react';
import AvailablePlaces from '../../components/AvailablePlaces/AvailablePlaces';
import Footer from '../../components/Footer/Footer';
import HowWork from '../../components/HowWork/HowWork';
import NavBar from '../../components/NavBar/NavBar';
import Map from '../../components/Map/Map';
import ClickedPlaceDetails from '../../components/ClickedPlaceDetails/ClickedPlaceDetails';
import allUsersContext from '../../context/allUsersContext';
const DriverHome = () => {
    const [selectedPlace, setSelectedPlace] = useState({})
    const {allUsers, setAllUsers}= useContext(allUsersContext)
    useEffect(()=>{
        fetch('https://safe-brook-97366.herokuapp.com/users')
        .then(res=>res.json())
        .then(data=>setAllUsers(data))
    }, [])
    return (
        <div style={{width:'100%'}}>
            <NavBar/>
            <Map parkDetail={allUsers} setSelectedPlace={setSelectedPlace}></Map>
            {
               ( Object.keys(selectedPlace).length !== 0) && <ClickedPlaceDetails selectedPlace={selectedPlace}></ClickedPlaceDetails>
            }
            <AvailablePlaces parkDetail={allUsers}/>
            <HowWork showTittle={false}></HowWork>
            <Footer></Footer>
        </div>
    );
};

export default DriverHome;