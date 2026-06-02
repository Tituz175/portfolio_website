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

export default function About() {
  const { theme } = useTheme();

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
              {"I'm"} Tobi Oyekanmi — an AI engineer, machine learning
              researcher, and software developer with a deep focus on building
              intelligent systems that push the boundaries of modern AI.
            </motion.p>
            <motion.p
              {...stagger(1)}
              className="leading-relaxed"
              style={{ color: theme.textMuted }}
            >
              My work lives at the intersection of research and engineering: I
              design production-grade ML systems while investigating the
              fundamental questions that drive AI forward — how we evaluate
              models rigorously, how we make LLMs reliable agents, and how we
              build language understanding that generalizes beyond benchmarks.
            </motion.p>
            <motion.p
              {...stagger(2)}
              className="leading-relaxed"
              style={{ color: theme.textMuted }}
            >
              This Fall, {"I'll"} be joining the University of Delaware as an
              incoming PhD student in Computer Science, deepening my research in
              NLP and AI systems. I hold a BSc in Computer Science from New
              Mexico Highlands University.
            </motion.p>

            <motion.div {...stagger(3)} className="flex flex-wrap gap-5 pt-4">
              {[
                {
                  icon: MapPin,
                  text: "Newark, DE (incoming)",
                  color: "#4080ff",
                },
                {
                  icon: GraduationCap,
                  text: "PhD — University of Delaware",
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
                { icon: Github, href: "https://github.com", label: "GitHub" },
                {
                  icon: Linkedin,
                  href: "https://linkedin.com",
                  label: "LinkedIn",
                },
                { icon: BookOpen, href: "#", label: "Google Scholar" },
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
                    style={{ fontFamily: "var(--font-display)", color }}
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
