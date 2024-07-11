import Image from "next/image";
import React from "react";

export default function LayoutAuth({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full min-h-screen flex-col items-center justify-center gap-3">
      <div className="flex items-center gap-3">
        <Image src={"/logo.svg"} alt="" width={50} height={50} priority />
        <h1 className="text-5xl font-black uppercase">Figboard</h1>
      </div>
      {children}
    </div>
  );
}
