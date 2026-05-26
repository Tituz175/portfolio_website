import { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  BookOpen,
  Menu,
  X,
  GraduationCap,
  Briefcase,
  FlaskConical,
  Cpu,
  Globe,
  ArrowUpRight,
  Brain,
  MessageSquare,
  Database,
  MapPin,
  Calendar,
  FileText,
  Star,
  ChevronRight,
} from "lucide-react";

// ─── Motion helpers ────────────────────────────────────────────────────────────

const ease = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.65, ease },
};

function stagger(i: number) {
  return {
    ...fadeUp,
    transition: { duration: 0.65, ease, delay: i * 0.09 },
  };
}

function heroAnim(delay: number) {
  return {
    initial: { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease },
  };
}

// ─── Data ──────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Writing", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const PROJECTS = [
  {
    title: "Musicnalyzer",
    description:
      "ML-powered music analysis platform that extracts deep insights from audio signals and lyrical content using transformer-based NLP models and acoustic feature pipelines.",
    tags: ["PyTorch", "Librosa", "HuggingFace", "React", "FastAPI"],
    category: "ML System",
    accent: "#4080ff",
    github: "#",
    demo: "#",
  },
  {
    title: "Agentic Code Review System",
    description:
      "Multi-agent LLM orchestration framework for automated code review and intelligent debugging, featuring reasoning chains and structured tool-use capabilities.",
    tags: ["LangChain", "GPT-4", "Python", "FastAPI", "Docker"],
    category: "Agentic AI",
    accent: "#7c5cfc",
    github: "#",
    demo: "#",
  },
  {
    title: "ExploreAI",
    description:
      "Conversational AI exploration system with semantic search, retrieval-augmented generation, and adaptive knowledge-base recommendations across multiple domains.",
    tags: ["RAG", "LlamaIndex", "Next.js", "OpenAI", "Pinecone"],
    category: "LLM Application",
    accent: "#06b6d4",
    github: "#",
    demo: "#",
  },
  {
    title: "AI Door Assistant",
    description:
      "Edge-deployed computer vision system for intelligent access management, combining real-time object detection with a natural voice interface on embedded hardware.",
    tags: ["OpenCV", "TensorFlow", "Raspberry Pi", "Python", "IoT"],
    category: "Computer Vision",
    accent: "#10b981",
    github: "#",
    demo: null,
  },
  {
    title: "LLM Benchmarking Study",
    description:
      "Comprehensive evaluation framework for large language models across reasoning, coding, and domain-specific tasks, with a reproducible statistical analysis pipeline.",
    tags: ["HuggingFace", "PyTorch", "W&B", "Python", "Research"],
    category: "Research",
    accent: "#f59e0b",
    github: "#",
    demo: null,
  },
];

const SKILLS = [
  {
    category: "AI / ML",
    icon: Brain,
    accent: "#4080ff",
    items: ["PyTorch", "TensorFlow", "HuggingFace", "Scikit-learn", "LangChain", "LlamaIndex", "OpenAI API", "W&B"],
  },
  {
    category: "NLP",
    icon: MessageSquare,
    accent: "#7c5cfc",
    items: ["Transformers", "BERT / GPT", "Text Classification", "NER", "Semantic Search", "RAG", "Prompt Engineering", "Fine-tuning"],
  },
  {
    category: "Systems",
    icon: Cpu,
    accent: "#06b6d4",
    items: ["Linux", "Docker", "Kubernetes", "AWS", "GCP", "Git", "CI/CD", "MLflow"],
  },
  {
    category: "Frontend",
    icon: Globe,
    accent: "#10b981",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Three.js"],
  },
  {
    category: "Backend",
    icon: Database,
    accent: "#f59e0b",
    items: ["Python", "FastAPI", "Node.js", "PostgreSQL", "Redis", "REST / GraphQL"],
  },
  {
    category: "Research",
    icon: FlaskConical,
    accent: "#ef4444",
    items: ["LaTeX", "Jupyter", "Statistical Analysis", "Experiment Design", "Literature Review", "Academic Writing"],
  },
];

const EXPERIENCE = [
  {
    title: "PhD in Computer Science",
    org: "University of Delaware",
    period: "Fall 2025 — Present",
    location: "Newark, DE",
    description:
      "Incoming PhD student. Research focus on AI systems, natural language processing, and machine learning. Advised by faculty in the NLP and AI research groups.",
    tags: ["AI Research", "NLP", "Machine Learning"],
    icon: GraduationCap,
    accent: "#4080ff",
  },
  {
    title: "AI Engineer",
    org: "Research & Industry Projects",
    period: "2023 — 2025",
    location: "Remote",
    description:
      "Designed and deployed production ML systems, agentic AI pipelines, and NLP applications across multiple research and engineering initiatives serving real users.",
    tags: ["LLMs", "Agentic AI", "ML Systems"],
    icon: Briefcase,
    accent: "#7c5cfc",
  },
  {
    title: "Machine Learning Researcher",
    org: "Independent Research",
    period: "2022 — 2025",
    location: "Remote",
    description:
      "Conducted research on LLM benchmarking and evaluation methodologies. Developed reproducible evaluation frameworks for systematic large-scale model comparison.",
    tags: ["LLM Evaluation", "NLP", "Benchmarking"],
    icon: FlaskConical,
    accent: "#06b6d4",
  },
  {
    title: "BSc in Computer Science",
    org: "New Mexico Highlands University",
    period: "2020 — 2024",
    location: "Las Vegas, NM",
    description:
      "Graduated with focus on algorithms, software engineering, and foundational AI/ML coursework. Completed senior capstone in machine learning application development.",
    tags: ["CS Fundamentals", "Algorithms", "Software Engineering"],
    icon: GraduationCap,
    accent: "#10b981",
  },
];

const RESEARCH_AREAS = [
  {
    title: "LLM Evaluation & Benchmarking",
    description:
      "Designing rigorous evaluation frameworks that go beyond standard benchmarks to capture real-world model capabilities and failure modes.",
    icon: Star,
    color: "#4080ff",
  },
  {
    title: "Agentic AI Systems",
    description:
      "Building and studying multi-agent architectures that can reason, plan, and execute complex multi-step tasks with minimal human supervision.",
    icon: Cpu,
    color: "#7c5cfc",
  },
  {
    title: "Natural Language Processing",
    description:
      "Semantic understanding, information retrieval, and language model adaptation for robust domain-specific applications and knowledge work.",
    icon: MessageSquare,
    color: "#06b6d4",
  },
  {
    title: "AI Systems & Infrastructure",
    description:
      "Scalable ML infrastructure, production model deployment pipelines, and the systems engineering required to make research-grade AI reliable.",
    icon: Database,
    color: "#10b981",
  },
];

const PUBLICATIONS = [
  {
    title: "Evaluating Large Language Model Reasoning: A Systematic Benchmark Study",
    venue: "In preparation · 2025",
    type: "Conference Paper",
  },
  {
    title: "Agentic AI Systems: Architecture Patterns for Multi-Step Task Completion",
    venue: "Workshop manuscript · 2025",
    type: "Workshop Paper",
  },
];

const POSTS = [
  {
    title: "Building Reliable Agentic AI Systems: Patterns and Pitfalls",
    excerpt:
      "Architectural patterns for multi-agent LLM systems that actually work in production, with lessons from real deployments and documented failure modes.",
    date: "May 2025",
    readTime: "8 min",
    tag: "Agentic AI",
    accent: "#7c5cfc",
  },
  {
    title: "LLM Benchmarking is Broken — Here's How to Fix It",
    excerpt:
      "Limitations of current evaluation methodologies and a proposal for more rigorous, task-specific benchmarking frameworks with reproducible pipelines.",
    date: "April 2025",
    readTime: "12 min",
    tag: "Research",
    accent: "#4080ff",
  },
  {
    title: "From Fine-tuning to RAG: Choosing the Right Adaptation Strategy",
    excerpt:
      "Practical comparison of language model adaptation techniques for domain-specific NLP tasks, with empirical results across multiple benchmarks.",
    date: "March 2025",
    readTime: "10 min",
    tag: "NLP",
    accent: "#06b6d4",
  },
];

// ─── Subcomponents ─────────────────────────────────────────────────────────────

function scrollTo(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
}

function Navbar({ active }: { active: string }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  function handleNav(e: React.MouseEvent, href: string) {
    e.preventDefault();
    scrollTo(href);
    setOpen(false);
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 backdrop-blur-2xl border-b"
          : "py-5"
      }`}
      style={{
        backgroundColor: scrolled ? "rgba(8,8,14,0.85)" : "transparent",
        borderBottomColor: scrolled ? "rgba(255,255,255,0.06)" : "transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#hero"
          onClick={(e) => handleNav(e, "#hero")}
          className="text-sm text-white/60 tracking-[0.25em] uppercase hover:text-white transition-colors"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          T<span style={{ color: "#4080ff" }}>.</span>O
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={(e) => handleNav(e, href)}
              className={`text-sm transition-colors hover:text-white ${
                active === href.slice(1) ? "text-white" : "text-white/40"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          onClick={(e) => handleNav(e, "#contact")}
          className="hidden md:flex items-center gap-2 text-sm px-4 py-2 rounded-full border text-white/60 hover:text-white transition-all"
          style={{ borderColor: "rgba(255,255,255,0.1)" }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(64,128,255,0.5)")}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
        >
          Get in touch <ChevronRight size={14} />
        </a>

        <button
          className="md:hidden text-white/50 hover:text-white transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div
          className="md:hidden absolute top-full inset-x-0 backdrop-blur-2xl border-b py-6 px-6"
          style={{ backgroundColor: "rgba(8,8,14,0.97)", borderBottomColor: "rgba(255,255,255,0.06)" }}
        >
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={(e) => handleNav(e, href)}
                className="text-white/50 hover:text-white transition-colors py-1"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function HeroBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {/* Orbs */}
      <div
        className="absolute rounded-full"
        style={{
          width: 900,
          height: 900,
          top: "-25%",
          left: "-20%",
          background: "radial-gradient(circle, rgba(64,128,255,0.18) 0%, transparent 65%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: 700,
          height: 700,
          top: "5%",
          right: "-15%",
          background: "radial-gradient(circle, rgba(124,92,252,0.14) 0%, transparent 65%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: 500,
          height: 500,
          bottom: "5%",
          left: "30%",
          background: "radial-gradient(circle, rgba(6,182,212,0.10) 0%, transparent 65%)",
          filter: "blur(40px)",
        }}
      />
      {/* Grid */}
      <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.028 }}>
        <defs>
          <pattern id="pg" width="64" height="64" patternUnits="userSpaceOnUse">
            <path d="M 64 0 L 0 0 0 64" fill="none" stroke="white" strokeWidth="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#pg)" />
      </svg>
      {/* Radial fade at edges */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, transparent 40%, #08080e 100%)",
        }}
      />
    </div>
  );
}

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16 overflow-hidden"
    >
      <HeroBg />

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        {/* Badge */}
        <motion.div
          {...heroAnim(0.1)}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border mb-10 text-xs"
          style={{
            borderColor: "rgba(64,128,255,0.3)",
            backgroundColor: "rgba(64,128,255,0.06)",
            color: "#7aa8ff",
            fontFamily: "var(--font-mono)",
            letterSpacing: "0.08em",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: "#4080ff", boxShadow: "0 0 8px #4080ff" }}
          />
          Incoming PhD Student · University of Delaware · Fall 2025
        </motion.div>

        {/* Name */}
        <motion.h1
          {...heroAnim(0.2)}
          className="font-black leading-[0.88] tracking-[-0.03em] mb-6"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(4rem, 14vw, 11rem)",
          }}
        >
          <span className="text-white">Tobi</span>
          <br />
          <span
            style={{
              backgroundImage: "linear-gradient(135deg, #ffffff 0%, #b0ccff 45%, #c4aeff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Oyekanmi
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          {...heroAnim(0.32)}
          className="text-white/40 mb-6 tracking-widest uppercase"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "clamp(0.65rem, 1.5vw, 0.8rem)",
            letterSpacing: "0.22em",
          }}
        >
          AI Engineer&nbsp;&nbsp;·&nbsp;&nbsp;Machine Learning Researcher&nbsp;&nbsp;·&nbsp;&nbsp;Software Developer
        </motion.p>

        {/* Bio */}
        <motion.p
          {...heroAnim(0.44)}
          className="text-white/55 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12"
        >
          Building intelligent systems at the frontier of AI — from neural architectures
          and agentic pipelines to production NLP infrastructure and rigorous model evaluation.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...heroAnim(0.56)}
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          <button
            onClick={() => scrollTo("#projects")}
            className="flex items-center gap-2 px-6 py-3 rounded-full font-medium text-white transition-all"
            style={{
              backgroundColor: "#4080ff",
              boxShadow: "0 0 0 rgba(64,128,255,0)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#5590ff";
              (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 28px rgba(64,128,255,0.4)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#4080ff";
              (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 0 rgba(64,128,255,0)";
            }}
          >
            View Projects <ArrowUpRight size={16} />
          </button>

          <a
            href="/cv.pdf"
            className="flex items-center gap-2 px-6 py-3 rounded-full border text-white/60 hover:text-white transition-all"
            style={{ borderColor: "rgba(255,255,255,0.12)" }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.28)")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")}
          >
            <Download size={16} /> Download CV
          </a>

          <button
            onClick={() => scrollTo("#contact")}
            className="flex items-center gap-2 px-6 py-3 rounded-full border text-white/60 hover:text-white transition-all"
            style={{ borderColor: "rgba(255,255,255,0.12)" }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.28)")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")}
          >
            <Mail size={16} /> Contact Me
          </button>
        </motion.div>

        {/* Social icons */}
        <motion.div {...heroAnim(0.66)} className="flex items-center justify-center gap-4">
          {[
            { icon: Github, href: "https://github.com", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
            { icon: BookOpen, href: "#", label: "Google Scholar" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-3 rounded-full border text-white/30 hover:text-white transition-all"
              style={{ borderColor: "rgba(255,255,255,0.09)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.22)";
                e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.04)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.09)";
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: "rgba(255,255,255,0.18)" }}
      >
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.2em" }}>SCROLL</span>
        <div
          className="w-px h-10"
          style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.2), transparent)" }}
        />
      </motion.div>
    </section>
  );
}

function SectionLabel({ index, label, color }: { index: string; label: string; color: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color, letterSpacing: "0.18em" }}>
        {index}
      </span>
      <div className="h-px flex-1 max-w-8" style={{ backgroundColor: color, opacity: 0.4 }} />
      <span
        className="text-white/30 uppercase tracking-widest"
        style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.2em" }}
      >
        {label}
      </span>
    </div>
  );
}

function About() {
  const interests = [
    "Large Language Models",
    "Agentic AI Systems",
    "NLP & Semantics",
    "ML Evaluation",
    "Neural Architectures",
    "AI Safety",
    "Information Retrieval",
    "Multimodal Learning",
  ];

  const stats = [
    { value: "5+", label: "Projects Shipped", color: "#4080ff" },
    { value: "3+", label: "Years Research", color: "#7c5cfc" },
    { value: "2+", label: "Papers in Progress", color: "#06b6d4" },
    { value: "6+", label: "ML Frameworks", color: "#10b981" },
  ];

  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeUp} className="mb-16">
          <SectionLabel index="01" label="About" color="#4080ff" />
          <h2
            className="text-5xl md:text-6xl font-black tracking-tight text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Who I Am
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_1fr] gap-16 lg:gap-28 items-start">
          <div className="space-y-5">
            <motion.p {...stagger(0)} className="text-white/70 text-lg leading-relaxed">
              {"I'm"} Tobi Oyekanmi — an AI engineer, machine learning researcher, and software
              developer with a deep focus on building intelligent systems that push the boundaries
              of modern AI.
            </motion.p>
            <motion.p {...stagger(1)} className="text-white/55 leading-relaxed">
              My work lives at the intersection of research and engineering: I design
              production-grade ML systems while investigating the fundamental questions that drive
              AI forward — how we evaluate models rigorously, how we make LLMs reliable agents,
              and how we build language understanding that generalizes beyond benchmarks.
            </motion.p>
            <motion.p {...stagger(2)} className="text-white/55 leading-relaxed">
              This Fall, {"I'll"} be joining the University of Delaware as an incoming PhD
              student in Computer Science, deepening my research in NLP and AI systems.
              I hold a BSc in Computer Science from New Mexico Highlands University.
            </motion.p>

            <motion.div {...stagger(3)} className="flex flex-wrap gap-5 pt-4">
              <div className="flex items-center gap-2 text-white/40 text-sm">
                <MapPin size={13} style={{ color: "#4080ff" }} />
                Newark, DE (incoming)
              </div>
              <div className="flex items-center gap-2 text-white/40 text-sm">
                <GraduationCap size={13} style={{ color: "#7c5cfc" }} />
                PhD — University of Delaware
              </div>
            </motion.div>

            <motion.div {...stagger(4)} className="flex gap-3 pt-2">
              {[
                { icon: Github, href: "https://github.com", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: BookOpen, href: "#", label: "Google Scholar" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2.5 rounded-xl border text-white/30 hover:text-white transition-all"
                  style={{ borderColor: "rgba(255,255,255,0.08)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
                >
                  <Icon size={16} />
                </a>
              ))}
            </motion.div>
          </div>

          <div className="space-y-8">
            <motion.div {...stagger(0)}>
              <p
                className="text-white/30 uppercase mb-4"
                style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.18em" }}
              >
                Research Interests
              </p>
              <div className="flex flex-wrap gap-2">
                {interests.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-sm rounded-full border text-white/50 hover:text-white/90 transition-all cursor-default"
                    style={{ borderColor: "rgba(255,255,255,0.07)", backgroundColor: "rgba(255,255,255,0.02)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)")}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)")}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div {...stagger(1)} className="grid grid-cols-2 gap-3">
              {stats.map(({ value, label, color }) => (
                <div
                  key={label}
                  className="p-5 rounded-2xl border transition-all"
                  style={{ borderColor: "rgba(255,255,255,0.06)", backgroundColor: "rgba(255,255,255,0.02)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.04)")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.02)")}
                >
                  <div
                    className="text-3xl font-black mb-1"
                    style={{ fontFamily: "var(--font-display)", color }}
                  >
                    {value}
                  </div>
                  <div className="text-white/35 text-sm">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeUp} className="mb-16">
          <SectionLabel index="02" label="Projects" color="#7c5cfc" />
          <h2
            className="text-5xl md:text-6xl font-black tracking-tight text-white mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Featured Work
          </h2>
          <p className="text-white/35 max-w-lg">
            AI systems, ML applications, and research tools — built for real impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROJECTS.map((p, i) => (
            <motion.article
              key={p.title}
              {...stagger(i)}
              className="group relative flex flex-col p-6 rounded-2xl border transition-all duration-300 overflow-hidden"
              style={{
                borderColor: "rgba(255,255,255,0.06)",
                backgroundColor: "rgba(255,255,255,0.018)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.11)";
                (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.035)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
                (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.018)";
              }}
            >
              {/* Top accent bar */}
              <div
                className="absolute top-0 inset-x-0 h-px"
                style={{
                  background: `linear-gradient(90deg, transparent 0%, ${p.accent}80 50%, transparent 100%)`,
                }}
              />
              {/* Glow blob */}
              <div
                className="absolute -top-8 -right-8 w-24 h-24 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle, ${p.accent}18 0%, transparent 70%)`,
                  filter: "blur(16px)",
                }}
              />

              <div className="flex items-center justify-between mb-5">
                <span
                  className="text-xs px-2.5 py-1 rounded-full border"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: p.accent,
                    borderColor: `${p.accent}30`,
                    backgroundColor: `${p.accent}08`,
                    letterSpacing: "0.06em",
                  }}
                >
                  {p.category}
                </span>
                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a
                    href={p.github}
                    className="p-1.5 rounded-lg text-white/30 hover:text-white transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={14} />
                  </a>
                  {p.demo && (
                    <a
                      href={p.demo}
                      className="p-1.5 rounded-lg text-white/30 hover:text-white transition-colors"
                      aria-label="Live demo"
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>

              <h3
                className="text-white font-bold text-xl mb-3 group-hover:text-white transition-colors"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {p.title}
              </h3>
              <p className="text-white/45 text-sm leading-relaxed mb-5 flex-1">{p.description}</p>

              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-md text-white/35"
                    style={{
                      fontFamily: "var(--font-mono)",
                      backgroundColor: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.05)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}

          {/* View all */}
          <motion.a
            {...stagger(PROJECTS.length)}
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center gap-3 p-6 rounded-2xl border transition-all duration-300 min-h-[180px]"
            style={{ borderColor: "rgba(255,255,255,0.06)", borderStyle: "dashed" }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)")}
          >
            <Github size={22} className="text-white/20 group-hover:text-white/50 transition-colors" />
            <span className="text-white/25 group-hover:text-white/55 transition-colors text-sm text-center">
              View all projects on GitHub
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}

function Research() {
  return (
    <section id="research" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeUp} className="mb-16">
          <SectionLabel index="03" label="Research" color="#06b6d4" />
          <h2
            className="text-5xl md:text-6xl font-black tracking-tight text-white mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Research Focus
          </h2>
          <p className="text-white/35 max-w-xl">
            Investigating AI systems reliability, language understanding, and the science of rigorous model evaluation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 mb-16">
          {RESEARCH_AREAS.map((area, i) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.title}
                {...stagger(i)}
                className="p-6 rounded-2xl border transition-all group"
                style={{
                  borderColor: "rgba(255,255,255,0.06)",
                  backgroundColor: "rgba(255,255,255,0.018)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.035)")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.018)")}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="p-3 rounded-xl flex-shrink-0"
                    style={{
                      border: `1px solid ${area.color}25`,
                      backgroundColor: `${area.color}08`,
                    }}
                  >
                    <Icon size={18} style={{ color: area.color }} />
                  </div>
                  <div>
                    <h3
                      className="text-white font-semibold mb-2"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {area.title}
                    </h3>
                    <p className="text-white/45 text-sm leading-relaxed">{area.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Publications */}
        <motion.div {...fadeUp}>
          <p
            className="text-white/25 uppercase mb-6"
            style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.2em" }}
          >
            Publications & Manuscripts
          </p>
          <div className="space-y-3">
            {PUBLICATIONS.map((pub, i) => (
              <motion.div
                key={pub.title}
                {...stagger(i)}
                className="flex items-start gap-5 p-5 rounded-2xl border transition-all group"
                style={{
                  borderColor: "rgba(255,255,255,0.06)",
                  backgroundColor: "rgba(255,255,255,0.018)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.035)")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.018)")}
              >
                <FileText size={15} className="flex-shrink-0 mt-0.5" style={{ color: "#4080ff" }} />
                <div className="flex-1 min-w-0">
                  <p className="text-white/75 font-medium mb-1.5 group-hover:text-white transition-colors text-sm">
                    {pub.title}
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className="text-white/25 text-xs"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {pub.venue}
                    </span>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full border text-white/25"
                      style={{ borderColor: "rgba(255,255,255,0.07)", fontFamily: "var(--font-mono)" }}
                    >
                      {pub.type}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeUp} className="mb-16">
          <SectionLabel index="04" label="Skills" color="#10b981" />
          <h2
            className="text-5xl md:text-6xl font-black tracking-tight text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Technical Stack
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SKILLS.map((group, i) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.category}
                {...stagger(i)}
                className="relative p-6 rounded-2xl border transition-all overflow-hidden group"
                style={{
                  borderColor: "rgba(255,255,255,0.06)",
                  backgroundColor: "rgba(255,255,255,0.018)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.035)")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.018)")}
              >
                <div
                  className="absolute -top-6 -right-6 w-20 h-20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle, ${group.accent}20 0%, transparent 70%)`,
                    filter: "blur(12px)",
                  }}
                />
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="p-2.5 rounded-xl"
                    style={{ border: `1px solid ${group.accent}25`, backgroundColor: `${group.accent}08` }}
                  >
                    <Icon size={15} style={{ color: group.accent }} />
                  </div>
                  <h3
                    className="text-white font-semibold"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {group.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-2.5 py-1 rounded-lg text-white/40 hover:text-white/80 transition-all cursor-default"
                      style={{
                        fontFamily: "var(--font-mono)",
                        backgroundColor: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.05)",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")}
                      onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)")}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div {...fadeUp} className="mb-16">
          <SectionLabel index="05" label="Experience" color="#f59e0b" />
          <h2
            className="text-5xl md:text-6xl font-black tracking-tight text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Journey
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline rail */}
          <div
            className="absolute top-0 bottom-0"
            style={{
              left: 27,
              width: 1,
              background: "linear-gradient(to bottom, rgba(64,128,255,0.5), rgba(255,255,255,0.06) 60%, transparent)",
            }}
          />

          <div className="space-y-6">
            {EXPERIENCE.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} {...stagger(i)} className="relative pl-16">
                  {/* Icon node */}
                  <div
                    className="absolute left-0 top-0 w-14 h-14 flex items-center justify-center rounded-2xl"
                    style={{
                      border: `1px solid ${item.accent}25`,
                      backgroundColor: `${item.accent}08`,
                    }}
                  >
                    <Icon size={16} style={{ color: item.accent }} />
                  </div>

                  <div
                    className="p-5 rounded-2xl border transition-all"
                    style={{
                      borderColor: "rgba(255,255,255,0.06)",
                      backgroundColor: "rgba(255,255,255,0.018)",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.035)")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.018)")}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <h3
                          className="text-white font-bold text-lg"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {item.title}
                        </h3>
                        <p className="font-medium text-sm mt-0.5" style={{ color: item.accent }}>
                          {item.org}
                        </p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <div
                          className="text-white/30 text-xs"
                          style={{ fontFamily: "var(--font-mono)" }}
                        >
                          {item.period}
                        </div>
                        <div
                          className="flex items-center gap-1 text-white/20 text-xs mt-1 justify-end"
                          style={{ fontFamily: "var(--font-mono)" }}
                        >
                          <MapPin size={10} /> {item.location}
                        </div>
                      </div>
                    </div>

                    <p className="text-white/45 text-sm leading-relaxed mb-3">{item.description}</p>

                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-0.5 rounded-full border text-white/25"
                          style={{
                            borderColor: "rgba(255,255,255,0.07)",
                            fontFamily: "var(--font-mono)",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Blog() {
  return (
    <section id="blog" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeUp} className="mb-16">
          <SectionLabel index="06" label="Writing" color="#ef4444" />
          <h2
            className="text-5xl md:text-6xl font-black tracking-tight text-white mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Thoughts & Research Notes
          </h2>
          <p className="text-white/35">On AI engineering, evaluation methodology, and the future of intelligent systems.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {POSTS.map((post, i) => (
            <motion.a
              key={post.title}
              {...stagger(i)}
              href="#"
              className="group flex flex-col p-6 rounded-2xl border transition-all duration-300"
              style={{
                borderColor: "rgba(255,255,255,0.06)",
                backgroundColor: "rgba(255,255,255,0.018)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.11)";
                (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.035)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
                (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.018)";
              }}
            >
              <div className="flex items-center justify-between mb-5">
                <span
                  className="text-xs px-2.5 py-1 rounded-full border"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: post.accent,
                    borderColor: `${post.accent}30`,
                    backgroundColor: `${post.accent}08`,
                    letterSpacing: "0.06em",
                  }}
                >
                  {post.tag}
                </span>
                <ExternalLink
                  size={14}
                  className="text-white/20 group-hover:text-white/50 transition-colors"
                />
              </div>

              <h3
                className="text-white/85 font-bold mb-3 leading-snug group-hover:text-white transition-colors flex-1"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {post.title}
              </h3>
              <p className="text-white/35 text-sm leading-relaxed mb-5">{post.excerpt}</p>

              <div
                className="flex items-center gap-2 text-white/20 text-xs mt-auto"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                <Calendar size={10} />
                <span>{post.date}</span>
                <span
                  className="w-1 h-1 rounded-full"
                  style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
                />
                <span>{post.readTime} read</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Decorative top line */}
        <div
          className="h-px w-full max-w-xs mx-auto mb-20"
          style={{ background: "linear-gradient(90deg, transparent, rgba(64,128,255,0.4), transparent)" }}
        />

        <motion.div {...fadeUp} className="text-center mb-12">
          <SectionLabel index="07" label="Contact" color="#4080ff" />
          <h2
            className="text-5xl md:text-7xl font-black tracking-tight text-white mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {"Let's"} Connect
          </h2>
          <p className="text-white/45 text-lg leading-relaxed max-w-xl mx-auto">
            Whether you are a researcher, recruiter, or collaborator — I am always open to
            meaningful conversations about AI, research, and what comes next.
          </p>
        </motion.div>

        <motion.div
          {...stagger(1)}
          className="flex flex-wrap items-center justify-center gap-3 mb-16"
        >
          <a
            href="mailto:tobi@example.com"
            className="flex items-center gap-2.5 px-7 py-3.5 rounded-full text-white font-medium transition-all"
            style={{ backgroundColor: "#4080ff" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#5592ff";
              e.currentTarget.style.boxShadow = "0 0 32px rgba(64,128,255,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#4080ff";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <Mail size={16} />
            Send Email
          </a>
          <a
            href="/cv.pdf"
            className="flex items-center gap-2.5 px-7 py-3.5 rounded-full border text-white/60 hover:text-white transition-all"
            style={{ borderColor: "rgba(255,255,255,0.12)" }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.28)")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")}
          >
            <Download size={16} />
            Download CV
          </a>
        </motion.div>

        <motion.div {...stagger(2)} className="flex items-center justify-center gap-10">
          {[
            { icon: Github, label: "GitHub", href: "https://github.com" },
            { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
            { icon: BookOpen, label: "Scholar", href: "#" },
            { icon: Mail, label: "Email", href: "mailto:tobi@example.com" },
          ].map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex flex-col items-center gap-2.5 group"
            >
              <div
                className="p-4 rounded-2xl border text-white/30 group-hover:text-white transition-all duration-200"
                style={{ borderColor: "rgba(255,255,255,0.07)", backgroundColor: "rgba(255,255,255,0.02)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)";
                  e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                  e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.02)";
                }}
              >
                <Icon size={20} />
              </div>
              <span
                className="text-white/25 group-hover:text-white/60 transition-colors"
                style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.12em" }}
              >
                {label}
              </span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      className="py-8 px-6 border-t"
      style={{ borderColor: "rgba(255,255,255,0.05)" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        <p
          className="text-white/18 text-xs"
          style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.08em" }}
        >
          © 2025 Tobi Oyekanmi
        </p>
        <p
          className="text-white/15 text-xs"
          style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.08em" }}
        >
          AI Engineer · ML Researcher · PhD Candidate — University of Delaware
        </p>
      </div>
    </footer>
  );
}

// ─── App ───────────────────────────────────────────────────────────────────────

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const ids = ["hero", "about", "projects", "research", "skills", "experience", "blog", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-background text-foreground min-h-screen antialiased overflow-x-hidden">
      <Navbar active={activeSection} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Research />
        <Skills />
        <Experience />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
