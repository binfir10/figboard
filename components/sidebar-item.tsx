"use client";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type SideBarItemProps = {
  item: {
    label: string;
    icon: LucideIcon;
    href: string;
  };
  key: string;
};

export default function SidebarItem({ item }: SideBarItemProps) {
  const { href, icon: Icon, label } = item;

  const pathname = usePathname();

  const activePath = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        `mt-2 flex cursor-pointer items-center gap-x-2 rounded-lg p-2 text-sm text-foreground hover:bg-secondary/80`,
        activePath && "bg-secondary",
      )}
    >
      <Icon className="h-5 w-5" strokeWidth={1} />
      <span className="font-medium">{label}</span>
    </Link>
  );
}
