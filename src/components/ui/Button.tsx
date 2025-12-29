import * as React from "react";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default: "bg-orange-600 text-white hover:bg-orange-700 shadow-lg shadow-orange-900/20",
                destructive: "bg-red-500 text-destructive-foreground hover:bg-red-500/90",
                outline: "border border-stone-700 bg-transparent hover:bg-stone-800 text-stone-300",
                secondary: "bg-stone-800 text-stone-100 hover:bg-stone-700",
                ghost: "hover:bg-stone-800 hover:text-stone-100",
                link: "text-orange-500 underline-offset-4 hover:underline",
                premium: "bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:brightness-110 shadow-lg shadow-orange-500/25 border border-orange-400/20",
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8 text-base",
                icon: "h-10 w-10",
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
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        // Ideally we would use Radix Slot if installed, but for now standard button is fine.
        // I installed clsx/tailwind-merge/cva. I did not install @radix-ui/react-slot.
        // I will remove Slot imports and usage to avoid errors.
        const Comp = "button";
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
