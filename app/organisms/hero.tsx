import { AdvancedTextBlock } from './advancedTextBlock';
import { Button } from '../atoms/buttons';

type HeroBlock = {
    _key: string;
    _type: 'advancedText' | 'searchBarBlock' | 'buttonBlock';
    [key: string]: any;
};

type HeroProps = {
    content?: HeroBlock[];
};

export function Hero({ content }: HeroProps) {
    if (!content || content.length === 0) return null;

    return (
        <section className="w-full flex flex-col">
            <div className="w-full flex flex-col items-center">
                {content.map((block) => {
                    switch (block._type) {
                        case 'advancedText':
                            return (
                                <AdvancedTextBlock
                                    key={block._key}
                                    text={block.text}
                                    config={block.config}
                                />
                            );

                        case 'searchBarBlock':
                            return (
                                <div key={block._key} className={`w-full ${block.maxWidth || 'max-w-2xl'}`}>
                                    <div className="flex items-center w-full bg-white border border-gray-200 h-10 rounded-full px-4 py-2 transition-all duration-200 hover:border-gray-300 focus-within:border-gray-400 focus-within:shadow-sm">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 mr-2">
                                            <circle cx="11" cy="11" r="8"></circle>
                                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                        </svg>
                                        <input
                                            type="text"
                                            placeholder={block.placeholder || "Search..."}
                                            className="flex-1 bg-transparent outline-none text-[#111111] placeholder-gray-400 text-[1rem]"
                                        />
                                    </div>
                                </div>
                            );

                        case 'buttonBlock':
                            return (
                                <Button
                                    key={block._key}
                                    href={block.href}
                                    variant={block.variant}
                                    size={block.size}
                                    className="mt-6 mx-6"
                                >
                                    {block.label}
                                </Button>
                            );

                        default:
                            console.warn(`Hero component missing mapping for block type: ${block._type}`);
                            return null;
                    }
                })}
            </div>
        </section>
    );
}