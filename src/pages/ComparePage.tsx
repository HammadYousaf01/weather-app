import { useAppSelector } from "store/hooks";
import { ComparedCities } from "components/city";
import Info from "components/Info";

const ComparePage: React.FC = () => {
  const searchedCities = useAppSelector((state) => state.city.searchedCities);

  if (searchedCities.length < 1) {
    return <Info>Please Search cities to compare</Info>;
  }

  return <ComparedCities searchedCities={searchedCities} />;
};

export default ComparePage;
