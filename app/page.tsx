"use client";
import Nav from "@/components/shared/Nav";
import styles from "./page.module.css";
import Banner from "@/components/shared/Banner";
import { Container } from "@mui/material";
import Hero from "@/components/shared/Hero";
import Products from "@/components/shared/Products";

const Home = () => {
  return (
    <>
      <Banner />
      <Container maxWidth="xl">
        <Nav />
      </Container>
      <Hero />
      <Container maxWidth="lg">
        <Products />
      </Container>
    </>
  );
};

export default Home;
