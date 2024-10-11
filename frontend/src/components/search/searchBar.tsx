import { Divider, IconButton, Input, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Mic from "@mui/icons-material/Mic";

const SearchBar = () => {
  return (
    <Paper
      component="form"
      elevation={0}
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 600 }}
    >
      <IconButton sx={{ p: "10px" }} aria-label="menu">
        <SearchIcon />
      </IconButton>
      <Input
        placeholder="Search Google Maps"
        inputProps={{ "aria-label": "search google maps" }}
        sx={{ width: "35vw" }}
      ></Input>
      <Divider></Divider>
      <IconButton sx={{ p: "10px" }} aria-label="menu">
        <Mic />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
