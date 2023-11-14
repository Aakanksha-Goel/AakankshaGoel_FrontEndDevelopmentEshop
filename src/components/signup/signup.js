import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import CssBaseline from "@mui/material/CssBaseline";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import SearchAppBar from '../../common/navbar/navbar';
import {useState} from 'react';
import PositionedSnackbar from "../../common/customsnackbar/customsnackbar";

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

export default function SignUp() {

  const users = useSelector(SelectUsers, shallowEqual);

  const [value, setValue] = useState('');

  let showSnackBar = false;

  const handleChange = event => {
    const result = event.target.value.replace(/\D/g, '');

    setValue(result);
  };

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    let newUser = {
      id: users.length,
      firstName: data.get("fname"),
      lastName: data.get("lname"),
      email: data.get("email"),
      role: 'sales',
      password: data.get("password"),
      contactNumber: data.get("contact_number")

    };

    users.users.forEach((item) => {
        if(item.email === newUser.email && item.password === newUser.password){
          showSnackBar = true;
          return;
        }else{
          showSnackBar = false;
        }
    });

    users.activeUser = newUser;
    users.users.push(newUser);

    sessionStorage.setItem("userCache", JSON.stringify(users));

    window.location.href = '/home';
    
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <SearchAppBar/>
      <PositionedSnackbar dismissOrNot={showSnackBar} message={'User Already Exists !!!'} typeOfSnackBar={'error'}/>
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
            Sign Up
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
              id="fname"
              label="First Name"
              name="fname"
              autoComplete="fname"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="lname"
              label="Last Name"
              id="lname"
              autoComplete="lname"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="email"
              label="Email Address"
              type="email"
              id="email"
              autoComplete="email"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              inputProps={{ maxLength: 12, minlength: 8 }}
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              inputProps={{ maxLength: 12, minlength: 8 }}
              name="confirm_password"
              label="Confirm Password"
              type="password"
              id="password_confirm"
              autoComplete="confirm-password"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="contact_number"
              label="Contact Number"
              id="contact_no"
              value={value}
              onChange={handleChange}
              autoComplete="contact-number"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid  sx={{  display: "block", textAlign: "end" }} container>
              <Grid item>
                <Link href="/" variant="body2">
                  {"Already have an account? Sign In"}
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
