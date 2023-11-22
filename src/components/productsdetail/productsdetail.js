import * as React from "react";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchAppBar from "../../common/navbar/navbar";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const defaultTheme = createTheme();
let orderPrice = 0;
let activeOrder = {};

export default function ProductDetail() {
  const { id } = useParams();
  const [initailized, setInitialized] = useState(false)
  const [product, setProduct] = useState();
  const [quantity, setQuantity] = useState(0);
 
  useEffect(() => {
    fetchProductById(id);
  }, [id]);

  const fetchProductById = async (id) => {
    const response = await fetch(`http://0.0.0.0:8080/products/${id}`);
    const result = await response.json();
    if (result?.data) {
      setProduct(result.data);
    }
    setInitialized(true);
  };

    const handleChange = (event) => {
      const { value } = event.target;
      if(product.availableItems < value){
        alert("Selected Order Quantity greater than Available Items.");
        setQuantity(product.availableItems);
        orderPrice = product.availableItems * product.price;
        return;
      }
      setQuantity(value);
      orderPrice = value * product.price;
    };

    const handlePlaceOrder = (event) => {
      event.preventDefault();
      activeOrder = product;
      activeOrder.orderQuantity = quantity;
      activeOrder.orderPrice = orderPrice;
      sessionStorage.setItem("activeOrder", JSON.stringify(activeOrder));
      window.location.href = '/order';
  };

  if(!initailized) return null

  return (
    <ThemeProvider theme={defaultTheme}>
      <SearchAppBar />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        {/* <Box
          sx={{
            minWidth: "max-content",
            marginTop: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <ToggleButtonGroup
            value={category}
            exclusive
            name="category"
            onChange={handleChange}
            aria-label="category"
          >
            <ToggleButton value="">All</ToggleButton>
            <ToggleButton value="apparel">Apparel</ToggleButton>
            <ToggleButton value="electronics">Electronics</ToggleButton>
            <ToggleButton value="personal-care">Personal Care</ToggleButton>
          </ToggleButtonGroup>
        </Box> */}
      </Container>
      <Grid
        sx={{ margin: "2%" }}
        justifyContent="center"
        alignItems="flex-start"
        container
        spacing={2}
      >
        <Grid item xs={3}>
          <img
            style={{ maxWidth: "-webkit-fill-available", borderRadius: "5%" }}
            src={product.imageUrl}
            alt={product.name}
          />
        </Grid>
        <Grid item xs={5}>
          <Grid
            justifyContent="center"
            alignItems="flex-start"
            container
            spacing={2}
          >
            <Grid item xs={8}>
              <Grid
                justifyContent="flex-start"
                alignItems="center"
                container
                spacing={2}
              >
                <Grid item xs={4}>
                  <h1>{product.name} </h1>
                </Grid>
                <Grid item xs={4}>
                  <Chip
                    label={"Available Items: " + product.availableItems}
                    color="primary"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={8}>
              <Grid
                justifyContent="flex-start"
                alignItems="center"
                container
                spacing={2}
              >
                <Grid item xs={2}>
                  Category:
                </Grid>
                <Grid item xs={4}>
                  <h4>{product.category}</h4>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              sx={{
                overflowWrap: "break-word",
                overflowY: "clip",
                maxHeight: "200px",
              }}
              item
              xs={8}
            >
              {product.description}
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
