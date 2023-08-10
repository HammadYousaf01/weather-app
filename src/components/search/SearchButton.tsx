import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { addPreviousCity } from "store/slices/citySlice";

const SearchButton: React.FC = () => {
  const currentCity = useAppSelector((state) => state.city.currentCity);
  const dispatch = useAppDispatch();

  const handleOnClick = () => {
    dispatch(addPreviousCity(currentCity));
  };

  return (
    <Box sx={{ ml: 1 }}>
      <IconButton onClick={handleOnClick}>
        <SearchIcon />
      </IconButton>
    </Box>
  );
};

export default SearchButton;
