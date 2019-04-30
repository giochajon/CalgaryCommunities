import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Polyline } from 'react-google-maps';


const google = window.google = window.google ? window.google : {} 

class Map extends Component {
	
   render() {
   const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = {this.props.centre}
        defaultZoom = { 13 }
      >
      <Polyline path= {this.props.flightpath} options={{ 
  strokeColor: '#FF0000',
  strokeOpacity: 1,
  strokeWeight: 2,
  icons: [{ 
    icon: "hello",
    offset: '0',
    repeat: '10px'
  }],
}} />
      </GoogleMap>
   ));
   return(
      <div>
        <GoogleMapExample
          containerElement={ <div style={{ height: `500px`, width: '500px' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
   );
   }
};
export default Map;