import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "João Victor — Designer & Developer",
    short_name: "João Victor",
    description: "Design, software e projetos open source em construção.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b0b0b",
    theme_color: "#0b0b0b",
    lang: "pt-BR",
  };
}
