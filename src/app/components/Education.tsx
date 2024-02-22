"use client";

import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section className="flex flex-col justify-center items-center">
      <motion.h2
        initial={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 2 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="text-glow text-5xl md:text-7xl font-bold leading-tight text-center pt-20"
      >
        Education
      </motion.h2>
      {/* List container */}
      <div className="w-5/6 md:w-1/2 py-24 ">
        {/* ========================================== */}
        {/* ================= ITEM 1 ================= */}
        {/* ========================================== */}

        {/* List item */}
        <div className="flex flex-row justify-between h-48">
          {/* Left */}
          <div className="w-1/3">
            {/* Degree */}
            <div className="glassmorphism p-3 text-sm md:text-2xl font-bold">
              Master's degree Artificial Intelligence
            </div>
            {/* Description */}
            <div className="p-3 italic text-xs md:text-base">
              Learning some things
            </div>
            {/* Date */}
            <div className="p-3 font-semibold text-sm md:text-base">
              <span className="text-gradient">2023 - 2025</span>
            </div>
            {/* School */}
            <div className="glassmorphism font-semibold p-2 w-fit text-xs md:text-base">
              Hexagone School
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
        <div className="flex flex-row justify-between h-48">
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
              Professional qualification in application design and development
            </div>
            {/* Description */}
            <div className="p-3 italic text-xs md:text-base">
              Learning some things
            </div>
            {/* Date */}
            <div className="p-3 font-semibold text-sm md:text-base">
              <span className="text-gradient">2021</span>
            </div>
            {/* School */}
            <div className="glassmorphism font-semibold p-2 w-fit text-xs md:text-base">
              Human Booster
            </div>
          </div>
        </div>
        {/* ========================================== */}
        {/* ================= ITEM 3 ================= */}
        {/* ========================================== */}

        {/* List item */}
        <div className="flex flex-row justify-between h-48">
          {/* Left */}
          <div className="w-1/3">
            {/* Degree */}
            <div className="glassmorphism p-3 text-sm md:text-2xl font-bold">
              POEC back-end developer
            </div>
            {/* Description */}
            <div className="p-3 italic text-xs md:text-base">
              Learning some things
            </div>
            {/* Date */}
            <div className="p-3 font-semibold text-sm md:text-base">
              <span className="text-gradient">2019</span>
            </div>
            {/* School */}
            <div className="glassmorphism font-semibold p-2 w-fit text-xs md:text-base">
              Human Booster
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
        {/* ================= ITEM 4 ================= */}
        {/* ========================================== */}

        {/* List item */}
        <div className="flex flex-row justify-between h-48">
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
              Digital referent
            </div>
            {/* Description */}
            <div className="p-3 italic text-xs md:text-base">
              Learning some things
            </div>
            {/* Date */}
            <div className="p-3 font-semibold text-sm md:text-base">
              <span className="text-gradient">2018</span>
            </div>
            {/* School */}
            <div className="glassmorphism font-semibold p-2 w-fit text-xs md:text-base">
              Human Booster
            </div>
          </div>
        </div>
        {/* ========================================== */}
        {/* ================= ITEM 5 ================= */}
        {/* ========================================== */}

        {/* List item */}
        <div className="flex flex-row justify-between h-48">
          {/* Left */}
          <div className="w-1/3">
            {/* Degree */}
            <div className="glassmorphism p-3 text-sm md:text-2xl font-bold">
              Baccalauréat Engineering Sciences
            </div>
            {/* Description */}
            <div className="p-3 italic text-xs md:text-base">
              Learning some things
            </div>
            {/* Date */}
            <div className="p-3 font-semibold text-sm md:text-base">
              <span className="text-gradient">2016</span>
            </div>
            {/* School */}
            <div className="glassmorphism font-semibold p-2 w-fit text-xs md:text-base">
              Lafayette School
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
};

export default Education;
