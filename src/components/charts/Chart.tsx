import { styled, Box, BoxProps } from "@mui/material";
import { Line } from "react-chartjs-2";
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
}));

const StyledDragContainer = styled(Box)<BoxProps>(() => ({
  width: "100%",
  height: "100%",
}));

interface Props {
  chartTitle: string;
  labels: string[] | undefined;
  data: number[] | undefined;
  order: number;
  index: number;
  handleOnDrop: (dragIndex: number, dropIndex: number) => void;
}

const Chart: React.FC<Props> = ({
  chartTitle,
  labels,
  data,
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
    <StyledChartContainer sx={{ order }} ref={drop}>
      <Resizable>
        <StyledDragContainer ref={drag}>
          <Line datasetIdKey="id" style={chartStyles} data={chartData} />
        </StyledDragContainer>
      </Resizable>
    </StyledChartContainer>
  );
};

export default Chart;
