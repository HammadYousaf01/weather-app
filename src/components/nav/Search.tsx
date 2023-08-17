import React, { useState } from "react";
import { styled, Box, BoxProps } from "@mui/material";

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
