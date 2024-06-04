import { Button, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const { handleSubmit, control, getFieldState, formState } = useForm({
    defaultValues: { email: "", password: "", confirmPassword: "" },
  });

  const navigate = useNavigate();

  const [isPasswordTheSame, setIsPasswordTheSame] = useState(true);
  console.log("isPasswordSame", isPasswordTheSame);

  return (
    <form
      onSubmit={handleSubmit(data => {
        setIsPasswordTheSame(data.confirmPassword === data.password ? true : false);
        data.confirmPassword === data.password && navigate("/");
        console.log("data", data);
        console.log("Pass", data.confirmPassword === data.password);
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
          <Typography style={{ fontSize: "26px", fontWeight: "bold" }}>Register Form</Typography>
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
          <Controller
            control={control}
            name="confirmPassword"
            render={({ field }) => (
              <TextField
                label="Confirm Password"
                type="password"
                autoComplete="current-password"
                variant="outlined"
                fullWidth
                {...field}
                error={!isPasswordTheSame}
                helperText={
                  !isPasswordTheSame ? "Password and Confirm Password Must be the same" : null
                }
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
              getFieldState("confirmPassword", formState).isDirty &&
              getFieldState("password", formState).isDirty
                ? false
                : true
            }
          >
            Register
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default RegisterForm;
