import Box from "@mui/material/Box";

import Charts from "components/charts";
import { useAppSelector } from "store/hooks";

const SearchedCities: React.FC = () => {
  const searchedCities = useAppSelector((state) => state.city.searchedCities);

  return (
    <Box>
      {searchedCities.map((cityData) => (
        <Charts data={cityData} key={cityData.city.id} />
      ))}
    </Box>
  );
};

export default SearchedCities;
