import * as React from "react";
import { cn } from "@/lib/utils";

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "success" | "error";
}

const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const variantStyles = {
      default: "bg-white border-gray-300",
      success: "bg-secondary-50 border-secondary-300",
      error: "bg-red-50 border-red-300",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "pointer-events-auto w-full max-w-sm rounded-lg border-2 p-4 shadow-lg",
          variantStyles[variant],
          className
        )}
        {...props}
      />
    );
  }
);
Toast.displayName = "Toast";

export { Toast };
