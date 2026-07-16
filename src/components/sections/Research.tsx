import { motion } from "motion/react";
import useTheme from "../../../hooks/useTheme";
import useSiteContent from "../../../hooks/useSiteContent";
import SectionLabel from "../layout/SectionLabel";
import { fadeUp, stagger } from "../../../utils/animation";
import { FileText } from "lucide-react";
import { getIcon } from "../../../utils/icons";

export default function Research() {
  const { theme } = useTheme();
  const { content, loading } = useSiteContent();
  const RESEARCH_AREAS = content?.research.areas ?? [];
  const PUBLICATIONS = content?.research.publications ?? [];

  if (loading || RESEARCH_AREAS.length === 0) return null;

  return (
    <section id="research" className="py-32 px-6 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeUp} className="mb-16">
          <SectionLabel index="03" label="Research" color="#06b6d4" />
          <h2
            className="text-5xl md:text-6xl font-black tracking-tight mb-4"
            style={{ fontFamily: "var(--font-display)", color: theme.text }}
          >
            Research Focus
          </h2>
          <p style={{ color: theme.textFaint, maxWidth: "40rem" }}>
            Investigating AI systems reliability, language understanding, and
            the science of rigorous model evaluation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 mb-16">
          {RESEARCH_AREAS.map((area, i) => {
            const Icon = getIcon(area.icon);
            return (
              <motion.div
                key={area.title}
                {...stagger(i)}
                className="p-6 rounded-2xl border transition-all duration-200"
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
                      className="font-semibold mb-2"
                      style={{
                        fontFamily: "var(--font-display)",
                        color: theme.text,
                      }}
                    >
                      {area.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: theme.textMuted }}
                    >
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
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              letterSpacing: "0.2em",
              color: theme.textVeryFaint,
            }}
          >
            Publications & Manuscripts
          </p>
          <div className="space-y-3">
            {PUBLICATIONS.map((pub, i) => (
              <motion.div
                key={pub.title}
                {...stagger(i)}
                className="flex items-start gap-5 p-5 rounded-2xl border transition-all duration-200"
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
                <FileText
                  size={15}
                  className="flex-shrink-0 mt-0.5"
                  style={{ color: "#4080ff" }}
                />
                <div className="flex-1 min-w-0">
                  <p
                    className="font-medium mb-1.5 text-sm transition-colors duration-200"
                    style={{ color: theme.textSub }}
                  >
                    {pub.title}
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className="text-xs"
                      style={{
                        fontFamily: "var(--font-mono)",
                        color: theme.textVeryFaint,
                      }}
                    >
                      {pub.venue}
                    </span>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full border"
                      style={{
                        fontFamily: "var(--font-mono)",
                        borderColor: theme.border,
                        color: theme.textVeryFaint,
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
