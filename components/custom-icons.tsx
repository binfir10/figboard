import { CustomIconProps } from "@/types/types";
import React from "react";

export default function CustomIcons(props: CustomIconProps) {
  const { icon: Icon } = props;

  return (
    <div className="rounded-lg bg-secondary p-2 text-secondary-foreground">
      <Icon strokeWidth={1} className="h-4 w-4" />
    </div>
  );
}
