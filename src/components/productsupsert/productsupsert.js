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

const defaultTheme = createTheme();
 
export default function ProductUpsert() {    

  function CustomHeader(){
      return(<Typography component="h1" variant="h5">
          Add Product
      </Typography>
      );
  }

  function CustomButton(){
    return(<Button
      type="submit"
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2 }}>
      Save Product
    </Button>
    );
  }
  
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
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
              <Grid sx={{padding: "2%"}}justifyContent="center" alignItems="flex-start" container spacing={2}>
            <CustomHeader/>
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
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Name"
              name="email"
              autoComplete="email"
              autoFocus
            />
              <FormControl style={{minWidth: "100%"}} >
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
              required
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Category"
                onChange={handleChange}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Manufacturer"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Available Items"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Price"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              fullWidth
              name="password"
              label="Image URL"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <TextField
              margin="normal"
              fullWidth
              name="password"
              label="Product Description"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <CustomButton/>
          </Box>
          </Container>
    </ThemeProvider>
  );
}