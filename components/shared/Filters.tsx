import { Box } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

export interface Category {
  name: string;
  image: string;
}

interface FiltersProps {
  categories: Category[];
  onSelect?: (category: string) => void;
  activeCategory?: string;
}

const FALLBACK_IMAGE = "/images/furniture-banner.png";
const safeImage = (src?: string) => {
  if (!src || src.includes("placeimg") || src.includes("placehold")) {
    return FALLBACK_IMAGE;
  }
  return src;
};

const CategoryImage = ({ src, alt }: { src: string; alt: string }) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <img
      src={imgSrc}
      alt={alt}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
      onError={() => setImgSrc(FALLBACK_IMAGE)}
    />
  );
};

const Filters = ({ categories, onSelect, activeCategory }: FiltersProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        overflowX: "auto",
        p: 2,
        marginTop: "30px",
      }}
    >
      {categories.map((category) => (
        <Box
          key={category.name}
          onClick={() => onSelect?.(category.name)}
          sx={{
            minWidth: 140,
            height: 90,
            borderRadius: "14px",
            overflow: "hidden",
            position: "relative",
            cursor: "pointer",
            flexShrink: 0,
            border:
              activeCategory === category.name ? "2px solid #000" : "none",
            transition: "0.2s ease",
            "&:hover": {
              transform: "scale(1.03)",
            },
          }}
        >
          {/* 🔥 ARTIK BURASI DOĞRU */}
          <CategoryImage src={safeImage(category.image)}  alt={category.name} />

          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              background:
                "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
              color: "#fff",
              p: 1,
              fontSize: "13px",
              fontWeight: 600,
            }}
          >
            {category.name}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Filters;
