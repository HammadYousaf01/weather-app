import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Nav from "components/nav";

const Root: React.FC = () => {
  return (
    <Box sx={{ height: "100vh" }}>
      <Nav />
      <Outlet />
    </Box>
  );
};

export default Root;
