import { Box, CircularProgress } from "@mui/material";
import { format } from "date-fns";

import { useAppSelector } from "store/hooks";
import { useGetCityForcastQuery } from "api/apiSlice";
import Chart from "./Chart";

const Result: React.FC = () => {
  const city = useAppSelector((state) => state.city.currentCity);
  const { data, isLoading, isError, error } = useGetCityForcastQuery(city);

  if (isLoading) return <CircularProgress />;
  if (isError) return <div>{error.data.message}</div>;

  const labels = data?.list.map((forecast) =>
    getDateTimeLabel(forecast.dt_txt)
  );

  return (
    <Box>
      Current City: {data?.city.name}
      <Chart
        chartLabel="Temprature"
        labels={labels}
        data={data?.list.map((forecast) =>
          convertKelvinToCelsius(forecast.main.temp)
        )}
      />
      <Chart
        chartLabel="Presure"
        labels={labels}
        data={data?.list.map((forecast) => forecast.main.pressure)}
      />
      <Chart
        chartLabel="Humidity"
        labels={labels}
        data={data?.list.map((forecast) => forecast.main.humidity)}
      />
    </Box>
  );
};

function convertKelvinToCelsius(tempInKelvin: number) {
  return Math.floor(tempInKelvin - 273.15);
}

function getDateTimeLabel(dateStamp: string) {
  const date = new Date(dateStamp);
  return format(date, "dd MMM hha");
}

export default Result;
