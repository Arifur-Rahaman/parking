import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const ContactLocation = () => {
    
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
    return (
        <div style={{}}>
            <LoadScript
                googleMapsApiKey="AIzaSyBV1glqvleYR1vLSAursoCh2y-ox2M_cMo"
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={18}
                >
                    <Marker
                        onLoad={onLoad}
                        position={center}
                    />
                </GoogleMap>
            </LoadScript>

        </div>
    );
};

export default ContactLocation;