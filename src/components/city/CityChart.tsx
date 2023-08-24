import { useGetCityForecastQuery } from "api/apiSlice";

import Charts from "components/charts";
import Loading from "components/Loading";
import Info from "components/Info";

interface Props {
  cityName: string;
}

const CityChart: React.FC<Props> = ({ cityName }) => {
  const { data, isLoading, isError, error } = useGetCityForecastQuery(cityName);

  if (isLoading) return <Loading />;
  if (isError) return <Info error>{(error as ApiError).data.message}</Info>;

  return <Charts data={data} />;
};

export default CityChart;
