import CircularProgress from "@mui/material/CircularProgress";

import { useAppSelector } from "store/hooks";
import { useGetCityForcastQuery } from "api/apiSlice";
import Charts from "components/charts/Charts";

const Result: React.FC = () => {
  const city = useAppSelector((state) => state.city.currentCity);
  const { data, isLoading, isError, error } = useGetCityForcastQuery(city);

  if (isLoading) return <CircularProgress />;
  if (isError) return <div>{error.data.message}</div>;

  return <Charts data={data} />;
};

export default Result;
