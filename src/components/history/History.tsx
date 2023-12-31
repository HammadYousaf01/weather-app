import { useAppSelector } from "store/hooks";

import HistoryItem from "./HistoryItem";

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
