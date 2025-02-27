"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      
      <p className="mb-3">
        🚀 <span className="font-medium">Turning Ideas into Scalable Solutions</span>
      </p>

      <p className="mb-3">
        Hey there! I’m <span className="font-medium">Lokeshwar Reddy Karra</span>, a software developer and AI enthusiast who loves solving complex problems with elegant, efficient code. From designing full-stack applications to pushing the boundaries of AI in medical imaging and NLP, I thrive at the intersection of <span className="font-medium">innovation and impact</span>.
      </p>

      <p className="mb-3">
        With a strong foundation in <span className="font-medium">backend development, cloud computing, and data analytics</span>, I’ve worked on cutting-edge research in reinforcement learning and super-resolution while building real-world projects that make technology more accessible. My recent work at <span className="font-medium">Webacy</span> involved analyzing security risks in <span className="font-medium">967+ smart contracts</span>, leveraging clustering techniques to improve Web3 security.
      </p>

      <p className="mb-3">
        I’m passionate about building <span className="font-medium">intelligent, scalable, and user-centric applications</span>—whether it's an AI-powered summarization bot, a full-stack pizza ordering system, or a high-performance iOS app. My approach? <span className="italic">Write clean code, optimize relentlessly, and never stop learning!</span>
      </p>

      <p>
        💡 <span className="font-medium">Always open to collaborations, hackathons, and exciting opportunities.</span> Let’s connect and build something incredible together!
      </p>

    </motion.section>
  );
}
