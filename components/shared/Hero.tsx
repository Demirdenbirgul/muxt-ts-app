import { COLORS } from "@/styles";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";

const Hero = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: {
          xs: "300px",
          md: "640px",
        },
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <Image
        src="/images/hero.png"
        alt="Hero Banner"
        fill
        priority
        style={{
          objectFit: "cover",
        }}
      />

      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          px: {
            xs: 2,
            md: 10,
          },
        }}
      >
        {/* Content (sol taraf) */}
        <Box sx={{ maxWidth: "500px", color: "#fff" }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              lineHeight: 1.2,
              fontSize: {
                xs: "24px",
                md: "48px",
              },
            }}
          >
            Discover Amazing <br />
            Products for Your <br />
            Lifestyle
          </Typography>

          <Typography
            sx={{
              mt: 2,
              mb: 3,
              fontSize: {
                xs: "14px",
                md: "16px",
              },
              opacity: 0.9,
            }}
          >
            Find the best deals and trending products all in one place.
          </Typography>

          <Button
            variant="contained"
            sx={{
              backgroundColor: COLORS.darkGreen,
              color: COLORS.lightesGrey,
              px: 5,
              py: 1.7,
              fontSize: "16px",
              fontWeight: 600,
              textTransform: "none",
              borderRadius: "35px",
              "&:hover": {
                backgroundColor: COLORS.darkGrey,
              },
            }}
          >
            Shop Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
