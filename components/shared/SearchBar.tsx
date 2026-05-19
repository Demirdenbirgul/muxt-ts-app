import {
  Box,
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
    <Box sx={{ width: "100%" }}> {/* full width kullanım */}
      <FormControl
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%", // responsive genişlik
        }}
        onSubmit={handleSearch}
      >
        <Input
          fullWidth // input full width
          placeholder="Search Products"
          endAdornment={
            <IconButton type="submit">
              <SearchIcon sx={{ color: "#000" }} />
            </IconButton>
          }
          sx={{
            color: "#000",
            backgroundColor: COLORS.lightesGrey,
            borderRadius: "3rem",
            padding: "0 1rem",
            width: "100%", // taşmayı önle

            "&.MuiInputBase-root::before": {
              borderBottom: "none",
            },

            "&.MuiInputBase-root::after": {
              borderBottom: "none", // focus underline kaldır
            },
          }}
        />
      </FormControl>
    </Box>
  );
};

export default SearchBar;