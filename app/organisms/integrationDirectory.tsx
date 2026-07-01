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
        <section className="container mx-auto px-6 py-6">
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

                <aside className="w-full lg:w-64">
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

                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                    {integrationCards?.map((card, index) => (
                        <div
                            key={card._key || index}
                            className="border border-gray-200 p-8 bg-white flex flex-col items-start h-full"
                        >
                            <div className="h-14 w-14 relative mb-6 rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center p-2 border border-gray-100 shrink-0">
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

                            <div className="w-full flex-1 flex flex-col items-start justify-start">

                                <div className="w-full">
                                    {card.title?.text && (
                                        <AdvancedTextBlock text={card.title.text} config={card.title.config} />
                                    )}
                                </div>

                                <div className="py-6 w-full">
                                    {card.description?.text && (
                                        <AdvancedTextBlock text={card.description.text} config={card.description.config} />
                                    )}
                                </div>

                                <div className="flex flex-wrap gap-2 mt-4 w-full justify-start">
                                    {card.tags?.map((tag: string, i: number) => (
                                        <div key={i} className="bg-gray-100 text-gray-600 text-[9px] font-extrabold px-4 py-2 rounded-full uppercase tracking-widest justify-center">
                                            {tag}
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>
                    ))}


                </div>
            </div>
        </section>
    );
}