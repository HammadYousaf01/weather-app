import { styled } from "@mui/material";
import Box, { BoxProps } from "@mui/material/Box";
import { Line } from "react-chartjs-2";
import { useDrag, useDrop } from "react-dnd";

export enum DndItemTypes {
  Chart = "Chart",
}

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
  order: number;
  index: number;
  handleOnDrop: (dragIndex: number, dropIndex: number) => void;
}

const Chart: React.FC<Props> = ({
  chartLabel,
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
      console.log(item.index, index);
      handleOnDrop(item.index, index);
    },
  }));

  return (
    <StyledChartContainer sx={{ order }} ref={drop}>
      <div ref={drag}>
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
      </div>
    </StyledChartContainer>
  );
};

export default Chart;
