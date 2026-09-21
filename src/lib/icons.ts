import {
  Search,
  BookOpen,
  FolderOpen,
  Zap,
  PenLine,
  Settings,
  GraduationCap,
  FlaskConical,
  Rocket,
  Briefcase,
  Wrench,
  Users,
  Lightbulb,
  Clock,
  Target,
  BadgeCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

/**
 * Mapa tipado nome→componente de ícone (lucide-react). Centraliza os
 * ícones usados nas seções orientadas a dados (Practice, Audience,
 * Benefits), mantendo tudo tree-shakeable e sem `any`.
 *
 * Para usar um ícone novo em site.ts, importe-o aqui e adicione ao mapa.
 */
const iconMap: Record<string, LucideIcon> = {
  Search,
  BookOpen,
  FolderOpen,
  Zap,
  PenLine,
  Settings,
  GraduationCap,
  FlaskConical,
  Rocket,
  Briefcase,
  Wrench,
  Users,
  Lightbulb,
  Clock,
  Target,
  BadgeCheck,
  Sparkles,
};

/** Retorna o ícone pelo nome, com fallback seguro. */
export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Sparkles;
}
