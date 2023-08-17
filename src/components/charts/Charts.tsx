import { format } from "date-fns";
import {
  styled,
  Box,
  BoxProps,
  Typography,
  TypographyProps,
  Card,
} from "@mui/material";

import Chart from "./Chart";

const StyledCityName = styled(Typography)<TypographyProps>(() => ({
  padding: "0.5rem",
  textAlign: "center",
}));

const StyledChartsContainer = styled(Box)<BoxProps>(() => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
}));

interface Props {
  data?: ApiResponse;
}

const Charts: React.FC<Props> = ({ data }) => {
  const labels = data?.list?.map((forecast) =>
    getDateTimeLabel(forecast.dt_txt)
  );

  const chartsData = [
    {
      title: "Temprature C°",
      data: data?.list?.map((forecast) =>
        convertKelvinToCelsius(forecast.main.temp)
      ),
    },
    {
      title: "Pressure",
      data: data?.list?.map((forecast) => forecast.main.pressure),
    },
    {
      title: "Humidity",
      data: data?.list?.map((forecast) => forecast.main.humidity),
    },
    {
      title: "Wind Speed",
      data: data?.list?.map((forecast) => forecast.wind.speed),
    },
  ];

  return (
    <Card elevation={1} sx={{ mt: 2, mx: 2 }}>
      <StyledCityName variant="h4">{data?.city.name}</StyledCityName>
      <StyledChartsContainer>
        {chartsData.map((chartData, index) => (
          <Chart
            chartTitle={chartData.title}
            labels={labels}
            data={chartData.data}
            key={index}
          />
        ))}
      </StyledChartsContainer>
    </Card>
  );
};

const convertKelvinToCelsius = (tempInKelvin: number) =>
  Math.floor(tempInKelvin - 273.15);

const getDateTimeLabel = (dateStamp: string) => {
  const date = new Date(dateStamp);
  return format(date, "dd MMM hha");
};

export default Charts;
