import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'solid' | 'outline' | 'tertiary';
    children: ReactNode;
    className?: string;
}

export default function Button({ variant = 'solid', children, className = '', ...props }: ButtonProps) {
    const baseStyles = "transition-all duration-300 flex text-sm font-mono items-center justify-center rounded-full overflow-hidden";

    const variants = {
        solid: `bg-[#111111] text-white  px-4.5 py-2.5 uppercase hover:bg-[#FFE600] hover:text-black`,
        outline: `bg-transparent text-[#111111] hover:bg-[#FFE600] border border-black hover:border-[#FFE600] px-4.5 py-2.5 uppercase`,
        tertiary: `bg-gray-100 text-[#111111] px-4.5 py-2.5 uppercase`
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`.trim()}
            {...props}
        >
            {children}
        </button>
    );
}