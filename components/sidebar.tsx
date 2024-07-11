"use client";
import {
  dataGeneralSidebar,
  dataSupportSidebar,
  dataToolsSidebar,
} from "./sidebar.data";
import SidebarItem from "./sidebar-item";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export function SidebarLeft() {
  return (
    <aside className="flex h-full flex-col justify-between">
      <div>
        <div className="p-2 md:p-6">
          <span className="text-lg font-semibold uppercase text-muted-foreground underline underline-offset-4">
            General
          </span>
          {dataGeneralSidebar.map((item) => (
            <SidebarItem key={item.label} item={item} />
          ))}
        </div>

        <Separator className="w-full" />

        <div className="p-2 md:p-6">
          <span className="text-lg font-semibold uppercase text-muted-foreground underline underline-offset-4">
            Tools
          </span>
          {dataToolsSidebar.map((item) => (
            <SidebarItem key={item.label} item={item} />
          ))}
        </div>

        <Separator />

        <div className="p-2 md:p-6">
          <span className="text-lg font-semibold uppercase text-muted-foreground underline underline-offset-4">
            Support
          </span>
          {dataSupportSidebar.map((item) => (
            <SidebarItem key={item.label} item={item} />
          ))}
        </div>
      </div>

      <div>
        <div className="p-6 text-center">
          <Button variant={"outline"} className="w-full">
            Upgrade Plan
          </Button>
        </div>
        <Separator />
        <footer className="mt-3 p-3 text-center">
          {new Date().getFullYear()}. All rights reserved
        </footer>
      </div>
    </aside>
  );
}
