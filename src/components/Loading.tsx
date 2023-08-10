import CircularProgress from "@mui/material/CircularProgress";
import Box, { BoxProps } from "@mui/material/Box";
import { styled } from "@mui/material";

const StyledLoading = styled(Box)<BoxProps>(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  width: "100%",
}));

const Loading: React.FC = () => {
  return (
    <StyledLoading>
      <CircularProgress />
    </StyledLoading>
  );
};

export default Loading;
