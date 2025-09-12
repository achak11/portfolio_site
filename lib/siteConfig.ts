export const site = {
  name: "Anurag Chakraborty",
  title: "Software Engineer · Backend & Full-Stack Software Engineer",
  description: "I build reliable backend infrastructure and robust full-stack apps with Spring Boot, Next.js, PostgreSQL, and cloud tooling (Docker & Kubernetes).",
  url: "https://example.com",
  email: "anurag.cs.jobs@gmail.com",
  socials: {
    github: "https://github.com/achak11",
    linkedin: "https://www.linkedin.com/in/anuragchak/",
  }
}

export type Project = {
  title: string
  description: string
  tags: string[]
  link?: string
  image?: string
}

export const projects: Project[] = [
  {
    title: "Marketplace MVP for 30+ Merchants",
    description: "Full-stack marketplace on Next.js + Supabase; tiered discounts & claims.",
    tags: ["Next.js","TypeScript","Supabase","Tailwind"],
    link: "#",
    image: "/project-1.jpg"
  },
  {
    title: "Fault-Tolerant Distributed Bitcoin Miner",
    description: "Erlang actors hashing millions of candidates across nodes.",
    tags: ["Erlang","Actors","SHA-256"],
    link: "#",
    image: "/project-2.jpg"
  },
  {
    title: "Auto-Scaling Load Balancer in K8s",
    description: "CPU-driven autoscale with stress-ng; 85% utilization threshold.",
    tags: ["Kubernetes","Autoscaling","DevOps"],
    link: "#",
    image: "/project-3.jpg"
  }
]

export const experience = [
  {
    role: "Full-Stack Software Engineer",
    company: "IEJL.org",
    period: "Feb 2025 — Present",
    bullets: [
      "Shipped a full-stack marketplace MVP with Next.js (TS), Supabase, Tailwind for 30+ merchants.",
      "Designed Postgres schemas to support 100K+ coupon codes/merchant with constraints & indexes.",
      "Built review & rating system; ~70% more feedback submissions during pilot.",
      "Implemented drag-and-drop uploads and parsing pipeline; validated at 10K+ claims."
    ]
  },
  {
    role: "Software Engineer",
    company: "Pivotree",
    period: "Jul 2020 — Jun 2022",
    bullets: [
      "Architected OMS modules with Spring Boot + AWS; ~27% faster processing.",
      "Led REST→GraphQL; ~64% better API throughput; peak-event tuning +70% throughput.",
      "Automated order recovery pipelines; 95% less manual, >€120K/month savings.",
      "Mentored 10 engineers; onboarding -30% time, +20% delivery efficiency."
    ]
  },
  {
    role: "Software Engineer Intern",
    company: "Pivotree",
    period: "Jan 2020 — Jun 2020",
    bullets: [
      "Secure auth with Django for 50K+ users; zero downtime.",
      "DRF APIs integrating JIRA/GitLab; automated reporting for 40+ users.",
      "Dockerized and deployed to Kubernetes; rollouts from days to <2 hrs."
    ]
  }
]