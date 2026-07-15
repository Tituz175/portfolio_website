import { motion } from "motion/react";
import {
  MapPin,
  GraduationCap,
  Github,
  Linkedin,
  BookOpen,
} from "lucide-react";
import useTheme from "../../../hooks/useTheme";
import SectionLabel from "../layout/SectionLabel";
import { fadeUp, stagger } from "../../../utils/animation";
import { accentText } from "../../../utils/color";

export default function About() {
  const { theme, isDark } = useTheme();

  const interests = [
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
  ];

  const stats = [
    { value: "5+", label: "Projects Shipped", color: "#4080ff" },
    { value: "5+", label: "Years Research", color: "#7c5cfc" },
    { value: "5", label: "Publications", color: "#06b6d4" },
    { value: "5+", label: "ML Frameworks", color: "#10b981" },
  ];

  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeUp} className="mb-16">
          <SectionLabel index="01" label="About" color="#4080ff" />
          <h2
            className="text-5xl md:text-6xl font-black tracking-tight"
            style={{ fontFamily: "var(--font-display)", color: theme.text }}
          >
            Who I Am
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_1fr] gap-16 lg:gap-28 items-start">
          <div className="space-y-5">
            <motion.p
              {...stagger(0)}
              className="text-lg leading-relaxed"
              style={{ color: theme.textSub }}
            >
              {"I'm"} Tobi Oyekanmi — an AI engineer and machine learning
              researcher with a deep focus on building intelligent systems that
              push the boundaries of modern AI, from production ML pipelines to
              the systems research that makes large-scale AI possible.
            </motion.p>
            <motion.p
              {...stagger(1)}
              className="leading-relaxed"
              style={{ color: theme.textMuted }}
            >
              My research centers on efficient large-scale model training and
              inference — GPU-aware optimization, numerical linear algebra, and
              system-level performance work for distributed AI workloads —
              alongside applied engineering work in retrieval-augmented
              generation, medical imaging, and environmental sensor analysis
              using machine learning.
            </motion.p>
            <motion.p
              {...stagger(2)}
              className="leading-relaxed"
              style={{ color: theme.textMuted }}
            >
              {"I'm"} currently completing an MS in Computer Science at New
              Mexico Highlands University (expected Fall 2026), after earning
              an MS in Software Systems Design there in 2025 and a BEng in
              Electrical and Electronic Engineering from the Federal University
              of Technology, Akure, Nigeria. {"I'm"} open to both PhD programs
              continuing this research and engineering roles building
              production ML systems.
            </motion.p>

            <motion.div {...stagger(3)} className="flex flex-wrap gap-5 pt-4">
              {[
                {
                  icon: MapPin,
                  text: "Las Vegas, NM",
                  color: "#4080ff",
                },
                {
                  icon: GraduationCap,
                  text: "MS Computer Science — NMHU",
                  color: "#7c5cfc",
                },
              ].map(({ icon: Icon, text, color }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 text-sm"
                  style={{ color: theme.textFaint }}
                >
                  <Icon size={13} style={{ color }} />
                  {text}
                </div>
              ))}
            </motion.div>

            <motion.div {...stagger(4)} className="flex gap-3 pt-2">
              {[
                {
                  icon: Github,
                  href: "https://github.com/Tituz175",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/tobioyekanmi/",
                  label: "LinkedIn",
                },
                {
                  icon: BookOpen,
                  href: "https://www.researchgate.net/profile/Tobi-Oyekanmi-2?ev=hdr_xprf",
                  label: "ResearchGate",
                },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2.5 rounded-xl border transition-all duration-200"
                  style={{ borderColor: theme.border, color: theme.textFaint }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = theme.borderHover;
                    e.currentTarget.style.color = theme.text;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = theme.border;
                    e.currentTarget.style.color = theme.textFaint;
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
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.18em",
                  color: theme.textFaint,
                }}
              >
                Research Interests
              </p>
              <div className="flex flex-wrap gap-2">
                {interests.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-sm rounded-full border cursor-default transition-all duration-200"
                    style={{
                      borderColor: theme.border,
                      backgroundColor: theme.card,
                      color: theme.textMuted,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = theme.borderHover;
                      e.currentTarget.style.color = theme.text;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = theme.border;
                      e.currentTarget.style.color = theme.textMuted;
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
                  style={{
                    borderColor: theme.border,
                    backgroundColor: theme.card,
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = theme.cardHover)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = theme.card)
                  }
                >
                  <div
                    className="text-3xl font-black mb-1"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: accentText(color, isDark),
                    }}
                  >
                    {value}
                  </div>
                  <div className="text-sm" style={{ color: theme.textFaint }}>
                    {label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
