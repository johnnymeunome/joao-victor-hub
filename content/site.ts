export type Project = {
  title: string;
  label: string;
  description: string;
  image: string;
  slides: string[];
  alt: string;
  url: string;
  tone: "light" | "dark";
  layout: "feature" | "portrait" | "wide" | "compact";
  compact?: boolean;
};

const deploymentUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const site = {
  name: "João Victor",
  role: "Designer & Developer",
  location: "Rio de Janeiro, Brasil",
  url: deploymentUrl.replace(/\/$/, ""),
  behanceUrl: "https://www.behance.net/joovictor437",
  githubUrl: "https://github.com/johnnymeunome",
  linkedinUrl: "https://www.linkedin.com/in/jo%C3%A3o-cabral-31681a242/",
  contactUrl: "https://www.linkedin.com/in/jo%C3%A3o-cabral-31681a242/",
  updatedAt: "2026-07-26",
  updatedLabel: "jul/2026",
  pinterestUrl: "https://br.pinterest.com/euvictorj/",
  spotifyUrl: "https://open.spotify.com/user/jaumdp?si=d639a2595cc64ca4",
  instagramUrl: "https://www.instagram.com/interlinked_cells/",
};

function slides(slug: string, count: number, extension: "jpg" | "png") {
  return Array.from(
    { length: count },
    (_, index) => `/images/projects/${slug}/slide-${String(index + 1).padStart(2, "0")}.${extension}`,
  );
}

export const projects: Project[] = [
  {
    title: "Homefy",
    label: "Brand guidelines · 2026",
    description: "Uma identidade para tecnologia de acesso residencial, construída para parecer simples, segura e próxima.",
    image: "/images/projects/homefy-2026.png",
    slides: slides("homefy-2026", 20, "png"),
    alt: "Aplicação da identidade Homefy em embalagem de fechadura digital",
    url: "https://www.behance.net/gallery/242717319/Homefy-Brand-Guidelines-2026",
    tone: "light",
    layout: "feature",
  },
  {
    title: "FORTFY",
    label: "Brand design · 2026",
    description: "Ferramentas e compressores automotivos traduzidos em uma marca de força, precisão e confiança.",
    image: "/images/projects/fortfy-cover.jpg",
    slides: slides("fortfy", 17, "jpg"),
    alt: "Identidade FORTFY aplicada em embalagens de ferramentas",
    url: "https://www.behance.net/gallery/243585583/FORTFY-Brand-Design",
    tone: "light",
    layout: "portrait",
  },
  {
    title: "SOUNDFY",
    label: "Brand design · 2026",
    description: "Áudio automotivo com uma linguagem que combina potência, conectividade e movimento.",
    image: "/images/projects/soundfy-cover.jpg",
    slides: slides("soundfy", 17, "jpg"),
    alt: "Identidade SOUNDFY aplicada em embalagem de produto automotivo",
    url: "https://www.behance.net/gallery/243588145/SOUNDFY-Brand-Design",
    tone: "dark",
    layout: "portrait",
  },
  {
    title: "Alliance",
    label: "Brand guidelines · 2025",
    description: "Gestão de imóveis apresentada como uma experiência completa, tranquila e segura.",
    image: "/images/projects/alliance-cover.jpg",
    slides: slides("alliance", 9, "png"),
    alt: "Assinatura Alliance Property Management aplicada em placa",
    url: "https://www.behance.net/gallery/238321771/ALLIANCE-PROPERTY-MANAGEMENT-BRAND-GUIDELINES",
    tone: "dark",
    layout: "wide",
  },
  {
    title: "Homefy 2015",
    label: "Identidade visual · Arquivo",
    description: "O primeiro capítulo visual da Homefy: casa, acesso e tecnologia reunidos em um símbolo.",
    image: "/images/projects/homefy-2015.png",
    slides: slides("homefy-2015", 5, "png"),
    alt: "Símbolo histórico da Homefy aplicado em sinalização de madeira",
    url: "https://www.behance.net/gallery/230345369/HOMEFY-Identidade-Visual",
    tone: "light",
    layout: "compact",
    compact: true,
  },
  {
    title: "VRTX",
    label: "Experimento visual",
    description: "Um estudo de identidade abstrata guiado por vértices, contraste e sensação de movimento.",
    image: "/images/projects/vrtx.png",
    slides: slides("vrtx", 1, "png"),
    alt: "Assinatura VRTX sobre composição abstrata escura",
    url: "https://www.behance.net/gallery/238604279/VRTX",
    tone: "dark",
    layout: "compact",
    compact: true,
  },
];
