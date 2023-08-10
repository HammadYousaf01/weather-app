import {
  Typography,
  TypographyProps,
  AppBar,
  styled,
  AppBarProps,
} from "@mui/material";

import Search from "./Search";

const StyledAppBar = styled(AppBar)<AppBarProps>(() => ({
  backgroundColor: "white",
  display: "flex",
  flexDirection: "row",
  padding: "0.5rem",
}));

const StyledAppTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: theme.palette.text.primary,
  padding: "0.5rem",
}));

const Nav: React.FC = () => {
  return (
    <StyledAppBar elevation={1} position="static">
      <StyledAppTitle variant="h5">Weather App</StyledAppTitle>
      <Search />
    </StyledAppBar>
  );
};

export default Nav;
