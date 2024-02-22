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
        <div className="flex flex-col md:flex-row w-full h-full">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 2, delay: 1.5 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full h-1/2 md:w-1/2 md:h-full flex flex-col justify-center items-center"
          >
            <div className="w-1/2">
              <img
                src="/assets/portrait_squared.jpg"
                alt=""
                className="rounded-full"
              />
            </div>
          </motion.div>
          <div className="w-full h-1/2 md:w-1/2 md:h-full flex flex-col justify-evenly">
            <motion.p
              className="text-2xl text-center md:text-3xl md:text-left font-bold"
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 2, delay: 1.5 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              I've been fascinated by the{" "}
              <span className="text-gradient">world of computing</span> since
              childhood.
            </motion.p>
            <motion.p
              className="text-2xl text-center md:text-3xl md:text-left font-bold"
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 2, delay: 1.5 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              I've developed a particular interest in{" "}
              <span className="text-gradient">science</span> and{" "}
              <span className="text-gradient">high-tech</span>.
            </motion.p>
            <motion.p
              className="text-2xl text-center md:text-3xl md:text-left font-bold"
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 2, delay: 1.5 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              I'm <span className="text-gradient">autonomous</span>,{" "}
              <span className="text-gradient">curious</span> and always looking
              for new challenges.
            </motion.p>
            <motion.p
              className="text-2xl text-center md:text-3xl md:text-left font-bold"
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 2, delay: 1.5 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              I'll do my utmost to bring{" "}
              <span className="text-gradient">your projects</span> to fruition!
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoAmI;
