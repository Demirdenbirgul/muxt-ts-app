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
          xs: "420px", // mobile yükseklik artırıldı
          sm: "500px", // tablet için ara breakpoint
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
          objectPosition: "center", // görsel hizalama iyileştirildi
        }}
      />

      {/* Dark Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0, // top left width height yerine kısa kullanım
          backgroundColor: "rgba(0,0,0,0.35)", // mobile readability için overlay
        }}
      />

      {/* Content Overlay */}
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
            xs: 3, // mobile padding artırıldı
            sm: 5,
            md: 10,
          },
          justifyContent: {
            xs: "center", // mobile ortalama
            md: "flex-start",
          },
          textAlign: {
            xs: "center", // mobile text ortalama
            md: "left",
          },
        }}
      >
        {/* Content */}
        <Box
          sx={{
            maxWidth: {
              xs: "100%", // mobile tam genişlik
              sm: "500px",
            },
            color: "#fff",
            position: "relative",
            top: {
              xs: "0", // mobile top kaldırıldı
              md: "35px",
            },
            zIndex: 2, // overlay üstüne çıkarıldı
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              lineHeight: 1.2,
              fontSize: {
                xs: "2rem", // mobile responsive font
                sm: "2.8rem",
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
                xs: "0.95rem", // mobile typography iyileştirme
                md: "16px",
              },
              opacity: 0.9,
              lineHeight: 1.7, // readability artırıldı
            }}
          >
            Find the best deals and trending products all in one place.
          </Typography>

          <Button
            variant="contained"
            sx={{
              backgroundColor: COLORS.darkGreen,
              color: COLORS.lightesGrey,
              px: {
                xs: 4, // mobile button padding
                md: 5,
              },
              py: 1.7,
              fontSize: {
                xs: "14px", // mobile button font küçültüldü
                md: "16px",
              },
              fontWeight: 600,
              textTransform: "none",
              borderRadius: "35px",
              width: {
                xs: "100%", // mobile full width button
                sm: "auto",
              },
              maxWidth: {
                xs: "280px", // aşırı büyümeyi engelle
                sm: "unset",
              },
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