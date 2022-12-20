import React, { useContext, useEffect, useReducer, useState } from 'react';
import AvailablePlaces from '../../components/AvailablePlaces/AvailablePlaces';
import Footer from '../../components/Footer/Footer';
import HowWork from '../../components/HowWork/HowWork';
import NavBar from '../../components/NavBar/NavBar';
import Map from '../../components/Map/Map';
import ClickedPlaceDetails from '../../components/ClickedPlaceDetails/ClickedPlaceDetails';
import allUsersContext, { parkContext } from '../../context/parkContext';
import axios from 'axios';
import { getErrorMessage } from '../../utils/getErrorMessage';
import { actions } from '../../const/actions';
import Loader from '../../components/Loader/Loader';

const reducer = (state, action) => {
    switch (action.type) {
        case actions.FETCHING_START:
            return {
                ...state,
                isLoading: true,
                isSuccess: false,
                isError: false,
                message: "",
            }
        case actions.FETCHING_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                isError: false,
                message: "",
            }
        case actions.FETCHING_FAIL:
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                isError: false,
                message: "",
            }
        default:
            return state
    }
}

const DriverHome = () => {

    const initialState = {
        isLoading: false,
        isSuccess: false,
        isError: false,
        message: "",
    }

    const [selectedPlace, setSelectedPlace] = useState({})
    const [state, dispatch] = useReducer(reducer, initialState)
    const { dispatchPark, parkState } = useContext(parkContext)
    const {parks} = parkState
    useEffect(() => {
        try {
            dispatch({ type: actions.FETCHING_START })
            const fetchParks = async () => {
                const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/api/parks`)

                if (data) {
                    dispatch({ type: actions.FETCHING_SUCCESS })
                    dispatchPark({ type: actions.SET_PARKS, payload: data })
                }
            }
            fetchParks()

        } catch (error) {
            const message = getErrorMessage(error)
            dispatch({ type: actions.FETCHING_FAIL, payload: message })
        }
    }, [dispatchPark])

    if (state.isLoading) {
        return <Loader />
    }
    return (
        <div style={{ width: '100%' }}>
            <NavBar />
            <Map parks={parks}/>
            {/*
            {
                (Object.keys(selectedPlace).length !== 0) && <ClickedPlaceDetails selectedPlace={selectedPlace}></ClickedPlaceDetails>
            }
            
             */}
            <AvailablePlaces />
            <HowWork />
            <Footer />
        </div>
    );
};

export default DriverHome;