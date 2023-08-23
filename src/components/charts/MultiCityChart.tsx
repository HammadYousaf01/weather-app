import {
  styled,
  Box,
  BoxProps,
  Typography,
  TypographyProps,
} from "@mui/material";
import { Line } from "react-chartjs-2";
import type { ChartData, ChartDataset } from "chart.js";
import { useDrag, useDrop } from "react-dnd";
import Resizable from "./Resizable";

export enum DndItemTypes {
  Chart = "Chart",
}

import { Chart as ChartJS, registerables } from "chart.js";
ChartJS.register(...registerables);

const StyledChartContainer = styled(Box)<BoxProps>(() => ({
  margin: "0.5rem",
  width: "48%",
  minWidth: 450,
  height: "100%",
  display: "flex",
  justifyContent: "center",
  marginBottom: "3rem",
}));

const StyledChartTitle = styled(Typography)<TypographyProps>(() => ({
  textAlign: "center",
  marginTop: "1rem",
}));

const StyledDragContainer = styled(Box)<BoxProps>(() => ({
  width: "100%",
  height: "100%",
}));

interface Props {
  // chartTitle: string;
  // labels: string[] | undefined;
  // data: number[] | undefined;
  chartTitle: string;
  labels?: string[];
  datasets?: Dataset[];
  order: number;
  index: number;
  handleOnDrop: (dragIndex: number, dropIndex: number) => void;
}

const MultiCityChart: React.FC<Props> = ({
  chartTitle,
  labels,
  datasets,
  order,
  index,
  handleOnDrop,
}) => {
  const [, drag] = useDrag(() => ({
    type: DndItemTypes.Chart,
    item: { index },
  }));

  const [, drop] = useDrop(() => ({
    accept: DndItemTypes.Chart,
    drop: (item: { index: number }) => {
      handleOnDrop(item.index, index);
    },
  }));

  const chartData: ChartData<"line", number[], string> = {
    labels,
    datasets: datasets as ChartDataset<"line", number[]>[],
  };

  const chartStyles: React.CSSProperties = {
    minWidth: "100%",
    minHeight: "100%",
  };

  return (
    <StyledChartContainer sx={{ order }} ref={drop}>
      <Resizable>
        <StyledDragContainer ref={drag}>
          <Line datasetIdKey="id" style={chartStyles} data={chartData} />
          <StyledChartTitle>{chartTitle}</StyledChartTitle>
        </StyledDragContainer>
      </Resizable>
    </StyledChartContainer>
  );
};

export default MultiCityChart;
