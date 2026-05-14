import { Box, Container, Typography } from "@mui/material";
import CategoryBox from "./CategoryBox";

type Category = {
  name: string;
  image: string;
};

type Props = {
  categories: Category[];
  onSelect?: (category: string) => void;
  activeCategory?: string;
};

const FALLBACK_IMAGE = "/images/furniture-banner.png";

const safeImage = (src?: string) => {
  if (!src) return FALLBACK_IMAGE;

  if (
    src.includes("placeimg") ||
    src.includes("placehold") ||
    src.includes("placeimg.dev")
  ) {
    return FALLBACK_IMAGE;
  }

  return src;
};

const Filters = ({ categories, onSelect, activeCategory }: Props) => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        marginTop: "50px",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
          textAlign: "left",
          mb: 6,
          fontSize: { xs: "22px", md: "28px" },
          color: "#333",
        }}
      >
        Shop Our Top Categories
      </Typography>
      <Box sx={{ display: "flex", gap: 2 }}>
        {categories.map((category) => (
          <CategoryBox
            key={category.name}
            name={category.name}
            image={category.image}
            active={activeCategory === category.name}
            onClick={() => onSelect?.(category.name)}
          />
        ))}
      </Box>
    </Container>
  );
};

export default Filters;
