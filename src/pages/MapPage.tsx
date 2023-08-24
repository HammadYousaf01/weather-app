import React, { useContext, useEffect, useRef, useState } from "react";
import { Box, BoxProps, styled } from "@mui/material";

import Resizable from "components/charts/Resizable";
import CityChart from "components/city/CityChart";
import { geocodeLatLng } from "components/utils";
import { CoordinatesContext } from "src/context/CoordinatesContext";

const StyledMapContainer = styled(Box)<BoxProps>(() => ({
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const MapPage: React.FC = () => {
  const [cityName, setCityName] = useState("");
  const { latitude, longitude } = useContext(CoordinatesContext);

  const mapRef = useRef<HTMLElement>();

  useEffect(() => {
    (async () => {
      setCityName(await geocodeLatLng(latitude, longitude));
      const mapOptions: google.maps.MapOptions = {
        center: { lat: latitude, lng: longitude },
        zoom: 10,
      };

      const map = new google.maps.Map(mapRef.current!, mapOptions);
      new google.maps.Marker({
        position: new window.google.maps.LatLng(latitude, longitude),
        map: map,
      });

      google.maps.event.addListener(map, "click", async (event: any) => {
        new google.maps.Marker({
          position: event.latLng,
          map: map,
        });

        const latitude = event.latLng.lat();
        const longitude = event.latLng.lng();

        setCityName(await geocodeLatLng(latitude, longitude));
      });
    })();
  }, [latitude, longitude]);

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
