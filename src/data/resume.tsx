import React from "react";
import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";

export const DATA = {
  name: "Piyush Singh",
  initials: "PS",
  url: "https://piyush-singh.vercel.app",
  location: "United States",
  locationLink: "https://www.google.com/maps/place/united+states",
  description:
    "AI/ML Engineer building production LLM systems, real-time voice AI pipelines, and distributed microservices. Published researcher in transformer-based computer vision.",
  summary:
    "I'm an AI/ML Engineer with 4+ years of experience shipping production-scale intelligent systems. Currently at [Webby Central LLC (Proactive.AI)](/#work), I build multi-agent voice AI platforms, RAG pipelines, and vision-language QC tools. Previously, I engineered serverless data pipelines at [Marriott International](/#work) and built high-throughput microservices at [Flipkart](/#work). I hold an [M.S. in Computer Science from the University of Florida](/#education) and have published [transformer research](https://arxiv.org/abs/2503.11893) from the ROBOPI Lab.",
  avatarUrl: "/me.png",
  skills: [
    { name: "Python", icon: Python },
    { name: "Java", icon: Java },
    { name: "TypeScript", icon: Typescript },
    { name: "Go", icon: Golang },
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Node.js", icon: Nodejs },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "Kubernetes", icon: Kubernetes },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "piyushsingh21042000@gmail.com",
    tel: "+13527099403",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/psluke2104",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/piyush20002104",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com",
        icon: Icons.x,
        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:piyushsingh21042000@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Webby Central LLC",
      href: "https://webbycentralllc.com",
      badges: ["Proactive.AI"],
      location: "Walpole, MA",
      title: "AI/ML Engineer",
      logoUrl: "/webby.png",
      start: "Aug 2025",
      end: "Present",
      description:
        "Building a HIPAA-compliant AI customer support platform for a Top 100 US healthcare provider with 7 autonomous voice agents, real-time speech-to-speech pipeline, and multi-agent orchestration across 5 languages, reducing call handling time by 60%. Designed tool-calling middleware with 22 LLM functions, 50+ REST endpoints, and RAG with vector search. Built an AI QC system for a national merchandise company using vision-language models, cutting manual review time by 80%. Engineered multi-provider LLM abstraction with Model Context Protocol (MCP) integration, deployed on Docker and Kubernetes.",
    },
    {
      company: "Marriott International",
      badges: [],
      href: "https://marriott.com",
      location: "Remote, USA",
      title: "Software Engineer",
      logoUrl: "/marriott.png",
      start: "Aug 2023",
      end: "Aug 2025",
      description:
        "Architected serverless data pipelines using AWS Lambda and Spring Boot microservices to automate ingestion of multi-GB hotel reservation data, reducing ETL batch runtime by 40%. Designed RESTful APIs and event-driven architectures with CloudWatch monitoring, achieving 99.9% uptime for analytics tools across 8,000+ hotel properties.",
    },
    {
      company: "ROBOPI Lab, UF",
      href: "https://robopi.ece.ufl.edu",
      badges: ["Research"],
      location: "Gainesville, FL",
      title: "Machine Learning Researcher",
      logoUrl: "/uf.png",
      start: "May 2023",
      end: "Aug 2023",
      description:
        "Developed UStyle, a depth-guided transformer model for underwater image enhancement in PyTorch, achieving state-of-the-art color fidelity across 7 waterbody styles. Scaled distributed training on multi-GPU clusters using PyTorch Lightning and SLURM. Published at arXiv:2503.11893.",
    },
    {
      company: "Flipkart",
      href: "https://flipkart.com",
      badges: [],
      location: "Bangalore, India",
      title: "Software Engineer",
      logoUrl: "/flipkart.png",
      start: "May 2021",
      end: "Jul 2022",
      description:
        "Built a backend aggregation service connecting 15+ microservices with Redis and MongoDB, handling 50K+ RPM and reducing API latency by 30%. Developed a gamification engine for promotional campaigns contributing to 30% lift in conversions. Implemented JWT-based authentication with rate limiting and session integrity controls.",
    },
  ],
  education: [
    {
      school: "University of Florida",
      href: "https://ufl.edu",
      degree: "Master of Science, Computer Science",
      logoUrl: "/uf.png",
      start: "2022",
      end: "2024",
    },
    {
      school: "Maharaja Surajmal Institute of Technology",
      href: "https://msit.in",
      degree: "Bachelor of Technology, Computer Science",
      logoUrl: "/msit.png",
      start: "2018",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "Pulse - Healthcare Voice AI Platform",
      href: "https://pulse.useproactiveai.com",
      dates: "Aug 2025 - Present",
      active: true,
      description:
        "HIPAA-compliant AI customer support platform for healthcare with 7 autonomous voice agents, real-time speech-to-speech pipeline, multi-agent orchestration across 5 languages, and tool-calling middleware with 22 LLM functions and 50+ REST endpoints.",
      technologies: [
        "Python",
        "FastAPI",
        "Next.js",
        "TypeScript",
        "MongoDB",
        "Docker",
        "LLMs",
        "RAG",
        "Twilio",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://pulse.useproactiveai.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "AI Quality Control Agent",
      href: "#",
      dates: "2025 - Present",
      active: true,
      description:
        "LLM-powered QC system for a national enterprise merchandise company. Uses vision-language models to analyze product proofs, validates 52+ inspection rules across 6 checkpoints, cutting manual QC time by 80%.",
      technologies: [
        "Python",
        "Flask",
        "MongoDB",
        "Gemini",
        "OpenAI",
        "MCP",
        "OAuth2",
        "Computer Vision",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "UStyle - Underwater Image Enhancement",
      href: "https://arxiv.org/abs/2503.11893",
      dates: "May 2023 - Aug 2023",
      active: false,
      description:
        "Depth-guided transformer model for underwater image style transfer and enhancement, achieving state-of-the-art color fidelity across 7 waterbody styles. Published research from University of Florida ROBOPI Lab.",
      technologies: [
        "PyTorch",
        "Transformers",
        "PyTorch Lightning",
        "SLURM",
        "Computer Vision",
        "Python",
      ],
      links: [
        {
          type: "Paper",
          href: "https://arxiv.org/abs/2503.11893",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Distributed Twitter Clone",
      href: "#",
      dates: "2023",
      active: false,
      description:
        "Social platform using the Erlang actor model and Cowboy framework. Simulated 90K users with Zipf distribution to study throughput, fan-out, and reliability under load.",
      technologies: [
        "Erlang",
        "Cowboy",
        "Distributed Systems",
        "Actor Model",
      ],
      links: [],
      image: "",
      video: "",
    },
  ],
  hackathons: [] as readonly {
    title: string;
    dates: string;
    location: string;
    description: string;
    image?: string;
    mlh?: string;
    win?: string;
    icon?: string;
    links: readonly { title: string; icon: React.ReactElement; href: string }[];
  }[],
} as const;
