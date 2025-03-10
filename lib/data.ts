import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { FaDatabase } from "react-icons/fa";
import { MdOutlineDeveloperMode } from "react-icons/md";
import spacesImg from "@/public/spaces.jpg";
import iosappImg from "@/public/iosapp.png";
import toppizzaImg from "@/public/toppizza.png";
import springbootapiImg from "@/public/springbootapi.webp"


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated from Amrita Vishwa Vidyapeetham",
    location: "Chennai, India",
    description:
      "Bachelor of Technology - Computer Science and Engineering (AIE)",
    icon: React.createElement(LuGraduationCap),
    date: "08/2020 - 08/2024",
  },
  {
    title: "Academic Researcher",
    location: "Chennai, India",
    description:
"📄 Research Publications - ICAECT 2024: Developed a PPO-based summarization model, improving accuracy by 40%, with applications in news aggregation and automated reports. - IDCIoT 2024: Enhanced chest X-ray resolution by 3x using SRGAN & transfer learning, benefiting telemedicine & diagnostic imaging. These works showcase my contributions to AI-driven summarization and medical imaging enhancement. 🚀",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Data Analytics Extern — Webacy",
    location: "Remote",
     description:
      "Analyzed 38+ risk metrics across 967 smart contracts to enhance Web3 security. Built high-accuracy datasets (99%) using SQL & Excel. Developed a dashboard for chain-specific risk visualization and conducted clustering (K-Modes, Hierarchical) to profile 900+ contracts. Delivered insights that reduced risk assessment time by 30%.",
    icon: React.createElement(FaDatabase),
    date: "09/2024 — 10/2024",
  },
  {
    title: "Full-Stack Developer",
    location: "Hyderabad, India",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, Node.js, Java, SQL and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Top Pizza",
    description:
      "Built a full-stack pizza ordering website using React, Node.js, and SQLite. Optimized backend cold start time by 98% ",
    tags: ["React", "Node.js", "Fastify", "Sqlite"],
    imageUrl: toppizzaImg,
    sourceCodeUrl: "https://github.com/lokeshkarra/toppizza-client-app.git",
    liveUrl: "https://thetoppizza.netlify.app/",
  },
  {
    title: "Spring Security Rest Api",
    description:
      "Built a secure authentication system, optimized for high performance, handling 84 requests/sec. ",
    tags: ["React", "Node.js", "Fastify", "Sqlite"],
    imageUrl: springbootapiImg,
    sourceCodeUrl: "https://github.com/lokeshkarra/springboot-auth-performance.git",
    
  },
  {
    title: "Twitter Spaces Ai Bot",
    description:
      "Built an automated bot to transcribe and summarize Twitter Spaces audio using twspace-dl, AssemblyAI, and Ollama LLaMA2.",
    tags: ["Python", "Assembly Ai", "LLaMA2 llm", "Tweepy"],
    imageUrl: spacesImg,
    sourceCodeUrl: "https://github.com/lokeshkarra/TwitterSpacesAiBot.git",
  },
  {
    title: "OpenInApp iOS App",
    description:
      "Built an iOS app with tab navigation, Integrated API for real-time metrics and implemented a dynamic chart for monthly clicks visualization.",
    tags: ["Swift", "SwiftUI"],
    imageUrl: iosappImg,
    sourceCodeUrl: "https://github.com/lokeshkarra/IosAppAssignment.git",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "Java",
  "Python",
  "Kafka",
  "React",
  "Node.js",
  "Express",
  "Spring Boot",
  "MongoDB",
  "SQL",
  "PostgreSQL",
  "Git",
  "Docker",
  "AI/ML"
] as const;
