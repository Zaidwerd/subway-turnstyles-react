import React from 'react';
import MapContainer from '../MapContainer/MapContainer.jsx';

export default class App extends React.Component{
  render() {
    return (
      <container>
        <h1> Subways and turnstyles! </h1>
        <MapContainer />
      </container>
    );
  }
}
