interface Tok {
  bg: string;
  text: string;
  textSub: string;
  textMuted: string;
  textFaint: string;
  textVeryFaint: string;
  textDim: string;
  card: string;
  cardHover: string;
  border: string;
  borderHover: string;
  borderStrong: string;
  tagBg: string;
  tagBorder: string;
  tagBorderHover: string;
  navBg: string;
  navBorder: string;
  mobileBg: string;
  gridOpacity: number;
  orb1: string;
  orb2: string;
  orb3: string;
  heroGradient: string;
  timelineRail: string;
}

const DARK: Tok = {
  bg: "#08080e",
  text: "#e8e8f2",
  textSub: "rgba(232,232,242,0.80)",
  textMuted: "rgba(232,232,242,0.68)",
  textFaint: "rgba(232,232,242,0.52)",
  textVeryFaint: "rgba(232,232,242,0.51)",
  textDim: "rgba(232,232,242,0.50)",
  card: "rgba(255,255,255,0.03)",
  cardHover: "rgba(255,255,255,0.05)",
  border: "rgba(255,255,255,0.08)",
  borderHover: "rgba(255,255,255,0.16)",
  borderStrong: "rgba(255,255,255,0.28)",
  tagBg: "rgba(255,255,255,0.04)",
  tagBorder: "rgba(255,255,255,0.05)",
  tagBorderHover: "rgba(255,255,255,0.13)",
  navBg: "rgba(8,8,14,0.86)",
  navBorder: "rgba(255,255,255,0.06)",
  mobileBg: "rgba(8,8,14,0.97)",
  gridOpacity: 0.028,
  orb1: "rgba(64,128,255,0.18)",
  orb2: "rgba(124,92,252,0.14)",
  orb3: "rgba(6,182,212,0.10)",
  heroGradient: "linear-gradient(135deg,#ffffff 0%,#b0ccff 45%,#c4aeff 100%)",
  timelineRail: "linear-gradient(to bottom,rgba(64,128,255,0.5),rgba(255,255,255,0.06) 60%,transparent)",
};

const LIGHT: Tok = {
  bg: "#f4f4f9",
  text: "#0d0d1a",
  textSub: "rgba(13,13,26,0.72)",
  textMuted: "rgba(13,13,26,0.64)",
  textFaint: "rgba(13,13,26,0.62)",
  textVeryFaint: "rgba(13,13,26,0.60)",
  textDim: "rgba(13,13,26,0.58)",
  card: "rgba(255,255,255,0.72)",
  cardHover: "rgba(255,255,255,0.92)",
  border: "rgba(0,0,0,0.08)",
  borderHover: "rgba(0,0,0,0.17)",
  borderStrong: "rgba(0,0,0,0.26)",
  tagBg: "rgba(0,0,0,0.04)",
  tagBorder: "rgba(0,0,0,0.07)",
  tagBorderHover: "rgba(0,0,0,0.18)",
  navBg: "rgba(244,244,249,0.88)",
  navBorder: "rgba(0,0,0,0.07)",
  mobileBg: "rgba(244,244,249,0.98)",
  gridOpacity: 0.055,
  orb1: "rgba(64,128,255,0.13)",
  orb2: "rgba(124,92,252,0.10)",
  orb3: "rgba(6,182,212,0.08)",
  heroGradient: "linear-gradient(135deg,#0d0d1a 0%,#1a3e9a 52%,#5533c0 100%)",
  timelineRail: "linear-gradient(to bottom,rgba(64,128,255,0.45),rgba(0,0,0,0.06) 60%,transparent)",
};

export { DARK, LIGHT };
export type { Tok };
