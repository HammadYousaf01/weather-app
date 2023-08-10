import React, { useState } from "react";
import { styled } from "@mui/material";
import Box, { BoxProps } from "@mui/material/Box";
import SearchBox from "./SearchBox";
import SearchButton from "./SearchButton";

const StyledSearchBar = styled(Box)<BoxProps>(() => ({
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const Search: React.FC = () => {
  const [city, setCity] = useState("");

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setCity(e.target.value);
  };

  return (
    <StyledSearchBar>
      <SearchBox city={city} handleOnChange={handleOnChange} />
      <SearchButton city={city} setCity={setCity} />
    </StyledSearchBar>
  );
};

export default Search;
