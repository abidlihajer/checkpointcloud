import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 15
  };

  return (
    
    <div style={{ height: "50vh", width: "50%", margin:"50px auto"}}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyC-9HBtGH2Tn5omz6Y4g9B29Jg5EVVx2xE" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={50.436321} lng={4.366430} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
}