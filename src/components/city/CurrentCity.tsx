import { useEffect, useState } from "react";

import CurrentCityChart from "./CurrentCityChart";

const CurrentCityWeather: React.FC = () => {
  const [cityName, setCityName] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((location) => {
      const { latitude, longitude } = location.coords;

      const geocoder = new window.google.maps.Geocoder();
      const latlng = new window.google.maps.LatLng(latitude, longitude);

      geocoder.geocode({ location: latlng }, (result, status) => {
        if (status === "OK") {
          if (result !== null) {
            const results = result[0].address_components;

            const cityName = results.filter(
              (result) =>
                result.types.includes("locality") &&
                result.types.includes("political")
            );
            setCityName(cityName[0].long_name);
          }
        }
      });
    });
  }, []);

  if (!cityName) {
    return (
      <div>Please Enable Location to get the weather forecast of your area</div>
    );
  }

  return <CurrentCityChart cityName={cityName} />;
};

export default CurrentCityWeather;
