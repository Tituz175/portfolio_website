import { useState, useEffect, createContext, useContext } from "react";
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
  Sun,
  Moon,
} from "lucide-react";

// ─── Theme system ──────────────────────────────────────────────────────────────

interface Tok {
  bg: string;
  text: string;
  textSub: string;
  textMuted: string;
  textFaint: string;
  textVeryFaint: string;
  textDim: string;
  card: string;
  cardHover: string;
  border: string;
  borderHover: string;
  borderStrong: string;
  tagBg: string;
  tagBorder: string;
  tagBorderHover: string;
  navBg: string;
  navBorder: string;
  mobileBg: string;
  gridOpacity: number;
  orb1: string;
  orb2: string;
  orb3: string;
  heroGradient: string;
  timelineRail: string;
}

const DARK: Tok = {
  bg: "#08080e",
  text: "#e8e8f2",
  textSub: "rgba(232,232,242,0.72)",
  textMuted: "rgba(232,232,242,0.50)",
  textFaint: "rgba(232,232,242,0.36)",
  textVeryFaint: "rgba(232,232,242,0.22)",
  textDim: "rgba(232,232,242,0.15)",
  card: "rgba(255,255,255,0.018)",
  cardHover: "rgba(255,255,255,0.036)",
  border: "rgba(255,255,255,0.06)",
  borderHover: "rgba(255,255,255,0.12)",
  borderStrong: "rgba(255,255,255,0.22)",
  tagBg: "rgba(255,255,255,0.04)",
  tagBorder: "rgba(255,255,255,0.05)",
  tagBorderHover: "rgba(255,255,255,0.13)",
  navBg: "rgba(8,8,14,0.86)",
  navBorder: "rgba(255,255,255,0.06)",
  mobileBg: "rgba(8,8,14,0.97)",
  gridOpacity: 0.028,
  orb1: "rgba(64,128,255,0.18)",
  orb2: "rgba(124,92,252,0.14)",
  orb3: "rgba(6,182,212,0.10)",
  heroGradient: "linear-gradient(135deg,#ffffff 0%,#b0ccff 45%,#c4aeff 100%)",
  timelineRail: "linear-gradient(to bottom,rgba(64,128,255,0.5),rgba(255,255,255,0.06) 60%,transparent)",
};

const LIGHT: Tok = {
  bg: "#f4f4f9",
  text: "#0d0d1a",
  textSub: "rgba(13,13,26,0.72)",
  textMuted: "rgba(13,13,26,0.54)",
  textFaint: "rgba(13,13,26,0.38)",
  textVeryFaint: "rgba(13,13,26,0.26)",
  textDim: "rgba(13,13,26,0.18)",
  card: "rgba(255,255,255,0.72)",
  cardHover: "rgba(255,255,255,0.92)",
  border: "rgba(0,0,0,0.08)",
  borderHover: "rgba(0,0,0,0.17)",
  borderStrong: "rgba(0,0,0,0.26)",
  tagBg: "rgba(0,0,0,0.04)",
  tagBorder: "rgba(0,0,0,0.07)",
  tagBorderHover: "rgba(0,0,0,0.18)",
  navBg: "rgba(244,244,249,0.88)",
  navBorder: "rgba(0,0,0,0.07)",
  mobileBg: "rgba(244,244,249,0.98)",
  gridOpacity: 0.055,
  orb1: "rgba(64,128,255,0.13)",
  orb2: "rgba(124,92,252,0.10)",
  orb3: "rgba(6,182,212,0.08)",
  heroGradient: "linear-gradient(135deg,#0d0d1a 0%,#1a3e9a 52%,#5533c0 100%)",
  timelineRail: "linear-gradient(to bottom,rgba(64,128,255,0.45),rgba(0,0,0,0.06) 60%,transparent)",
};

const ThemeCtx = createContext<{ t: Tok; isDark: boolean; toggle: () => void }>({
  t: DARK,
  isDark: true,
  toggle: () => {},
});

function useTheme() {
  return useContext(ThemeCtx);
}

// ─── Motion helpers ────────────────────────────────────────────────────────────

const ease = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.65, ease },
};

function stagger(i: number) {
  return { ...fadeUp, transition: { duration: 0.65, ease, delay: i * 0.09 } };
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

// ─── Shared helpers ────────────────────────────────────────────────────────────

function scrollTo(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
}

function ThemeToggle() {
  const { t, isDark, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-200"
      style={{
        borderColor: t.border,
        backgroundColor: t.tagBg,
        color: t.textMuted,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = t.borderHover;
        e.currentTarget.style.color = t.text;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = t.border;
        e.currentTarget.style.color = t.textMuted;
      }}
    >
      {isDark ? <Sun size={14} /> : <Moon size={14} />}
    </button>
  );
}

function SectionLabel({ index, label, color }: { index: string; label: string; color: string }) {
  const { t } = useTheme();
  return (
    <div className="flex items-center gap-3 mb-4">
      <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color, letterSpacing: "0.18em" }}>
        {index}
      </span>
      <div className="h-px w-8" style={{ backgroundColor: color, opacity: 0.4 }} />
      <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.2em", color: t.textVeryFaint }}>
        {label.toUpperCase()}
      </span>
    </div>
  );
}

// ─── Navbar ────────────────────────────────────────────────────────────────────

function Navbar({ active }: { active: string }) {
  const { t } = useTheme();
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
      className="fixed top-0 inset-x-0 z-50 transition-all duration-500"
      style={{
        padding: scrolled ? "12px 0" : "20px 0",
        backgroundColor: scrolled ? t.navBg : "transparent",
        borderBottom: scrolled ? `1px solid ${t.navBorder}` : "1px solid transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNav(e, "#hero")}
          className="text-sm tracking-[0.25em] uppercase transition-colors duration-200"
          style={{ fontFamily: "var(--font-mono)", color: t.textMuted }}
          onMouseEnter={(e) => (e.currentTarget.style.color = t.text)}
          onMouseLeave={(e) => (e.currentTarget.style.color = t.textMuted)}
        >
          T<span style={{ color: "#4080ff" }}>.</span>O
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={(e) => handleNav(e, href)}
              className="text-sm transition-colors duration-200"
              style={{ color: active === href.slice(1) ? t.text : t.textFaint }}
              onMouseEnter={(e) => (e.currentTarget.style.color = t.text)}
              onMouseLeave={(e) => (e.currentTarget.style.color = active === href.slice(1) ? t.text : t.textFaint)}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#contact"
            onClick={(e) => handleNav(e, "#contact")}
            className="flex items-center gap-2 text-sm px-4 py-2 rounded-full border transition-all duration-200"
            style={{ borderColor: t.border, color: t.textMuted }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(64,128,255,0.5)";
              e.currentTarget.style.color = t.text;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = t.border;
              e.currentTarget.style.color = t.textMuted;
            }}
          >
            Get in touch <ChevronRight size={14} />
          </a>
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            className="transition-colors duration-200"
            style={{ color: t.textFaint }}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            onMouseEnter={(e) => (e.currentTarget.style.color = t.text)}
            onMouseLeave={(e) => (e.currentTarget.style.color = t.textFaint)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          className="md:hidden absolute top-full inset-x-0 py-6 px-6 border-b"
          style={{
            backgroundColor: t.mobileBg,
            backdropFilter: "blur(24px)",
            borderBottomColor: t.navBorder,
          }}
        >
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={(e) => handleNav(e, href)}
                className="py-1 transition-colors duration-200"
                style={{ color: t.textMuted }}
                onMouseEnter={(e) => (e.currentTarget.style.color = t.text)}
                onMouseLeave={(e) => (e.currentTarget.style.color = t.textMuted)}
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

// ─── Hero ──────────────────────────────────────────────────────────────────────

function HeroBg() {
  const { t } = useTheme();
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      <div
        className="absolute rounded-full"
        style={{
          width: 900, height: 900, top: "-25%", left: "-20%",
          background: `radial-gradient(circle, ${t.orb1} 0%, transparent 65%)`,
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: 700, height: 700, top: "5%", right: "-15%",
          background: `radial-gradient(circle, ${t.orb2} 0%, transparent 65%)`,
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: 500, height: 500, bottom: "5%", left: "30%",
          background: `radial-gradient(circle, ${t.orb3} 0%, transparent 65%)`,
          filter: "blur(40px)",
        }}
      />
      <svg className="absolute inset-0 w-full h-full" style={{ opacity: t.gridOpacity }}>
        <defs>
          <pattern id="pg" width="64" height="64" patternUnits="userSpaceOnUse">
            <path d="M 64 0 L 0 0 0 64" fill="none" stroke="currentColor" strokeWidth="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#pg)" />
      </svg>
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 50% 0%, transparent 40%, ${t.bg} 100%)`,
        }}
      />
    </div>
  );
}

function Hero() {
  const { t } = useTheme();
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16 overflow-hidden"
    >
      <HeroBg />
      <div className="relative z-10 max-w-5xl mx-auto w-full">
        {/* Badge */}
        {/* <motion.div
          {...heroAnim(0.1)}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border mb-10 text-xs"
          style={{
            borderColor: "rgba(64,128,255,0.3)",
            backgroundColor: "rgba(64,128,255,0.07)",
            color: "#6ea8ff",
            fontFamily: "var(--font-mono)",
            letterSpacing: "0.08em",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: "#4080ff", boxShadow: "0 0 8px #4080ff" }}
          />
          Incoming PhD Student · University of Delaware · Fall 2025
        </motion.div> */}

        {/* Name */}
        <motion.h1
          {...heroAnim(0.2)}
          className="font-black leading-[0.88] tracking-[-0.03em] mb-6"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(4rem, 14vw, 11rem)",
          }}
        >
          <span style={{ color: t.text }}>Tobi</span>
          <br />
          <span
            style={{
              backgroundImage: t.heroGradient,
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
          className="mb-6 tracking-widest uppercase"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "clamp(0.65rem, 1.5vw, 0.8rem)",
            letterSpacing: "0.22em",
            color: t.textFaint,
          }}
        >
          AI Engineer&nbsp;&nbsp;·&nbsp;&nbsp;Machine Learning Researcher&nbsp;&nbsp;·&nbsp;&nbsp;Software Developer
        </motion.p>

        {/* Bio */}
        <motion.p
          {...heroAnim(0.44)}
          className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12"
          style={{ color: t.textMuted }}
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
            className="flex items-center gap-2 px-6 py-3 rounded-full font-medium text-white transition-all duration-200"
            style={{ backgroundColor: "#4080ff" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#5592ff";
              e.currentTarget.style.boxShadow = "0 0 28px rgba(64,128,255,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#4080ff";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            View Projects <ArrowUpRight size={16} />
          </button>
          <a
            href="/cv.pdf"
            className="flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-200"
            style={{ borderColor: t.border, color: t.textMuted }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = t.borderHover;
              e.currentTarget.style.color = t.text;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = t.border;
              e.currentTarget.style.color = t.textMuted;
            }}
          >
            <Download size={16} /> Download CV
          </a>
          <button
            onClick={() => scrollTo("#contact")}
            className="flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-200"
            style={{ borderColor: t.border, color: t.textMuted }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = t.borderHover;
              e.currentTarget.style.color = t.text;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = t.border;
              e.currentTarget.style.color = t.textMuted;
            }}
          >
            <Mail size={16} /> Contact Me
          </button>
        </motion.div>

        {/* Socials */}
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
              className="p-3 rounded-full border transition-all duration-200"
              style={{ borderColor: t.border, color: t.textFaint, backgroundColor: "transparent" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = t.borderHover;
                e.currentTarget.style.color = t.text;
                e.currentTarget.style.backgroundColor = t.tagBg;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = t.border;
                e.currentTarget.style.color = t.textFaint;
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
        style={{ color: t.textVeryFaint }}
      >
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.2em" }}>
          SCROLL
        </span>
        <div
          className="w-px h-10"
          style={{ background: `linear-gradient(to bottom, ${t.textVeryFaint}, transparent)` }}
        />
      </motion.div>
    </section>
  );
}

// ─── About ─────────────────────────────────────────────────────────────────────

function About() {
  const { t } = useTheme();

  const interests = [
    "Large Language Models", "Agentic AI Systems", "NLP & Semantics",
    "ML Evaluation", "Neural Architectures", "AI Safety",
    "Information Retrieval", "Multimodal Learning",
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
            className="text-5xl md:text-6xl font-black tracking-tight"
            style={{ fontFamily: "var(--font-display)", color: t.text }}
          >
            Who I Am
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_1fr] gap-16 lg:gap-28 items-start">
          <div className="space-y-5">
            <motion.p {...stagger(0)} className="text-lg leading-relaxed" style={{ color: t.textSub }}>
              {"I'm"} Tobi Oyekanmi — an AI engineer, machine learning researcher, and software
              developer with a deep focus on building intelligent systems that push the boundaries
              of modern AI.
            </motion.p>
            <motion.p {...stagger(1)} className="leading-relaxed" style={{ color: t.textMuted }}>
              My work lives at the intersection of research and engineering: I design
              production-grade ML systems while investigating the fundamental questions that drive
              AI forward — how we evaluate models rigorously, how we make LLMs reliable agents,
              and how we build language understanding that generalizes beyond benchmarks.
            </motion.p>
            <motion.p {...stagger(2)} className="leading-relaxed" style={{ color: t.textMuted }}>
              This Fall, {"I'll"} be joining the University of Delaware as an incoming PhD
              student in Computer Science, deepening my research in NLP and AI systems.
              I hold a BSc in Computer Science from New Mexico Highlands University.
            </motion.p>

            <motion.div {...stagger(3)} className="flex flex-wrap gap-5 pt-4">
              {[
                { icon: MapPin, text: "Newark, DE (incoming)", color: "#4080ff" },
                { icon: GraduationCap, text: "PhD — University of Delaware", color: "#7c5cfc" },
              ].map(({ icon: Icon, text, color }) => (
                <div key={text} className="flex items-center gap-2 text-sm" style={{ color: t.textFaint }}>
                  <Icon size={13} style={{ color }} />
                  {text}
                </div>
              ))}
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
                  className="p-2.5 rounded-xl border transition-all duration-200"
                  style={{ borderColor: t.border, color: t.textFaint }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = t.borderHover;
                    e.currentTarget.style.color = t.text;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = t.border;
                    e.currentTarget.style.color = t.textFaint;
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </motion.div>
          </div>

          <div className="space-y-8">
            <motion.div {...stagger(0)}>
              <p
                className="uppercase mb-4"
                style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.18em", color: t.textFaint }}
              >
                Research Interests
              </p>
              <div className="flex flex-wrap gap-2">
                {interests.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-sm rounded-full border cursor-default transition-all duration-200"
                    style={{ borderColor: t.border, backgroundColor: t.card, color: t.textMuted }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = t.borderHover;
                      e.currentTarget.style.color = t.text;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = t.border;
                      e.currentTarget.style.color = t.textMuted;
                    }}
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
                  className="p-5 rounded-2xl border transition-all duration-200"
                  style={{ borderColor: t.border, backgroundColor: t.card }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = t.cardHover)}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = t.card)}
                >
                  <div
                    className="text-3xl font-black mb-1"
                    style={{ fontFamily: "var(--font-display)", color }}
                  >
                    {value}
                  </div>
                  <div className="text-sm" style={{ color: t.textFaint }}>{label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Projects ──────────────────────────────────────────────────────────────────

function Projects() {
  const { t } = useTheme();

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeUp} className="mb-16">
          <SectionLabel index="02" label="Projects" color="#7c5cfc" />
          <h2
            className="text-5xl md:text-6xl font-black tracking-tight mb-4"
            style={{ fontFamily: "var(--font-display)", color: t.text }}
          >
            Featured Work
          </h2>
          <p style={{ color: t.textFaint, maxWidth: "36rem" }}>
            AI systems, ML applications, and research tools — built for real impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROJECTS.map((p, i) => (
            <motion.article
              key={p.title}
              {...stagger(i)}
              className="group relative flex flex-col p-6 rounded-2xl border transition-all duration-300 overflow-hidden"
              style={{ borderColor: t.border, backgroundColor: t.card }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = t.borderHover;
                (e.currentTarget as HTMLElement).style.backgroundColor = t.cardHover;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = t.border;
                (e.currentTarget as HTMLElement).style.backgroundColor = t.card;
              }}
            >
              <div
                className="absolute top-0 inset-x-0 h-px"
                style={{ background: `linear-gradient(90deg,transparent 0%,${p.accent}80 50%,transparent 100%)` }}
              />
              <div
                className="absolute -top-8 -right-8 w-24 h-24 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle,${p.accent}18 0%,transparent 70%)`, filter: "blur(16px)" }}
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
                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <a
                    href={p.github}
                    className="p-1.5 rounded-lg transition-colors duration-200"
                    style={{ color: t.textFaint }}
                    aria-label="GitHub"
                    onMouseEnter={(e) => (e.currentTarget.style.color = t.text)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = t.textFaint)}
                  >
                    <Github size={14} />
                  </a>
                  {p.demo && (
                    <a
                      href={p.demo}
                      className="p-1.5 rounded-lg transition-colors duration-200"
                      style={{ color: t.textFaint }}
                      aria-label="Live demo"
                      onMouseEnter={(e) => (e.currentTarget.style.color = t.text)}
                      onMouseLeave={(e) => (e.currentTarget.style.color = t.textFaint)}
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>

              <h3
                className="font-bold text-xl mb-3 flex-none"
                style={{ fontFamily: "var(--font-display)", color: t.text }}
              >
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: t.textMuted }}>
                {p.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-md"
                    style={{
                      fontFamily: "var(--font-mono)",
                      backgroundColor: t.tagBg,
                      border: `1px solid ${t.tagBorder}`,
                      color: t.textFaint,
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
            style={{ borderColor: t.border, borderStyle: "dashed" }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = t.borderHover)}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = t.border)}
          >
            <Github size={22} className="transition-colors duration-200" style={{ color: t.textVeryFaint }} />
            <span className="text-sm text-center transition-colors duration-200" style={{ color: t.textVeryFaint }}>
              View all projects on GitHub
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}

// ─── Research ──────────────────────────────────────────────────────────────────

function Research() {
  const { t } = useTheme();

  return (
    <section id="research" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeUp} className="mb-16">
          <SectionLabel index="03" label="Research" color="#06b6d4" />
          <h2
            className="text-5xl md:text-6xl font-black tracking-tight mb-4"
            style={{ fontFamily: "var(--font-display)", color: t.text }}
          >
            Research Focus
          </h2>
          <p style={{ color: t.textFaint, maxWidth: "40rem" }}>
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
                className="p-6 rounded-2xl border transition-all duration-200"
                style={{ borderColor: t.border, backgroundColor: t.card }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = t.cardHover)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = t.card)}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="p-3 rounded-xl flex-shrink-0"
                    style={{ border: `1px solid ${area.color}25`, backgroundColor: `${area.color}08` }}
                  >
                    <Icon size={18} style={{ color: area.color }} />
                  </div>
                  <div>
                    <h3
                      className="font-semibold mb-2"
                      style={{ fontFamily: "var(--font-display)", color: t.text }}
                    >
                      {area.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: t.textMuted }}>
                      {area.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div {...fadeUp}>
          <p
            className="uppercase mb-6"
            style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.2em", color: t.textVeryFaint }}
          >
            Publications & Manuscripts
          </p>
          <div className="space-y-3">
            {PUBLICATIONS.map((pub, i) => (
              <motion.div
                key={pub.title}
                {...stagger(i)}
                className="flex items-start gap-5 p-5 rounded-2xl border transition-all duration-200"
                style={{ borderColor: t.border, backgroundColor: t.card }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = t.cardHover)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = t.card)}
              >
                <FileText size={15} className="flex-shrink-0 mt-0.5" style={{ color: "#4080ff" }} />
                <div className="flex-1 min-w-0">
                  <p className="font-medium mb-1.5 text-sm transition-colors duration-200" style={{ color: t.textSub }}>
                    {pub.title}
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className="text-xs"
                      style={{ fontFamily: "var(--font-mono)", color: t.textVeryFaint }}
                    >
                      {pub.venue}
                    </span>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full border"
                      style={{
                        fontFamily: "var(--font-mono)",
                        borderColor: t.border,
                        color: t.textVeryFaint,
                      }}
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

// ─── Skills ────────────────────────────────────────────────────────────────────

function Skills() {
  const { t } = useTheme();

  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeUp} className="mb-16">
          <SectionLabel index="04" label="Skills" color="#10b981" />
          <h2
            className="text-5xl md:text-6xl font-black tracking-tight"
            style={{ fontFamily: "var(--font-display)", color: t.text }}
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
                className="relative p-6 rounded-2xl border transition-all duration-200 overflow-hidden group"
                style={{ borderColor: t.border, backgroundColor: t.card }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = t.cardHover)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = t.card)}
              >
                <div
                  className="absolute -top-6 -right-6 w-20 h-20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle,${group.accent}18 0%,transparent 70%)`, filter: "blur(12px)" }}
                />
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="p-2.5 rounded-xl"
                    style={{ border: `1px solid ${group.accent}25`, backgroundColor: `${group.accent}08` }}
                  >
                    <Icon size={15} style={{ color: group.accent }} />
                  </div>
                  <h3
                    className="font-semibold"
                    style={{ fontFamily: "var(--font-display)", color: t.text }}
                  >
                    {group.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-2.5 py-1 rounded-lg cursor-default transition-all duration-200"
                      style={{
                        fontFamily: "var(--font-mono)",
                        backgroundColor: t.tagBg,
                        border: `1px solid ${t.tagBorder}`,
                        color: t.textFaint,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = t.tagBorderHover;
                        e.currentTarget.style.color = t.textSub;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = t.tagBorder;
                        e.currentTarget.style.color = t.textFaint;
                      }}
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

// ─── Experience ────────────────────────────────────────────────────────────────

function Experience() {
  const { t } = useTheme();

  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div {...fadeUp} className="mb-16">
          <SectionLabel index="05" label="Experience" color="#f59e0b" />
          <h2
            className="text-5xl md:text-6xl font-black tracking-tight"
            style={{ fontFamily: "var(--font-display)", color: t.text }}
          >
            Journey
          </h2>
        </motion.div>

        <div className="relative">
          <div
            className="absolute top-0 bottom-0"
            style={{ left: 27, width: 1, background: t.timelineRail }}
          />

          <div className="space-y-6">
            {EXPERIENCE.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} {...stagger(i)} className="relative pl-16">
                  <div
                    className="absolute left-0 top-0 w-14 h-14 flex items-center justify-center rounded-2xl"
                    style={{ border: `1px solid ${item.accent}25`, backgroundColor: `${item.accent}08` }}
                  >
                    <Icon size={16} style={{ color: item.accent }} />
                  </div>

                  <div
                    className="p-5 rounded-2xl border transition-all duration-200"
                    style={{ borderColor: t.border, backgroundColor: t.card }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = t.cardHover)}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = t.card)}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <h3
                          className="font-bold text-lg"
                          style={{ fontFamily: "var(--font-display)", color: t.text }}
                        >
                          {item.title}
                        </h3>
                        <p className="font-medium text-sm mt-0.5" style={{ color: item.accent }}>
                          {item.org}
                        </p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <div
                          className="text-xs"
                          style={{ fontFamily: "var(--font-mono)", color: t.textFaint }}
                        >
                          {item.period}
                        </div>
                        <div
                          className="flex items-center gap-1 text-xs mt-1 justify-end"
                          style={{ fontFamily: "var(--font-mono)", color: t.textVeryFaint }}
                        >
                          <MapPin size={10} /> {item.location}
                        </div>
                      </div>
                    </div>

                    <p className="text-sm leading-relaxed mb-3" style={{ color: t.textMuted }}>
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-0.5 rounded-full border"
                          style={{
                            fontFamily: "var(--font-mono)",
                            borderColor: t.border,
                            color: t.textVeryFaint,
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

// ─── Blog ──────────────────────────────────────────────────────────────────────

function Blog() {
  const { t } = useTheme();

  return (
    <section id="blog" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeUp} className="mb-16">
          <SectionLabel index="06" label="Writing" color="#ef4444" />
          <h2
            className="text-5xl md:text-6xl font-black tracking-tight mb-4"
            style={{ fontFamily: "var(--font-display)", color: t.text }}
          >
            Thoughts & Research Notes
          </h2>
          <p style={{ color: t.textFaint }}>
            On AI engineering, evaluation methodology, and the future of intelligent systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {POSTS.map((post, i) => (
            <motion.a
              key={post.title}
              {...stagger(i)}
              href="#"
              className="group flex flex-col p-6 rounded-2xl border transition-all duration-300"
              style={{ borderColor: t.border, backgroundColor: t.card }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = t.borderHover;
                (e.currentTarget as HTMLElement).style.backgroundColor = t.cardHover;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = t.border;
                (e.currentTarget as HTMLElement).style.backgroundColor = t.card;
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
                <ExternalLink size={14} className="transition-colors duration-200" style={{ color: t.textVeryFaint }} />
              </div>

              <h3
                className="font-bold mb-3 leading-snug flex-1 transition-colors duration-200"
                style={{ fontFamily: "var(--font-display)", color: t.textSub }}
              >
                {post.title}
              </h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: t.textFaint }}>
                {post.excerpt}
              </p>

              <div
                className="flex items-center gap-2 mt-auto"
                style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: t.textVeryFaint }}
              >
                <Calendar size={10} />
                <span>{post.date}</span>
                <span
                  className="w-1 h-1 rounded-full"
                  style={{ backgroundColor: t.textVeryFaint }}
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

// ─── Contact ───────────────────────────────────────────────────────────────────

function Contact() {
  const { t } = useTheme();

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <div
          className="h-px w-full max-w-xs mx-auto mb-20"
          style={{ background: "linear-gradient(90deg,transparent,rgba(64,128,255,0.4),transparent)" }}
        />

        <motion.div {...fadeUp} className="text-center mb-12">
          <SectionLabel index="07" label="Contact" color="#4080ff" />
          <h2
            className="text-5xl md:text-7xl font-black tracking-tight mb-6"
            style={{ fontFamily: "var(--font-display)", color: t.text }}
          >
            {"Let's"} Connect
          </h2>
          <p className="text-lg leading-relaxed max-w-xl mx-auto" style={{ color: t.textMuted }}>
            Whether you are a researcher, recruiter, or collaborator — I am always open to
            meaningful conversations about AI, research, and what comes next.
          </p>
        </motion.div>

        <motion.div {...stagger(1)} className="flex flex-wrap items-center justify-center gap-3 mb-16">
          <a
            href="mailto:tobi@example.com"
            className="flex items-center gap-2.5 px-7 py-3.5 rounded-full text-white font-medium transition-all duration-200"
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
            <Mail size={16} /> Send Email
          </a>
          <a
            href="/cv.pdf"
            className="flex items-center gap-2.5 px-7 py-3.5 rounded-full border transition-all duration-200"
            style={{ borderColor: t.border, color: t.textMuted }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = t.borderHover;
              e.currentTarget.style.color = t.text;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = t.border;
              e.currentTarget.style.color = t.textMuted;
            }}
          >
            <Download size={16} /> Download CV
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
                className="p-4 rounded-2xl border transition-all duration-200"
                style={{ borderColor: t.border, backgroundColor: t.card, color: t.textFaint }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = t.borderHover;
                  e.currentTarget.style.backgroundColor = t.cardHover;
                  e.currentTarget.style.color = t.text;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = t.border;
                  e.currentTarget.style.backgroundColor = t.card;
                  e.currentTarget.style.color = t.textFaint;
                }}
              >
                <Icon size={20} />
              </div>
              <span
                className="transition-colors duration-200"
                style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.12em", color: t.textVeryFaint }}
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

// ─── Footer ────────────────────────────────────────────────────────────────────

function Footer() {
  const { t } = useTheme();
  return (
    <footer className="py-8 px-6 border-t" style={{ borderColor: t.navBorder }}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", letterSpacing: "0.08em", color: t.textDim }}>
          © 2025 Tobi Oyekanmi
        </p>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", letterSpacing: "0.08em", color: t.textDim }}>
          AI Engineer · ML Researcher · PhD Candidate — University of Delaware
        </p>
      </div>
    </footer>
  );
}

// ─── App ───────────────────────────────────────────────────────────────────────

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState("hero");

  const t = isDark ? DARK : LIGHT;
  const toggle = () => setIsDark((d) => !d);

  useEffect(() => {
    const ids = ["hero", "about", "projects", "research", "skills", "experience", "blog", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); });
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
    <ThemeCtx.Provider value={{ t, isDark, toggle }}>
      <div
        className="min-h-screen antialiased overflow-x-hidden"
        style={{
          backgroundColor: t.bg,
          color: t.text,
          transition: "background-color 0.4s ease, color 0.4s ease",
        }}
      >
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
    </ThemeCtx.Provider>
  );
}
