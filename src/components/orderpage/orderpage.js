import * as React from "react";
import Card from '@mui/material/Card';
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from '@mui/material/Grid';
import CustomStepper from "../../common/customstepper/customstepper";
import SearchAppBar from "../../common/navbar/navbar";
import Button from "@mui/material/Button";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import returnAddress from "../../models/address";

const defaultTheme = createTheme();

let seedData = returnAddress();

export default function OrderFillingPage() {    

  const [addressSelected, setAddressSelected] = React.useState((JSON.parse(sessionStorage.getItem('activeAddress'))==null?false:true));
  const [addressValue, setAddressValue] = React.useState((JSON.parse(sessionStorage.getItem('activeAddress'))==null?returnAddress():JSON.parse(sessionStorage.getItem('activeAddress'))));
  const [seedValue, setSeedValue] = React.useState((JSON.parse(sessionStorage.getItem('addressCache'))==null?returnAddress():JSON.parse(sessionStorage.getItem('addressCache'))));
  
  const HandleAddressChange = (event) => {
    setAddressSelected(true);
    sessionStorage.setItem('activeAddress', JSON.stringify(event.target.value));
    setAddressValue(event.target.value);
  };

  function CustomMenuItem(){
      let allItems = (seedValue.map(item => {
      let completeAddress = item.street +' '+ item.city + ' ' + item.state + ' ' + item.landmark + ' '+item.zip_code;
      return (<MenuItem value={item} key={completeAddress} label={completeAddress}>
        {completeAddress}
      </MenuItem>)
    }));
    return (<span><FormControl required style={{minWidth: "320px"}} >
    <InputLabel id="demo-simple-select-label">Select Address</InputLabel><Select
    labelId="demo-simple-select-label" required
    id="demo-simple-select"
    value={addressValue}
    onChange={HandleAddressChange}
    label="Select Address"
  >{allItems}</Select></FormControl></span>);
  }  

  const handlePrevious = (event) => {
    window.location.href = './product/detail';
  }

  const handleNext = (event) => {
    window.location.href = '/order/confirm';
  }

  function NextButton() {

  }

  const handleAddressSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let email = data.get("email");
    let contact_number = data.get("contact_number");
    let street = data.get("street");
    let city = data.get("city");
    let state = data.get("state");
    let landmark = data.get("landmark");
    let zip_code = data.get("zip-code");

    let previous = (seedValue==null)?[]:seedValue;
    previous.push({id: seedData.length.toString(), street: street, city: city, state: state, landmark: landmark, zip_code: zip_code, contact_number: contact_number});
    console.log(previous);
    setSeedValue(previous);
    sessionStorage.setItem('addressCache', JSON.stringify(previous));
    window.location.reload();

    /*users.forEach((usr) => {
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
              <Card sx={{ padding: "1%", marginLeft: "3%", marginRight: "3%", marginTop: "3%", minWidth: 275, border: "none", boxShadow: "none" }}>
              <CustomStepper/>
              </Card>
              <Grid sx={{padding: "1%"}}justifyContent="center" alignItems="flex-start" container spacing={2}>
              
              
          <CustomMenuItem/>
        </Grid>
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Typography component="h1" variant="h5">
            Add Address
          </Typography>
          <Box
            component="form"
            onSubmit={handleAddressSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="contact_number"
              label="Contact Number"
              id="contact_number"
              autoComplete="contact_number"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="street"
              label="Street"
              name="street"
              autoComplete="street"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="city"
              label="City"
              id="city"
              autoComplete="city"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="state"
              label="State"
              name="state"
              autoComplete="state"
              autoFocus
            />
            <TextField
              margin="normal"
              fullWidth
              name="landmark"
              label="Landmark"
              id="landmark"
              autoComplete="landmark"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="zip-code"
              label="Zip Code"
              id="zip-code"
              autoComplete="zip-code"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Save Address
            </Button>
          </Box>
        </Box>
      </Container>
    <Grid sx={{padding: "1%"}} justifyContent="center" alignItems="flex-start" container spacing={2}>
    <Button onClick={handlePrevious} variant="text">Back</Button>
    <Button onClick={handleNext} disabled={!addressSelected} variant="contained">Next</Button>

      </Grid>
    </ThemeProvider>
  );
}