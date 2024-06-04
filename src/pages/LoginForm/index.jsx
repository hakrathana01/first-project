import { Button, Grid, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const { handleSubmit, control, getFieldState, formState } = useForm({
    defaultValues: { email: "", password: "" },
  });
  const navigate = useNavigate();

  return (
    <form
      onSubmit={handleSubmit(data => {
        console.log("data", data);
        localStorage.setItem("email", data.email);
        navigate("/");
      })}
    >
      <Grid
        container
        sx={{
          width: "600px",
          background: "rgba(201, 160, 255, 0.8)",
          padding: "15px",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        spacing={1.8}
      >
        <Grid item xs={12} sx={{ justifyContent: "center", display: "flex" }}>
          <Typography style={{ fontSize: "26px", fontWeight: "bold" }}>Login Form</Typography>
        </Grid>
        <Grid item xs={12}>
          <Controller
            control={control}
            name="email"
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Invalid email address",
              },
            }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                variant="outlined"
                label="Email"
                {...field}
                fullWidth
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
          ></Controller>
        </Grid>
        <Grid item xs={12}>
          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <TextField
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="outlined"
                fullWidth
                {...field}
              />
            )}
          ></Controller>
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            disabled={
              getFieldState("email", formState).isDirty &&
              getFieldState("password", formState).isDirty
                ? false
                : true
            }
          >
            Login
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Grid container display="flex" justifyContent="space-between">
            <Grid item display="flex" alignItems="center">
              <Typography color="gray">Not yet have account</Typography>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                onClick={() => {
                  navigate("/register");
                }}
              >
                Register
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

export default LoginForm;
