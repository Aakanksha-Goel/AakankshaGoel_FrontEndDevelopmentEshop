import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    baseAppbar: {
      main: "#3f51b5",
      light: "#FFFFFF",
      contrastText: "#FFFFFF"
    },
    ochre: {
      main: "#FFFFFF",
      light: "#FFFFFF",
      dark: "#FFFFFF",
      contrastText: "#000000"
    },
    outlinedButton: {
      main: "#f50057",
      light: "#FFFFFF",
      dark: "#f50057",
      contrastText: "#FFFFFF"
    }
  }
});

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  maxWidth: "70%",
  width: "30%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1)
  }
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": { 
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch"
      }
    }
  }
}));

export default function SearchAppBar() {
  let loggedIn = false;
  let isAdmin = false;
  if(loggedIn){
    if(isAdmin){
      return (
        <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar color="baseAppbar" position="static">
            <Toolbar
              sx={{
                justifyContent: "space-between"
              }}
            >
              <Stack direction="row" alignItems="center">
                <ShoppingCartIcon />
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ display: { xs: "none", sm: "block" } }}
                >
                  upGrad E-Shop
                </Typography>
              </Stack>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase 
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
              <Stack sx={{ minWidth:"15%", display: "flex", textAlign:"center" }} direction="row" alignItems="start">
                <Link
                  sx={{ display: "inline", margin: "2%", alignSelf: "center" }}
                  href="#"
                  color="inherit"
                >
                  Home
                </Link>
                <Link
                  sx={{ display: "inline", margin: "2%", width: "100%", alignSelf: "center" }}
                  href="#"
                  color="inherit"
                >
                  Add Product
                </Link>
                <Button sx={{ minWidth: "30%" }} color="outlinedButton" variant="contained">
                  Logout
                </Button>
              </Stack>
            </Toolbar>
          </AppBar>
        </Box>
      </ThemeProvider>
        );    
    }
    return (
      <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar color="baseAppbar" position="static">
          <Toolbar
            sx={{
              justifyContent: "space-between"
            }}
          >
            <Stack direction="row" alignItems="center">
              <ShoppingCartIcon />
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                upGrad E-Shop
              </Typography>
            </Stack>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase 
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <Stack sx={{ minWidth:"15%", display: "block", textAlign:"end" }} direction="row" alignItems="start">
              <Link
                sx={{ display: "inline", margin: "10%", alignSelf: "center" }}
                href="#"
                color="inherit"
              >
                Home
              </Link>
              <Button sx={{ minWidth: "30%" }} color="outlinedButton" variant="contained">
                Logout
              </Button>
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
      );  
  }

  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="baseAppbar" position="static">
        <Toolbar
          sx={{
            justifyContent: "space-between"
          }}
        >
          <Stack direction="row" alignItems="center">
            <ShoppingCartIcon />
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              upGrad E-Shop
            </Typography>
          </Stack>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase 
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Stack sx={{ minWidth:"15%", display: "block", textAlign:"end" }} direction="row" alignItems="start">
            <Link
              sx={{ display: "inline", margin: "10%", alignSelf: "center" }}
              href="/"
              color="inherit"
            >
              Login
            </Link>
            <Link
              sx={{ display: "inline", margin: "10%", width: "100%", alignSelf: "center" }}
              href="/signup"
              color="inherit"
            >
              Sign Up
            </Link>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  </ThemeProvider>
    );  

}
