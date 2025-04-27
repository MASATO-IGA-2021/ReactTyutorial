import { GoogleMap, LoadScript } from "@react-google-maps/api";
import React from "react";

const  Map = () => {
  const API_KEY = "AIzaSyAPQEMdj7s8jWTI68d48QInnp5nc6oDrn4";
  const mapStyles = {
    height: "100%",
    width: "100%",
  };

  const defaultCenter = {
    lat: 41.3851,
    lng: 2.1734,
  };

  return (
    <>
        <LoadScript googleMapsApiKey={API_KEY}>
        <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={13}
            center={defaultCenter}
        />
        </LoadScript>
    </>
    );
}
export default Map
