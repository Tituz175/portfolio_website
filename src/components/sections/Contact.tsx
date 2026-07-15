import { motion } from "motion/react";
import { Mail, Download, Github, Linkedin, BookOpen } from "lucide-react";
import useTheme from "../../../hooks/useTheme";
import SectionLabel from "../layout/SectionLabel";
import { fadeUp, stagger } from "../../../utils/animation";

export default function Contact() {
  const { theme } = useTheme();

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <div
          className="h-px w-full max-w-xs mx-auto mb-20"
          style={{
            background:
              "linear-gradient(90deg,transparent,rgba(64,128,255,0.4),transparent)",
          }}
        />

        <motion.div {...fadeUp} className="text-center mb-12">
          <SectionLabel index="06" label="Contact" color="#4080ff" />
          <h2
            className="text-5xl md:text-7xl font-black tracking-tight mb-6"
            style={{ fontFamily: "var(--font-display)", color: theme.text }}
          >
            {"Let's"} Connect
          </h2>
          <p
            className="text-lg leading-relaxed max-w-xl mx-auto"
            style={{ color: theme.textMuted }}
          >
            Whether you are a researcher, recruiter, or collaborator — I am
            always open to meaningful conversations about AI, research, and what
            comes next.
          </p>
        </motion.div>

        <motion.div
          {...stagger(1)}
          className="flex flex-wrap items-center justify-center gap-3 mb-16"
        >
          <a
            href="mailto:tobititus.oyekanmi@gmail.com"
            target="_blank"
            className="flex items-center gap-2.5 px-7 py-3.5 rounded-full text-white font-medium transition-all duration-200"
            style={{ backgroundColor: "#4080ff" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#5592ff";
              e.currentTarget.style.boxShadow = "0 0 32px rgba(64,128,255,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#4080ff";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <Mail size={16} /> Send Email
          </a>
          <a
            href="/cv.pdf"
            className="flex items-center gap-2.5 px-7 py-3.5 rounded-full border transition-all duration-200"
            style={{ borderColor: theme.border, color: theme.textMuted }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = theme.borderHover;
              e.currentTarget.style.color = theme.text;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = theme.border;
              e.currentTarget.style.color = theme.textMuted;
            }}
          >
            <Download size={16} /> Download CV
          </a>
        </motion.div>

        <motion.div
          {...stagger(2)}
          className="flex items-center justify-center gap-10"
        >
          {[
            { icon: Github, label: "GitHub", href: "https://github.com/Tituz175" },
            { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/tobioyekanmi/" },
            { icon: BookOpen, label: "Scholar", href: "https://www.researchgate.net/profile/Tobi-Oyekanmi-2?ev=hdr_xprf" },
            { icon: Mail, label: "Email", href: "mailto:tobititus.oyekanmi@gmail.com" },
          ].map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target={"_blank"}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex flex-col items-center gap-2.5 group"
            >
              <div
                className="p-4 rounded-2xl border transition-all duration-200"
                style={{
                  borderColor: theme.border,
                  backgroundColor: theme.card,
                  color: theme.textFaint,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = theme.borderHover;
                  e.currentTarget.style.backgroundColor = theme.cardHover;
                  e.currentTarget.style.color = theme.text;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = theme.border;
                  e.currentTarget.style.backgroundColor = theme.card;
                  e.currentTarget.style.color = theme.textFaint;
                }}
              >
                <Icon size={20} />
              </div>
              <span
                className="transition-colors duration-200"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.12em",
                  color: theme.textVeryFaint,
                }}
              >
                {label}
              </span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
