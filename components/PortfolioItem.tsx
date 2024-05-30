import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image, { StaticImageData } from "next/image";

export type PortfolioItemProps = {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string | StaticImageData;
  category?: string;
};

export default function PortfolioItem({
  title,
  description,
  tags,
  imageUrl,
}: PortfolioItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-8 last:mb-0"
    >
      <div
        className="bg-white dark:bg-gray-800 overflow-hidden shadow-md sm:rounded-lg relative"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="relative">
          <Image
            src={imageUrl}
            alt={title}
            quality={95}
            layout="responsive"
            width={800}
            height={600}
            className="object-cover w-full h-40 sm:h-48"
          />
          {hovered && (
            <motion.div
              className="absolute inset-0 bg-gray-900 bg-opacity-75 p-4 flex flex-col justify-center items-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-sm text-gray-200">{description}</p>
              <ul className="flex flex-wrap mt-2">
                {tags.map((tag, index) => (
                  <li
                    className="bg-gray-200 text-xs text-gray-700 px-2 py-1 rounded-full mr-2 mb-2"
                    key={index}
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
