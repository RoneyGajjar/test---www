import { ElementType, ComponentPropsWithoutRef, ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import { clsx, type ClassValue } from 'clsx';

// Utility for merging tailwind safely
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const typographyVariants = cva('', {
    variants: {
        variant: {
            h1: 'font-display text-4xl md:text-[3.5rem] font-bold tracking-[-0.01rem] leading-8 md:leading-[3.4rem]',
            h2: 'font-display text-1xl md:text-[2.4rem] font-bold tracking-tight leading-[3.4rem]',
            h3: 'font-display text-[2.2rem] md:text-[2.6rem] font-bold tracking-tight leading-[2.7rem]',
            h5: 'font-chip-text text-base md:text-[1.3rem] font-black tracking-[0.01rem]',
            span: 'font-chip-display text-[2rem] md:text-[1.7rem] leading-[1.2] font-regular tracking-tight',
            p: 'font-chip-text text-base md:text-base leading-[1.2] font-medium tracking-tight',
            body: 'font-chip-text text-xl md:text-[1.1rem] leading-[1.2] font-normal tracking-[0.002rem]',
            label: 'font-mono tracking-[0.01rem] text-gray-500 font-medium text-[14px] uppercase',
        },
    },
    defaultVariants: {
        variant: 'p',
    },
});

// 1. Dynamic Generic Interface
// <T extends ElementType> captures the exact HTML tag passed to 'as'
type TypographyProps<T extends ElementType> = {
    as?: T;
    children: ReactNode;
    className?: string;
} & VariantProps<typeof typographyVariants>
    & Omit<ComponentPropsWithoutRef<T>, 'as' | 'className' | 'variant'>;

// 2. Component Implementation with Generics
// Defaults to 'p' if no tag is provided
export default function Typography<T extends ElementType = 'p'>({
    variant,
    children,
    as,
    className,
    ...rest
}: TypographyProps<T>) {
    const Component = as || 'p';

    return (
        <Component
            className={cn(typographyVariants({ variant }), className)}
            // 3. Strict Casting
            // Forces TypeScript to accept the dynamic properties without union bleeding
            {...(rest as ComponentPropsWithoutRef<T>)}
        >
            {children}
        </Component>
    );
}