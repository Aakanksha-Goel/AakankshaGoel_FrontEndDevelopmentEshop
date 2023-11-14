import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchAppBar from '../../common/navbar/navbar';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useParams } from "react-router-dom";
import {useState} from 'react';

const defaultTheme = createTheme();

export default function ProductDetail() {

    const [alignment, setAlignment] = React.useState('web');
    const [age, setAge] = React.useState('');
    const [value, setValue] = useState('');
    //let { id } = useParams();

    const handleChange1 = (event) => {
      setAge(event.target.value);
    };  

    const handleChange = (event, newAlignment) => {
      setAlignment(newAlignment);
    };  

    const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password")
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <SearchAppBar/>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            minWidth: "max-content",
            marginTop: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
        <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="web">All</ToggleButton>
      <ToggleButton value="android">Apparel</ToggleButton>
      <ToggleButton value="ios">Electronics</ToggleButton>
      <ToggleButton value="ios1">Personal Care</ToggleButton>
    </ToggleButtonGroup>
    </Box>
      </Container>
      <Grid sx={{margin: "2%"}} justifyContent="center" alignItems="flex-start" container spacing={2}>
        <Grid item xs={3}>
            <img style={{maxWidth: "-webkit-fill-available", borderRadius: "5%"}} src="https://abdelghafour122.github.io/ecommerce-product-page/static/media/image-product-1.520cc50bd13955f55cb2.jpg" alt="product-thumbnail" />
        </Grid>
        <Grid item xs={5}>
            <Grid justifyContent="center" alignItems="flex-start" container spacing={2}>
                <Grid item xs={8}>
                    <Grid justifyContent="flex-start" alignItems="center" container spacing={2}>
                        <Grid item xs={4}>
                            <h1>iPhone 14 </h1>
                        </Grid>
                        <Grid item xs={4}>
                            <Chip label="Available Quantity: 28" color="primary" variant="outlined" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={8}>
                    <Grid justifyContent="flex-start" alignItems="center" container spacing={2}>
                        <Grid item xs={2}>
                            Category: 
                        </Grid>
                        <Grid item xs={4}>
                            <h4>Electronics</h4>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid sx={{overflowWrap: "break-word", overflowY: "clip", maxHeight: "200px"}} item xs={8}>
                    DSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSFDDSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSFDDSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSFD DSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSFDDSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSFDDSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSFDDSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSFDDSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSFD
                </Grid>
                <Grid item xs={8}>
                  &#8377; 3121423
                </Grid>
                <Grid item xs={8}>
                    <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="quantity"
                    label="Quantity"
                    id="quantity"
                    value={value}
                    onChange={handleChange}
                    autoComplete="quantity"
                    />
                </Grid>
                <Grid item xs={8}>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ maxWidth: "40%", mt: 3, mb: 2 }}
                        >
                        Place Order
                    </Button>
                </Grid>
            </Grid>
        </Grid>
      </Grid>

    </ThemeProvider>
  );
}
