import {
  Box,
  TextField,
  InputAdornment,
  FormControl,
  IconButton,
  Input,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { COLORS } from "@/styles";

const SearchBar = () => {
  const handleSearch = () => {
    return;
  };
  return (
    <Box>
      <FormControl
        sx={{ display: "flex", flexDirection: "row" }}
        onSubmit={handleSearch}
      >
        <Input
          placeholder="Search Products"
          endAdornment={
            <IconButton type="submit">
              <SearchIcon sx={{ color: "#000" }} />
            </IconButton>
          }
          sx={{
            color: "#000",
            backgroundColor: COLORS.lightGrey,
            borderRadius: "3rem",
            padding: "0 0.5rem",

            "&.MuiInputBase-root::before": {
                borderBottom: "none"
            }
          }}
        />
      </FormControl>
    </Box>
  );
};

export default SearchBar;
