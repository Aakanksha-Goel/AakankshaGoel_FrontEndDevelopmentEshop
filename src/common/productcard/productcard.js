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

export default function ProductCard() {

return(<Card sx={{ maxWidth: 345, marginLeft: "0.2%", marginBottom: "1%" }}>
<CardMedia
  sx={{ height: 140 }}
  image="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTDDs0tPjxOZYpy0Ntmf5Fot9hcPh5g_GOkk6V8TsExUq_xNwxk"
  title="green iguana"
/>
<CardContent>
  <Typography gutterBottom variant="h5" component="div">
    Lizard
  </Typography>
  <Typography variant="body2" color="text.secondary">
    Lizards are a widespread group of squamate reptiles, with over 6,000
    species, ranging across all continents except Antarctica
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