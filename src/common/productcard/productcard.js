import * as React from "react";
import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import DraggableDialog from '../customdialog/customdialog';

export default function ProductCard({ product }) {

  const [dialog, setDialog] = React.useState(false);

  function handleBuy(){
    sessionStorage.setItem("activeProduct", JSON.stringify(product));
    window.location.href = '/product/detail';
  }

  function handleEdit(){
    sessionStorage.setItem("activeProduct", JSON.stringify(product));
    window.location.href = '/product/upsert';
  }

  function handleDelete(){
    setDialog(true);
  }

  function ConditionalDialog(){
    console.log('dd',dialog);
    if(dialog){
      return (<DraggableDialog/>);
    }
  }

  function IconsToShow(){
    let user = JSON.parse(sessionStorage.getItem("userCache"));
    if(user.activeUser.role == 'admin'){
      return (<Stack direction="row" alignItems="center">
      <IconButton onClick={handleEdit} aria-label="edit">
        <EditIcon />
      </IconButton>
      <IconButton onClick={handleDelete} aria-label="delete">
        <DeleteIcon />
      </IconButton>
      </Stack>
    );
    }
    console.log(user.activeUser);
  }


return(<Card sx={{ minWidth: '30%', minHeight: "30%", marginLeft: "2%", marginBottom: "1%" }}>
  <ConditionalDialog/>
<CardMedia
  sx={{ height: 250 }}
  image={product.imageUrl}
  title={product.name}
/>
<CardContent>
  <Typography gutterBottom variant="h5" component="div">
    {product.name}
  </Typography>
  <Typography variant="body2" color="text.secondary">
    {product.description}
  </Typography>
</CardContent>
<Toolbar
        sx={{
          justifyContent: "space-between"
        }}
      >
<CardActions>
          <Button onClick={handleBuy} sx={{ minWidth: "30%" }} variant="contained">
          Buy
        </Button>
</CardActions>
<IconsToShow/>
  </Toolbar>
</Card>);
}