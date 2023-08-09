import TextField, { TextFieldProps } from "@mui/material/TextField";
import { styled } from "@mui/material";

const StyledTextField = styled(TextField)<TextFieldProps>(() => ({
  "& .MuiInputBase-root": {
    borderRadius: "5px 0 0 5px",
    borderRight: "none",
    paddingLeft: 5,
    height: "35px",
    width: "200px",
  },
}));

interface Props {
  city: string;
  handleOnChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  >;
}

const SearchBox: React.FC<Props> = ({ city, handleOnChange }) => {
  return <StyledTextField value={city} onChange={handleOnChange} />;
};

export default SearchBox;
