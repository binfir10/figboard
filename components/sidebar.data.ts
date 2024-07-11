import {
  BarChart4,
  Building2,
  Calendar,
  CircleHelpIcon,
  PanelsTopLeft,
  Settings,
  ShieldCheck,
} from "lucide-react";

export const dataGeneralSidebar = [
  {
    icon: PanelsTopLeft,
    label: "Dashboard",
    href: "/",
  },
  {
    icon: Building2,
    label: "Empresas",
    href: "/companies",
  },
  {
    icon: Calendar,
    label: "Calendario",
    href: "/task",
  },
];

export const dataToolsSidebar = [
  {
    icon: CircleHelpIcon,
    label: "Faqs",
    href: "/faqs",
  },
  {
    icon: BarChart4,
    label: "Analytics",
    href: "/analytics",
  },
];

export const dataSupportSidebar = [
  {
    icon: Settings,
    label: "Configuración",
    href: "/settings",
  },
  {
    icon: ShieldCheck,
    label: "Seguridad",
    href: "/security",
  },
];
