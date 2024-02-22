"use client";

import React from "react";
import { motion } from "framer-motion";

const WhoAmI = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center">
      <div className="h-5/6 w-5/6 flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 2 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-glow text-5xl md:text-7xl font-bold leading-tight text-center"
        >
          Who am i ?
        </motion.h2>
      </div>
    </section>
  );
};

export default WhoAmI;
