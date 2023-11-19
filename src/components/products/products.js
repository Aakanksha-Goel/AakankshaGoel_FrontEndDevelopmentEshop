import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useSelector, shallowEqual } from 'react-redux';
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

const SelectProducts = (state) => state.products;
let firstTime = 0;

export default function Products() {

    let productList = useSelector(SelectProducts, shallowEqual);
    let prodTransactionType = 'modified ';

    let activeOrder = {};
    let activeAddress = {}; 
    
    try{
      if(sessionStorage.getItem("productCache")){
        productList = JSON.parse(sessionStorage.getItem("productCache"));
      }else{
        sessionStorage.setItem("productCache", JSON.stringify(productList));
      }
        activeOrder = (JSON.parse(sessionStorage.getItem("activeOrder"))==null?[]:sessionStorage.getItem("activeOrder"));
      activeAddress = (JSON.parse(sessionStorage.getItem('activeAddress'))==null?[]:sessionStorage.getItem('activeAddress'));
      activeOrder = JSON.parse(activeOrder);
      activeAddress = JSON.parse(activeAddress);
    }catch(E){

    }

    console.log(activeOrder);
    console.log(activeAddress);

    function ConditionalRenderDialog(){
      if(firstTime > 1){
        return;
      }else{
        firstTime++;
      }
      console.log('doc referrer', document.referrer);
      if(document.referrer == window.location.origin + '/'){
        return (<PositionedSnackbar message={'User Logged In'} typeOfSnackBar={'success'}/>)
      }else if(document.referrer == window.location.origin + '/order/confirm'){
        return (<PositionedSnackbar message={'Order Placed Successfully'} typeOfSnackBar={'success'}/>)
      }else if(document.referrer == window.location.origin + '/product/upsert'){
        if(prodTransactionType == 'modified'){
          return (<PositionedSnackbar message={'Product Modified Succesfully'} typeOfSnackBar={'success'}/>)
        }else{
          return (<PositionedSnackbar message={'Product Added Succesfully'} typeOfSnackBar={'success'}/>)
        }
      }else{
        return (<PositionedSnackbar message={'Product Deleted Succesfully'} typeOfSnackBar={'success'}/>) 
      }
    }

    function CustomProductCard(){
      let allActiveProducts = (productList.products.map(prod => {
        return <ProductCard product={prod} key={prod.id} />
      }));
      if(toggleValue === '' && categoryValue === ''){
        return (<div style={{display: "contents"}} > {allActiveProducts} </div>);        
      }
      let filteredActiveProducts = [];
      if(toggleValue != ''){
          filteredActiveProducts = productList.products.filter((prods) => {
            return prods.category === toggleValue;
          });      
      }
      if(categoryValue != ''){
        let filteredSoFar = (filteredActiveProducts.length > 0) ? (filteredActiveProducts) : (productList.products);
        if(categoryValue === 'price-high-to-low'){
          filteredActiveProducts = filteredSoFar.sort((a,b) => (a.price > b.price) ? -1 : ((b.price > a.price) ? 1 : 0));
        }else if(categoryValue == 'price-low-to-high'){
          filteredActiveProducts = filteredSoFar.sort((a,b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0));
        }else{
          filteredActiveProducts = filteredSoFar.sort((a,b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0));
        }
      }

      let allActiveFilteredProducts = (filteredActiveProducts.map(prod => {
        return <ProductCard product={prod} key={prod.id}/>
      }));

      return (<div style={{display: "contents"}} > {allActiveFilteredProducts} </div>);

    }

    const [toggleValue, setToggle] = React.useState('');
    const [categoryValue, setCategory] = React.useState('');

    const handleCategoryChange = (event) => {
      setCategory(event.target.value);
    };  

    const handleToggleChange = (event, toggleValue) => {
      setToggle(event.target.value);
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
        <ConditionalRenderDialog/>

        <ToggleButtonGroup
      value={toggleValue}
      exclusive
      onChange={handleToggleChange}
      aria-label="Platform"
    >
      <ToggleButton value="">All</ToggleButton>
      <ToggleButton value="apparel">Apparel</ToggleButton>
      <ToggleButton value="electronics">Electronics</ToggleButton>
      <ToggleButton value="personalcare">Personal Care</ToggleButton>
    </ToggleButtonGroup>
    </Box>
      </Container>
      <Box sx={{ margin: 5, maxWidth: '30%' }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sort By:</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={categoryValue}
          label="Select..."
          onChange={handleCategoryChange}
        >
          <MenuItem value="">Default</MenuItem>
          <MenuItem value="price-high-to-low">Price High to Low</MenuItem>
          <MenuItem value="price-low-to-high">Price Low to High</MenuItem>
          <MenuItem value="newest">Newest</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <Box sx={{ margin: 5, display: "flex", flexWrap: "wrap", flexDirection: "row" }}>
      <Box sx={{ minWidth: "100%", padding: 15, display: "flex", flexWrap: "wrap", flexDirection: "row", alignItems: "center" }}>
        <CustomProductCard />
      </Box>
    </Box>
    </ThemeProvider>
  );
}
