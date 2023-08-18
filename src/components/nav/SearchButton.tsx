import { styled } from "@mui/material";
import Box, { BoxProps } from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

import { useAppDispatch } from "store/hooks";
import { setCurrentCity, setShowSearchedCities } from "store/slices/citySlice";

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
    dispatch(setShowSearchedCities(true));
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
