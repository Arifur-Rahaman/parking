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
    const { allUsers, setAllUsers } = useContext(allUsersContext)

    useEffect(() => {
        const getUsers = async () => {
            try {
                const res = await fetch(`${process.env.REACT_APP_API_URL}/users`)
                const data = await res.json()
                console.log(data)
                setAllUsers(data)
            } catch (error) {
                console.log('Error',error)
            }
        }
        getUsers()
    }, [setAllUsers])

    return (
        <div style={{ width: '100%' }}>
            <h1>Driver Home</h1>
            {/* <NavBar /> */}
            {/* <Map parkDetail={allUsers} setSelectedPlace={setSelectedPlace}></Map>
            {
                (Object.keys(selectedPlace).length !== 0) && <ClickedPlaceDetails selectedPlace={selectedPlace}></ClickedPlaceDetails>
            }
            <AvailablePlaces parkDetail={allUsers} />
            <HowWork showTittle={false}></HowWork> */}
            {/* <Footer></Footer> */}
        </div>
    );
};

export default DriverHome;