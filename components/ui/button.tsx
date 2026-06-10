import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-white hover:bg-primary/90 shadow-md hover:shadow-lg rounded-button",
        secondary: "bg-secondary text-white hover:bg-secondary/90 shadow-md hover:shadow-lg rounded-button",
        warm: "bg-warm text-white hover:bg-warm/90 shadow-md hover:shadow-lg rounded-button",
        outline: "border-2 border-primary text-primary hover:bg-primary-50 rounded-button",
        ghost: "hover:bg-primary-50 text-primary rounded-input",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 py-3 min-w-[44px]",
        sm: "h-10 px-4 min-w-[44px]",
        lg: "h-14 px-8 py-4 min-w-[44px] text-lg",
        icon: "h-11 w-11 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
