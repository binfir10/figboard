import Navbar from "@/components/navbar";
import React from "react";
import SidebarDesktop from "./components/sidebar-desktop";
import { Separator } from "@/components/ui/separator";
import { Toaster } from "@/components/ui/toaster";

export default function LayoutDashboard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid h-full min-h-full">
      <div className="hidden h-full w-80 border-border xl:fixed xl:block">
        <SidebarDesktop />
      </div>
      <div className="flex min-h-screen flex-col xl:ml-80">
        <Navbar />
        <main className="grow bg-secondary p-6 dark:bg-secondary/40">
          {children}
        </main>
        <Toaster />
      </div>
    </div>
  );
}
