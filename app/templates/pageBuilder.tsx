import React from 'react';
import { Hero } from '../organisms/hero';
import { AdvancedTextBlock } from '../organisms/advancedTextBlock';
import { FeaturedBanner } from '../organisms/featuredBanner';
import { IntegrationDirectory } from '../organisms/integrationDirectory';
import { IntegrationCTA } from '../organisms/integrationCTA';

const blockComponents = {
    hero: Hero,
    advancedText: AdvancedTextBlock,
    featuredBanner: FeaturedBanner,
    integrationDirectory: IntegrationDirectory,
    integrationCTA: IntegrationCTA
};

type Block = { _key: string; _type: string;[key: string]: any };

export function PageBuilder({ blocks }: { blocks: Block[] }) {
    if (!blocks || blocks.length === 0) return null;

    return (
        <div className="flex flex-col gap-y-24 py-24">
            {blocks.map((block) => {
                const Component = blockComponents[block._type as keyof typeof blockComponents] as React.ElementType;
                if (!Component) {
                    console.warn(`Missing mapped component for: ${block._type}`);
                    return null;
                }
                return <Component key={block._key} {...block} />;
            })}
        </div>
    );
}