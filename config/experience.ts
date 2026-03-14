import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  // skills: ValidSkills[];
  skills: string[],
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "ubs",
    position: "Full Stack Developer",
    company: "Softvira",
    location: "Karachi, Pakistan",
    startDate: new Date("2023-12-04"),
    endDate: "Present",
    description: [
      "Built and scaled backend services for a QuickBooks- style finance platform, supporting monthly transactions, automated bank integrations, and real- time financial reporting (P&L, balance sheet, cash flow).",
      "Deployed and maintained production systems on AWS (EC2, RDS, S3) with CI/CD pipelines, achieving 99.9% uptime and faster release cycles.",
      "Created and deployed the Business Rocket mobile app using React Native (Expo) for both iOS and Android, including push notifications and production releases to app stores.",
      "Built an AI voice assistant bot using Twilio + deepgram and openAI to automate customer interactions, reducing manual support workload.",
      "Also used Langchain and ChromaDB to develop a RAG system."
    ],
    achievements: [
      "Shipped production features within the first month for a trader-facing P&L dashboard used by global stakeholders.",
      "Led migration from Kendo UI to UBS’s internal design system, reducing UI inconsistencies and improving render performance across core dashboards.",
      "Designed and automated a daily FX rate ingestion pipeline using Databricks (Python, Spark SQL) and Java services, eliminating manual rate updates.",
      "Won UBS AI Venture Challenge by building data transformation and anomaly detection pipelines on trading datasets.",
      "Led a 12-member team in an internal hackathon to build an AI-powered tool that generates GitLab tickets, test cases, and requirement summaries.",
    ],
    skills: ["Typescript", "Node", "Nest.js", "React", "JavaScript", "Next.js", "React.js", "PostgreSQL", "Langchain", "OpenAI", "ChromaDB", "AI Agents"],
    companyUrl: "https://www.ubs.com",
    logo: "/experience/keys-logo.png",
  },
  {
    id: "muze-ai",
    position: "MERN Stack Developer",
    company: "MeriSehat",
    location: "Karachi, Pakistan",
    startDate: new Date("2022-08-22"),
    endDate: new Date("2023-10-30"),
    description: [
      "Built and maintained core features for MeriSehat, a doctor- patient platform, including appointments, doctor profiles, lab tests, articles, and real- time video consultations (Agora) using React, Next.js, and MERN.",
      "Led React to Next.js migration, improving SEO and scalability while reducing page load times by ~40%",
      "Collaborated across frontend and backend, delivering scalable features, optimizing deployments, and improving overall user experience.",
    ],
    achievements: [
      "Improved LLM function-calling accuracy by ~40% through structured prompt design and response validation.",
      "Developed APIs and integrated Slack, Google Workspace, and HubSpot automations via FastAPI.",
      "Migrated ML inference from Replicate to AWS SageMaker, reducing cold-start latency by ~30%.",
      "Created a Next.js dashboard for user analytics and a demo video explaining the implementation.",
    ],
    skills: ["Typescript", "Node", "React", "JavaScript", "Next.js", "React.js", "MySQL"],
    companyUrl: "https://muzecmo.com",
    logo: "/experience/muzeai-logo.png",
  },
  {
    id: "builtdesign",
    position: "Junior MERN Developer",
    company: "WebNike",
    location: "Karachi, Pakistan",
    startDate: new Date("2022-05-17"),
    endDate: new Date("2022-08-22"),
    description: [
      "Developed and customized plugins for the Node Adapt Authoring Tool, improving e- commerce workflows and overall user experience.",
      "Collaborated in cross-functional teams to build, optimize, and deliver scalable MERN-based solutions across multiple projects. ",
    ],
    achievements: [
      "Developed websites using React, Angular, and GraphQL; reduced API load time by 30%.",
      "Set up AWS servers and CI/CD pipelines, scaling traffic to 3,000+ users/day.",
      "Built a multi-page PDF reader for large files (>300MB) to boost user engagement.",
    ],
    skills: ["Typescript", "Node", "React", "JavaScript", "Next.js", "React.js", "MongoDB"],
    companyUrl: "https://builtdesign.in",
    logo: "/experience/builtdesign-logo.png",
  },
];
