import { useGetCitiesForecastQuery } from "api/apiSlice";
import Info from "components/Info";
import Loading from "components/Loading";
import MultiCityCharts from "components/charts/MultiCityCharts";

interface Props {
  searchedCities: string[];
}

const ComparedCities: React.FC<Props> = ({ searchedCities }) => {
  const { data, isLoading, isError, error } =
    useGetCitiesForecastQuery(searchedCities);

  if (isLoading) return <Loading />;
  if (isError) return <Info error>{(error as ApiError).data.message}</Info>;

  return <MultiCityCharts citiesData={data} />;
};

export default ComparedCities;
