"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionHeading from "./section-heading";
import { portfolioData } from "@/lib/data";
import PortfolioItem, { PortfolioItemProps } from "@/components/PortfolioItem";
import { useSectionInView } from "@/lib/hooks";
const categories = ["Vše", "3D Grafika", "Návrhy polepů", "Ostatní"];
export default function Portfolio() {
  const ref = useRef<HTMLDivElement>(null);
  const { ref: sectionRef } = useSectionInView("Portfolio");
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    setIsActive(true);
  }, []);
  const [selectedCategory, setSelectedCategory] = useState("Vše");
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const filteredData = selectedCategory === "Vše"
    ? portfolioData
    : portfolioData.filter(item => item.category === selectedCategory);
    return (
      <section
        id="portfolio" ref={sectionRef} className={`mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40 ${isActive ? 'active' : ''}`}>
        <motion.div
        ref={ref}
        style={{
          scale: scaleProgress,
          opacity: opacityProgress,
        }}
        className="group mb-8 last:mb-0"
      >
        <SectionHeading>Mé grafické práce</SectionHeading>
        <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto mb-8">
        Portfolio není kompletní, postupně jej doplňuji.<br></br>Máte-li zájem o ukázku práce na něčem více konkrétním, využijte email/formulář v sekci <a className="underline"
          href="#contact">kontakt</a>
      </p>        <div className="flex justify-center mb-8">
          {categories.map(category => (
            <button
              key={category}
              className={`px-4 py-2 mx-2 rounded-full ${
                selectedCategory === category ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredData.map((item: PortfolioItemProps) => (
            <PortfolioItem
              key={item.title}
              title={item.title}
              description={item.description}
              tags={item.tags}
              imageUrl={item.imageUrl}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
