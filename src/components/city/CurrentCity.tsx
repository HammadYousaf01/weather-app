import { useEffect, useState } from "react";

import CurrentCityChartWrapper from "./CurrentCityChartWrapper";

const CurrentCityWeather: React.FC = () => {
  const [{ latitude, longitude }, setCoordinates] = useState({
    latitude: 0,
    longitude: 0,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((location) => {
      const { latitude, longitude } = location.coords;
      setCoordinates({
        latitude,
        longitude,
      });
    });
  }, []);

  // if (latitude && longitude) {
  return <CurrentCityChartWrapper latitude={latitude} longitude={longitude} />;
  // }

  // return <Loading />;
};

export default CurrentCityWeather;
