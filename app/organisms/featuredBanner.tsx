import Image from 'next/image';
import { AdvancedTextBlock } from './advancedTextBlock';

type AdvancedTextData = {
    text: string;
    config?: {
        tag?: string;
        type?: any;
        textSize?: string;
        width?: string;
        color?: string;
        textAlign?: string;
        margin?: any;
    };
};

type SpacingConfig = {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
};

type FeaturedBannerProps = {
    heading?: AdvancedTextData;
    description?: AdvancedTextData;
    imageUrl?: string;
    imageFit?: string;
    imageScale?: string;
    objectPosition?: string;
    backgroundColor?: string;
    leftColumnMargin?: SpacingConfig;
    rightColumnMargin?: SpacingConfig;
};

export function FeaturedBanner({
    heading,
    description,
    imageUrl,
    backgroundColor,
    imageFit,
    imageScale,
    objectPosition,
    leftColumnMargin,
    rightColumnMargin,
}: FeaturedBannerProps) {

    const fitClass = imageFit || 'object-cover';
    const scaleClass = imageScale || 'w-full h-full';
    const ObjectPositionClass = objectPosition || 'object-center';

    const leftSpacing = [
        leftColumnMargin?.top,
        leftColumnMargin?.bottom,
        leftColumnMargin?.left,
        leftColumnMargin?.right
    ].filter(Boolean).join(' ');

    const rightSpacing = [
        rightColumnMargin?.top,
        rightColumnMargin?.bottom,
        rightColumnMargin?.left,
        rightColumnMargin?.right
    ].filter(Boolean).join(' ');

    return (
        <section className="container mx-auto px-6">
            <div
                className="flex flex-col md:flex-row items-stretch justify-between rounded-[2rem] overflow-hidden transition-all"
                style={{ backgroundColor: backgroundColor || 'var(--color-brand-purple, #c4b5fd)' }}
            >
                <div className={`w-full md:w-1/2 flex flex-col justify-center py-12 px-8 md:px-16 gap-4 ${leftSpacing}`}>
                    {heading?.text && <AdvancedTextBlock text={heading.text} config={heading.config} />}
                    {description?.text && <AdvancedTextBlock text={description.text} config={description.config} />}
                </div>
                <div className={`w-full md:w-1/2 relative min-h-[350px] flex items-center justify-center ${rightSpacing}`}>
                    {imageUrl ? (
                        <div className={`relative ${scaleClass} min-h-[300px] transition-all duration-300`}>
                            <Image
                                src={imageUrl}
                                alt={heading?.text || 'Featured Graphic'}
                                fill
                                className={`${fitClass} ${ObjectPositionClass} drop-shadow-2xl`}
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    ) : (
                        <div className="w-full h-full bg-white/20 border-l border-white/30 backdrop-blur-sm" />
                    )}
                </div>
            </div>
        </section>
    );
}