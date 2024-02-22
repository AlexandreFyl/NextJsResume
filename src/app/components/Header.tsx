"use client";

import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="h-screen flex flex-col justify-center items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.25 }}
        transition={{ duration: 2 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="h-5/6 w-5/6 flex flex-col justify-center items-center blurry-bg-img"
      >
        <div>
          <p className="text-glow text-5xl md:text-7xl font-bold leading-tight text-center md:text-left">
            Hello there,
          </p>
          <p className="text-glow text-3xl md:text-5xl font-bold leading-tight text-center md:text-left">
            I'm Fayolle Alexandre
          </p>
          <h1 className="text-gradient text-3xl md:text-4xl font-bold leading-tight text-center md:text-left">
            Full-Stack Developer
          </h1>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
