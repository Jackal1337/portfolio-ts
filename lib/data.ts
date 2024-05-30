import React from "react";
import pocitacSlovImg from "@/public/PocitacSlov.jpeg";
import Portfolio1 from "@/public/DonnieRender.jpg";
import Portfolio2 from "@/public/RXRender.jpg";
import Portfolio3 from "@/public/JDMRender.jpg";
import Portfolio4 from "@/public/RX7Render.jpg";
import Portfolio5 from "@/public/DonnieRender2.jpg";
import Portfolio6 from "@/public/BelAirRender.jpg";
import Portfolio7 from "@/public/RTPolep.jpg";
import Portfolio8 from "@/public/LexusPolep.jpg";
import Portfolio9 from "@/public/LexusPolep2.jpg";
import Portfolio10 from "@/public/EvoPolep.jpg";
import Portfolio11 from "@/public/InfinitiPolep.jpg";
import Portfolio12 from "@/public/SupraPolep.jpg";
import Portfolio13 from "@/public/VizitkaBunnafee.jpg";
import Portfolio14 from "@/public/VizitkaTaxiService.jpg";
import Portfolio15 from "@/public/ObalNaCaj.jpg";


export const links = [
  {
    name: "Domů",
    hash: "#home",
  },
  {
    name: "O mně",
    hash: "#about",
  },
  {
    name: "Projekty",
    hash: "#projects",
  },
  {
    name: "Portfolio",
    hash: "#portfolio",
  },
  {
    name: "Znalosti",
    hash: "#skills",
  },
  {
    name: "Kontakt",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Počítač slov",
    description:
      "Veřejná webová aplikace pro rychlou analýzu textu. Zobrazuje počet slov, znaků a limity příspěvků na sociálních sítích.",
    tags: ["React", "Next.js", "Tailwind", "Framer"],
    imageUrl: pocitacSlovImg,
    demoUrl: "https://pocitacslov.example.com",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Framer Motion",
  "Tailwind",
  "Python",
  "Lua",
] as const;

export const portfolioData = [
  {
    title: "Img 1",
    description: "3D Render v programu Blender pro sociální síť Iris - SkimoRP",
    tags: ["Blender", "3D Render", "Lightroom"],
    imageUrl: Portfolio1,
    category: "3D Grafika"
  },
  {
    title: "Img 2",
    description: "3D Render v programu Blender pro sociální síť Iris - SkimoRP",
    tags: ["Blender", "3D Render", "Lightroom"],
    imageUrl: Portfolio2,
    category: "3D Grafika"
  },
  {
    title: "Img 3",
    description: "3D Render v programu Blender pro sociální síť Iris - SkimoRP",
    tags: ["Blender", "3D Render", "Lightroom"],
    imageUrl: Portfolio3,
    category: "3D Grafika"
  },
  {
    title: "Img 4",
    description: "3D Render v programu Blender pro sociální síť Iris - SkimoRP",
    tags: ["Blender", "3D Render", "Lightroom"],
    imageUrl: Portfolio4,
    category: "3D Grafika"
  },
  {
    title: "Img 5",
    description: "3D Render v programu Blender pro sociální síť Iris - SkimoRP",
    tags: ["Blender", "3D Render", "Lightroom"],
    imageUrl: Portfolio5,
    category: "3D Grafika"
  },
  {
    title: "Img 6",
    description: "3D Render v programu Blender pro sociální síť Iris - SkimoRP",
    tags: ["Blender", "3D Render", "Lightroom"],
    imageUrl: Portfolio6,
    category: "3D Grafika"
  },
  {
    title: "Img 7",
    description: "Návrh polepu na herní model vozidla - SkimoRP",
    tags: ["Adobe Illustrator"],
    imageUrl: Portfolio7,
    category: "Návrhy polepů"
  },
  {
    title: "Img 8",
    description: "Návrh polepu na herní model vozidla - SkimoRP",
    tags: ["Adobe Illustrator", "Adobe Photoshop"],
    imageUrl: Portfolio8,
    category: "Návrhy polepů"
  },
  {
    title: "Img 9",
    description: "Návrh polepu na herní model vozidla - SkimoRP",
    tags: ["Adobe Illustrator", "Adobe Photoshop"],
    imageUrl: Portfolio9,
    category: "Návrhy polepů"
  },
  {
    title: "Img 10",
    description: "Návrh polepu na herní model vozidla - SkimoRP",
    tags: ["Adobe Illustrator", "Adobe Photoshop"],
    imageUrl: Portfolio10,
    category: "Návrhy polepů"
  },
  {
    title: "Img 11",
    description: "Návrh polepu na herní model vozidla - SkimoRP",
    tags: ["Adobe Illustrator", "Adobe Photoshop"],
    imageUrl: Portfolio11,
    category: "Návrhy polepů"
  },
  {
    title: "Img 12",
    description: "Návrh polepu na herní model vozidla - SkimoRP",
    tags: ["Adobe Illustrator", "Adobe Photoshop"],
    imageUrl: Portfolio12,
    category: "Návrhy polepů"
  },
  {
    title: "Img 13",
    description: "Vizitka pro fiktivní firmu - BunaFFee",
    tags: ["Adobe Illustrator"],
    imageUrl: Portfolio13,
    category: "Ostatní"
  },
  {
    title: "Img 14",
    description: "Vizitka pro fiktivní firmu - TaxiService",
    tags: ["Adobe Illustrator"],
    imageUrl: Portfolio14,
    category: "Ostatní"
  },
  {
    title: "Img 15",
    description: "Obal na čaj - školní projekt, rok 2020",
    tags: ["Adobe Illustrator"],
    imageUrl: Portfolio15,
    category: "Ostatní"
  },
];