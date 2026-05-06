import { COLORS } from "@/styles";
import { Box, Container, Typography } from "@mui/material";
import { Phone } from "@mui/icons-material";
import DropDownMenu from "./DropDownMenu";

const Banner = () => {
  return (
    <Box sx={{ backgroundColor: COLORS.darkGreen }}>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: COLORS.white,
          padding: "0.5rem 0",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Phone />
          <Typography>+001234567890</Typography>
        </Box>
        <Box>
          <Typography>Get 50% Off on Selected Items | Shop Now </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <DropDownMenu
            buttonName="Language"
            menuOptions={["English", "French", "Spanish"]}
          />{" "}
          <DropDownMenu
            buttonName="Location"
            menuOptions={["USA", "Canada", "UK"]}
          />{" "}
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;
