"use client";

import { Box, Typography, Button, Container } from "@mui/material";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

const CtaSection = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const scale = useTransform(smoothProgress, [0, 1], [1, 1.5]);

  const y = useTransform(smoothProgress, [0, 1], ["-15%", "15%"]);

  return (
    <Box
      ref={containerRef}
      sx={{
        position: "relative",
        width: "100%",
        height: {
          xs: "500px", // mobile height küçültüldü
          sm: "560px",
          md: "650px",
        },
        overflow: "hidden",
        my: {
          xs: 6, // mobile margin azaltıldı
          md: 10,
        },
        display: "flex",
        alignItems: "center",
        backgroundColor: "#000",
      }}
    >
      {/* HAREKETLİ ARKA PLAN */}
      <motion.div
        style={{
          position: "absolute",
          top: "-25%",
          left: 0,
          width: "100%",
          height: "150%",
          backgroundImage: 'url("/images/cta.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          scale,
          y,
          zIndex: 0,
        }}
      />

      {/* OVERLAY */}
      <Box
        sx={{
          position: "absolute",
          inset: 0, // kısa kullanım
          backgroundColor: "rgba(0,0,0,0.25)", // okunabilirlik artırıldı
          zIndex: 1,
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,
          px: {
            xs: 2, // mobile padding
            md: 3,
          },
        }}
      >
        <Box
          sx={{
            ml: {
              xs: 0, // mobile ortalama için auto kaldırıldı
              md: "auto",
            },

            width: {
              xs: "100%", // mobile full width
              sm: "360px",
            },

            maxWidth: {
              xs: "100%",
              sm: "360px",
            },

            backgroundColor: "#003d29",

            py: {
              xs: 5, // mobile padding küçültüldü
              md: 10,
            },

            px: {
              xs: 3, // mobile yatay padding küçültüldü
              md: 5,
            },

            borderRadius: {
              xs: "8px", // mobile radius küçültüldü
              md: "12px",
            },

            color: "#fff",

            boxShadow: {
              xs: "0px 10px 25px rgba(0,0,0,0.3)", // mobile shadow optimize edildi
              md: "0px 20px 40px rgba(0,0,0,0.4)",
            },

            display: "flex",
            flexDirection: "column",
            justifyContent: "center",

            textAlign: {
              xs: "center", // mobile text ortalama
              md: "left",
            },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,

              fontSize: {
                xs: "2rem", // responsive typography
                sm: "2.3rem",
                md: "42px",
              },

              lineHeight: 1.1,

              mb: {
                xs: 2,
                md: 3,
              },
            }}
          >
            Get 5% Cash back on $200
          </Typography>

          <Typography
            sx={{
              fontSize: {
                xs: "14px", // mobile text küçültüldü
                md: "16px",
              },

              opacity: 0.85,

              mb: {
                xs: 4,
                md: 5,
              },

              lineHeight: 1.8,
            }}
          >
            Shopping is a bit of a relaxing hobby for me, which is sometimes
            troubling for the bank balance.
          </Typography>

          <Button
            variant="outlined"
            sx={{
              color: "#fff",
              borderColor: "#fff",

              borderRadius: "30px",

              px: {
                xs: 4, // mobile button küçültüldü
                md: 5,
              },

              py: 1.5,

              textTransform: "none",
              fontWeight: 600,
              borderWidth: "2px",

              width: {
                xs: "100%", // mobile full width button
                sm: "fit-content",
              },

              alignSelf: {
                xs: "center", // mobile ortalama
                md: "flex-start",
              },

              "&:hover": {
                backgroundColor: "#fff",
                color: "#003d29",
                borderWidth: "2px",
                borderColor: "#fff",
              },
            }}
          >
            Learn More
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default CtaSection;