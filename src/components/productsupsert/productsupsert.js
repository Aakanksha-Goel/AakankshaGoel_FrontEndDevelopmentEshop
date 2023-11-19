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
          Add/Modify Product
      </Typography>
      );
  }
  
  const [activeProduct, setActiveProduct]= React.useState(JSON.parse(sessionStorage.getItem("activeProduct")));
  console.log(activeProduct);

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

  function handleClick(event){
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let name = data.get("name");
    let manufacturer = data.get("manufacturer");
    let items = data.get("items");
    let price = data.get("price");
    let imageURL = data.get("imageURL");
    let description = data.get("description");
    console.log('fds',name,' ',manufacturer,' ',items,' ',price,' ',imageURL,' ',description);
    let productNew = {};
    productNew.name = name;
    productNew.manufacturer = manufacturer;
    productNew.items = items;
    productNew.price = price;
    productNew.imageURL = imageURL;
    productNew.description = description;
    sessionStorage.setItem("activeProduct",JSON.stringify(productNew));
    let pls = [];
    try{
      pls = JSON.parse(sessionStorage.getItem("productCache"))==null?[]:JSON.parse(sessionStorage.getItem("productCache"));
    }catch(E){

    }
    let pls1 = (pls, query) => pls.filter(element => element.id != activeProduct.id);
    pls.push(productNew);
    sessionStorage.setItem("productCache", JSON.stringify(pls1));
    window.location.href = '/home';
  }
  
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    let pp = activeProduct;
    pp.category = event.target.value;
    setActiveProduct(pp);
    sessionStorage.setItem("activeProduct",JSON.stringify(pp));
    //setAge(event.target.value);
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
          component="form"
          onSubmit={handleClick}        
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
              id="name"
              defaultValue={activeProduct.name}
              name="name"
              autoComplete="name"
              autoFocus
            />
              <FormControl style={{minWidth: "100%"}} >
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
              required
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={activeProduct.category}
                label="Category"
                onChange={handleChange}>
                <MenuItem value="apparel">Apparel</MenuItem>
                <MenuItem value="electronics">Electronics</MenuItem>
                <MenuItem value="personalcare">Personal Care</MenuItem>
              </Select>
            </FormControl>
            <TextField
              margin="normal"
              required
              fullWidth
              id="manufacturer"
              defaultValue={activeProduct.manufacturer}
              name="manufacturer"
              autoComplete="manufacturer"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="items"
              defaultValue={activeProduct.availableItems}
              type="items"
              id="items"
              autoComplete="items"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="price"
              defaultValue={activeProduct.price}
              name="price"
              autoComplete="price"
              autoFocus
            />
            <TextField
              margin="normal"
              fullWidth
              name="imageURL"
              label="Image URL"
              defaultValue={activeProduct.name}
              id="imageURL"
              autoComplete="imageURL"
            />
            <TextField
              margin="normal"
              fullWidth
              name="description"
              defaultValue={activeProduct.description}
              label="Product Description"
              id="description"
              autoComplete="decription"
            />
            <CustomButton/>
          </Box>
          </Container>
    </ThemeProvider>
  );
}