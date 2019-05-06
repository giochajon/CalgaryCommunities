import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Polyline } from 'react-google-maps';


//const google = window.google = window.google ? window.google : {} 

class Map extends Component {
	
   render() {
   const GoogleMapGio = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = {this.props.centre}
        defaultZoom = { 12 }
      >
      <Polyline path= {this.props.flightpath} options={{ 
  strokeColor: '#FF0000',
  strokeOpacity: 1,
  strokeWeight: 2,
 
}} />
      </GoogleMap>
   ));
   return(
      <div className = "mapborder">
        <GoogleMapGio
          containerElement={ <div style={{ height: `300px`, width: '300px' }} /> }
          mapElement={ <div style={{ height: `90%` }} /> }
        />
      </div>
   );
   }
};
export default Map;