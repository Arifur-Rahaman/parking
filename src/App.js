
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

export const bookingContext = createContext();

function App() {
  const [bookingDetails, setBookingDetails] = useState({})
  return (
    <div style={{display: 'flex'}}> 
        <Menu></Menu>
        <bookingContext.Provider value={[bookingDetails, setBookingDetails]}>
          <BrowserRouter>
            <Routes>
                <Route index element={<Main/>} />
                <Route path="/driver" element={<DriverHome/>}/>
                <Route path="/driver/placeDetails/:placeId" element={<PlaceDetails/>}/>
                <Route path="/driver/placeDetails/:placeId/booking" element={<Booking/>}/>
                <Route path="/driver/placeDetails/:placeId/booking/bookingDetails" element={<BookingDetails/>}/>
                <Route path="/owner/request" element={<Request/>}/>
                <Route path="/owner/request/details" element={<ConfirmRequest/>}/>
            </Routes>
          </BrowserRouter>
          </bookingContext.Provider>
    </div>
  );
}

export default App;
