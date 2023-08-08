import { Box } from "@mui/material";

import History from "components/history";
import Search from "components/search";
import Result from "components/result";

const SearchPage: React.FC = () => {
  return (
    <Box>
      <Search />
      <History />
      <Result />
    </Box>
  );
};

export default SearchPage;
