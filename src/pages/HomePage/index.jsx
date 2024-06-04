import { Grid, Typography } from "@mui/material";
import PageLayout from "../../components/pagelayout";

const HomePage = () => {
  return (
    <PageLayout>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid item>
          <Typography fontSize="30px" color="primary">
            Welcome to Our HomePage
          </Typography>
        </Grid>
      </Grid>
    </PageLayout>
  );
};
export default HomePage;
