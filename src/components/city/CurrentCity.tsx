import { useContext, useEffect, useState } from "react";

import CityChart from "./CityChart";
import Info from "components/Info";
import { geocodeLatLng } from "components/utils";

import { CoordinatesContext } from "src/context/CoordinatesContext";

const CurrentCity: React.FC = () => {
  const [cityName, setCityName] = useState("");

  const { latitude, longitude } = useContext(CoordinatesContext);

  useEffect(() => {
    (async () => {
      setCityName(await geocodeLatLng(latitude, longitude));
    })();
  }, [latitude, longitude]);

  if (!cityName) {
    return (
      <Info>
        Please Enable Location to get the weather forecast of your area
      </Info>
    );
  }

  return <CityChart cityName={cityName} />;
};

export default CurrentCity;
