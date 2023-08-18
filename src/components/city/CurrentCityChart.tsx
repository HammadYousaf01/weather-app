import { useGetLatitudeLongitudeForecastQuery } from "api/apiSlice";

import Charts from "components/charts";
import Loading from "components/Loading";

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

  return <Charts data={data} />;
};

export default CurrentCityChart;
