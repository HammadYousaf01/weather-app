import Charts from "components/charts/Charts";

interface Props {
  data?: ApiResponse;
}

const HistoryItem: React.FC<Props> = ({ data }) => {
  return <Charts data={data} />;
};

export default HistoryItem;
