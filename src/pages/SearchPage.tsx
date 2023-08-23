import Box from "@mui/material/Box";

import { CurrentCity } from "components/city";
import SearchedCities from "components/city/SearchedCities";
import { useAppSelector } from "store/hooks";

const SearchPage: React.FC = () => {
  const searchedCities = useAppSelector((state) => state.city.searchedCities);

  return (
    <Box>
      {searchedCities.length > 0 ? (
        <SearchedCities searchedCities={searchedCities} />
      ) : (
        <CurrentCity />
      )}
    </Box>
  );
};

export default SearchPage;
