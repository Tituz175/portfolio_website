import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const PROJECTS = [
  {
    order: 0,
    title: "Agentic Code Review System",
    description:
      "Multi-agent LLM orchestration framework for automated code review and intelligent debugging, featuring reasoning chains and structured tool-use capabilities.",
    tags: ["LangChain", "GPT-4", "Python", "FastAPI", "Docker"],
    category: "Agentic AI",
    accent: "#7c5cfc",
    github: "https://github.com/Tituz175/agentic-debugger",
    demo: null,
  },
  {
    order: 1,
    title: "Musicnalyzer",
    description:
      "ML-powered music analysis platform that extracts deep insights from audio signals and lyrical content using transformer-based NLP models and acoustic feature pipelines.",
    tags: ["PyTorch", "Librosa", "HuggingFace", "React", "FastAPI"],
    category: "ML System",
    accent: "#06b6d4",
    github: "https://github.com/Tituz175/Musicnalyzer",
    demo: null,
  },
  {
    order: 2,
    title: "LLM Benchmarking Study",
    description:
      "Comprehensive evaluation framework for large language models across reasoning, coding, and domain-specific tasks, with a reproducible statistical analysis pipeline.",
    tags: ["HuggingFace", "PyTorch", "W&B", "Python", "Research"],
    category: "Research",
    accent: "#4080ff",
    github: "https://github.com/Tituz175/llm-inference-benchmark",
    demo: null,
  },
  {
    order: 3,
    title: "ExploreAI",
    description:
      "Conversational AI exploration system with semantic search, retrieval-augmented generation, and adaptive knowledge-base recommendations across multiple domains.",
    tags: ["RAG", "LlamaIndex", "Next.js", "OpenAI", "Pinecone"],
    category: "LLM Application",
    accent: "#f59e0b",
    github: null,
    demo: null,
  },
  {
    order: 4,
    title: "AI Door Assistant",
    description:
      "Edge-deployed computer vision system for intelligent access management, combining real-time object detection with a natural voice interface on embedded hardware.",
    tags: ["OpenCV", "TensorFlow", "Raspberry Pi", "Python", "IoT"],
    category: "Computer Vision",
    accent: "#10b981",
    github: "https://github.com/Tituz175/Door-assistant",
    demo: null,
  },
];

const RESEARCH_AREAS = [
  {
    order: 0,
    title: "LLM Evaluation & Benchmarking",
    description:
      "Designing rigorous evaluation frameworks that go beyond standard benchmarks to capture real-world model capabilities and failure modes.",
    icon: "Star",
    color: "#4080ff",
  },
  {
    order: 1,
    title: "Agentic AI Systems",
    description:
      "Building and studying multi-agent architectures that can reason, plan, and execute complex multi-step tasks with minimal human supervision.",
    icon: "Cpu",
    color: "#7c5cfc",
  },
  {
    order: 2,
    title: "Natural Language Processing",
    description:
      "Semantic understanding, information retrieval, and language model adaptation for robust domain-specific applications and knowledge work.",
    icon: "MessageSquare",
    color: "#06b6d4",
  },
  {
    order: 3,
    title: "AI Systems & Infrastructure",
    description:
      "Scalable ML infrastructure, production model deployment pipelines, and the systems engineering required to make research-grade AI reliable.",
    icon: "Database",
    color: "#10b981",
  },
  {
    order: 4,
    title: "High-Performance ML Systems",
    description:
      "GPU-aware optimization, numerical linear algebra, and system-level performance work for efficient large-scale model training and inference.",
    icon: "Server",
    color: "#f59e0b",
  },
  {
    order: 5,
    title: "Applied Deep Learning",
    description:
      "CNN-based diagnostic models for medical imaging and sensor-driven classification, taken from research to deployable, evaluated systems.",
    icon: "Activity",
    color: "#ef4444",
  },
];

const PUBLICATIONS = [
  {
    order: 0,
    title: "Simulation Prediction of Background Radiation Using Machine Learning",
    venue: "with P. Adigun, A. Adeniyi",
    type: "Journal Article",
  },
  {
    order: 1,
    title:
      "Detection and Interpretation of X-Ray Scans for the Presence of Pneumonia Using Convolutional Neural Network",
    venue: "with P. Adigun, A. Adeniyi",
    type: "Journal Article",
  },
  {
    order: 2,
    title:
      "Deep Learning-based Diagnosis of Brain Cancer Using Convolutional Neural Networks on MRI Scans: A Comparative Study of Model Architectures and Tumor Classification Accuracy",
    venue: "with P. Adigun, A. Adeniyi, N. Azeez",
    type: "Journal Article",
  },
  {
    order: 3,
    title:
      "Design and Evaluation of a Convolutional Neural Network Model for Automated Detection of Diabetic Retinopathy using Retinal Fundus Photographs",
    venue: "with P. Adigun, A. Adeniyi",
    type: "Journal Article",
  },
  {
    order: 4,
    title:
      "Application of Artificial Intelligence Models in Teletherapy: A Review of Efficacy and Ethical Implications",
    venue: "with A. Adeniyi, P. Adigun, V. Kolawole",
    type: "Review Article",
  },
];

const SKILLS = [
  {
    order: 0,
    category: "AI / ML",
    icon: "Brain",
    accent: "#4080ff",
    items: [
      "PyTorch",
      "TensorFlow",
      "HuggingFace",
      "Scikit-learn",
      "LangChain",
      "LlamaIndex",
      "OpenAI API",
      "W&B",
    ],
  },
  {
    order: 1,
    category: "NLP",
    icon: "MessageSquare",
    accent: "#7c5cfc",
    items: [
      "Transformers",
      "BERT / GPT",
      "Text Classification",
      "NER",
      "Semantic Search",
      "RAG",
      "Prompt Engineering",
      "Fine-tuning",
    ],
  },
  {
    order: 2,
    category: "Systems",
    icon: "Cpu",
    accent: "#06b6d4",
    items: [
      "Linux",
      "Docker",
      "Kubernetes",
      "AWS",
      "GCP",
      "Git",
      "CI/CD",
      "MLflow",
      "CUDA",
      "Parallel Computing",
      "GPU Computing",
      "Performance Optimization",
    ],
  },
  {
    order: 3,
    category: "Frontend",
    icon: "Globe",
    accent: "#10b981",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Three.js"],
  },
  {
    order: 4,
    category: "Backend",
    icon: "Database",
    accent: "#f59e0b",
    items: [
      "Python",
      "FastAPI",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "REST / GraphQL",
      "Flask",
      "Django",
      "Django REST",
      "BeautifulSoup",
      "MySQL",
      "MongoDB",
      "Pinecone",
    ],
  },
  {
    order: 5,
    category: "Programming Languages",
    icon: "Code2",
    accent: "#4080ff",
    items: ["Python", "C / C++", "Java", "TypeScript", "SQL", "CUDA"],
  },
  {
    order: 6,
    category: "Research",
    icon: "FlaskConical",
    accent: "#ef4444",
    items: [
      "LaTeX",
      "Jupyter",
      "Statistical Analysis",
      "Experiment Design",
      "Literature Review",
      "Academic Writing",
    ],
  },
];

const EXPERIENCE = [
  {
    order: 0,
    title: "Graduate Research & Teaching Assistant",
    org: "NMHU, Department of Computer Science",
    period: "Jan 2023 — Present",
    location: "Las Vegas, NM",
    description:
      "Taught and supported courses spanning Java programming, Unix systems, artificial intelligence, and software engineering, while running Git, Linux, and CI/CD training sessions for students. Also designed semantic retrieval pipelines with LangChain and vector databases, and built OpenCV-based computer vision workflows for real-time monitoring applications.",
    tags: ["Teaching", "RAG", "Computer Vision", "CI/CD"],
    icon: "Briefcase",
    accent: "#f59e0b",
  },
  {
    order: 1,
    title: "NSF BioPACIFIC MIP PREM Research Program",
    org: "NMHU, Computer Science",
    period: "Summer 2025",
    location: "Las Vegas, NM",
    description:
      "Applied HPC techniques and deep learning to design scalable, performance-efficient training and inference pipelines for modeling nanoscale material properties, including GPU-aware and hardware-conscious optimization.",
    tags: ["HPC", "Deep Learning", "GPU Optimization"],
    icon: "FlaskConical",
    accent: "#06b6d4",
  },
  {
    order: 2,
    title: "Research Assistant — ML for Environmental Radiation Analysis",
    org: "NMHU, Computer Science",
    period: "Spring 2024 — 2025",
    location: "Las Vegas, NM",
    description:
      "Built supervised learning pipelines to classify background radiation from field-collected sensor data, reaching 96.9% cross-validation accuracy. Co-authored a peer-reviewed publication in ASRJETS based on this work.",
    tags: ["Machine Learning", "Time-Series", "Publication"],
    icon: "FlaskConical",
    accent: "#7c5cfc",
  },
  {
    order: 3,
    title: "Software Engineering Assistant",
    org: "NMHU Police Department",
    period: "May 2024 — Aug 2024",
    location: "Las Vegas, NM",
    description:
      "Built an automated certificate-management system in Python, SQL, and Microsoft Access to track expiring compliance records, with monitoring and alerting workflows that cut manual auditing overhead.",
    tags: ["Python", "SQL", "Automation"],
    icon: "Briefcase",
    accent: "#06b6d4",
  },
  {
    order: 4,
    title: "Software Engineer Intern",
    org: "alx_africa",
    period: "Jan 2023 — Apr 2024",
    location: "Remote",
    description:
      "Designed and shipped scalable RESTful APIs with Flask, Node.js, Express, and SQLAlchemy for multi-user applications, with MySQL and MongoDB data layers and JWT-based auth — improving backend processing efficiency by roughly 30% through API and query optimization.",
    tags: ["REST APIs", "MySQL/MongoDB", "Auth"],
    icon: "Briefcase",
    accent: "#4080ff",
  },
  {
    order: 5,
    title: "Assistant Software Engineering Instructor",
    org: "SQI College of ICT",
    period: "Nov 2021 — Nov 2022",
    location: "Ibadan, Nigeria",
    description:
      "Taught foundational web development (HTML, CSS, JavaScript) and introductory programming, coordinating coding sessions and mentoring students through hands-on project work.",
    tags: ["Teaching", "Web Fundamentals"],
    icon: "Briefcase",
    accent: "#f59e0b",
  },
];

const EDUCATION = [
  {
    order: 0,
    degree: "MS in Computer Science",
    org: "New Mexico Highlands University",
    period: "Expected Fall 2026",
  },
  {
    order: 1,
    degree: "MS in Software Systems Design",
    org: "New Mexico Highlands University",
    period: "Awarded Spring 2025",
  },
  {
    order: 2,
    degree: "BEng in Electrical and Electronic Engineering",
    org: "Federal University of Technology, Akure",
    period: "Awarded Fall 2021",
  },
];

const ABOUT = {
  id: 1,
  bioP1:
    "I'm Tobi Oyekanmi — an AI engineer and machine learning researcher with a deep focus on building intelligent systems that push the boundaries of modern AI, from production ML pipelines to the systems research that makes large-scale AI possible.",
  bioP2:
    "My research centers on efficient large-scale model training and inference — GPU-aware optimization, numerical linear algebra, and system-level performance work for distributed AI workloads — alongside applied engineering work in retrieval-augmented generation, medical imaging, and environmental sensor analysis using machine learning.",
  bioP3:
    "I'm currently completing an MS in Computer Science at New Mexico Highlands University (expected Fall 2026), after earning an MS in Software Systems Design there in 2025 and a BEng in Electrical and Electronic Engineering from the Federal University of Technology, Akure, Nigeria. I'm open to both PhD programs continuing this research and engineering roles building production ML systems.",
  location: "Las Vegas, NM",
  degreeChip: "MS Computer Science — NMHU",
  interests: [
    "Large Language Models",
    "Agentic AI Systems",
    "NLP & Semantics",
    "ML Evaluation",
    "Neural Architectures",
    "AI Safety",
    "Information Retrieval",
    "Multimodal Learning",
    "Machine Learning Systems",
    "High-Performance Computing",
    "Efficient LLM Training & Inference",
    "Retrieval-Augmented Generation",
    "GPU-Aware Optimization",
    "Memory & Compute Optimization",
  ],
  stats: [
    { value: "5+", label: "Projects Shipped", color: "#4080ff" },
    { value: "5+", label: "Years Research", color: "#7c5cfc" },
    { value: "5", label: "Publications", color: "#06b6d4" },
    { value: "5+", label: "ML Frameworks", color: "#10b981" },
  ],
};

async function main() {
  await prisma.$transaction([
    prisma.project.deleteMany(),
    prisma.researchArea.deleteMany(),
    prisma.publication.deleteMany(),
    prisma.skillCategory.deleteMany(),
    prisma.experienceEntry.deleteMany(),
    prisma.educationEntry.deleteMany(),
    prisma.aboutContent.deleteMany(),
  ]);

  await prisma.project.createMany({ data: PROJECTS });
  await prisma.researchArea.createMany({ data: RESEARCH_AREAS });
  await prisma.publication.createMany({ data: PUBLICATIONS });
  await prisma.skillCategory.createMany({ data: SKILLS });
  await prisma.experienceEntry.createMany({ data: EXPERIENCE });
  await prisma.educationEntry.createMany({ data: EDUCATION });
  await prisma.aboutContent.create({ data: ABOUT });

  console.log("Seed complete:", {
    projects: PROJECTS.length,
    researchAreas: RESEARCH_AREAS.length,
    publications: PUBLICATIONS.length,
    skillCategories: SKILLS.length,
    experience: EXPERIENCE.length,
    education: EDUCATION.length,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
