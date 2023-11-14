import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import SearchAppBar from '../../common/navbar/navbar';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ProductCard from "../../common/productcard/productcard";
import PositionedSnackbar from "../../common/customsnackbar/customsnackbar";

const defaultTheme = createTheme();

export default function Products() {

    const [alignment, setAlignment] = React.useState('web');
    const [age, setAge] = React.useState('');

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
        <PositionedSnackbar message={'User Logged In'} typeOfSnackBar={'success'}/>
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
      <Box sx={{ margin: 5, maxWidth: '30%' }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sort By:</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Select..."
          onChange={handleChange1}
        >
          <MenuItem value={10}>Default</MenuItem>
          <MenuItem value={20}>Price High to Low</MenuItem>
          <MenuItem value={30}>Price Low to High</MenuItem>
          <MenuItem value={40}>Newest</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <Box sx={{ margin: 5, display: "flex", flexWrap: "wrap", flexDirection: "row" }}>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
    </Box>
    </ThemeProvider>
  );
}
