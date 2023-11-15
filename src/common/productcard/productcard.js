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

export default function ProductCard({ product }) {

return(<Card sx={{ minWidth: '30%', minHeight: "30%", marginLeft: "2%", marginBottom: "1%" }}>
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
          <Button sx={{ minWidth: "30%" }} variant="contained">
          Buy
        </Button>
</CardActions>
<Stack direction="row" alignItems="center">
  <IconButton aria-label="add to favorites">
    <EditIcon />
  </IconButton>
  <IconButton aria-label="share">
    <DeleteIcon />
  </IconButton>
  </Stack>
  </Toolbar>
</Card>);
}