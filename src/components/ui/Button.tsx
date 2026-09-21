import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "secondary";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-sans font-semibold uppercase tracking-wide rounded-sm transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-bright shadow-[0_0_0_0_rgba(47,107,255,0)] hover:shadow-[0_8px_30px_-8px_rgba(47,107,255,0.6)]",
  secondary:
    "border border-border bg-surface/40 text-white hover:border-primary-bright hover:bg-surface",
};

const sizes: Record<Size, string> = {
  md: "text-[13px] px-5 py-3",
  lg: "text-sm px-7 py-4",
};

export function buttonClasses(variant: Variant = "primary", size: Size = "md") {
  return `${base} ${variants[variant]} ${sizes[size]}`;
}

type ButtonProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
} & ComponentPropsWithoutRef<"button">;

/** Botão semântico (ação). Para navegação, use um `<a>` com `buttonClasses`. */
export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={`${buttonClasses(variant, size)} ${className ?? ""}`} {...props}>
      {children}
    </button>
  );
}
