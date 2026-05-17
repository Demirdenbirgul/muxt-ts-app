"use client";

import { useEffect, useState } from "react";
import Nav from "@/components/shared/Nav";
import Banner from "@/components/shared/Banner";
import { Container } from "@mui/material";
import Hero from "@/components/shared/Hero";
import Products from "@/components/shared/Products";
import Filters from "@/components/shared/Filters";
import Brands from "@/components/shared/Brands";
import DiscountSection from "@/components/shared/DiscountSection";
import PopularProducts from "@/components/shared/PopularProducts";
import CtaSection from "@/components/shared/Cta";
import Footer from "@/components/shared/Footer";
import DealsSection from "@/components/shared/DealsSection";
import TrendingSection from "@/components/shared/TrendingSection";

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

  const categories = Array.from(
    new Map(
      products
        .filter((p) => p.category)
        .map((p) => {
          let catImg = p.category.image;

          if (catImg?.startsWith("[")) {
            try {
              catImg = JSON.parse(catImg)[0];
            } catch {
              catImg = "/images/furniture-banner.png";
            }
          }

          return [
            p.category.id,
            {
              name: p.category.name,
              image: catImg || "/images/furniture-banner.png",
            },
          ];
        }),
    ).values(),
  );

  const filteredProducts = products.filter((p) => {
    if (activeCategory === "All") return true;
    return p.category && p.category.name === activeCategory;
  });

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

      <Container maxWidth="xl">
        <Filters
          categories={[
            {
              name: "All",
              image: "/images/all-banner.png",
            },
            ...categories,
          ]}
          activeCategory={activeCategory}
          onSelect={handleSelect}
        />

        <Products products={filteredProducts} />
        <Brands />
        <DiscountSection />
        <PopularProducts products={products} />
      </Container>
      <CtaSection />
      <Container maxWidth="xl">
        {products && products.length > 0 && <DealsSection products={products} />}
        <TrendingSection />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
