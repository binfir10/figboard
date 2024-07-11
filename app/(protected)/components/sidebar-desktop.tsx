import { SidebarLeft } from "@/components/sidebar";
import Logo from "./logo";

export default function SidebarDesktop() {
  return (
    <aside className="h-screen">
      <div className="flex h-full flex-col text-center">
        <Logo />
        <SidebarLeft />
      </div>
    </aside>
  );
}
