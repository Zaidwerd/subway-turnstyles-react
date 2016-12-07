import React from 'react';
import MapContainer from '../MapContainer/MapContainer.jsx';

export default class App extends React.Component{
  render() {
    return (
      <container>
        <h1> Subways and turnstyles! </h1>
        <div id="map-container" style={{ width: '60vw', height: '60vh' }}>
          <MapContainer />
        </div>
      </container>
    );
  }
}
