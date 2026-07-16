import { motion } from "motion/react";
import useTheme from "../../../hooks/useTheme";
import useSiteContent from "../../../hooks/useSiteContent";
import SectionLabel from "../layout/SectionLabel";
import { fadeUp, stagger } from "../../../utils/animation";
import { accentText } from "../../../utils/color";
import { getIcon } from "../../../utils/icons";
import { MapPin } from "lucide-react";

export default function Experience() {
  const { theme, isDark } = useTheme();
  const { content, loading } = useSiteContent();
  const EXPERIENCE = content?.experience ?? [];
  const EDUCATION = content?.education ?? [];

  if (loading || EXPERIENCE.length === 0) return null;

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
              const Icon = getIcon(item.icon);
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
