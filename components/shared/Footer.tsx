import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Stack,
  Divider,
} from "@mui/material";
import Image from "next/image";

const FOOTER_DATA = {
  Department: [
    "Fashion",
    "Education Product",
    "Frozen Food",
    "Beverages",
    "Organic Grocery",
    "Office Supplies",
    "Beauty Products",
    "Books",
    "Electronics & Gadget",
    "Travel Accessories",
    "Fitness",
    "Sneakers",
    "Toys",
    "Furniture",
  ],
  "About Us": [
    "About Shopcart",
    "Careers",
    "News & Blog",
    "Help",
    "Press Center",
    "Shop By Location",
    "Shopcart Brands",
    "Affiliate & Partners",
    "Ideas & Guides",
  ],
  Services: [
    "Gift Card",
    "Mobile App",
    "Shipping & Delivery",
    "Order Pickup",
    "Account Signup",
  ],
  Help: [
    "Shopcart Help",
    "Returns",
    "Track Orders",
    "Contact Us",
    "Feedback",
    "Security & Fraud",
  ],
};

const PAYMENTS = [
  "/images/stripe.png",
  "/images/visa.png",
  "/images/master.png",
  "/images/amazon.png",
  "/images/klarna.png",
  "/images/p-logo.png",
  "/images/pay-app.png",
  "/images/pay.png",
];

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{ bgcolor: "#fff", pt: 10, pb: 4, borderTop: "1px solid #eee" }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Sol Kolon: Logo ve Ödeme Yöntemleri */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, marginBottom: "15px" }}>
              <Image
                src="/images/logo.png"
                width={80}
                height={75}
                alt="shopcart-logo"
              />
              <Typography
                sx={{ color: "#000", fontWeight: "bold", fontSize: "1.5rem" }}
              >
                ShopCart
              </Typography>
            </Box>
            <Typography
              variant="body2"
              sx={{ color: "#444", mb: 4, lineHeight: 1.7, maxWidth: "300px" }}
            >
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </Typography>

            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>
              Accepted Payments
            </Typography>
            <Grid container spacing={1} sx={{ maxWidth: "280px" }}>
              {PAYMENTS.map((src, index) => (
                <Grid item xs={3} key={index}>
                  <Box
                    sx={{
                      border: "1px solid #eee",
                      borderRadius: "8px",
                      p: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "40px",
                      "&:hover": { borderColor: "#ccc" },
                    }}
                  >
                    <img
                      src={src}
                      alt="payment"
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Sağ Kolonlar: Link Grupları */}
          <Grid item xs={12} md={8}>
            <Grid container spacing={2}>
              {Object.entries(FOOTER_DATA).map(([title, links]) => (
                <Grid item xs={6} sm={3} key={title}>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: 700, mb: 3 }}
                  >
                    {title}
                  </Typography>
                  <Stack spacing={1.5}>
                    {links.map((link) => (
                      <Link
                        key={link}
                        href="#"
                        underline="none"
                        sx={{
                          color: "#444",
                          fontSize: "14px",
                          "&:hover": { color: "#003d29" },
                        }}
                      >
                        {link}
                      </Link>
                    ))}
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: "#eee" }} />

        {/* Alt Bar */}
        <Grid
          spacing={2}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Grid item xs={12} md={6}>
            <Stack direction="row" spacing={4} flexWrap="wrap" useFlexGap>
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                sx={{ cursor: "pointer" }}
              >
                <Image
                  src="/images/seller-icon.svg"
                  width={20}
                  height={20}
                  alt="icon"
                />
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  Become Seller
                </Typography>
              </Stack>
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                sx={{ cursor: "pointer" }}
              >
                <Image
                  src="/images/gift-cards.svg"
                  width={20}
                  height={20}
                  alt="icon"
                />
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  Gift Cards
                </Typography>
              </Stack>
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                sx={{ cursor: "pointer" }}
              >
                <Image
                  src="/images/help-icon.svg"
                  width={20}
                  height={20}
                  alt="icon"
                />
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  Help Center
                </Typography>
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 2, sm: 4 }}
            >
              <Link
                href="#"
                underline="none"
                sx={{ color: "#000", fontWeight: 600, fontSize: "14px" }}
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                underline="none"
                sx={{ color: "#000", fontWeight: 600, fontSize: "14px" }}
              >
                Privacy & Policy
              </Link>
              <Typography variant="body2" sx={{ color: "#777" }}>
                All Right reserved by Musemind ui/ux design agency | 2022
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
