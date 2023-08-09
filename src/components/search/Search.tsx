import React, { useState } from "react";
import { styled } from "@mui/material";
import Box, { BoxProps } from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SearchBox from "./SearchBox";
import SearchButton from "./SearchButton";

const StyledSearchBar = styled(Box)<BoxProps>(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "0.5rem",
}));

const StyledSearchContainer = styled(Box)<BoxProps>(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "1rem",
}));

const Search: React.FC = () => {
  const [city, setCity] = useState("");

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setCity(e.target.value);
  };

  return (
    <StyledSearchContainer>
      <Typography variant="h3">Search City</Typography>
      <StyledSearchBar>
        <SearchBox city={city} handleOnChange={handleOnChange} />
        <SearchButton city={city} />
      </StyledSearchBar>
    </StyledSearchContainer>
  );
};

export default Search;
