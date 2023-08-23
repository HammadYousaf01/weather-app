import Box from "@mui/material/Box";

import { useGetCitiesForecastQuery } from "api/apiSlice";

import Info from "components/Info";
import Loading from "components/Loading";
import Charts from "components/charts";

interface Props {
  searchedCities: string[];
}

const SearchedCities: React.FC<Props> = ({ searchedCities }) => {
  const {
    data: citiesData,
    isLoading,
    isError,
    error,
  } = useGetCitiesForecastQuery(searchedCities);

  if (isLoading) return <Loading />;
  if (isError) return <Info error>{(error as ApiError).data.message}</Info>;

  return (
    <Box>
      {citiesData?.map((cityData) => (
        <Charts data={cityData} key={cityData.city.id} />
      ))}
    </Box>
  );
};

export default SearchedCities;
