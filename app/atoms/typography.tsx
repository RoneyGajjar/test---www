import { ElementType, ReactNode } from 'react';

type TypographyVariant = 'display' | 'h1' | 'h2' | 'h3' | 'h5' | 'p' | 'body' | 'label' | 'span';

interface TypographyProps {
    variant: TypographyVariant;
    children: ReactNode;
    as?: ElementType;
    className?: string;
}

const variantStyles: Record<TypographyVariant, string> = {
    display: 'font-display text-4xl md:text-[3.5rem] font-bold tracking-[-0.01rem] leading-8 md:leading-[3.4rem]',
    h1: 'font-display text-4xl md:text-5xl font-bold tracking-tight leading-tight',
    h2: 'font-display text-1xl md:text-[3.4rem] font-bold tracking-tight leading-[3.4rem]',
    h3: 'font-display text-[2.2rem] md:text-[2.6rem] font-bold tracking-tight leading-[2.7rem]',
    h5: 'font-chip-text text-base md:text-[1.3rem] font-black tracking-[0.01rem]',
    span: 'font-chip-display text-[2rem] md:text-[1.7rem] leading-[1.2] font-regular tracking-tight',
    p: 'font-chip-text text-xl md:text-[1.1rem] leading-[1.2] font-bold tracking-tight',
    body: 'font-chip-text text-xl md:text-[1.1rem] leading-[1.2] font-normal tracking-[0.002rem]',
    label: 'font-mono tracking-[0.01rem] text-gray-500 font-medium text-[14px] uppercase ',
};

export default function Typography({ variant, children, as, className = '' }: TypographyProps) {
    const Component = as || 'p';
    const baseStyle = variantStyles[variant];

    return (
        <Component className={`${baseStyle} ${className}`.trim()}>
            {children}
        </Component>
    );
}