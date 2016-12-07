import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';

class MapContainer extends Component {

  render() {
    const MapContainer = <div style{{ height: '100%', width: '100%' }} />;

    const center = {
      lat: 40.7128,
      lng: 74.0059,
    };

    return (
      <GoogleMapLoader
        containerElement={mapContainer}
        googleMapElement={
          <GoogleMap
            defaultZoom={13}
            defaultCenter={center}
            options={{ streetViewControl: false }}
          >
          </GoogleMap>
        }
      />
    );
  }
}

export default MapContainer;
