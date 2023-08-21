import { Box } from "@mui/material";
import { useGetLocationDetailsQuery } from "api/mapsApiSlice";
import Loading from "components/Loading";

import CurrentCityChart from "./CurrentCityChart";

interface Props {
  latitude: number;
  longitude: number;
}

const CurrentCityChartWrapper: React.FC<Props> = ({ longitude, latitude }) => {
  const latLong = `${latitude},${longitude}`;

  const { data, isLoading, isError, error } =
    useGetLocationDetailsQuery(latLong);

  if (isLoading) return <Loading />;

  console.log(error);
  if (isError) return <Box>{error.error}</Box>;

  const cityName = getCityName(data);

  return <CurrentCityChart cityName={cityName} />;
};

// TODO: Define types and update type here
const getCityName = (data: any): string => {
  return "lahore";
};

export default CurrentCityChartWrapper;
