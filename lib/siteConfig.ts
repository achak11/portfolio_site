export const site = {
  name: "Anurag Chakraborty",
  title: "Software Engineer · Full‑Stack & Backend",
  description: "Building performant backends and pragmatic full‑stack apps with Spring Boot, Next.js, and PostgreSQL.",
  url: "https://example.com",
  email: "anurag.cs.jobs@gmail.com",
  socials: {
    github: "https://github.com/yourname",
    linkedin: "https://www.linkedin.com/in/anuragchak/",
    twitter: "https://x.com/"
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
    description: "Full‑stack marketplace built with Next.js (TS), Supabase, and Tailwind; onboarding flow and tiered discounts.",
    tags: ["Next.js","TypeScript","Supabase","Tailwind"],
    link: "#",
    image: "/project-1.jpg"
  },
  {
    title: "Fault‑Tolerant Distributed Bitcoin Miner",
    description: "Erlang actor‑model miners (1000+ actors) hashing millions of strings with SHA‑256 across nodes.",
    tags: ["Erlang","Distributed Systems","Actors","SHA‑256"],
    link: "#",
    image: "/project-2.jpg"
  },
  {
    title: "Auto‑Scaling Load Balancer in Kubernetes",
    description: "Master/worker LB with stress‑ng; autoscaling nodes at ~85% CPU utilization thresholds.",
    tags: ["Kubernetes","Go/Linux","Autoscaling","DevOps"],
    link: "#",
    image: "/project-3.jpg"
  }
]

export const experience = [
  {
    role: "Full‑Stack Software Engineer",
    company: "IEJL.org",
    period: "Feb 2025 — Present",
    bullets: [
      "Shipped a full‑stack marketplace MVP with Next.js (TS), Supabase, Tailwind for 30+ merchants.",
      "Designed Postgres schemas with constraints & indexes to support 100K+ coupon codes/merchant.",
      "Built review & rating system with auth; ~70% more feedback submissions during pilot.",
      "Implemented drag‑and‑drop uploads to Supabase Storage and a parsing pipeline; validated at 10K+ claims."
    ]
  },
  {
    role: "Software Engineer",
    company: "Pivotree",
    period: "Jul 2020 — Jun 2022",
    bullets: [
      "Architected order lifecycle modules (drop‑ship, dispatch, returns) in Fluent OMS on Spring Boot + AWS; ~27% faster processing.",
      "Led REST→GraphQL transition; ~64% better API throughput.",
      "Automated order recovery with Python scripts; 95% less manual effort and >€120K/month cost savings.",
      "Improved API throughput ~70% in peak sales via JMeter and targeted tuning.",
      "Mentored 10 engineers on OMS architecture and docs, cutting onboarding by 30%."
    ]
  },
  {
    role: "Software Engineer Intern",
    company: "Pivotree",
    period: "Jan 2020 — Jun 2020",
    bullets: [
      "Implemented secure auth flows in Django for 50K+ users with zero downtime.",
      "Built DRF APIs integrating JIRA/GitLab for automated reporting.",
      "Containerized services with Docker and deployed on Kubernetes (rollouts from days to <2 hours)."
    ]
  }
]