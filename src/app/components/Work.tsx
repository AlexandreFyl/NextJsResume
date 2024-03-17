"use client";

import React from "react";
import { motion } from "framer-motion";

function Work() {
  return (
    <section className="flex flex-col justify-center items-center">
      <motion.h2
        initial={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 2 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="text-glow text-5xl md:text-7xl font-bold leading-tight text-center pt-20"
      >
        Work
      </motion.h2>
      {/* List container */}
      <div className="w-5/6 md:w-1/2 pt-24 pb-48">
        {/* ========================================== */}
        {/* ================= ITEM 1 ================= */}
        {/* ========================================== */}

        {/* List item */}
        <div className="flex flex-row justify-between h-60">
          {/* Left */}
          <div className="w-1/3">
            {/* Degree */}
            <div className="glassmorphism p-3 text-sm md:text-2xl font-bold">
              Full Stack Developer
            </div>
            {/* Description */}
            <div className="p-3 italic text-xs md:text-base">
              <ul>
                <li>Client-server webapps development.</li>
                <li>Generic and reusable dependencies development.</li>
                <li>Oauth2 SSO implementation.</li>
              </ul>
            </div>
            {/* Date */}
            <div className="p-3 font-semibold text-sm md:text-base">
              <span className="text-gradient">2021 - 2022</span>
            </div>
            {/* School */}
            <div className="glassmorphism font-semibold p-2 w-fit text-xs md:text-base">
              Mistral Informatique
            </div>
          </div>
          {/* Middle */}
          <div className="w-1/6 flex items-center justify-center">
            {/* Line */}
            <div className="w-1 h-full bg-white rounded relative">
              {/* Circle */}
              <div className="absolute w-5 h-5 rounded-full ring-4 ring-[#bc94d0] bg-[#2C2C34] -left-2"></div>
            </div>
          </div>
          {/* Right */}
          <div className="w-1/3 ">{/* Empty as it's an odd element */}</div>
        </div>
        {/* ========================================== */}
        {/* ================= ITEM 2 ================= */}
        {/* ========================================== */}

        {/* List item */}
        <div className="flex flex-row justify-between h-60">
          {/* Left */}
          <div className="w-1/3">{/* Empty as it's an even element */}</div>
          {/* Middle */}
          <div className="w-1/6 flex items-center justify-center">
            {/* Line */}
            <div className="w-1 h-full bg-white rounded relative">
              {/* Circle */}
              <div className="absolute w-5 h-5 rounded-full ring-4 ring-[#bc94d0] bg-[#2C2C34] -left-2"></div>
            </div>
          </div>
          {/* Right */}
          <div className="w-1/3 ">
            {/* Degree */}
            <div className="glassmorphism p-3 text-sm md:text-2xl font-bold">
              Web developer internship
            </div>
            {/* Description */}
            <div className="p-3 italic text-xs md:text-base">
              <ul>
                <li>Developed and launched an eCommerce website.</li>
                <li>Optimized SEO and created compelling content.</li>
                <li>
                  Established a consistent graphic identity and managed print
                  materials, photography, and newsletters.
                </li>
                <li></li>
              </ul>
            </div>
            {/* Date */}
            <div className="p-3 font-semibold text-sm md:text-base">
              <span className="text-gradient">2019</span>
            </div>
            {/* School */}
            <div className="glassmorphism font-semibold p-2 w-fit text-xs md:text-base">
              Le goût’chez nous
            </div>
          </div>
        </div>
        {/* ========================================== */}
        {/* ================= ITEM 3 ================= */}
        {/* ========================================== */}

        {/* List item */}
        <div className="flex flex-row justify-between h-60">
          {/* Left */}
          <div className="w-1/3">
            {/* Degree */}
            <div className="glassmorphism p-3 text-sm md:text-2xl font-bold">
              SEO Manager Internship
            </div>
            {/* Description */}
            <div className="p-3 italic text-xs md:text-base">
              <ul>
                <li>Hands-On experience in SEO and SEA.</li>
                <li>Google ads & google data studios usages.</li>
                <li>Client site optimization and end-of-service assessment.</li>
              </ul>
            </div>
            {/* Date */}
            <div className="p-3 font-semibold text-sm md:text-base">
              <span className="text-gradient">2018</span>
            </div>
            {/* School */}
            <div className="glassmorphism font-semibold p-2 w-fit text-xs md:text-base">
              Brioude Internet
            </div>
          </div>
          {/* Middle */}
          <div className="w-1/6 flex items-center justify-center">
            {/* Line */}
            <div className="w-1 h-full bg-white rounded relative">
              {/* Circle */}
              <div className="absolute w-5 h-5 rounded-full ring-4 ring-[#bc94d0] bg-[#2C2C34] -left-2"></div>
            </div>
          </div>
          {/* Right */}
          <div className="w-1/3 ">{/* Empty as it's an odd element */}</div>
        </div>

        {/* End List container */}
      </div>
    </section>
  );
}

export default Work;
