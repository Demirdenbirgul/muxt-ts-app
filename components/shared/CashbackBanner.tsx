import { Box, Typography, Button, Container, Grid } from "@mui/material";

const CashbackBanner = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#f3e5d0", 
        py: { xs: 6, md: 8 },
        my: 10,
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Grid container alignItems="center" spacing={4}>
          {/* Sol Taraf: İçerik */}
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 900,
                  fontSize: { xs: "40px", md: "64px" },
                  color: "#222",
                  mb: 1,
                }}
              >
                Get 5% Cash Back
              </Typography>
              
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  fontSize: "20px",
                  color: "#222",
                  mb: 4,
                }}
              >
                on Shopcart.com
              </Typography>

              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#003d29", // Koyu yeşil buton
                  color: "#fff",
                  borderRadius: "50px",
                  px: 5,
                  py: 1.5,
                  fontSize: "16px",
                  fontWeight: 700,
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "#002a1c",
                  },
                }}
              >
                Learn More
              </Button>
            </Box>
          </Grid>

          {/* Sağ Taraf: Kart Görselleri */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-end" },
                position: "relative",
              }}
            >
              <Box
                component="img"
                src="/images/cards.png" // Buraya senin kestiğin kartlar görseli gelecek
                alt="Cashback Cards"
                sx={{
                  width: "100%",
                  maxWidth: "500px",
                  height: "auto",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CashbackBanner;