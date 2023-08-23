import React, { useEffect, useRef, useState } from "react";
import { Box, BoxProps, Card, styled } from "@mui/material";

import Resizable from "components/charts/Resizable";
import { filterCityName } from "components/city/CurrentCity";
import CityChart from "components/city/CityChart";

const StyledMapContainer = styled(Box)<BoxProps>(() => ({
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const MapPage: React.FC = () => {
  const [cityName, setCityName] = useState("");
  // const [{ latitude, longitude }, setCoordinates] = useState({
  //   latitude: 0,
  //   longitude: 0,
  // });
  const mapRef = useRef<HTMLElement>();

  useEffect(() => {
    const mapOptions: google.maps.MapOptions = {
      center: { lat: 0, lng: 0 },
      zoom: 10,
    };

    const mapInstance = new google.maps.Map(mapRef.current!, mapOptions);

    google.maps.event.addListener(mapInstance, "click", (event) => {
      new google.maps.Marker({
        position: event.latLng,
        map: mapInstance,
      });

      const latitude = event.latLng.lat();
      const longitude = event.latLng.lng();

      //   setCoordinates({
      //     latitude,
      //     longitude,
      //   });

      const geocoder = new window.google.maps.Geocoder();
      const latlng = new window.google.maps.LatLng(latitude, longitude);

      geocoder.geocode({ location: latlng }, (results, status) => {
        if (status === "OK") {
          if (results !== null) {
            setCityName(filterCityName(results));
          }
        }
      });
      scrollTo;
    });
  }, []);

  return (
    <Box>
      <StyledMapContainer>
        <Resizable height={400} width={(window.outerWidth * 98.5) / 100}>
          <Box style={{ width: "100%", height: "100%" }} ref={mapRef} />
        </Resizable>
      </StyledMapContainer>

      <CityChart cityName={cityName} />
    </Box>
  );
};

export default MapPage;
