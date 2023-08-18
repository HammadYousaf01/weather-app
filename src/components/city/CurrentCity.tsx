import { useEffect, useState } from "react";

import CurrentCityChart from "./CurrentCityChart";

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
  return <CurrentCityChart latitude={latitude} longitude={longitude} />;
  // }

  // return <Loading />;
};

export default CurrentCityWeather;
