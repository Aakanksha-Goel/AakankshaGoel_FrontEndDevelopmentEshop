import * as React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import CustomStepper from "../../common/customstepper/customstepper";
import SearchAppBar from "../../common/navbar/navbar";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const defaultTheme = createTheme();
 
export default function OrderConfirmationPage() {    
  
  return (
    <ThemeProvider theme={defaultTheme}>
              <SearchAppBar/>
              <Card sx={{ padding: "1%", marginLeft: "3%", marginRight: "3%", marginTop: "3%", minWidth: 275, border: "none", boxShadow: "none" }}>
              <CustomStepper/>
              </Card>
    <Card variant="outlined" sx={{ marginLeft: "3%", marginRight: "3%", marginTop: "5px", minWidth: 275 }}>
      <CardContent>
      <Grid sx={{margin: "2%"}} justifyContent="center" alignItems="flex-start" container spacing={2}>
      <Grid justifyContent="flex-start" item xs={6}>
            <Grid justifyContent="flex-start" alignItems="flex-start" container spacing={2}>
                <Grid item xs={8}>
                    <h2>iPhone 14 </h2>
                </Grid>
                <Grid item xs={8}>
                    Quantity: 1
                </Grid>
                <Grid item xs={8}>
                    Category: <bold>Footwear</bold>
                </Grid>
                <Grid sx={{overflowWrap: "break-word", overflowY: "clip", maxHeight: "200px"}} item xs={8}>
                    Product Description
                </Grid>
                <Grid item xs={8} style={{color: "red"}}>
                  Total Price: &#8377; 3121423
                </Grid>
            </Grid>
        </Grid>
        <Divider orientation="vertical" flexItem/>
        <Grid item xs={4}>
            <Grid justifyContent="center" alignItems="flex-start" container spacing={2}>
                <Grid item xs={8}>
                    <h2>Address Details: </h2>
                </Grid>
                <Grid item xs={8}>
                    Lucknow Home
                </Grid>
                <Grid item xs={8}>
                    Contact Number: 8302347800
                </Grid>
                <Grid item xs={8}>
                    Police Line, Lucknow                
                </Grid>
                <Grid item xs={8}>
                    Uttar Pradesh
                </Grid>
                <Grid item xs={8}>
                    723990
                </Grid>
            </Grid>
        </Grid>
      </Grid>        
      </CardContent>
    </Card>
    <Grid sx={{padding: "1%"}} justifyContent="center" alignItems="flex-start" container spacing={2}>
    <Button variant="text">Back</Button>
    <Button variant="contained">Place Order</Button>

      </Grid>
    </ThemeProvider>
  );
}
