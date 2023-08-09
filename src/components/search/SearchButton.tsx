import { styled } from "@mui/material";
import Box, { BoxProps } from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

import { useAppDispatch } from "store/hooks";
import { addPreviousCity, setCity } from "store/slices/citySlice";
import { setShowResult } from "store/slices/resultSlice";

const StyledSearchButton = styled(Box)<BoxProps>(({ theme }) => ({
  border: `1px solid ${theme.palette.grey[500]}`,
  borderRadius: "0 5px 5px 0",
  borderLeft: "none",
}));

interface Props {
  city: string;
}

const SearchButton: React.FC<Props> = ({ city }) => {
  const dispatch = useAppDispatch();

  const handleOnClick = () => {
    const newSearchCity = {
      city,
      searchedAt: new Date().toString(),
    };
    dispatch(setCity(city));
    dispatch(setShowResult(true));
    dispatch(addPreviousCity(newSearchCity));
  };

  return (
    <StyledSearchButton>
      <IconButton onClick={handleOnClick} sx={{ height: 33 }}>
        <SearchIcon />
      </IconButton>
    </StyledSearchButton>
  );
};

export default SearchButton;
