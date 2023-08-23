import Loading from "components/Loading";
import { useAppSelector } from "store/hooks";
import { useGetCitiesForecastQuery } from "api/apiSlice";
import MultiCityCharts from "components/charts/MultiCityCharts";

const ComparePage: React.FC = () => {
  const comparedCities = useAppSelector((state) => state.city.comparedCities);

  if (comparedCities.length < 1) {
    return <div>Please Search cities to compare</div>;
  }

  const { data, isLoading, isError, error } =
    useGetCitiesForecastQuery(comparedCities);

  if (isLoading) return <Loading />;
  if (isError) return <div>{(error as ApiError).data.message}</div>;

  return <MultiCityCharts citiesData={data} />;
};

export default ComparePage;
