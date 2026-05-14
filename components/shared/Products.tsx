"use client";

import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Products = ({ products }: { products: any[] }) => {

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "repeat(2, minmax(0, 1fr))",
          md: "repeat(3, minmax(0, 1fr))",
          lg: "repeat(3, minmax(0, 1fr))",
        },
        gap: 3,
        mt: 5,
        width: "100%",
        maxWidth: "100%",
        boxSizing: "border-box",
        overflowX: "hidden",
      }}
    >
      {products.slice(0, 9).map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Box>
  );
};

export default Products;