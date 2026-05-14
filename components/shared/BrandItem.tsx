import { Box, Typography } from "@mui/material";

interface BrandItemProps {
  name: string;
  desc: string;
  logo: string;
}

const BrandItem = ({ name, desc, logo }: BrandItemProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        p: 2,
        borderRadius: "16px", // Biraz daha yumuşak köşeler
        backgroundColor: "#fbfbfb",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        cursor: "pointer",
        border: "1px solid #f0f0f0",
        "&:hover": {
          backgroundColor: "#fff",
          borderColor: "#2196f3", // Hover olduğunda markanıza uygun bir renk vurgusu
          boxShadow: "0px 10px 25px rgba(0,0,0,0.08)",
          transform: "translateY(-5px)",
        },
      }}
    >
      {/* Sol Taraf: Logo Container */}
      <Box
        sx={{
          width: 55,
          height: 55,
          borderRadius: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
          flexShrink: 0, // Görselin sıkışmasını engeller
          border: "1px solid #eee"
        }}
      >
        <Box
          component="img"
          src={logo}
          alt={name}
          sx={{
            width: "80%",
            height: "80%",
            objectFit: "contain",
          }}
        />
      </Box>

      {/* Sağ Taraf: Metin Alanı */}
      <Box sx={{ overflow: "hidden" }}>
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 700,
            fontSize: "15px",
            color: "#1a1a1a",
            lineHeight: 1.2,
          }}
        >
          {name}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: "12px",
            color: "#888",
            mt: 0.5,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {desc}
        </Typography>
      </Box>
    </Box>
  );
};

export default BrandItem;