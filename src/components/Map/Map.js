import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import park_icon from '../../assets/images/park-icon.png'
import jwt_decode from "jwt-decode";
const Map = ({ parkDetail, setSelectedPlace }) => {
    const token = localStorage.getItem('idToken')
        const decoded = jwt_decode(token)

    const [center, setCenter] = useState({
        lat: 23.7985828,
        lng: 90.3466063
    });
    const getCenter = (position) => {
        const newCenter = { ...center };
        newCenter.lat = position.coords.latitude;
        newCenter.lng = position.coords.longitude;
        setCenter(newCenter);
    }
    const handleError = (err) => {
        console.log(err)
    }
    useEffect(() => {
        navigator.geolocation.watchPosition(getCenter, handleError);
    }, [])

    const containerStyle = {
        width: '100%',
        height: '400px'
    };

    const onLoad = marker => {
        //console.log('marker: ', marker)
    }
    const getSelectedPlacedetail = (place) => {
        setSelectedPlace(place)
    }
    return (
        <div style={{ padding: '20px' }}>
            <LoadScript
                googleMapsApiKey="AIzaSyBV1glqvleYR1vLSAursoCh2y-ox2M_cMo"
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={14}
                >
                    { /* Child components, such as markers, info windows, etc. */}
                    <Marker
                        onLoad={onLoad}
                        position={center}

                    />

                    {
                        parkDetail.map(data => {
                            const position = data.location
                            const userEmail = decoded.email === data.email
                            return (
                                !userEmail && position && <Marker
                                    onLoad={onLoad}
                                    position={position}
                                    icon={park_icon}
                                    onClick={() => getSelectedPlacedetail(data)}
                                />
                            )
                        })
                    }
                </GoogleMap>
            </LoadScript>

        </div>
    );
};

export default Map;