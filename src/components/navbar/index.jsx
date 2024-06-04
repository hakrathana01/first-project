import { Grid, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const menu = [
    { name: "Home", url: "/" },
    { name: "About US", url: "/about-us" },
    { name: "Contact", url: "/contact" },
    { name: "My Account", url: "/account" },
    { name: "Login", url: "/login" },
    { name: "Register", url: "/register" },
  ];
  const { pathname } = useLocation();

  return (
    <Grid
      container
      sx={{
        background: "#E49BFF",
        display: pathname === "/login" || pathname === "/register" ? "none" : "flex",
        justifyContent: "space-between",
        padding: "10px",
        position: "fixed",
      }}
    >
      <Grid item>LOGO</Grid>
      <Grid item>
        <Grid container spacing={2} sx={{ padding: "0px 10px" }}>
          {menu.map((item, index) => {
            return (
              <Grid item key={index}>
                <Link to={item.url} sx={{ BorderBottom: "none" }}>
                  <Typography
                    sx={{
                      color: pathname == item.url ? theme => theme.palette.primary.main : "",
                    }}
                  >
                    {item.name}
                  </Typography>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>

    // <Box sx={{ flexGrow: 1 }}>
    //   <AppBar position="static">
    //     <Toolbar>
    //       <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
    //         <MenuIcon />
    //       </IconButton>
    //       <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
    //         News
    //       </Typography>
    //       <Button color="inherit">Login</Button>
    //     </Toolbar>
    //   </AppBar>
    // </Box>
  );
};

export default NavBar;
