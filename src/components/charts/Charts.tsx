import { format } from "date-fns";
import { styled } from "@mui/material";
import Typography, { TypographyProps } from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Box, { BoxProps } from "@mui/material/Box";

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
  data: ApiResponse | undefined;
}

const Charts: React.FC<Props> = ({ data }) => {
  const labels = data?.list.map((forecast) =>
    getDateTimeLabel(forecast.dt_txt)
  );

  return (
    <Card>
      <StyledCityName variant="h3">{data?.city.name}</StyledCityName>
      <StyledChartsContainer>
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
