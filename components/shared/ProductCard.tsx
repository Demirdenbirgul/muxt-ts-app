import Image from "next/image";
import { Box, Button, Rating, Typography } from "@mui/material";
import { COLORS } from "@/styles";

interface Props {
  product: any;
}

const ProductCard = ({ product }: Props) => {
  const ratingValue = (product.id % 5) + 1;

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "100%",
        boxSizing: "border-box",
        cursor: "pointer",
        marginBlock: "30px",
        borderRadius: "18px",
      }}
    >
      {/* IMAGE */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: 260, md: 320 },
          overflow: "hidden",
          borderRadius: "18px",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "100%",
            transition: "transform 0.4s ease",
            "&:hover img": {
              transform: "scale(1.08)",
            },
          }}
        >
          <Image
            src={product.images?.[0] || "https://placehold.co/600x400"}
            alt={product.title}
            fill
            style={{
              objectFit: "cover",
              transition: "transform 0.4s ease",
            }}
          />
        </Box>
      </Box>

      {/* CONTENT */}
      <Box sx={{ mt: 2, padding: "0 10px 10px 10px" }}>
        {/* TITLE + PRICE */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "18px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {product.title}
          </Typography>

          <Typography sx={{ fontWeight: 700, fontSize: "18px" }}>
            ${product.price}
          </Typography>
        </Box>

        {/* DESCRIPTION */}
        <Typography
          sx={{
            color: "#777",
            fontSize: "14px",
            mt: 1,
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
          }}
        >
          {product.description}
        </Typography>

        {/* RATING */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            mt: 1.5,
          }}
        >
          <Rating value={5} readOnly size="small" />

          <Typography
            sx={{
              fontSize: "14px",
              color: "#777",
              lineHeight: 1,
            }}
          >
            ({product.id * 12})
          </Typography>
        </Box>

        {/* BUTTON */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: COLORS.darkGreen,
            color: COLORS.lightesGrey,
            px: 3,
            py: 1.2,
            fontSize: "14px",
            fontWeight: 500,
            textTransform: "none",
            borderRadius: "35px",
            marginTop: "10px",
            "&:hover": {
              backgroundColor: COLORS.darkGrey,
            },
          }}
        >
          Add to Cart
        </Button>
      </Box>
    </Box>
  );
};

export default ProductCard;
