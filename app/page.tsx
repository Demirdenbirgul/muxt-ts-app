'use client';
import Nav from "@/components/shared/Nav";
import styles from "./page.module.css";
import Banner from "@/components/shared/Banner";
import { Container } from "@mui/material";

const Home = () => {
  return (
    <>
      <Banner />
      <Container maxWidth="lg">
        <Nav />
      </Container>
    </>
  );
};

export default Home;
