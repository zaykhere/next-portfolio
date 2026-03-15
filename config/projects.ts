import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: string[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: string[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "ecommerce-monorepo",
    companyName: "Full Stack Ecommerce Website with MonoRepo Architecture",
    type: "Personal",
    category: ["Full Stack", "Web Dev", "Backend", "Frontend"],
    shortDescription:
      "Threadly is a scalable, event-driven e-commerce platform built with a modern microservices architecture and managed within a Turborepo monorepo. It leverages Apache Kafka for robust asynchronous communication between services, ensuring high performance and decoupling.",
    githubLink: "https://github.com/zaykhere/ecommerce-monorepo",
    techStack: ["Next.js", "Node.js", "Typescript", "Kafka", "Tailwind CSS", "Postgres", "MongoDB", "Express.js", "Hono", "Fastify"],
    startDate: new Date("2024-08-01"),
    endDate: new Date("2025-01-01"),
    companyLogoImg: "/projects/threadly/2.png",
    pagesInfoArr: [
      {
        title: "Project Images",
        description:
          "Screenshots of the project.",
        imgArr: ["/projects/threadly/1.png", "/projects/threadly/3.png", "/projects/threadly/4.png", "/projects/threadly/5.png", "/projects/threadly/6.png"],
      }
    ],
    descriptionDetails: {
      paragraphs: [
        "Threadly is a scalable, event-driven e-commerce platform built with a modern microservices architecture and managed within a Turborepo monorepo. It leverages Apache Kafka for robust asynchronous communication between services, ensuring high performance and decoupling.",
        "This project demonstrates advanced expertise in building distributed systems, utilizing industry-standard tools and practices for backend scalability and frontend excellence.",
      ],
      bullets: [
        "Microservices Architecture: Discrete services for Auth, Order, Product, Payment, and Email, allowing independent scaling and deployment.",
        "Event-Driven Communication: Powered by Apache Kafka, ensuring reliable data consistency and asynchronous processing across services.",
        "Monorepo Strategy: Managed with Turborepo and PNPM Workspaces for efficient build pipelines, shared code, and unified dependency management.",
        "Type Safety: End-to-end TypeScript support across all apps and shared packages.",
        "Admin Dashboard: Built with Next.js 15, React 19, Shadcn UI, and React Query for a premium management experience.",
        "Client Storefront: A high-performance e-commerce storefront using Next.js 15, Zustand for state management, and Stripe for payments.",
        "Centralized Authentication: Integrated with Clerk for secure and seamless user management."
      ],
    },
  },
  {
    id: "aora",
    companyName: "Aora",
    type: "Personal",
    category: ["Mobile App", "Android", "iOS"],
    shortDescription:
      "This is a modern, full-stack video sharing mobile application built with React Native, Expo, and Appwrite. It features a sleek design, seamless video playback, and a robust backend for user authentication and content management.",
    githubLink: "https://github.com/zaykhere/rn-vid-share",
    techStack: ["React Native", "Expo", "AppWrite", "NativeWind"],
    startDate: new Date("2022-03-01"),
    endDate: new Date("2022-07-01"),
    companyLogoImg: "/projects/aora/1.jpg",
    pagesInfoArr: [
      {
        title: "Project Images",
        description: "Screenshots of the project",
        imgArr: ["/projects/aora/2.jpg", "/projects/aora/3.jpg", "/projects/aora/4.jpg", "/projects/aora/5.jpg", "/projects/aora/6.jpg", "/projects/aora/7.jpg"],
      }
    ],
    descriptionDetails: {
      paragraphs: [
        "The Aora video-sharing application delivers a comprehensive mobile experience with secure user authentication, including sign-up, sign-in, and persistent sessions managed by Appwrite. Users are greeted by a dynamic home screen featuring both latest and trending videos, while a global search interface enables quick content discovery across the platform. ",
        "Beyond consumption, the app empowers users to upload their own videos and thumbnails, with personal profile pages showcasing their individual content. The experience is wrapped in a beautifully modern UI/UX, featuring smooth animations through NativeWind and React Native Animatable, ensuring a responsive and consistent design across all screen sizes."
      ],
      bullets: [
        "Secure Authentication: User sign-up, sign-in, and persistence using Appwrite.",
        "Video Feed: Home screen featuring latest and trending videos.  ",
        "Global Search: Find videos quickly with a dedicated search interface.",
        "Video Uploads: Users can upload their own videos and thumbnails.",
        "User Profiles: Personal profile pages showing user-specific content.",
        "Modern UI/UX: Beautifully designed interface with smooth animations and transitions using NativeWind and React Native Animatable.",
      ],
    },
  },
  {
    id: "expense-tracker",
    companyName: "Expense Tracker",
    type: "Personal",
    category: ["Full Stack", "Backend", "Web Dev", "Frontend", "AI", "Langchain", "Next.js", "OpenAI"],
    shortDescription:
      "Expense Tracker AI is a cutting-edge financial management application that leverages Artificial Intelligence to provide deep insights into your spending habits. Built with the latest web technologies, it offers a seamless, secure, and intuitive experience for tracking expenses and optimizing your financial health.",
    techStack: ["Next.js", "React", "Node.js", "Typescript", "Tailwind CSS", "Prisma", "OpenAI"],
    startDate: new Date("2024-04-01"),
    endDate: new Date("2024-10-01"),
    websiteLink: "https://expense-tracker-ai-green.vercel.app/",
    githubLink: "https://github.com/zaykhere/expense-tracker-ai",
    companyLogoImg: "/projects/expense-tracker/6.png",
    pagesInfoArr: [
      {
        title: "Project Images",
        description:
          "Screenshots of the project.",
        imgArr: ["/projects/expense-tracker/6.png", "/projects/expense-tracker/5.png", "/projects/expense-tracker/4.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Expense Tracker AI is a cutting-edge financial management application that leverages Artificial Intelligence to provide deep insights into your spending habits. Built with the latest web technologies, it offers a seamless, secure, and intuitive experience for tracking expenses and optimizing your financial health.",
      ],
      bullets: [
        "AI-Powered Insights: Get personalized financial advice and spending analysis generated by OpenAI.",
        "Secure Authentication: Robust user management and social login powered by Clerk.",
        "Interactive Visualizations: Real-time charts (Bar, Pie, Line) documenting your financial trends using Chart.js.",
        "Effortless Tracking: Simple and quick interface to add, categorize, and manage your expenses.",
        "Dark Mode Support: Fully responsive design with a beautiful dark mode for a premium feel."
      ],
    },
  },
  {
    id: "resumetric",
    companyName: "Resumetric",
    type: "Personal",
    category: ["Web Dev", "Frontend", "UI/UX", "Backend", "Puter", "LLM", "Next.js"],
    shortDescription:
      "Open-source Next.js web app to analyze your resume using AI.",
    websiteLink: "https://resumetric-gamma.vercel.app/",
    githubLink: "https://github.com/zaykhere/resumetric",
    techStack: [
      "Next.js",
      "React",
      "Typescript",
      "Tailwind CSS",
      "Puter.js",
      "Claude",
      "Vercel",
    ],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2025-12-01"),
    companyLogoImg: "/projects/resumetric/img.png",
    pagesInfoArr: [
      {
        title: "Project images",
        description:
          "Screenshots of the project.",
        imgArr: ["/projects/resumetric/Untitled4.png", "/projects/resumetric/Untitled.png", "/projects/resumetric/Untitled2.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "ResuMetric is a powerful, AI-driven resume analyzer designed to help job seekers optimize their resumes for Applicant Tracking Systems (ATS) and specific job descriptions. Built with a modern tech stack and powered by Puter.js, it offers detailed feedback, scoring, and actionable improvements.",
        "Resumetric leverages Puter.js as a comprehensive backend-as-a-service.",
      ],
      bullets: [
        "AI-Powered Analysis: Utilizes Claude 3.5 Sonnet (via Puter.js AI) to analyze resumes against job descriptions.",
        "ATS Scoring: Provides a compatibility score to estimate how well a resume passes automated screening.",
        "Detailed Feedback: Offers specific, actionable advice on content, formatting, and keywords.",
        "PDF to Image Conversion: Automatically converts uploaded PDFs to high-quality images for visual reference alongside feedback.",
        "Secure Cloud Storage: Leveraging Puter.js File System and Key-Value Store to save resumes and analysis history securely."
      ],
    },
  },
  
  
  
  {
    id: "paylo",
    companyName: "Paylo",
    type: "Professional",
    category: ["Full Stack", "Web Dev", "UI/UX"],
    shortDescription:
      "Paylo is a financial operations platform that helps businesses manage accounts, transactions, and financial reports in one place. It enables accurate financial tracking with features like balance sheets, profit & loss reports, and flexible date-based analysis.",
    techStack: [
      "Next.js",
      "Node.js",
      "Socket.io",
      "Typescript",
      "Postgres",
      "OpenAI",
      "Express.js",
      "Material UI"
    ],
    websiteLink: "https://paylo.ai",
    startDate: new Date("2023-06-01"),
    endDate: new Date("2023-12-01"),
    companyLogoImg: "/paylo.png",
    pagesInfoArr: [
      
    ],
    descriptionDetails: {
      paragraphs: [
        "Paylo is a financial operations platform that helps businesses manage accounts, transactions, and financial reports in a structured and reliable way. I worked as a full-stack developer on the platform, building backend services and APIs for financial data while collaborating closely with frontend developers to deliver accurate reporting features.",
        "My work focused on implementing core accounting functionality and improving how users interact with financial reports. I helped develop features for generating balance sheets, profit and loss statements, and flexible date-based filtering ensuring the system handled financial data efficiently and consistently.",
      ],
      bullets: [
        "Built backend APIs for Balance Sheet and Profit & Loss financial reports.",
        "Implemented transaction and account logic to maintain accurate financial records.",
        "Optimized database queries for handling large accounting datasets.",
        "Collaborated closely with frontend developers to implement financial comparison features."
      ],
    },
  },
  {
    id: "merisehat",
    companyName: "Meri Sehat",
    type: "Professional",
    category: ["Web Dev", "Full Stack", "UI/UX"],
    shortDescription:
      "As part of the development team behind MeriSehat.pk, I contributed to creating Pakistan's most comprehensive digital health ecosystem—bringing AI-powered health scans, 24/7 doctor access, and multilingual medical resources to users across the country.",
    websiteLink: "https://merisehat.pk",
    techStack: [
      "Next.js",
      "React",
      "Node.js",
      "MySQL",
      "Typescript",
    ],
    startDate: new Date("2021-07-01"),
    endDate: new Date("2022-07-01"),
    companyLogoImg: "/merisehat.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "I helped build MeriSehat.pk, Pakistan's first AI-powered digital health platform that makes quality healthcare accessible to millions. The platform combines cutting-edge technology with deep localization to bridge the gap in medical literacy and access across the country.",
        "As a developer on the core team, I contributed to building features that empower users to monitor their health, consult doctors remotely, and access reliable information—all from their smartphones.",
      ],
      bullets: [
        "Built and integrated AI-powered health scanning features that let users measure BP, heart rate, and oxygen levels using just their phone camera.",
        "Developed the infrastructure for 24/7 telemedicine consultations, enabling instant connections between patients and healthcare providers.",
        "Implemented support for multilingual health content (Urdu, Sindhi, Pashto, and more), making critical information accessible to non-English speakers.",
        "Contributed to the platform's backend systems.",
      ],
    },
  },
  {
    id: "safespace",
    companyName: "Safespace",
    type: "Personal",
    category: ["Web Dev", "Backend"],
    shortDescription:
      "A robust and scalable backend API for a modern therapist booking application built with NestJS and TypeScript.",
    githubLink: "https://github.com/zaykhere/therapy-backend-nestjs",
    techStack: ["Nest.js", "Node.js", "Postgres", "TypeORM"],
    startDate: new Date("2021-07-01"),
    endDate: new Date("2022-07-01"),
    companyLogoImg: "/nest.svg",
    pagesInfoArr: [
      
    ],
    descriptionDetails: {
      paragraphs: [
        `SafeSpace is the core backend infrastructure powering a comprehensive therapist booking platform. It handles everything from user authentication and profile management to appointment scheduling, therapy questionnaire processing, and secure payments integration.`,
        `Built on the progressive NestJS framework, the application utilizes modern backend patterns, dependency injection, and a modular architecture to ensure high maintainability and scalability.`,
      ],
      bullets: [
        "Secure user sign-up and login utilizing JWT (JSON Web Tokens) and Passport.",
        "Profile Management: Distinct handling of different user roles (patients and therapists) with comprehensive profile management.",
        "Appointment Scheduling: Seamless booking, tracking, and management of therapy sessions.",
        "Therapy Questionnaires: Dynamic endpoints to manage therapy types and related evaluation questions.",
        "Secure Payments: Integrated with Stripe to process secure transaction flows for therapy bookings.",
        "Email Notifications: Automated transactional email delivery powered by Nodemailer.",
        "Database Architecture: Robust relational data structure utilizing PostgreSQL and TypeORM.",
        "Interactive API Docs: Fully documented API endpoints accessible via Swagger UI."
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
