"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import DropDownMenu from "./DropDownMenu";
import { COLORS } from "@/styles";
import SearchBar from "./SearchBar";

const Nav = () => {
  return (
    <Box
      sx={{
        color: COLORS.darkGrey,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
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
      <DropDownMenu
        sx={{ color: COLORS.darkGrey }}
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
      <Typography>Account</Typography>
      <Typography>Cart</Typography>
    </Box>
  );
};

export default Nav;
