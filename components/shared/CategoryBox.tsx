import { Box } from "@mui/material";

type Props = {
  name: string;
  image: string;
  active?: boolean;
  onClick?: () => void;
};

// Proje genelinde tek bir standart fallback görseli kullanmak daha iyidir
const FALLBACK_IMAGE = "/images/furniture-banner.png";

const safeImage = (src?: string) => {
  if (!src) return FALLBACK_IMAGE;

  let finalSrc = src;

  // 1. Veri "[\"url\"]" formatındaysa temizle
  if (typeof src === "string" && src.startsWith("[")) {
    try {
      const parsed = JSON.parse(src);
      finalSrc = Array.isArray(parsed) ? parsed[0] : src;
    } catch {
      finalSrc = src;
    }
  }

  // 2. Geçersiz veya hatalı yazılmış domainleri kontrol et
  const forbiddenKeywords = ["placehold", "placeho0l", "placeimg"];
  const isForbidden = forbiddenKeywords.some((keyword) =>
    String(finalSrc).toLowerCase().includes(keyword)
  );

  if (isForbidden || !finalSrc) {
    return FALLBACK_IMAGE;
  }

  return finalSrc;
};

const CategoryBox = ({ name, image, active, onClick }: Props) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        minWidth: 140,
        height: 90,
        borderRadius: "14px",
        overflow: "hidden",
        position: "relative",
        cursor: "pointer",
        flexShrink: 0,
        border: active ? "2px solid #000" : "1px solid #eee",
        transition: "all 0.2s ease",
        "&:hover": {
          opacity: 0.9,
          transform: "scale(1.02)",
        },
      }}
    >
      <img
        src={safeImage(image)}
        alt={name}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        // URL doğru görünse bile görsel sunucuda yoksa (404) fallback'e dön
        onError={(e) => {
          (e.target as HTMLImageElement).src = FALLBACK_IMAGE;
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
          color: "#fff",
          p: 1,
          fontSize: "13px",
          fontWeight: 600,
          textAlign: "center"
        }}
      >
        {name}
      </Box>
    </Box>
  );
};

export default CategoryBox;