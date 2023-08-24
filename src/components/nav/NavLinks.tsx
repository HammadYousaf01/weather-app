import { Box, BoxProps, styled } from "@mui/material";
import NavLink from "./NavLink";

const StyledNavLinks = styled(Box)<BoxProps>(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const NavLinks: React.FC = () => {
  const links = ["search", "map", "compare"];

  return (
    <StyledNavLinks>
      {links.map((link, index) => (
        <NavLink text={link} key={index} />
      ))}
    </StyledNavLinks>
  );
};

export default NavLinks;
