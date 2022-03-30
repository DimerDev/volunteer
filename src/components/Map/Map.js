import React, { useRef, useCallback } from 'react'
import { GoogleMap } from '@react-google-maps/api';


const containerStyle = {
    width: '400px',
    height: '400px'
  };
  
  const defCenter = {
    // lat: -3.745,
    // lng: -38.523
    lat: 49.991893811142155, 
    lng: 36.234233196885114,
  };

const Map = () => {
    
    const mapRef = useRef(undefined);

    const onLoad = useCallback(function callback(map) {
        mapRef.current = map;
      }, []);
    
      const onUnmount = useCallback(function callback(map) {
        mapRef.current = undefined;
      }, []);

    return (
        <div>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={defCenter}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}
            >
            { /* Child components, such as markers, info windows, etc. */ }
            <></>
            </GoogleMap>
        </div>    
    );
}

export { Map };