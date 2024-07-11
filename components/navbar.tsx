import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu, Search } from "lucide-react";
import { Input } from "./ui/input";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { SidebarLeft } from "./sidebar";
import { ModeToggle } from "./toogle-mode";
import { auth } from "@clerk/nextjs/server";

export default function Navbar() {
  const { userId } = auth();
  return (
    <header className="flex h-20 items-center justify-between gap-x-4 border-b bg-background px-2 md:px-6">
      <div className="block xl:hidden">
        <Sheet>
          <SheetTrigger className="flex items-center" asChild>
            <Menu />
          </SheetTrigger>
          <SheetContent side={"left"}>
            <SidebarLeft />
          </SheetContent>
        </Sheet>
      </div>
      <div className="relative w-80">
        <Input placeholder="Search..." className="rounded-lg" />
        <Search strokeWidth={1} className="absolute right-2 top-2" />
      </div>
      <div className="flex items-center gap-x-2">
        <ModeToggle />
        <div className="flex aspect-auto">
          {userId ? <UserButton /> : <SignInButton />}
        </div>
      </div>
    </header>
  );
}
