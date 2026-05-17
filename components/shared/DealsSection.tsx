import { Box, Container, Grid, Skeleton, Typography } from "@mui/material";
import ProductCard from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Autoplay } from "swiper/modules";

const DealsSection = ({ products }: { products: any[] }) => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 800,
          mb: 3,
          color: "#222",
          fontSize: { xs: "24px", md: "32px" },
        }}
      >
        Todays Best Deals for you!
      </Typography>

      <Box
        sx={{
          ".swiper-scrollbar": {
            height: "4px",
            backgroundColor: "#eee",
            bottom: "0px !important",
            borderRadius: "10px",
          },
          ".swiper-scrollbar-drag": {
            backgroundColor: "#003d29",
            borderRadius: "10px",
            cursor: "pointer",
          },
          ".swiper": {
            paddingBottom: "30px",
          },
        }}
      >
        <Swiper
          modules={[Scrollbar, Autoplay]}
          spaceBetween={24}
          slidesPerView={1.2}
          scrollbar={{
            draggable: true,
            hide: false,
          }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {products.slice(0, 10).map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Container>
  );
};

export default DealsSection;
