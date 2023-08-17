import { styled, Box, BoxProps } from "@mui/material";
import { Line } from "react-chartjs-2";

import { Chart as ChartJS, registerables } from "chart.js";
ChartJS.register(...registerables);

const StyledChartContainer = styled(Box)<BoxProps>(() => ({
  margin: "0.5rem",
  width: "48%",
  minWidth: 450,
  height: "100%",
}));

interface Props {
  chartTitle: string;
  labels?: string[];
  data?: number[];
}

const Chart: React.FC<Props> = ({ chartTitle, labels, data }) => {
  const chartData = {
    labels,
    datasets: [
      {
        label: chartTitle,
        data,
      },
    ],
  };

  const chartStyles: React.CSSProperties = {
    minWidth: "100%",
    minHeight: "100%",
  };

  return (
    <StyledChartContainer>
      <Line datasetIdKey="id" style={chartStyles} data={chartData} />
    </StyledChartContainer>
  );
};

export default Chart;
