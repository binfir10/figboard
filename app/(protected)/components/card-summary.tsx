import { CardSummaryProps } from "@/types/types";
import React from "react";
import CustomIcons from "../../../components/custom-icons";
import CustomTooltip from "@/components/custom-tooltip";
import { cn } from "@/lib/utils";
import { MoveDownRight, MoveUpRight, TrendingUp } from "lucide-react";

export default function CardSummary({
  average,
  icon,
  title,
  tooltipText,
  total,
}: CardSummaryProps) {
  return (
    <article className="rounded-lg bg-background p-5 py-3 shadow-md transition hover:shadow-lg">
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <CustomIcons icon={icon} />
          {title}
        </div>

        <CustomTooltip content={tooltipText} />
      </div>
      <div className="mt-2 flex gap-4 md:mt-4">
        <p className="text-3xl font-bold">{total}</p>
        <div
          className={cn(
            `flex h-6 items-center gap-1 rounded-lg bg-foreground px-2 text-xs text-background`,
          )}
        >
          {average}%
          {average < 20 ? (
            <MoveDownRight
              strokeWidth={2}
              className="h-4 w-4 stroke-background"
            />
          ) : average < 70 ? (
            <MoveUpRight
              strokeWidth={2}
              className="h-4 w-4 stroke-background"
            />
          ) : (
            <TrendingUp strokeWidth={2} className="h-4 w-4 stroke-background" />
          )}
        </div>
      </div>
    </article>
  );
}
