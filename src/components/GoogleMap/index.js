import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { Button, Box } from "@mui/material";

const MapLocation = (props) => {
  const [latitude, setLatitude] = React.useState(7);
  const [longitude, setLongitude] = React.useState(677);

  function showLocation(position) {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
    window.google.maps.Map(document.getElementsByClassName("google-map")).panTo(latitude, longitude)

  }

  function errorHandler(err) {
    if (err.code == 1) {
      alert("Error: Access is denied!");
    } else if (err.code == 2) {
      alert("Error: Position is unavailable!");
    }
  }

  function getLocation() {
    if (navigator.geolocation) {
      // timeout at 60000 milliseconds (60 seconds)
      var options = { timeout: 60000 };
      navigator.geolocation.getCurrentPosition(
        showLocation,
        errorHandler,
        options
      );
      window.google.maps.Map(document.getElementsByClassName("google-map")).panTo(latitude, longitude)
    } else {
      alert("Sorry, browser does not support geolocation!");
    }
  }

  return (
    <React.Fragment>
      {/* <h5>checking maps</h5> */}
      <Box
        sx={{
          display: "flex",
          width: "96%",
          justifyContent: "end",
          height: "62px",
          alignItems: "center",
        }}
      >
        <Button
          variant="contained"
          color="success"
          onClick={(e) => getLocation()}
        >
          Current Location
        </Button>
      </Box>
      <Map
        google={props.google}
        zoom={3}
        center
        // gestureHandling="none"
        // zoomControl={false}
        initialCenter={{
          lat: latitude,
          lng: longitude,
        }}
      >
        <Marker position={{ lat: latitude, lng: longitude }} />
      </Map>
      
      {console.log("props.google ->>", props.google)}
    </React.Fragment>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_GOOGLE_LOCATION,
})(MapLocation);
