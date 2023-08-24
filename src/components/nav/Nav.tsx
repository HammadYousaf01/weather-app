import { styled, AppBar, AppBarProps } from "@mui/material";

import Search from "./Search";
import NavLinks from "./NavLinks";
import AppTitle from "./AppTitle";

const StyledAppBar = styled(AppBar)<AppBarProps>(() => ({
  backgroundColor: "white",
  display: "flex",
  flexDirection: "row",
  padding: "0.5rem",
}));

const Nav: React.FC = () => {
  return (
    <StyledAppBar elevation={1} position="static">
      <AppTitle />
      <Search />
      <NavLinks />
    </StyledAppBar>
  );
};

export default Nav;
