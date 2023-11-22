import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import DraggableDialog from "../customdialog/customdialog";
import { useSelector } from "react-redux";

export default function ProductCard({ product }) {
  const [dialog, setDialog] = React.useState(false);

  function handleBuy() {
    sessionStorage.setItem("activeProduct", JSON.stringify(product));
    window.location.href = "/product/detail";
  }

  function handleEdit() {
    sessionStorage.setItem("activeProduct", JSON.stringify(product));
    window.location.href = "/product/upsert";
  }

  function handleDelete() {
    setDialog(true);
  }

  function ConditionalDialog() {
    if (dialog) {
      return <DraggableDialog />;
    }
  }

  function IconsToShow() {
    const userState = useSelector((state) => state.users);
    if (userState?.activeUser?.role === "admin") {
      return (
        <Stack direction="row" alignItems="center">
          <IconButton onClick={handleEdit} aria-label="edit">
            <EditIcon />
          </IconButton>
          <IconButton onClick={handleDelete} aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Stack>
      );
    }
  }

  return (
    <Card
      sx={{
        width: "18rem",
        height: "24",
      }}
    >
      <ConditionalDialog />
      <CardMedia
        sx={{ height: 250 }}
        image={product.imageUrl}
        title={product.name}
      />
      <CardContent>
        <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {product.price}
        </Typography>
        </div>
        <Typography variant="body2" color="text.secondary" style={{height: "9rem", overflow: "hidden"}}>
          {product.description}
        </Typography>
      </CardContent>
      <Toolbar
        sx={{
          justifyContent: "space-between",
        }}
      >
        <CardActions style={{padding: 0}}>
          <Button
            onClick={handleBuy}
            sx={{ minWidth: "30%" }}
            variant="contained"
          >
            Buy
          </Button>
        </CardActions>
        <IconsToShow />
      </Toolbar>
    </Card>
  );
}
