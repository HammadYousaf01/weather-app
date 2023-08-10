import { Box } from "@mui/material";

import Nav from "components/nav";
import Result from "components/result";
import { useAppSelector } from "store/hooks";

const SearchPage: React.FC = () => {
  const showResult = useAppSelector((state) => state.result.showResult);

  return (
    <Box>
      <Nav />
      {showResult && <Result />}
    </Box>
  );
};

export default SearchPage;
