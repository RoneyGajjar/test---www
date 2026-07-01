import Image from 'next/image';
import { AdvancedTextBlock } from './advancedTextBlock';

type AdvancedTextData = {
    text: string;
    config?: { tag?: string; type?: any; textSize?: string; width?: string; color?: string; textAlign?: string; margin?: any; };
};

type IntegrationCard = {
    _key?: string;
    title?: AdvancedTextData;
    description?: AdvancedTextData;
    logoUrl?: string;
    tags?: string[];
};

type IntegrationDirectoryProps = {
    heading?: string;
    categories?: string[];
    sidebarGap?: string;
    integrationCards?: IntegrationCard[];
};

export function IntegrationDirectory({ heading, categories, sidebarGap, integrationCards }: IntegrationDirectoryProps) {

    const gapClass = sidebarGap || 'gap-4';

    return (
        <section className="container mx-auto px-6 py-24">
            <div className="flex justify-between items-end mb-16">
                <h2 className="text-4xl font-bold tracking-tight">{heading || 'All'}</h2>

                <div className="hidden md:flex items-center gap-3 text-xs font-bold tracking-widest text-gray-500 uppercase">
                    <span>Sort By</span>
                    <select className="border border-gray-200 rounded-full px-4 py-2 outline-none appearance-none bg-transparent cursor-pointer hover:border-gray-400 transition-colors">
                        <option>Date</option>
                        <option>Popular</option>
                    </select>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-16 items-start">

                {/* LEFT COLUMN: Categories Sidebar */}
                <aside className="w-full lg:w-64 shrink-0 sticky top-24">
                    <ul className={`flex flex-col ${gapClass} text-gray-600 font-medium`}>
                        <li>
                            <button className="text-black font-bold transition-colors text-left w-full">
                                All
                            </button>
                        </li>
                        {categories?.map((cat, index) => (
                            <li key={index}>
                                <button className="hover:text-black transition-colors text-left w-full">
                                    {cat}
                                </button>
                            </li>
                        ))}
                    </ul>
                </aside>

                {/* RIGHT COLUMN: Integration Cards Grid */}
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                    {integrationCards?.map((card, index) => (
                        <div
                            key={card._key || index}
                            // Polished Card Container
                            className="border border-gray-200 p-4 bg-white flex flex-col h-full"
                        >
                            {/* Polished Logo Container (matches design exactly) */}
                            <div className="h-14 w-14 relative rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center p-2 border border-gray-100">
                                {card.logoUrl ? (
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={card.logoUrl}
                                            alt={card.title?.text || 'Integration Logo'}
                                            fill
                                            className="object-contain"
                                            sizes="56px"
                                        />
                                    </div>
                                ) : (
                                    <div className="w-full h-full bg-gray-200 rounded-md" />
                                )}
                            </div>

                            {/* Card Text Content */}
                            <div className="mb-4">
                                {card.title?.text && (
                                    <AdvancedTextBlock text={card.title.text} config={card.title.config} />
                                )}
                            </div>

                            <div className="flex-1 mb-8">
                                {card.description?.text && (
                                    <AdvancedTextBlock text={card.description.text} config={card.description.config} />
                                )}
                            </div>

                            {/* Polished Card Tags (matches design exactly) */}
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {card.tags?.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="bg-[#F3F4F6] text-[#4B5563] text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wide cursor-default"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}