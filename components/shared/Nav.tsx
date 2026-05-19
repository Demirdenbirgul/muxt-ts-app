"use client";

import { useState } from "react";
import { Box, Typography, IconButton, Drawer, Container } from "@mui/material"; // Drawer + IconButton eklendi
import Image from "next/image";
import DropDownMenu from "./DropDownMenu";
import { COLORS } from "@/styles";
import SearchBar from "./SearchBar";
import PersonIcon from "@mui/icons-material/Person";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import MenuIcon from "@mui/icons-material/Menu"; // hamburger icon eklendi

const Nav = () => {
  const [open, setOpen] = useState(false); // drawer state eklendi

  return (
    <Container maxWidth="lg">
      <Box
      sx={{
        color: COLORS.darkGrey,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "35px",
        margin: "10px 0",
        position: "relative",
      }}
    >
      {/* LOGO */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Image
          src="/images/logo.png"
          width={80}
          height={75}
          alt="shopcart-logo"
        />
        <Typography
          sx={{ color: "#000", fontWeight: "bold", fontSize: "1.2rem" }}
        >
          ShopCart
        </Typography>
      </Box>

      {/* DESKTOP CONTENT (AYNEN KORUNDU) */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" }, // 👈 sadece mobile gizleme
          alignItems: "center",
          gap: "35px",
        }}
      >
        <DropDownMenu
          sx={{ color: COLORS.darkGrey, fontSize: "1rem" }}
          buttonName="Categories"
          menuOptions={[
            "Furniture",
            "Shoe",
            "Laptop",
            "Hand",
            "Bag",
            "Laptop",
            "Book",
          ]}
        />

        <Typography>Deals</Typography>
        <Typography>What's New</Typography>
        <Typography>Delivery</Typography>

        <SearchBar />

        <Typography sx={{ display: "flex" }}>
          <PersonIcon sx={{ marginRight: ".25rem" }} />
          Account
        </Typography>

        <Typography sx={{ display: "flex" }}>
          <AddShoppingCartIcon sx={{ marginRight: ".25rem" }} />
          Cart
        </Typography>
      </Box>

      {/* MOBILE HAMBURGER */}
      <IconButton
        sx={{
          display: { xs: "flex", md: "none" }, // 👈 sadece mobile
          position: "absolute",
          right: 10,
          color: "red",
        }}
        onClick={() => setOpen(true)}
      >
        <MenuIcon />
      </IconButton>

      {/* DRAWER */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 250, p: 2 }}>
          <Typography sx={{ mb: 2, fontWeight: "bold" }}>
            Menu
          </Typography>

          <Typography sx={{ mb: 1 }}>Categories</Typography>
          <Typography sx={{ mb: 1 }}>Deals</Typography>
          <Typography sx={{ mb: 1 }}>What's New</Typography>
          <Typography sx={{ mb: 1 }}>Delivery</Typography>
          <Typography sx={{ mb: 1 }}>Account</Typography>
          <Typography sx={{ mb: 1 }}>Cart</Typography>
        </Box>
      </Drawer>
    </Box>
    </Container>
  );
};

export default Nav;