import HistoryItem from "./HistoryItem";
import { useAppSelector } from "store/hooks";

const History: React.FC = () => {
  const previousCities = useAppSelector((state) => state.city.previousCities);

  return (
    <>
      {previousCities.map((cityData) => (
        <HistoryItem data={cityData} key={cityData.city.id} />
      ))}
    </>
  );
};

export default History;
