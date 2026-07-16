import { useEffect } from "react";
import useTheme from "../../../hooks/useTheme";
import {
  motion,
  animate,
  useMotionValue,
  useMotionTemplate,
  useReducedMotion,
} from "motion/react";
import { heroAnim } from "../../../utils/animation";
import { scrollTo } from "../../../utils/scroll";
import {
  ArrowUpRight,
  Download,
  Mail,
  Github,
  Linkedin,
  BookOpen,
} from "lucide-react";

function HeroBg() {
  const { theme, isDark } = useTheme();
  const shouldReduceMotion = useReducedMotion();

  const spotX = useMotionValue(30);
  const spotY = useMotionValue(45);
  const spotColor = isDark ? "rgba(64,128,255,0.55)" : "rgba(64,128,255,0.3)";
  const spotlightBg = useMotionTemplate`radial-gradient(circle 480px at ${spotX}% ${spotY}%, ${spotColor} 0%, transparent 70%)`;

  useEffect(() => {
    if (shouldReduceMotion) return;

    const xControls = animate(spotX, [15, 82, 35, 88, 15], {
      duration: 13,
      repeat: Infinity,
      ease: "easeInOut",
    });
    const yControls = animate(spotY, [30, 68, 90, 25, 30], {
      duration: 16,
      repeat: Infinity,
      ease: "easeInOut",
    });

    return () => {
      xControls.stop();
      yControls.stop();
    };
  }, [shouldReduceMotion, spotX, spotY]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      <div
        className="absolute rounded-full"
        style={{
          width: 900,
          height: 900,
          top: "-25%",
          left: "-20%",
          background: `radial-gradient(circle, ${theme.orb1} 0%, transparent 65%)`,
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: 700,
          height: 700,
          top: "5%",
          right: "-15%",
          background: `radial-gradient(circle, ${theme.orb2} 0%, transparent 65%)`,
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: 500,
          height: 500,
          bottom: "5%",
          left: "30%",
          background: `radial-gradient(circle, ${theme.orb3} 0%, transparent 65%)`,
          filter: "blur(40px)",
        }}
      />
      <svg
        className="absolute inset-0 w-full h-full"
        style={{ opacity: theme.gridOpacity }}
      >
        <defs>
          <pattern id="pg" width="64" height="64" patternUnits="userSpaceOnUse">
            <path
              d="M 64 0 L 0 0 0 64"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.6"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#pg)" />
      </svg>
      {!shouldReduceMotion && (
        <motion.div
          className="absolute inset-0"
          style={{ background: spotlightBg }}
        />
      )}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 50% 0%, transparent 40%, ${theme.bg} 100%)`,
        }}
      />
    </div>
  );
}

export default function Hero() {
  const { theme, isDark } = useTheme();
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center text-center px-6 pt-24 pb-10 overflow-hidden scroll-mt-24"
    >
      <HeroBg />
      <div className="relative z-10 max-w-5xl mx-auto w-full flex-1 flex flex-col items-center justify-center">
        {/* Badge */}
        {/* <motion.div
          {...heroAnim(0.1)}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border mb-10 text-xs"
          style={{
            borderColor: "rgba(64,128,255,0.3)",
            backgroundColor: "rgba(64,128,255,0.07)",
            color: "#6ea8ff",
            fontFamily: "var(--font-mono)",
            letterSpacing: "0.08em",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: "#4080ff", boxShadow: "0 0 8px #4080ff" }}
          />
          Incoming PhD Student · University of Delaware · Fall 2025
        </motion.div> */}

        {/* Name */}
        <motion.h1
          {...heroAnim(0.2)}
          className="font-black leading-[0.88] tracking-[-0.03em] mb-6"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(4rem, 14vw, 11rem)",
          }}
        >
          <span style={{ color: theme.text }}>Tobi</span>
          <br />
          <span
            style={{
              backgroundImage: theme.heroGradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Oyekanmi
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          {...heroAnim(0.32)}
          className="mb-6 tracking-widest uppercase"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "clamp(0.65rem, 1.5vw, 0.8rem)",
            letterSpacing: "0.22em",
            color: theme.textFaint,
          }}
        >
          AI Engineer&nbsp;&nbsp;·&nbsp;&nbsp;Machine Learning
          Researcher&nbsp;&nbsp;·&nbsp;&nbsp;Software Developer
        </motion.p>

        {/* Bio */}
        <motion.p
          {...heroAnim(0.44)}
          className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12"
          style={{ color: theme.textMuted }}
        >
          Building intelligent systems at the frontier of AI — from neural
          architectures and agentic pipelines to production NLP infrastructure
          and rigorous model evaluation.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...heroAnim(0.56)}
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          <button
            onClick={() => scrollTo("#projects")}
            className="flex items-center gap-2 px-6 py-3 rounded-full font-medium text-white transition-all duration-200"
            style={{ backgroundColor: "#4080ff" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#5592ff";
              e.currentTarget.style.boxShadow = "0 0 28px rgba(64,128,255,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#4080ff";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            View Projects <ArrowUpRight size={16} />
          </button>
          <a
            href="/cv.pdf"
            className="flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-200"
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
          <button
            onClick={() => scrollTo("#contact")}
            className="flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-200"
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
            <Mail size={16} /> Contact Me
          </button>
        </motion.div>

        {/* Socials */}
        <motion.div
          {...heroAnim(0.66)}
          className="flex items-center justify-center gap-4"
        >
          {[
            { icon: Github, href: "https://github.com/Tituz175", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/tobioyekanmi/", label: "LinkedIn" },
            { icon: BookOpen, href: "https://www.researchgate.net/profile/Tobi-Oyekanmi-2?ev=hdr_xprf", label: "Google Scholar" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-3 rounded-full border transition-all duration-200"
              style={{
                borderColor: theme.border,
                color: theme.textFaint,
                backgroundColor: "transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = theme.borderHover;
                e.currentTarget.style.color = theme.text;
                e.currentTarget.style.backgroundColor = theme.tagBg;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = theme.border;
                e.currentTarget.style.color = theme.textFaint;
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="relative z-10 flex flex-col items-center gap-2 pt-10"
        style={{ color: theme.textVeryFaint }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.90rem",
            letterSpacing: "0.2em",
          }}
        >
          SCROLL
        </span>
        <div className="relative w-px h-12 overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to bottom, ${theme.textVeryFaint}, transparent)`,
            }}
          />
          {!shouldReduceMotion && (
            <motion.div
              className="absolute inset-x-0 top-0"
              style={{
                height: "60%",
                background: isDark
                  ? "linear-gradient(to bottom, transparent, #4080ff, transparent)"
                  : `linear-gradient(to bottom, transparent, ${theme.textSub}, transparent)`,
              }}
              animate={{ y: ["-100%", "220%"] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
          )}
        </div>
      </motion.div>
    </section>
  );
}
