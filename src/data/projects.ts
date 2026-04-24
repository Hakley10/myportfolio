import type { Project } from "@/components/ProjectCard";

export const projects: Project[] = [
  {
    id: "PROJ_001 // HYPER-LEDGER",
    title: "Aether Node Engine",
    description: "High-performance block synchronization with sub-50ms latency across global clusters.",
    tags: [
      { label: "RUST", color: "matrix" },
      { label: "GRPC", color: "blue" },
    ],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80",
    url: "#",
  },
  {
    id: "PROJ_002 // NEURAL-SYNC",
    title: "Prism Reactive Framework",
    description: "A design-first UI framework that compiles to native machine code for extreme responsiveness.",
    tags: [
      { label: "TYPESCRIPT", color: "pink" },
      { label: "WASM", color: "blue" },
    ],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80",
    url: "#",
  },
  {
    id: "PROJ_003 // STREAMSCAPE",
    title: "Vortex Stream DB",
    description: "Time-series database optimized for IoT edge clusters with custom storage engine.",
    tags: [
      { label: "GO", color: "blue" },
      { label: "POSTGRES", color: "matrix" },
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    url: "#",
  },
  {
    id: "PROJ_004 // ORACLE",
    title: "Lumen AI Console",
    description: "Production-ready LLM orchestration dashboard with real-time observability and cost guardrails.",
    tags: [
      { label: "REACT", color: "blue" },
      { label: "PYTHON", color: "matrix" },
      { label: "AI", color: "pink" },
    ],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&q=80",
    url: "#",
  },
];

export const experience = [
  {
    year: "2023 — Now",
    role: "Principal Engineer",
    company: "Xenon Labs",
    location: "Remote",
    bullets: [
      "Lead architecture for a distributed scheduling platform serving 40M daily events.",
      "Cut p99 API latency by 62% by redesigning the storage layer in Rust.",
      "Mentor a team of 6 engineers across infra, backend, and design systems.",
    ],
  },
  {
    year: "2020 — 2023",
    role: "Senior Full-Stack Engineer",
    company: "Nimbus Systems",
    location: "Berlin, DE",
    bullets: [
      "Built the company's design system used across 12 internal products.",
      "Migrated legacy monolith to event-driven services on Kubernetes.",
      "Owned the developer experience working group, reducing onboarding from 3 weeks to 4 days.",
    ],
  },
  {
    year: "2018 — 2020",
    role: "Software Engineer",
    company: "Helix Studio",
    location: "Lisbon, PT",
    bullets: [
      "Shipped 8 client products spanning fintech, health, and creative tools.",
      "Introduced TypeScript and CI/CD across the agency, becoming the default stack.",
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
