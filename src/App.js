
import './App.css';
import { Routes, Route} from "react-router-dom";
import DriverHome from './components/DriverHome/DriverHome';
import Menu from './components/Menu/Menu';
import Main from './components/Main/Main';
import { BrowserRouter } from "react-router-dom";
import PlaceDetails from './components/PlaceDetails/PlaceDetails';
import Booking from './components/Booking/Booking';
import BookingDetails from './components/BookingDetails/BookingDetails';
import Request from './components/Request/Request';
import ConfirmRequest from './components/ConfirmRequest/ConfirmRequest';
import React, { useState } from 'react';
import {createContext} from 'react';
import Login from './components/Login/Login';
import PrivateOutlet from './components/PrivateOutlet/PrivateOutlet';
import About from './components/About/About';
import Services from './components/Services/Services';
import Options from './components/Options/Options';
import Contact from './components/Contact/Contact';
import Helps from './components/Helps/Helps';

export const bookingContext = createContext();
export const authContext = createContext();
export const accountStatusContext = createContext();

function App() {
  const [bookingDetails, setBookingDetails] = useState({})
  const [singedInUser, setSingedInUser] = useState({});
  const [accountStatus, setAccountStatus]=useState('driver')
  return (
    <authContext.Provider value={[singedInUser, setSingedInUser]}>
    <accountStatusContext.Provider value={[accountStatus, setAccountStatus]}>
    <bookingContext.Provider value={[bookingDetails, setBookingDetails]}>
    <div style={{display: 'flex'}}> 
        <Menu></Menu>
            <Routes>
                <Route path='/' element={<Main/>} />
                <Route path='/login' element={<Login/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/services' element={<Services/>}/>
                <Route path='/options' element={<Options/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/help' element={<Helps/>}/>

                <Route path='/*' element={<PrivateOutlet/>}>
                  <Route path="driver" element={<DriverHome/>}/>
                  <Route path="driver/placeDetails/:placeId" element={<PlaceDetails/>}/>
                  <Route path="driver/placeDetails/:placeId/booking" element={<Booking/>}/>
                  <Route path="driver/placeDetails/:placeId/booking/bookingDetails" element={<BookingDetails/>}/>
                  <Route path="owner/request" element={<Request/>}/>
                  <Route path="owner/request/details" element={<ConfirmRequest/>}/>
                </Route>
            </Routes>      
    </div>
    </bookingContext.Provider>
    </accountStatusContext.Provider>
    </authContext.Provider>
  );
}

export default App;
