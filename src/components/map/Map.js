import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'
import {GoogleApiWrapper} from 'google-maps-react';

import './map.css'

const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon={locationIcon} className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
)

const MapSection = ({ location, zoomLevel }) => {
  return (
    <div className="map">
      {/* <h2 className="map-h2">Come Visit Us At</h2> */}

      <div className="google">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCLc1lwLRLXNl99Mw6SN8EEbM1hlmW766w" }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  );
};
export default MapSection;