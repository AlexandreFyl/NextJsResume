"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef, useState } from "react";

function TechStack() {
  // opacity animation
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "center end"],
  });
  const opacity = useTransform(scrollYProgress, [0.05, 1], [1, 0.05]);

  // Tech stack name animation
  const [isHovered, setIsHovered] = useState([false, false, false, false]);

  return (
    <section className="h-screen flex flex-col justify-center items-center">
      <motion.h2
        initial={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 2 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: "all" }}
        className="text-glow text-5xl md:text-7xl font-bold leading-tight text-center pb-28"
      >
        My last Stack
      </motion.h2>
      <div
        ref={ref}
        className="h-1/3 md:h-1/2  flex flex-wrap aspect-square justify-between content-between"
      >
        <motion.div
          className="w-[49%] h-[49%] border-[#26262C] border rounded-tl-3xl neumorphism relative"
          // hover animation
          whileHover={{ scale: 1.1, y: -20, x: -20 }}
          onHoverStart={() =>
            setIsHovered((prevState) =>
              prevState.map((val, index) => (index === 0 ? true : val))
            )
          }
          onHoverEnd={() =>
            setIsHovered((prevState) =>
              prevState.map((val, index) => (index === 0 ? false : val))
            )
          }
        >
          {isHovered[0] && (
            <p className="text-center text-gradient font-bold mt-2">
              TypeScript
            </p>
          )}
          <motion.img
            src="/assets/logos/typescript.png"
            alt="Typescript logo"
            className="centered-logo w-16 md:w-24"
            style={{ opacity: opacity }}
          />
        </motion.div>
        {/* Up right element */}
        <motion.div
          className="w-[49%] h-[49%] border-[#26262C] border rounded-tr-3xl neumorphism relative"
          // hover animation
          whileHover={{ scale: 1.1, y: -20, x: 20 }}
          onHoverStart={() =>
            setIsHovered((prevState) =>
              prevState.map((val, index) => (index === 1 ? true : val))
            )
          }
          onHoverEnd={() =>
            setIsHovered((prevState) =>
              prevState.map((val, index) => (index === 1 ? false : val))
            )
          }
        >
          {isHovered[1] && (
            <p className="text-center text-gradient font-bold mt-2">Angular</p>
          )}
          <motion.img
            src="/assets/logos/angular.png"
            alt="Angular logo"
            className="centered-logo w-16 md:w-24"
            style={{ opacity: opacity }}
          />
        </motion.div>
        {/* Bottom left elememnt */}
        <motion.div
          className="w-[49%] h-[49%] border-[#26262C] border rounded-bl-3xl neumorphism relative"
          // hover animation
          whileHover={{ scale: 1.1, y: 20, x: -20 }}
          onHoverStart={() =>
            setIsHovered((prevState) =>
              prevState.map((val, index) => (index === 2 ? true : val))
            )
          }
          onHoverEnd={() =>
            setIsHovered((prevState) =>
              prevState.map((val, index) => (index === 2 ? false : val))
            )
          }
        >
          <motion.img
            src="/assets/logos/java.png"
            alt="Java logo"
            className="centered-logo w-16 md:w-24"
            style={{ opacity: opacity }}
          />
          {isHovered[2] && (
            <p className="text-center text-gradient font-bold absolute bottom-0 left-0 right-0 mb-2">
              Java
            </p>
          )}
        </motion.div>
        {/* Bottom right element */}
        <motion.div
          className="w-[49%] h-[49%] border-[#26262C] border rounded-br-3xl neumorphism relative"
          // hover animation
          whileHover={{ scale: 1.1, y: 20, x: 20 }}
          onHoverStart={() =>
            setIsHovered((prevState) =>
              prevState.map((val, index) => (index === 3 ? true : val))
            )
          }
          onHoverEnd={() =>
            setIsHovered((prevState) =>
              prevState.map((val, index) => (index === 3 ? false : val))
            )
          }
        >
          <motion.img
            src="/assets/logos/spring.png"
            alt="Spring boot logo"
            className="centered-logo w-16 md:w-24"
            style={{ opacity: opacity }}
          />
          {isHovered[3] && (
            <p className="text-center text-gradient font-bold absolute bottom-0 left-0 right-0 mb-2">
              Spring Boot
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default TechStack;
