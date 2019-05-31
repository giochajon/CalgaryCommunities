import React from "react";
import { compose, withProps } from "recompose";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Polyline,
    Marker
} from "react-google-maps";

// USAGE <Smap isMarkerShown centre={this.gcenter} flightpath={this.gcoord} />

const Smap = compose(
    withProps({
        /**
         * Note: create and replace your own key in the Google console.
         * https://console.developers.google.com/apis/dashboard
         * The key "AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q" can be ONLY used in this sandbox (no forked).
         */
        googleMapURL: process.env.REACT_APP_GOOGLEMAPS_API_KEY,
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `300px`, width: '300px'}} />,
        mapElement: <div style={{ height: `90%` }} />
    }),
    withScriptjs,

    withGoogleMap
)(props => (
    <div className = "mapborder">
  <GoogleMap defaultZoom={12} center={props.centre} defaultCenter={props.centre}>
    
    {props.isMarkerShown && (
      <Marker position= {{lat:51.044270, lng:-114.062019}} 
      icon={'https://i.imgur.com/LaYgKEp.jpg'}
      label="" />
    )}
    <Polyline path= {props.flightpath} options={{ 
  strokeColor: '#FF0000',  strokeOpacity: 1,  strokeWeight: 2,}} />
  </GoogleMap>
  </div>
));


export default Smap;