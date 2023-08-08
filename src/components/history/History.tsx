import HistoryItem from "./HistoryItem";

const History: React.FC = () => {
  const tempCityNames = ["Abc", "Xyz", "New York"];

  return (
    <div>
      {tempCityNames.map((city: string) => (
        <HistoryItem city={city} />
      ))}
    </div>
  );
};

export default History;
