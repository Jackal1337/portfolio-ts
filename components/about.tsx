"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("O mně");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>O mně</SectionHeading>
      <p className="mb-3 text-left">
        Jsem devatenáctiletý grafik a vizuální umělec s vášní pro tvorbu esteticky působivých zážitků.<br></br>S grafickým
        designem se zabývám již pět let, z toho dva roky na plný úvazek.<br></br>Můj kreativní proces čerpá inspiraci z
        každodenního života, umění a nejnovějších technologií.<br></br>Snažím se vytvářet unikátní vizuální zážitky, které
        oslovují a zaujímají diváka.
    <br></br>
        Aktuálně se specializuji na tvorbu grafiky primárně pro hráče na portálu <a className="underline"
          href="https://leosight.cz/?ref=10264">LeoSight</a>, kde se zaměřuji především na návrhy polepů a 3D grafiku.<br></br>
        Mimo grafický design mě baví i digitální ilustrace a práce s fotografiemi.<br></br>Ve volném čase taktéž rád tvořím různé
        mini-projekty, často využívající technologie jako HTML, CSS, JavaScript, a nebo Python.
      </p>

    </motion.section>
  );
}
