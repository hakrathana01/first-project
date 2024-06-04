import { Box } from "@mui/material";

const PageLayout = ({ children }) => {
  return (
    <Box pt={5.5} height="100%" sx={{ overflow: "auto" }}>
      {children}
    </Box>
  );
};

export default PageLayout;
