import { Box } from "@mui/material";

import History from "components/history";
import Search from "components/search";
import Result from "components/result";
import { useAppSelector } from "store/hooks";

const SearchPage: React.FC = () => {
  const showResult = useAppSelector((state) => state.result.showResult);

  return (
    <Box>
      <Search />
      <History />
      {showResult && <Result />}
    </Box>
  );
};

export default SearchPage;
