import { styled } from "@mui/material";
import Box, { BoxProps } from "@mui/material/Box";
import { Line } from "react-chartjs-2";

const StyledChartContainer = styled(Box)<BoxProps>(() => ({
  margin: "0.5rem",
  width: "48%",
  minWidth: 450,
  height: "100%",
}));

interface Props {
  chartLabel: string;
  labels: string[] | undefined;
  data: number[] | undefined;
}

const Chart: React.FC<Props> = ({ chartLabel, labels, data }) => {
  return (
    <StyledChartContainer>
      <Line
        datasetIdKey="id"
        style={{
          minWidth: "100%",
          minHeight: "100%",
        }}
        data={{
          labels: labels,
          datasets: [
            {
              label: chartLabel,
              data,
            },
          ],
        }}
      />
    </StyledChartContainer>
  );
};

export default Chart;
