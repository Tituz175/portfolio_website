import {
  Activity,
  Briefcase,
  Brain,
  Code2,
  Cpu,
  Database,
  FlaskConical,
  Globe,
  MessageSquare,
  Server,
  Star,
  type LucideIcon,
} from "lucide-react";

// Icons can't be stored in the database, so content rows reference them by
// name (e.g. "Briefcase") and this maps that name back to the component.
export const ICONS: Record<string, LucideIcon> = {
  Activity,
  Briefcase,
  Brain,
  Code2,
  Cpu,
  Database,
  FlaskConical,
  Globe,
  MessageSquare,
  Server,
  Star,
};

export function getIcon(name: string): LucideIcon {
  return ICONS[name] ?? Briefcase;
}
