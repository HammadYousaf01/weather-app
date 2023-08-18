import { styled } from "@mui/material";
import Box, { BoxProps } from "@mui/material/Box";
import { Line } from "react-chartjs-2";
import { useDrag, useDrop } from "react-dnd";
import Resizable from "./Resizable";

export enum DndItemTypes {
  Chart = "Chart",
}

const StyledChartContainer = styled(Box)<BoxProps>(() => ({
  margin: "0.5rem",
  width: "48%",
  minWidth: 450,
  height: "100%",
  display: "flex",
  justifyContent: "center",
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
      <Resizable>
        <Box
          ref={drag}
          sx={{
            width: "100%",
            height: "100%",
          }}
        >
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
        </Box>
      </Resizable>
    </StyledChartContainer>
  );
};

export default Chart;
