import { Box, Typography, Container, Grid, Button } from "@mui/material";

const TRENDING_DATA = [
  {
    id: 1,
    title: "Furniture Village",
    description: "Explore Our Furniture & Home Furnishing Range",
    image: "/images/furniture-village.png",
    bgColor: "#f2f7f2",
  },
  {
    id: 2,
    title: "Fashion World",
    description: "Fresh Daily Grocery & Essential Items for You",
    image: "/images/fashion-clothes.png",
    bgColor: "#fbf6f1",
  },
];

const TrendingSection = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: 800, mb: 4, color: "#222" }}
      >
        Trending Products for you!
      </Typography>

      <Grid container spacing={4}>
        {TRENDING_DATA.map((item) => (
          <Grid item xs={12} md={6} key={item.id}>
            <Box
              sx={{
                backgroundColor: item.bgColor,
                borderRadius: "24px",
                overflow: "hidden",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Üst Kısım: Görsel */}
              <Box
                sx={{
                  width: "100%",
                  height: "300px",
                  overflow: "hidden",
                }}
              >
                <Box
                  component="img"
                  src={item.image}
                  alt={item.title}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s ease",
                    "&:hover": {
                      transform: "scale(1.25)",
                    },
                  }}
                />
              </Box>

              {/* Alt Kısım: İçerik */}
              <Box sx={{ p: 4, flexGrow: 1, display: "flex", flexDirection: "column", gap: 2 }}>
                <Typography variant="h5" sx={{ fontWeight: 800, color: "#222" }}>
                  {item.title}
                </Typography>
                <Typography sx={{ color: "#666", fontSize: "16px", mb: 2 }}>
                  {item.description}
                </Typography>
                <Box sx={{ mt: "auto" }}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#003d29",
                      color: "#fff",
                      borderRadius: "30px",
                      px: 4,
                      py: 1,
                      textTransform: "none",
                      fontWeight: 600,
                      "&:hover": {
                        backgroundColor: "#002a1c",
                      },
                    }}
                  >
                    Shop Now
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TrendingSection;