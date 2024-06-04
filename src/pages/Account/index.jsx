import { Grid, Typography } from "@mui/material";
import PageLayout from "../../components/pagelayout";

const AccountPage = () => {
  return (
    <PageLayout>
      <Grid container>
        {localStorage.getItem("email") && (
          <Grid item xs={12}>
            <Typography color="primary" fontSize="26px" textAlign="center">
              {localStorage.getItem("email") && `Email: ${localStorage.getItem("email")}`}
            </Typography>
          </Grid>
        )}

        <Grid item xs={12}>
          <Typography color="primary" fontSize="26px" textAlign="center">
            Welcome to your account
          </Typography>
        </Grid>
      </Grid>
    </PageLayout>
  );
};

export default AccountPage;
