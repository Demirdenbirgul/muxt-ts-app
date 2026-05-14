import { Typography, Container, Grid } from "@mui/material";
import BrandItem from "./BrandItem"; // Eğer ayrı dosyadaysa

const BRANDS_DATA = [
  { name: "Staples", desc: "Office supplies & tech", logo: "/images/staples-brand.png" },
  { name: "Sprouts", desc: "Fresh organic grocery", logo: "/images/sprouts-brand.png" },
  { name: "Grocery", desc: "Daily essential items", logo: "/images/grocery-brand.png" },
  { name: "Mollie", desc: "Fashion & lifestyle", logo: "/images/mollie-brand.png" },
  { name: "Sports", desc: "Premium sports gear", logo: "/images/sports-brand.png" },
  { name: "Target", desc: "All your needs in one", logo: "/images/target-brand.png" },
  { name: "Container", desc: "Organization solutions", logo: "/images/container-brand.png" },
  { name: "Bevmo", desc: "Beverages & snacks", logo: "/images/bevmo-brand.png" },
];

const Brands = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 800,
          textAlign: "left", // Sola yaslamak bazen daha modern durur
          mb: 4,
          color: "#222",
        }}
      >
        Choose by Brand
      </Typography>

      <Grid container spacing={2}>
        {BRANDS_DATA.map((brand, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <BrandItem 
                name={brand.name} 
                desc={brand.desc} 
                logo={brand.logo} 
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Brands;