import React, { useContext, useEffect, useState } from 'react';
import AvailablePlaces from '../../components/AvailablePlaces/AvailablePlaces';
import Footer from '../../components/Footer/Footer';
import HowWork from '../../components/HowWork/HowWork';
import NavBar from '../../components/NavBar/NavBar';
import Map from '../../components/Map/Map';
import ClickedPlaceDetails from '../../components/ClickedPlaceDetails/ClickedPlaceDetails';
import allUsersContext, { parkContext } from '../../context/parkContext';
import axios from 'axios';
import { getErrorMessage } from '../../utils/getErrorMessage';
const DriverHome = () => {
    const [selectedPlace, setSelectedPlace] = useState({})
    const {dispatchPark, parkState} = useContext(parkContext)

    useEffect(() => {
        dispatchPark({type: "fetching"})
        try {
            const fetchParks = async () => {
                const {data} = await axios.get(`${process.env.REACT_APP_API_URL}/api/parks`)
                
                if(data){
                    dispatchPark({type: "success", payload: data})
                }
            }
            fetchParks()
        } catch (error) {
            const message  = getErrorMessage(error)
            dispatchPark({type: "error", payload: message})
        }
    }, [dispatchPark])
    return (
        <div style={{ width: '100%' }}>
            <NavBar/>
            <Map setSelectedPlace={setSelectedPlace}/>
            {/*
            {
                (Object.keys(selectedPlace).length !== 0) && <ClickedPlaceDetails selectedPlace={selectedPlace}></ClickedPlaceDetails>
            }
            
             */}
            <AvailablePlaces/>
            <HowWork/>
            <Footer/>
        </div>
    );
};

export default DriverHome;