import { Box, Typography, Container, Grid } from "@mui/material";

const DISCOUNTS = [
  {
    id: 1,
    title: "Save",
    amount: "$100",
    description: "Explore Our Furniture & Home Furnishing Range",
    image: "/images/discount-01.png",
    bgColor: "#f2f7f2",
  },
  {
    id: 2,
    title: "Save",
    amount: "$50",
    description: "Fresh Daily Grocery & Essential Items",
    image: "/images/discount-02.png",
    bgColor: "#fbf6f1",
  },
  {
    id: 3,
    title: "Save",
    amount: "$20",
    description: "Best Quality Sports & Outdoor Gear",
    image: "/images/discount-03.png",
    bgColor: "#f0f4f9",
  },
  {
    id: 4,
    title: "Save",
    amount: "$15",
    description: "Kitchen Essentials & Home Appliances",
    image: "/images/discount-04.png",
    bgColor: "#f6f6f6",
  },
];

const DiscountSection = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h4" sx={{ fontWeight: 800, mb: 4, color: "#222" }}>
        Get Up to 70% off
      </Typography>

      <Grid container spacing={3}>
        {DISCOUNTS.map((item) => (
          <Grid item xs={12} sm={6} md={3} key={item.id}>
            <Box
              sx={{
                backgroundColor: item.bgColor,
                borderRadius: "20px",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                overflow: "hidden",
                transition: "all 0.3s ease",
                cursor: "pointer",
                "&:hover": {
                  "& img": {
                    transform: "scale(1.1)",
                  },
                },
              }}
            >
              {/* Üst Kısım: Metinler */}
              <Box sx={{ p: 3 }}>
                <Typography sx={{ fontWeight: 600, fontSize: "16px" }}>
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 800,
                    fontSize: "32px",
                    color: "#003d29",
                    my: 0.5,
                  }}
                >
                  {item.amount}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: "#444",
                    lineHeight: 1.4,
                  }}
                >
                  {item.description}
                </Typography>
              </Box>

              {/* Alt Kısım: Görsel */}
              <Box
                sx={{
                  width: "100%",
                  height: "220px",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "flex-end",
                }}
              >
                <Box
                  component="img"
                  src={item.image}
                  alt={item.description}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s ease",
                  }}
                  onError={(e: any) => {
                    e.target.src = "/images/furniture-banner.png";
                  }}
                />
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default DiscountSection;
