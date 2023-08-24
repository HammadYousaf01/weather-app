import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

import CoordinatesContextProdiver from "./context/CoordinatesContext";
import Nav from "components/nav";

const Root: React.FC = () => {
  return (
    <CoordinatesContextProdiver>
      <Box sx={{ height: "100vh" }}>
        <Nav />
        <Outlet />
      </Box>
    </CoordinatesContextProdiver>
  );
};

export default Root;
