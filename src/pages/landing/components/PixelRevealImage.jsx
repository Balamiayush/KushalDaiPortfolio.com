import { motion } from "framer-motion";
import { useMemo } from "react";

const PixelRevealImage = ({
  src,
  rows = 14,
  cols = 24,
  isHovered,
}) => {
  const pixels = useMemo(() => {
    return Array.from({ length: rows * cols });
  }, [rows, cols]);

  return (
    <div className="absolute inset-0 z-[-1] overflow-hidden rounded-[24px]">
      {/* Base image (blurred fallback) */}
      <img
        src={src}
        className="absolute inset-0 h-full w-full object-cover scale-[1.02]"
        alt=""
      />

      {/* Pixel overlay */}
      <div
        className="absolute inset-0 grid"
        style={{
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
        }}
      >
        {pixels.map((_, i) => (
          <motion.div
            key={i}
            className="bg-[#DAD3FF]"
            initial={{ opacity: 1, scale: 1 }}
            animate={
              isHovered
                ? {
                    opacity: 0,
                    scale: 0.6,
                  }
                : {
                    opacity: 1,
                    scale: 1,
                  }
            }
            transition={{
              duration: 0.35,
              delay: isHovered ? Math.random() * 0.25 : 0,
              ease: "easeOut",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default PixelRevealImage;
