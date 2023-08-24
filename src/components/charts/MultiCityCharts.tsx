import { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { format } from "date-fns";

import {
  styled,
  Box,
  BoxProps,
  Typography,
  TypographyProps,
  Card,
} from "@mui/material";

import MultiCityChart from "./MultiCityChart";

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
  citiesData?: ApiResponse[];
  cityName?: string;
}

const MultiCityCharts: React.FC<Props> = ({ citiesData, cityName }) => {
  const labels = citiesData?.[0].list?.map((forecast) =>
    getDateTimeLabel(forecast.dt_txt)
  );

  const [orders, setOrders] = useState([1, 2, 3, 4]);

  const getDatasets = (callback: (forecast: Forecast) => number) => {
    return citiesData?.map((cityData) => ({
      label: cityData.city.name,
      data: cityData.list?.map(callback),
    }));
  };

  const chartsData = [
    {
      title: "Temprature C°",
      datasets: getDatasets((forecast) =>
        convertKelvinToCelsius(forecast.main.temp)
      ),
    },
    {
      title: "Pressure",
      datasets: getDatasets((forecast) => forecast.main.pressure),
    },
    {
      title: "Humidity",
      datasets: getDatasets((forecast) => forecast.main.humidity),
    },
    {
      title: "Wind Speed",
      datasets: getDatasets((forecast) => forecast.wind.speed),
    },
  ];

  const handleOnDrop = (dragIndex: number, dropIndex: number) => {
    const dragIndexValue = orders[dragIndex];
    orders[dragIndex] = orders[dropIndex];
    orders[dropIndex] = dragIndexValue;
    setOrders(new Array(...orders));
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Card elevation={1} sx={{ mt: 2, mx: 2 }}>
        <StyledCityName variant="h4">{cityName}</StyledCityName>
        <StyledChartsContainer>
          {chartsData?.map((chartData, index) => (
            <MultiCityChart
              chartTitle={chartData.title}
              labels={labels}
              order={orders[index]}
              datasets={chartData.datasets}
              index={index}
              key={index}
              handleOnDrop={handleOnDrop}
            />
          ))}
        </StyledChartsContainer>
      </Card>
    </DndProvider>
  );
};

const convertKelvinToCelsius = (tempInKelvin: number) =>
  Math.floor(tempInKelvin - 273.15);

const getDateTimeLabel = (dateStamp: string) => {
  const date = new Date(dateStamp);
  return format(date, "dd MMM hha");
};

export default MultiCityCharts;
