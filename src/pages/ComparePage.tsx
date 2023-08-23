import { useGetCitiesForecastQuery } from "api/apiSlice";
import Loading from "components/Loading";
import CityCompare from "components/city/CityCompare";
import { useState } from "react";
import { useAppSelector } from "store/hooks";

const ComparePage: React.FC = () => {
  // const [citiesData, setCitiesData] = useState<ApiResponse[]>();

  // const comparedCities = useAppSelector((state) => state.city.comparedCities);
  // const comparedCities = ["Lahore", "Karachi"];

  const { data, isLoading, isError, error } = useGetCitiesForecastQuery([
    "Lahore",
    "Karachi",
  ]);

  if (isLoading) return <Loading />;
  if (isError) return <div>{(error as ApiError).data.message}</div>;

  return <></>;
};

export default ComparePage;
