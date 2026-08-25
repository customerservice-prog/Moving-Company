import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

/**
   * A simple, consistent surface for grouping content. Intentionally plain:
 * a border and modest radius rather than heavy shadows, per the design system.
   */
export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
  <div
  className={cn(
  "rounded-xl border border-neutral-200 bg-white p-6 shadow-card",
  className
  )}
  {...props}
  />
  );
}
