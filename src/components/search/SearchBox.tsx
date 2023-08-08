import TextField from "@mui/material/TextField";

import { useAppDispatch, useAppSelector } from "store/hooks";
import { setCity } from "store/slices/citySlice";

const SearchBox: React.FC = () => {
  const city = useAppSelector((state) => state.city.currentCity);
  const dispatch = useAppDispatch();

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatch(setCity(e.target.value));
  };

  return <TextField size="small" value={city} onChange={handleOnChange} />;
};

export default SearchBox;
