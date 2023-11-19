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
import {useState} from 'react';
import returnProducts from '../../models/products';

let seedData = returnProducts();

const defaultTheme = createTheme();
let orderPrice = 0;
let activeOrder = {};

export default function ProductDetail() {

    const [quantity, setQuantity] = useState('');

    let activeProduct =  JSON.parse(sessionStorage.getItem("activeProduct"));
    if(activeProduct == null){
      activeProduct = seedData[0];
    }

    const handleChange = (event) => {
      if(activeProduct.availableItems < event.target.value){
        alert("Selected Order Quantity greater than Available Items.");
        setQuantity(activeProduct.availableItems);
        orderPrice = activeProduct.availableItems * activeProduct.price; 
        return;
      }
      setQuantity(event.target.value);
      orderPrice = event.target.value * activeProduct.price; 
    };  

    const handlePlaceOrder = (event) => {
      event.preventDefault();
      activeOrder = activeProduct;
      activeOrder.orderQuantity = quantity;
      activeOrder.orderPrice = orderPrice;
      sessionStorage.setItem("activeOrder", JSON.stringify(activeOrder));
      window.location.href = '/order';
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
      value=""
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="">All</ToggleButton>
      <ToggleButton value="apparel">Apparel</ToggleButton>
      <ToggleButton value="electronics">Electronics</ToggleButton>
      <ToggleButton value="personal-care">Personal Care</ToggleButton>
    </ToggleButtonGroup>
    </Box>
      </Container>
      <Grid sx={{margin: "2%"}} justifyContent="center" alignItems="flex-start" container spacing={2}>
        <Grid item xs={3}>
            <img style={{maxWidth: "-webkit-fill-available", borderRadius: "5%"}} src={activeProduct.imageUrl} alt="product-thumbnail" />
        </Grid>
        <Grid item xs={5}>
            <Grid justifyContent="center" alignItems="flex-start" container spacing={2}>
                <Grid item xs={8}>
                    <Grid justifyContent="flex-start" alignItems="center" container spacing={2}>
                        <Grid item xs={4}>
                            <h1>{activeProduct.name} </h1>
                        </Grid>
                        <Grid item xs={4}>
                            <Chip label={"Available Items: "+activeProduct.availableItems} color="primary" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={8}>
                    <Grid justifyContent="flex-start" alignItems="center" container spacing={2}>
                        <Grid item xs={2}>
                            Category: 
                        </Grid>
                        <Grid item xs={4}>
                            <h4>{activeProduct.category}</h4>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid sx={{overflowWrap: "break-word", overflowY: "clip", maxHeight: "200px"}} item xs={8}>
                  {activeProduct.description}
                </Grid>
                <Grid item xs={8}>
                  &#8377; {orderPrice}
                </Grid>
                <Grid item xs={8}>
                    <TextField
                    margin="normal"
                    required
                    fullWidth 
                    name="quantity"
                    label="Quantity"
                    id="quantity"
                    value={quantity}
                    onChange={handleChange}
                    autoComplete="quantity"
                    />
                </Grid>
                <Grid item xs={8}>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    onClick={handlePlaceOrder}
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
