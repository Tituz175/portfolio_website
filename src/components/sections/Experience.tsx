import { motion } from "motion/react";
import useTheme from "../../../hooks/useTheme";
import SectionLabel from "../layout/SectionLabel";
import { fadeUp, stagger } from "../../../utils/animation";
import { accentText } from "../../../utils/color";
import { Briefcase, FlaskConical, MapPin } from "lucide-react";

const EXPERIENCE = [
  {
    title: "Graduate Research & Teaching Assistant",
    org: "NMHU, Department of Computer Science",
    period: "Jan 2023 — Present",
    location: "Las Vegas, NM",
    description:
      "Taught and supported courses spanning Java programming, Unix systems, artificial intelligence, and software engineering, while running Git, Linux, and CI/CD training sessions for students. Also designed semantic retrieval pipelines with LangChain and vector databases, and built OpenCV-based computer vision workflows for real-time monitoring applications.",
    tags: ["Teaching", "RAG", "Computer Vision", "CI/CD"],
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
    title: "Software Engineering Assistant",
    org: "NMHU Police Department",
    period: "May 2024 — Aug 2024",
    location: "Las Vegas, NM",
    description:
      "Built an automated certificate-management system in Python, SQL, and Microsoft Access to track expiring compliance records, with monitoring and alerting workflows that cut manual auditing overhead.",
    tags: ["Python", "SQL", "Automation"],
    icon: Briefcase,
    accent: "#06b6d4",
  },
  {
    title: "Software Engineer Intern",
    org: "alx_africa",
    period: "Jan 2023 — Apr 2024",
    location: "Remote",
    description:
      "Designed and shipped scalable RESTful APIs with Flask, Node.js, Express, and SQLAlchemy for multi-user applications, with MySQL and MongoDB data layers and JWT-based auth — improving backend processing efficiency by roughly 30% through API and query optimization.",
    tags: ["REST APIs", "MySQL/MongoDB", "Auth"],
    icon: Briefcase,
    accent: "#4080ff",
  },
  {
    title: "Assistant Software Engineering Instructor",
    org: "SQI College of ICT",
    period: "Nov 2021 — Nov 2022",
    location: "Ibadan, Nigeria",
    description:
      "Taught foundational web development (HTML, CSS, JavaScript) and introductory programming, coordinating coding sessions and mentoring students through hands-on project work.",
    tags: ["Teaching", "Web Fundamentals"],
    icon: Briefcase,
    accent: "#f59e0b",
  },
];

const EDUCATION = [
  {
    degree: "MS in Computer Science",
    org: "New Mexico Highlands University",
    period: "Expected Fall 2026",
  },
  {
    degree: "MS in Software Systems Design",
    org: "New Mexico Highlands University",
    period: "Awarded Spring 2025",
  },
  {
    degree: "BEng in Electrical and Electronic Engineering",
    org: "Federal University of Technology, Akure",
    period: "Awarded Fall 2021",
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
                    className="absolute left-0 top-0 z-10 w-14 h-14 flex items-center justify-center rounded-2xl"
                    style={{
                      border: `1px solid ${item.accent}25`,
                      backgroundColor: theme.bg,
                      backgroundImage: `linear-gradient(${item.accent}14, ${item.accent}14)`,
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

        <motion.div {...fadeUp} className="mt-14">
          <p
            className="uppercase mb-4"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              letterSpacing: "0.18em",
              color: theme.textFaint,
            }}
          >
            Education
          </p>
          <div style={{ borderTop: `1px solid ${theme.border}` }}>
            {EDUCATION.map((edu) => (
              <div
                key={edu.degree}
                className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-4"
                style={{ borderBottom: `1px solid ${theme.border}` }}
              >
                <div>
                  <p
                    className="font-bold text-base"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: theme.text,
                    }}
                  >
                    {edu.degree}
                  </p>
                  <p className="text-sm mt-0.5" style={{ color: theme.textMuted }}>
                    {edu.org}
                  </p>
                </div>
                <div
                  className="text-xs whitespace-nowrap"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: theme.textFaint,
                  }}
                >
                  {edu.period}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
