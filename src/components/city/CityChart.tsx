import { useGetCityForecastQuery } from "api/apiSlice";

import Charts from "components/charts";
import Loading from "components/Loading";

interface Props {
  cityName: string;
}

const CityChart: React.FC<Props> = ({ cityName }) => {
  const { data, isLoading, isError, error } = useGetCityForecastQuery(cityName);

  if (isLoading) return <Loading />;
  if (isError) return <div>{(error as ApiError).data.message}</div>;

  return <Charts data={data} />;
};

export default CityChart;
