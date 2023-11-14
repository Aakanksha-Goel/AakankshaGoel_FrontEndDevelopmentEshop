import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useSelector, shallowEqual } from 'react-redux';
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import SearchAppBar from '../../common/navbar/navbar';

import { createTheme, ThemeProvider } from "@mui/material/styles";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://upgrad.com/">
        upGrad
      </Link>{" "}
      2021
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

const SelectUsers = (state) => state.users;

export default function ProductUpsert() {

  const users = useSelector(SelectUsers, shallowEqual);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    users.forEach((usr) => {
        if(usr.email === data.get("email") && usr.password === data.get("password")){
            localStorage.setItem("loggedInUserEshop", JSON.stringify(usr));
            console.log('users ', data.get("email"));
            console.log('loclhost', JSON.parse(localStorage.getItem('loggedInUserEshop')));
            window.location.href = '/home';
        }
        console.log('loclhost', localStorage.getItem('loggedInUserEshop1')); //null
      });
    /*
    const dispatch = useDispatch();
    dispatch({ type: 'db/userAdded', payload: users }); */ 
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <SearchAppBar/>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
