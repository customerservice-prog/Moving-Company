import { type InputHTMLAttributes, forwardRef, useId } from "react";
  import { cn } from "@/lib/utils/cn";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
helperText?: string;
errorText?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
function Input({ className, label, helperText, errorText, id, ...props }, ref) {
const generatedId = useId();
const inputId = id ?? generatedId;

return (
<div className="w-full">
{label ? (
<label htmlFor={inputId} className="label-text mb-1.5 block">
{label}
</label>
) : null}
<input
ref={ref}
id={inputId}
aria-invalid={errorText ? true : undefined}
aria-describedby={errorText ? `${inputId}-error` : undefined}
className={cn(
"h-12 w-full rounded-lg border border-neutral-300 bg-white px-4 text-base text-neutral-900",
"placeholder:text-neutral-400",
"focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500",
errorText && "border-error-500 focus:ring-error-500 focus:border-error-500",
className
)}
{...props}
/>
{errorText ? (
<p id={`${inputId}-error`} className="mt-1.5 text-sm text-error-500">
{errorText}
</p>
) : helperText ? (
<p className="helper-text mt-1.5">{helperText}</p>
) : null}
</div>
);
}
);
