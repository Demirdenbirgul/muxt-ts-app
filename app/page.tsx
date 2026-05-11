"use client";
import Nav from "@/components/shared/Nav";
import styles from "./page.module.css";
import Banner from "@/components/shared/Banner";
import { Container } from "@mui/material";
import Hero from "@/components/shared/Hero";

const Home = () => {
  return (
    <>
      <Banner />
      <Container maxWidth="xl">
        <Nav />
      </Container>
      <Hero />
    </>
  );
};

export default Home;
