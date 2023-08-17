import { useState } from "react";
import Loading from "./Loading";
import { useGetLatitudeLongitudeForecastQuery } from "api/apiSlice";
import Charts from "./charts/Charts";

const CurrentCityWeather: React.FC = () => {
  const [{ latitude, longitude }, setCoordinates] = useState({
    latitude: 0,
    longitude: 0,
  });

  navigator.geolocation.getCurrentPosition((location) => {
    const { latitude, longitude } = location.coords;
    setCoordinates({
      latitude,
      longitude,
    });
  });

  if (latitude && longitude) {
    return <CurrentCityChart latitude={latitude} longitude={longitude} />;
  }

  return <Loading />;
};

interface Props {
  latitude: number;
  longitude: number;
}

const CurrentCityChart: React.FC<Props> = ({ latitude, longitude }) => {
  const latLong = `${latitude},${longitude}`;
  const { data, isLoading, isError, error } =
    useGetLatitudeLongitudeForecastQuery(latLong);

  if (isLoading) return <Loading />;
  if (isError) return <div>{(error as ApiError).data.message}</div>;

  return (
    <div>
      <Charts data={data} />
    </div>
  );
};

export default CurrentCityWeather;
