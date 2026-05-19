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
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
          color: COLORS.white,
          py: 1.5,
          padding: { xs: "center", md: "left" },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Phone fontSize="small" />
          <Typography
            variant="body2"
            sx={{
              fontSize: {
                xs: ".8rem",
                sm: ".9rem",
              },
            }}
          >
            +001234567890
          </Typography>
        </Box>

        <Typography
          variant="body2"
          sx={{
            fontSize: {
              xs: ".8rem",
              sm: ".9rem",
            },
          }}
        >
          Get 50% Off on Selected Items | Shop Now{" "}
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
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
