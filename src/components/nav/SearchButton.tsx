import { styled, Box, BoxProps, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { useAppDispatch } from "store/hooks";
import { setCurrentCity } from "store/slices/citySlice";
import { setShowResult } from "store/slices/resultSlice";

const StyledSearchButton = styled(Box)<BoxProps>(({ theme }) => ({
  border: `1px solid ${theme.palette.grey[500]}`,
  borderRadius: "0 5px 5px 0",
  borderLeft: "none",
}));

interface Props {
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
}

const SearchButton: React.FC<Props> = ({ city, setCity }) => {
  const dispatch = useAppDispatch();

  const handleOnClick = () => {
    dispatch(setCurrentCity(city));
    dispatch(setShowResult(true));
    setCity("");
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
