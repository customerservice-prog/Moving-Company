import { type ButtonHTMLAttributes, forwardRef } from "react";
  import { cn } from "@/lib/utils/cn";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
size?: ButtonSize;
fullWidth?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
primary: "bg-brand-600 text-white hover:bg-brand-700 active:bg-brand-800",
  secondary: "bg-neutral-900 text-white hover:bg-neutral-800",
  outline: "border border-neutral-300 text-neutral-900 hover:bg-neutral-50",
  ghost: "text-neutral-700 hover:bg-neutral-100",
  };

const sizeStyles: Record<ButtonSize, string> = {
sm: "h-9 px-3 text-sm",
  md: "h-11 px-5 text-base",
  lg: "h-14 px-7 text-base",
  };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
function Button(
{ className, variant = "primary", size = "md", fullWidth, ...props },
ref
) {
return (
  <button
  ref={ref}
  className={cn(
  "inline-flex items-center justify-center rounded-lg font-medium transition-colors",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2",
  "disabled:cursor-not-allowed disabled:opacity-50",
  variantStyles[variant],
  sizeStyles[size],
  fullWidth && "w-full",
  className
  )}
  {...props}
/>
);
}
);
