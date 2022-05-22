
import './App.css';
import { Routes, Route} from "react-router-dom";
import DriverHome from './Pages/DriverHome/DriverHome';
import Menu from './components/Menu/Menu';
import Main from './components/Main/Main';
import PlaceDetails from './Pages/PlaceDetails/PlaceDetails';
import Booking from './Pages/Booking/Booking';
import BookingDetails from './Pages/BookingDetails/BookingDetails';
import Request from './Pages/Request/Request';
import ConfirmRequest from './components/ConfirmRequest/ConfirmRequest';
import React, { useState } from 'react';
import {createContext} from 'react';
import {UserProvider} from './context/userContext';
import Login from './Pages/Login/Login';
import PrivateOutlet from './components/PrivateOutlet/PrivateOutlet';
import About from './Pages/About/About';
import Services from './Pages/Services/Services';
import Options from './Pages/Options/Options';
import Contact from './Pages/Contact/Contact';
import Helps from './Pages/Helps/Helps';
import Profile from './Pages/Profile/Profile';
import { AllUsersProvider } from './context/allUsersContext';
import { OwnerInfoProvider } from './context/parkOwnerContext';
import Dashboard from './Pages/Dashboard/Dashboard';

export const bookingContext = createContext();
export const authContext = createContext();
export const accountStatusContext = createContext();

function App() {
  const [bookingDetails, setBookingDetails] = useState({})
  const [singedInUser, setSingedInUser] = useState({});
  const [accountStatus, setAccountStatus]=useState('driver')
  return (
    <authContext.Provider value={[singedInUser, setSingedInUser]}>
    <UserProvider>
    <AllUsersProvider>
    <OwnerInfoProvider>
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
                  <Route path="driver/placeDetails/:ownerEmail" element={<PlaceDetails/>}/>
                  <Route path="profile" element={<Profile/>}/>
                  <Route path="driver/placeDetails/:ownerEmail/booking" element={<Booking/>}/>
                  <Route path="driver/placeDetails/:ownerEmail/booking/bookingDetails/:bookingId" element={<BookingDetails/>}/>
                  <Route path="owner/request" element={<Request/>}/>
                  <Route path="owner/request/details" element={<ConfirmRequest/>}/>
                  <Route path="dashboard/:email" element={<Dashboard/>}/>
                </Route>
            </Routes>      
    </div>
    </bookingContext.Provider>
    </accountStatusContext.Provider>
    </OwnerInfoProvider>
    </AllUsersProvider>
    </UserProvider>
    </authContext.Provider>
  );
}

export default App;
