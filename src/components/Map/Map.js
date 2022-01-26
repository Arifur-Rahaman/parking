import { Typography } from '@mui/material';
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({parkDetail, setSelectedPlace}) => {
    
    const containerStyle = {
        width: '100%',
        height: '400px'
      };
      
      const center = {
        lat: 23.787212,
        lng: 90.347769
      };
        const onLoad = marker => {
          //console.log('marker: ', marker)
        }
        const getSelectedPlacedetail = (place)=>{
            setSelectedPlace(place)
        }
    return (
        <div style={{padding: '20px'}}>
            <LoadScript
                googleMapsApiKey="AIzaSyBV1glqvleYR1vLSAursoCh2y-ox2M_cMo"
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={18}
                >
                    { /* Child components, such as markers, info windows, etc. */ }
                    {
                        parkDetail.map(data=>{
                            const {parkLocation}= data;
                            return(
                                <Marker
                                onLoad={onLoad}
                                position={parkLocation}
                                onClick={()=>getSelectedPlacedetail(data)}
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