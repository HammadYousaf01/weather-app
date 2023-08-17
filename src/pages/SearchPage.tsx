import { Box } from "@mui/material";
import CurrentCityWeather from "components/CurrentCityWeather";

import Nav from "components/nav";
import Result from "components/result";
import { useAppSelector } from "store/hooks";

const SearchPage: React.FC = () => {
  const showResult = useAppSelector((state) => state.result.showResult);

  return (
    <Box>
      <Nav />
      {showResult && <Result />}
      <CurrentCityWeather />
    </Box>
  );
};

export default SearchPage;
