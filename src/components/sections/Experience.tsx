import { motion } from "motion/react";
import useTheme from "../../../hooks/useTheme";
import SectionLabel from "../layout/SectionLabel";
import { fadeUp, stagger } from "../../../utils/animation";
import { GraduationCap, Briefcase, FlaskConical, MapPin } from "lucide-react";

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

export default function Experience() {
  const { theme } = useTheme();

  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div {...fadeUp} className="mb-16">
          <SectionLabel index="05" label="Experience" color="#f59e0b" />
          <h2
            className="text-5xl md:text-6xl font-black tracking-tight"
            style={{ fontFamily: "var(--font-display)", color: theme.text }}
          >
            Journey
          </h2>
        </motion.div>

        <div className="relative">
          <div
            className="absolute top-0 bottom-0"
            style={{ left: 27, width: 1, background: theme.timelineRail }}
          />

          <div className="space-y-6">
            {EXPERIENCE.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} {...stagger(i)} className="relative pl-16">
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
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <h3
                          className="font-bold text-lg"
                          style={{
                            fontFamily: "var(--font-display)",
                            color: theme.text,
                          }}
                        >
                          {item.title}
                        </h3>
                        <p
                          className="font-medium text-sm mt-0.5"
                          style={{ color: item.accent }}
                        >
                          {item.org}
                        </p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <div
                          className="text-xs"
                          style={{
                            fontFamily: "var(--font-mono)",
                            color: theme.textFaint,
                          }}
                        >
                          {item.period}
                        </div>
                        <div
                          className="flex items-center gap-1 text-xs mt-1 justify-end"
                          style={{
                            fontFamily: "var(--font-mono)",
                            color: theme.textVeryFaint,
                          }}
                        >
                          <MapPin size={10} /> {item.location}
                        </div>
                      </div>
                    </div>

                    <p
                      className="text-sm leading-relaxed mb-3"
                      style={{ color: theme.textMuted }}
                    >
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-0.5 rounded-full border"
                          style={{
                            fontFamily: "var(--font-mono)",
                            borderColor: theme.border,
                            color: theme.textVeryFaint,
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
