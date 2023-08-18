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

  const [orders, setOrders] = useState([1, 2, 3, 4]);

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

  const handleOnDrop = (dragIndex: number, dropIndex: number) => {
    const dragIndexValue = orders[dragIndex];
    orders[dragIndex] = orders[dropIndex];
    orders[dropIndex] = dragIndexValue;
    setOrders(new Array(...orders));
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Card elevation={1} sx={{ mt: 2, mx: 2 }}>
        <StyledCityName variant="h4">{data?.city.name}</StyledCityName>
        <StyledChartsContainer>
          {chartsData.map((chartData, index) => (
            <Chart
              chartTitle={chartData.title}
              labels={labels}
              data={chartData.data}
              key={index}
              index={index}
              order={orders[index]}
              handleOnDrop={handleOnDrop}
            />
          ))}
          {/* <Chart
            chartLabel="Temprature C°"
            labels={labels}
            data={data?.list.map((forecast) =>
              convertKelvinToCelsius(forecast.main.temp)
            )}
            order={orders[0]}
            index={0}
            handleOnDrop={handleOnDrop}
          />
          <Chart
            chartLabel="Presure"
            labels={labels}
            data={data?.list.map((forecast) => forecast.main.pressure)}
            order={orders[1]}
            index={1}
            handleOnDrop={handleOnDrop}
          />
          <Chart
            chartLabel="Humidity"
            labels={labels}
            data={data?.list.map((forecast) => forecast.main.humidity)}
            order={orders[2]}
            index={2}
            handleOnDrop={handleOnDrop}
          />
          <Chart
            chartLabel="Wind speed"
            labels={labels}
            data={data?.list.map((forecast) => forecast.wind.speed)}
            order={orders[3]}
            index={3}
            handleOnDrop={handleOnDrop}
          /> */}
        </StyledChartsContainer>
      </Card>
    </DndProvider>
    // =======
    //   const chartsData = [
    //     {
    //       title: "Temprature C°",
    //       data: data?.list?.map((forecast) =>
    //         convertKelvinToCelsius(forecast.main.temp)
    //       ),
    //     },
    //     {
    //       title: "Pressure",
    //       data: data?.list?.map((forecast) => forecast.main.pressure),
    //     },
    //     {
    //       title: "Humidity",
    //       data: data?.list?.map((forecast) => forecast.main.humidity),
    //     },
    //     {
    //       title: "Wind Speed",
    //       data: data?.list?.map((forecast) => forecast.wind.speed),
    //     },
    //   ];

    //   return (
    //     <Card elevation={1} sx={{ mt: 2, mx: 2 }}>
    //       <StyledCityName variant="h4">{data?.city.name}</StyledCityName>
    //       <StyledChartsContainer>
    //         {chartsData.map((chartData, index) => (
    //           <Chart
    //             chartTitle={chartData.title}
    //             labels={labels}
    //             data={chartData.data}
    //             key={index}
    //           />
    //         ))}
    //       </StyledChartsContainer>
    //     </Card>
    // >>>>>>> cbb3c38c426fcba051bc22e9d08b011fcd1919d1
  );
};

const convertKelvinToCelsius = (tempInKelvin: number) =>
  Math.floor(tempInKelvin - 273.15);

const getDateTimeLabel = (dateStamp: string) => {
  const date = new Date(dateStamp);
  return format(date, "dd MMM hha");
};

export default Charts;
