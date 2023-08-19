import Box from "@mui/material/Box";

import Cities, { CurrentCity } from "components/city";
import { useAppSelector } from "store/hooks";

const SearchPage: React.FC = () => {
  const showSearchedCities = useAppSelector(
    (state) => state.city.showSearchedCities
  );

  return <Box>{showSearchedCities ? <Cities /> : <CurrentCity />}</Box>;
};

export default SearchPage;
