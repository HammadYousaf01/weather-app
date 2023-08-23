import { useEffect, useState } from "react";

import CityChart from "./CityChart";
import { geocodeCityFromLatLong } from "./utils";

const CurrentCity: React.FC = () => {
  const [cityName, setCityName] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((location) => {
      const { latitude, longitude } = location.coords;

      const geocoder = new window.google.maps.Geocoder();
      const latlng = new window.google.maps.LatLng(latitude, longitude);

      geocoder.geocode({ location: latlng }, (results, status) => {
        if (status === "OK") {
          if (results !== null) {
            setCityName(filterCityName(results));
          }
        }
      });
      // setCityName(geocodeCityFromLatLong(latitude, longitude));
      // console.log(geocodeCityFromLatLong(latitude, longitude));
    });
  }, []);

  if (!cityName) {
    return (
      <div>Please Enable Location to get the weather forecast of your area</div>
    );
  }

  return <CityChart cityName={cityName} />;
};

export const filterCityName = (
  results: google.maps.GeocoderResult[]
): string => {
  const singleResultsEntry = results[0].address_components;

  const cityName = singleResultsEntry.filter(
    (result) =>
      result.types.includes("locality") && result.types.includes("political")
  );
  return cityName[0].long_name;
};

export default CurrentCity;
