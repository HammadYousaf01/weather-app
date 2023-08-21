import { useGetCityForcastQuery } from "api/apiSlice";

import Charts from "components/charts";
import Loading from "components/Loading";

interface Props {
  cityName: string;
}

const CurrentCityChart: React.FC<Props> = ({ cityName }) => {
  const { data, isLoading, isError, error } = useGetCityForcastQuery(cityName);

  if (isLoading) return <Loading />;
  if (isError) return <div>{error as string}</div>;

  return <Charts data={data} />;
};

export default CurrentCityChart;
