import Link from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import { clsx, type ClassValue } from 'clsx';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const buttonVariants = cva(
    'rounded-full font-semibold transition-all inline-flex items-center justify-center',
    {
        variants: {
            variant: {
                primary: 'bg-white text-black hover:bg-gray-100 shadow-sm',
                secondary: 'bg-brand-purple text-white hover:bg-brand-purple/90',
                dark: 'bg-black text-white hover:bg-black/90 border border-white/20',
                outline: 'bg-transparent border-2 border-gray-200 text-black hover:border-gray-900',
            },
            size: {
                default: 'px-6 py-3 text-base',
                sm: 'px-4 py-2 text-sm',
                lg: 'px-8 py-4 text-lg',
            }
        },
        defaultVariants: {
            variant: 'primary',
            size: 'default',
        },
    }
);
interface ButtonBaseProps extends VariantProps<typeof buttonVariants> {
}
interface ButtonAsLinkProps extends ButtonBaseProps, React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
}

interface ButtonAsButtonProps extends ButtonBaseProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
    href?: never;
}

type ButtonProps = ButtonAsLinkProps | ButtonAsButtonProps;
export function Button({ variant, size, className, children, ...rest }: ButtonProps) {
    const combinedClasses = cn(buttonVariants({ variant, size }), className);
    if ('href' in rest && rest.href) {
        return (
            <Link href={rest.href} className={combinedClasses} {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
                {children}
            </Link>
        );
    }
    return (
        <button className={combinedClasses} {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
            {children}
        </button>
    );
}