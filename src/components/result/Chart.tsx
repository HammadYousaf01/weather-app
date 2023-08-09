import { Line } from "react-chartjs-2";

interface Props {
  chartLabel: string;
  labels: string[] | undefined;
  data: number[] | undefined;
}

const Chart: React.FC<Props> = ({ chartLabel, labels, data }) => {
  return (
    <Line
      datasetIdKey="id"
      style={{
        maxWidth: 500,
        maxHeight: 350,
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
  );
};

export default Chart;
