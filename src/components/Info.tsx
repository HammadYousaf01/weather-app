import { styled, Box, BoxProps, Typography } from "@mui/material";

const StyledInfo = styled(Box)<BoxProps>(() => ({
  textAlign: "center",
  padding: "2rem 0",
}));

interface Props {
  children: React.ReactNode;
  error?: boolean;
}

const Info: React.FC<Props> = ({ children, error }) => {
  return (
    <StyledInfo>
      <Typography sx={{ color: error ? "red" : "" }}>{children}</Typography>
    </StyledInfo>
  );
};

export default Info;
