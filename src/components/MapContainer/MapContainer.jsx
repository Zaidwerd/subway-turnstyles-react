import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap } from 'react-google-maps';

class MapContainer extends Component {

  render() {
    const mapContainer = <div style={{ height: '100%', width: '100%' }} />;

    const center = {
      lat: 40.730610,
      lng: -73.93,
    };

    return (
      <GoogleMapLoader
        containerElement={mapContainer}
        googleMapElement={
          <GoogleMap
            defaultZoom={12}
            defaultCenter={center}
            options={{ streetViewControl: false }}
          />
        }
      />
    );
  }
}

export default MapContainer;
