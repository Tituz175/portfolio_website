import { motion } from "motion/react";
import {
  MapPin,
  GraduationCap,
  Github,
  Linkedin,
  BookOpen,
} from "lucide-react";
import useTheme from "../../../hooks/useTheme";
import useSiteContent from "../../../hooks/useSiteContent";
import SectionLabel from "../layout/SectionLabel";
import { fadeUp, stagger } from "../../../utils/animation";
import { accentText } from "../../../utils/color";

export default function About() {
  const { theme, isDark } = useTheme();
  const { content, loading } = useSiteContent();
  const about = content?.about;

  if (loading || !about) return null;

  const interests = about.interests;
  const stats = about.stats as { value: string; label: string; color: string }[];

  return (
    <section id="about" className="py-32 px-6 scroll-mt-24">
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
              {about.bioP1}
            </motion.p>
            <motion.p
              {...stagger(1)}
              className="leading-relaxed"
              style={{ color: theme.textMuted }}
            >
              {about.bioP2}
            </motion.p>
            <motion.p
              {...stagger(2)}
              className="leading-relaxed"
              style={{ color: theme.textMuted }}
            >
              {about.bioP3}
            </motion.p>

            <motion.div {...stagger(3)} className="flex flex-wrap gap-5 pt-4">
              {[
                {
                  icon: MapPin,
                  text: about.location,
                  color: "#4080ff",
                },
                {
                  icon: GraduationCap,
                  text: about.degreeChip,
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
