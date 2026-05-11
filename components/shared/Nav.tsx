"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import DropDownMenu from "./DropDownMenu";
import { COLORS } from "@/styles";
import SearchBar from "./SearchBar";
import PersonIcon from "@mui/icons-material/Person";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Nav = () => {
  return (
    <Box
      sx={{
        color: COLORS.darkGrey,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "35px",
        margin: "10px 0"
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
      <Typography sx={{display: "flex"}}>
        <PersonIcon sx={{marginRight: ".25rem"}}/>
        Account
      </Typography>
      <Typography sx={{display: "flex"}}>
        <AddShoppingCartIcon sx={{marginRight: ".25rem"}}/>
        Cart
      </Typography>
    </Box>
  );
};

export default Nav;
