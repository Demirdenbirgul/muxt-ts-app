"use client";

import { useEffect, useState } from "react";
import Nav from "@/components/shared/Nav";
import Banner from "@/components/shared/Banner";
import { Container } from "@mui/material";
import Hero from "@/components/shared/Hero";
import Products from "@/components/shared/Products";
import Filters from "@/components/shared/Filters";

const Home = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://api.escuelajs.co/api/v1/products");
      const data = await res.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  // ✅ unique category list (id bazlı)
  const categories = Array.from(
    new Map(
      products.map((p) => [
        p.category.id,
        {
          name: p.category.name,
          image: p.category.image || "/images/furniture-banner.png",
        },
      ]),
    ).values(),
  );

  // 🔥 filtrelenmiş ürünler
  const filteredProducts = !products.length
    ? []
    : activeCategory === "All"
      ? products
      : products.filter((p) => p.category?.name === activeCategory);

  const handleSelect = (cat: string) => {
    console.log("SELECTED:", cat);
    setActiveCategory(cat);
  };
  return (
    <>
      <Banner />

      <Container maxWidth="xl">
        <Nav />
      </Container>

      <Hero />

      <Container maxWidth="lg">
        <Filters
          categories={[
            {
              name: "All",
              image: "/images/all-banner.png",
            },
            ...categories,
          ]}
          activeCategory={activeCategory}
          onSelect={setActiveCategory}
        />

        <Products products={filteredProducts} />
      </Container>
    </>
  );
};

export default Home;
