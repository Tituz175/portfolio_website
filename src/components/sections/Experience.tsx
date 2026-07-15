import { motion } from "motion/react";
import useTheme from "../../../hooks/useTheme";
import SectionLabel from "../layout/SectionLabel";
import { fadeUp, stagger } from "../../../utils/animation";
import { accentText } from "../../../utils/color";
import { GraduationCap, Briefcase, FlaskConical, MapPin } from "lucide-react";

const EXPERIENCE = [
  {
    title: "MS in Computer Science",
    org: "New Mexico Highlands University",
    period: "Expected Fall 2026",
    location: "Las Vegas, NM",
    description:
      "Advanced coursework and research in machine learning systems, high-performance computing, and scalable AI. Applying to PhD programs to continue research in efficient large-scale model training and inference.",
    tags: ["ML Systems", "HPC", "Research"],
    icon: GraduationCap,
    accent: "#4080ff",
  },
  {
    title: "Teaching Assistant",
    org: "NMHU, Department of Computer Science",
    period: "Fall 2024 — Present",
    location: "Las Vegas, NM",
    description:
      "Taught and supported courses spanning Java programming, Unix systems, artificial intelligence, and software engineering across six semesters.",
    tags: ["Teaching", "AI", "Software Engineering"],
    icon: Briefcase,
    accent: "#f59e0b",
  },
  {
    title: "NSF BioPACIFIC MIP PREM Research Program",
    org: "NMHU, Computer Science",
    period: "Summer 2025",
    location: "Las Vegas, NM",
    description:
      "Applied HPC techniques and deep learning to design scalable, performance-efficient training and inference pipelines for modeling nanoscale material properties, including GPU-aware and hardware-conscious optimization.",
    tags: ["HPC", "Deep Learning", "GPU Optimization"],
    icon: FlaskConical,
    accent: "#06b6d4",
  },
  {
    title: "Research Assistant — ML for Environmental Radiation Analysis",
    org: "NMHU, Computer Science",
    period: "Spring 2024 — 2025",
    location: "Las Vegas, NM",
    description:
      "Built supervised learning pipelines to classify background radiation from field-collected sensor data, reaching 96.9% cross-validation accuracy. Co-authored a peer-reviewed publication in ASRJETS based on this work.",
    tags: ["Machine Learning", "Time-Series", "Publication"],
    icon: FlaskConical,
    accent: "#7c5cfc",
  },
  {
    title: "MS in Software Systems Design",
    org: "New Mexico Highlands University",
    period: "Awarded Spring 2025",
    location: "Las Vegas, NM",
    description:
      "Graduate research spanning AI-powered audio analysis and retrieval-augmented generation systems, including a thesis on an interactive music analyzer for musicians using AI.",
    tags: ["RAG", "Audio ML", "Thesis"],
    icon: GraduationCap,
    accent: "#10b981",
  },
  {
    title: "BEng in Electrical and Electronic Engineering",
    org: "Federal University of Technology, Akure",
    period: "Awarded Fall 2021",
    location: "Akure, Nigeria",
    description:
      "Undergraduate research on real-time energy monitoring systems, embedded C programming, and circuit simulation for low-voltage distribution systems.",
    tags: ["Embedded Systems", "Circuit Design"],
    icon: GraduationCap,
    accent: "#ef4444",
  },
];

export default function Experience() {
  const { theme, isDark } = useTheme();

  return (
    <section id="experience" className="py-32 px-6 scroll-mt-24">
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
                          style={{ color: accentText(item.accent, isDark) }}
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
