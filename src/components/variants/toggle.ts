import { cva } from "class-variance-authority";

export const toggleVariants = cva(
  "inline-flex items-center justify-center rounded text-sm font-medium transition-colors hover:bg-primary/40 hover:text-secondary-foreground focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-primary/80 data-[state=on]:text-secondary-foreground",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline:
          "border bg-transparent hover:bg-secondary/60 hover:text-secondary-foreground",
      },
      size: {
        sm: "size-8",
        md: "size-9",
        lg: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);
