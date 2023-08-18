import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "store/hooks";
import { addPreviousCity } from "store/slices/citySlice";

import { useGetCityForcastQuery } from "api/apiSlice";
import History from "components/history";
import Loading from "components/Loading";

const Cities: React.FC = () => {
  const dispatch = useAppDispatch();
  const city = useAppSelector((state) => state.city.currentCity);
  const { data, isLoading, isError, error } = useGetCityForcastQuery(city);

  useEffect(() => {
    if (data) {
      dispatch(addPreviousCity(data));
    }
  }, [data]);

  if (isLoading) return <Loading />;
  if (isError) return <div>{(error as ApiError).data.message}</div>;

  return <History />;
};

export default Cities;
