"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function AnimatedUnderline({
  children,
  color = "#d84c40",
  className = "",
}) {
  const [isHovered, setIsHovered] = useState(false);

  const path =
    "M5 20C26.8 15.2 49.6 11.6 71.8 14.7C85 16.5 97 21.8 110 24.4C116.4 25.7 123 25.5 129 22.6C136 19.3 142.6 15.1 150.1 13.3C156.8 11.7 161.7 14.6 167.9 16.8C181.6 21.7 195 22.6 209.3 21.4C224.7 20.1 239.9 18 255.4 18.3C272 18.6 288.4 18.9 305 18";

  return (
    <motion.span
      className={`relative inline-flex flex-col items-center ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {children}
      <AnimatePresence>
        {isHovered && (
          <motion.svg
            key="underline"
            viewBox="0 0 310 40"
            preserveAspectRatio="none"
            fill="none"
            style={{
              position: "absolute",
              bottom: "-8px",
              left: 0,
              width: "100%",
              height: "12px",
              overflow: "visible",
              pointerEvents: "none",
            }}
          >
            <motion.path
              d={path}
              stroke={color}
              strokeWidth={5}
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{
                pathLength: 1,
                transition: { duration: 0.4, ease: "easeOut" },
              }}
              exit={{ pathLength: 0, transition: { duration: 0.3 } }}
            />
          </motion.svg>
        )}
      </AnimatePresence>
    </motion.span>
  );
}
