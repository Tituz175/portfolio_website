import { motion } from "motion/react";
import useTheme from "../../../hooks/useTheme";
import SectionLabel from "../layout/SectionLabel";
import { Github, ExternalLink } from "lucide-react";
import { fadeUp, stagger } from "../../../utils/animation";

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

export default function Projects() {
  const { theme } = useTheme();

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeUp} className="mb-16">
          <SectionLabel index="02" label="Projects" color="#7c5cfc" />
          <h2
            className="text-5xl md:text-6xl font-black tracking-tight mb-4"
            style={{ fontFamily: "var(--font-display)", color: theme.text }}
          >
            Featured Work
          </h2>
          <p style={{ color: theme.textFaint, maxWidth: "36rem" }}>
            AI systems, ML applications, and research tools — built for real
            impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROJECTS.map((p, i) => (
            <motion.article
              key={p.title}
              {...stagger(i)}
              className="group relative flex flex-col p-6 rounded-2xl border transition-all duration-300 overflow-hidden"
              style={{ borderColor: theme.border, backgroundColor: theme.card }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  theme.borderHover;
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  theme.cardHover;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  theme.border;
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  theme.card;
              }}
            >
              <div
                className="absolute top-0 inset-x-0 h-px"
                style={{
                  background: `linear-gradient(90deg,transparent 0%,${p.accent}80 50%,transparent 100%)`,
                }}
              />
              <div
                className="absolute -top-8 -right-8 w-24 h-24 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle,${p.accent}18 0%,transparent 70%)`,
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
                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <a
                    href={p.github}
                    className="p-1.5 rounded-lg transition-colors duration-200"
                    style={{ color: theme.textFaint }}
                    aria-label="GitHub"
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = theme.text)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = theme.textFaint)
                    }
                  >
                    <Github size={14} />
                  </a>
                  {p.demo && (
                    <a
                      href={p.demo}
                      className="p-1.5 rounded-lg transition-colors duration-200"
                      style={{ color: theme.textFaint }}
                      aria-label="Live demo"
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = theme.text)
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = theme.textFaint)
                      }
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>

              <h3
                className="font-bold text-xl mb-3 flex-none"
                style={{ fontFamily: "var(--font-display)", color: theme.text }}
              >
                {p.title}
              </h3>
              <p
                className="text-sm leading-relaxed mb-5 flex-1"
                style={{ color: theme.textMuted }}
              >
                {p.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-md"
                    style={{
                      fontFamily: "var(--font-mono)",
                      backgroundColor: theme.tagBg,
                      border: `1px solid ${theme.tagBorder}`,
                      color: theme.textFaint,
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
            style={{ borderColor: theme.border, borderStyle: "dashed" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = theme.borderHover)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = theme.border)
            }
          >
            <Github
              size={22}
              className="transition-colors duration-200"
              style={{ color: theme.textVeryFaint }}
            />
            <span
              className="text-sm text-center transition-colors duration-200"
              style={{ color: theme.textVeryFaint }}
            >
              View all projects on GitHub
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
