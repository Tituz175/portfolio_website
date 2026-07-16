import { createContext } from "react";
import type {
  Project,
  ResearchArea,
  Publication,
  SkillCategory,
  ExperienceEntry,
  EducationEntry,
  AboutContent,
} from "@prisma/client";

export interface SiteContent {
  about: AboutContent | null;
  projects: Project[];
  research: { areas: ResearchArea[]; publications: Publication[] };
  skills: SkillCategory[];
  experience: ExperienceEntry[];
  education: EducationEntry[];
}

export interface SiteContentContextType {
  content: SiteContent | null;
  loading: boolean;
  error: string | null;
}

export const SiteContentCtx = createContext<SiteContentContextType>({
  content: null,
  loading: true,
  error: null,
});
