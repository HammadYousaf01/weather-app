import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "store/hooks";
import { addSearchedCity } from "store/slices/citySlice";

import { useGetCityForcastQuery } from "api/apiSlice";

import Loading from "components/Loading";
import SearchedCities from "./SearchedCities";

const Cities: React.FC = () => {
  const dispatch = useAppDispatch();
  const city = useAppSelector((state) => state.city.currentCity);
  const { data, isLoading, isError, error } = useGetCityForcastQuery(city);

  useEffect(() => {
    if (data) {
      dispatch(addSearchedCity(data));
    }
  }, [data]);

  if (isLoading) return <Loading />;
  if (isError) return <div>{(error as ApiError).data.message}</div>;

  return <SearchedCities />;
};

export default Cities;
