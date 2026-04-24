import type { Project } from "@/components/ProjectCard";

export const projects: Project[] = [
  {
    id: "PROJ_001 // HYPER-LEDGER",
    title: "not yet",
    description: "not yet",
    tags: [
      { label: "React", color: "matrix" },
      { label: "Node.JS", color: "blue" },
    ],
    image: "",
    url: "#",
  },
  {
    id: "PROJ_002 // NEURAL-SYNC",
    title: "not yet",
    description: "not yet",
    tags: [
      { label: "TYPESCRIPT", color: "pink" },
      { label: "WASM", color: "blue" },
    ],
    image: "",
    url: "#",
  },
  {
    id: "PROJ_003 // STREAMSCAPE",
    title: "not yet",
    description: "not yet",
    tags: [
      { label: "GO", color: "blue" },
      { label: "POSTGRES", color: "matrix" },
    ],
    image: "",
    url: "#",
  },
  {
    id: "PROJ_004 // ORACLE",
    title: "not yet",
    description: "not yet",
    tags: [
      { label: "REACT", color: "blue" },
      { label: "PYTHON", color: "matrix" },
      { label: "AI", color: "pink" },
    ],
    image: "",
    url: "#",
  },
];

export const experience = [
  {
    year: "Oct 2025 - present",
    projects: "SEVAKAM PROJECT - SCHOOL PROJECT",
    role: "Frontend developer",
    bullets: [
      "Worked on frontend development for a service-based mobile app",
      "Planned and designed the user interface and user experience(UI/UX)",
      "Collaborated with team members to develop and implement appfeatures",
    ],
  },
  {
    year: "Jan 2026 - Feb 2026",
    projects: "FLUTTER APP DEVELOPER - SCHOOL PROJECT",
    role: "Frontend developer",
    bullets: [
      "Built the frontend UI for a quiz application",
      "Designed user-friendly screens and navigation",
      "Worked with a team to develop core app features",
    ],
  },
  {
    year: "June 2025 -July 2025",
    projects: " MUSIC WEB PROJECT - SCHOOL PROJECT",
    role: "FullStack developer",
    bullets: [
      "Designed and developed the frontend interface of a music web application",
      "Implemented features such as song listing, search, and music playback",
      "Focused on creating a responsive and user-friendly UI",
      "Collaborated with team members to integrate features and improve performance",
    ],
  },
    {
    year: "Dec 2025 - Jan 2026",
    projects: " GAME DEVELOPMENT - SCHOOL PROJECT ",
    role: "Game Designer ",
    bullets: [
      "Built core gameplay systems including player movement, combat,health, and game state management using C# and Unity 2022.3.",
      "Integrated Addressables for dynamic asset loading, URP foroptimized rendering, and Cinemachine for camera systems.",
    ],
  },
];

export const education = [
  { year: "Feb 2024 - Dec 2027", degree: "B.Sc. Computer Science", school: "Cambodia Academy of Digital Technology (CADT)" },
];

export const skills: Record<string, string[]> = {
  Languages: ["JavaScript","Java","C", "C++","Dart",  "Python"],
  Frontend: ["React", "HTML", "CSS", "Tailwind", "Vite"],
  Backend: ["Node.js", "PostgreSQL"],
  Infrastructure: ["AWS", "Cloudflare"],
};
