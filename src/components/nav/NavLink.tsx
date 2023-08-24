import { Typography, TypographyProps, styled } from "@mui/material";
import { Link } from "react-router-dom";

const StyledNavLink = styled(Typography)<TypographyProps>(() => ({
  color: "black",
  textTransform: "capitalize",
  padding: "0 0.5rem",
}));

interface Props {
  text: string;
}

const NavLink: React.FC<Props> = ({ text }) => {
  const linkStyles: React.CSSProperties = {
    textDecoration: "none",
  };

  return (
    <Link to={text} style={linkStyles}>
      <StyledNavLink>{text}</StyledNavLink>
    </Link>
  );
};

export default NavLink;
