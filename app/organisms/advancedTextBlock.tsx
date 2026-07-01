import Typography from '../atoms/typography';
import { ElementType } from 'react';

// Define the exact shape of the data coming from Sanity
type AdvancedTextProps = {
    text: string;
    config?: {
        tag?: string;
        type?: 'h1' | 'h2' | 'h3' | 'h5' | 'p' | 'body' | 'label' | 'span';
        textSize?: string;
        width?: string;
        color?: string;
        textAlign?: string;
        margin?: { top?: string; bottom?: string; left?: string; right?: string };
        padding?: { top?: string; bottom?: string; left?: string; right?: string };
        animateText?: boolean;
        dynamicStyle?: boolean;
    };
};

export function AdvancedTextBlock({ text, config }: AdvancedTextProps) {
    if (!text) return null;

    // Fallback defaults
    const tag = (config?.tag || 'p') as ElementType;
    const variant = config?.type || 'body';

    // 1. Dynamic Flex Alignment (The Fix)
    // This maps the text alignment to the flex container's justification to prevent layout breaks.
    const flexAlign =
        config?.textAlign === 'text-left' ? 'justify-start' :
            config?.textAlign === 'text-right' ? 'justify-end' :
                'justify-center';

    // 2. Wrapper Classes (Layout: Margins and Justification)
    const wrapperClasses = [
        'w-full flex',
        flexAlign,
        config?.margin?.top,
        config?.margin?.bottom,
        config?.margin?.left,
        config?.margin?.right,

        config?.padding?.top,
        config?.padding?.bottom,
        config?.padding?.left,
        config?.padding?.right
    ].filter(Boolean).join(' ');

    // 3. Text Classes (Style: Width, Color, Alignment, Size)
    // Width is now applied directly to the text node to maintain proper grid bounds.
    const textClasses = [
        config?.width || 'w-full',
        config?.color,
        config?.textAlign,
        config?.textSize
    ].filter(Boolean).join(' ');

    return (

        <Typography
            as={tag}
            variant={variant}
            className={`${textClasses} ${wrapperClasses}`}
            data-animate={config?.animateText ? 'true' : undefined}
        >
            {text}
        </Typography>
    );
}