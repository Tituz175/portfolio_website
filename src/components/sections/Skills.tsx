import { motion } from "motion/react";
import useTheme from "../../../hooks/useTheme";
import useSiteContent from "../../../hooks/useSiteContent";
import SectionLabel from "../layout/SectionLabel";
import { fadeUp, stagger } from "../../../utils/animation";
import { getIcon } from "../../../utils/icons";

export default function Skills() {
  const { theme } = useTheme();
  const { content, loading } = useSiteContent();
  const SKILLS = content?.skills ?? [];

  if (loading || SKILLS.length === 0) return null;

  return (
    <section id="skills" className="py-32 px-6 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeUp} className="mb-16">
          <SectionLabel index="04" label="Skills" color="#10b981" />
          <h2
            className="text-5xl md:text-6xl font-black tracking-tight"
            style={{ fontFamily: "var(--font-display)", color: theme.text }}
          >
            Technical Stack
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SKILLS.map((group, i) => {
            const Icon = getIcon(group.icon);
            return (
              <motion.div
                key={group.category}
                {...stagger(i)}
                className="relative p-6 rounded-2xl border transition-all duration-200 overflow-hidden group"
                style={{ borderColor: theme.border, backgroundColor: theme.card }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = theme.cardHover)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = theme.card)
                }
              >
                <div
                  className="absolute -top-6 -right-6 w-20 h-20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle,${group.accent}18 0%,transparent 70%)`,
                    filter: "blur(12px)",
                  }}
                />
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="p-2.5 rounded-xl"
                    style={{
                      border: `1px solid ${group.accent}25`,
                      backgroundColor: `${group.accent}08`,
                    }}
                  >
                    <Icon size={15} style={{ color: group.accent }} />
                  </div>
                  <h3
                    className="font-semibold"
                    style={{ fontFamily: "var(--font-display)", color: theme.text }}
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
                        backgroundColor: theme.tagBg,
                        border: `1px solid ${theme.tagBorder}`,
                        color: theme.textFaint,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = theme.tagBorderHover;
                        e.currentTarget.style.color = theme.textSub;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = theme.tagBorder;
                        e.currentTarget.style.color = theme.textFaint;
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
