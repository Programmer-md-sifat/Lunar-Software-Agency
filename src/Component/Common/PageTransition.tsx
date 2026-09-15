import React from "react";
import { motion } from "motion/react";

interface PageTransitionProps {
  children: React.ReactNode;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  return (
    <motion.main
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for a soft, ultra-luxurious feel
      }}
      className="w-full min-h-screen pt-24"
    >
      {children}
    </motion.main>
  );
};
