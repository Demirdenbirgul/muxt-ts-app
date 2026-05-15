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
    restDelta: 0.001
  });

  const scale = useTransform(smoothProgress, [0, 1], [1, 1.5]); 
  const y = useTransform(smoothProgress, [0, 1], ["-15%", "15%"]); 

  return (
    <Box
      ref={containerRef}
      sx={{
        position: "relative",
        width: "100%",
        height: "650px",
        overflow: "hidden", 
        my: 10,
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

      {/* KARARTMA KATMANI (Overlay) - Metnin okunabilirliği için opsiyonel */}
      <Box 
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.1)", 
          zIndex: 1
        }} 
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Box
          sx={{
            ml: "auto",
            width: { xs: "100%", sm: "360px" },
            backgroundColor: "#003d29",
            py: { xs: 6, md: 10 },
            px: { xs: 4, md: 5 },
            borderRadius: "12px",
            color: "#fff",
            boxShadow: "0px 20px 40px rgba(0,0,0,0.4)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "32px", md: "42px" },
              lineHeight: 1.1,
              mb: 3,
            }}
          >
            Get 5% Cash back on $200
          </Typography>

          <Typography
            sx={{
              fontSize: "16px",
              opacity: 0.85,
              mb: 5,
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
              px: 5,
              py: 1.5,
              textTransform: "none",
              fontWeight: 600,
              borderWidth: "2px",
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