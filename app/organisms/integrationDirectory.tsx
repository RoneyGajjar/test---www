import Image from 'next/image';
import Typography from '../atoms/typography';
import Button from '../atoms/buttons';
import { MOCK_DATA, CATEGORIES } from '@/lib/integrationData';
import Link from 'next/link';
import { PromoBanner } from '../molecules/promoBanner';
import Section from '@/lib/components/misc/section';

export const IntegrationsDirectory = () => {
    return (
        <Section className='px-2 py-10 md:py-26'>
            <div className="w-full flex items-center justify-between mx-auto mb-16">
                <Typography variant="h3" as="h2" className="text-[#111111]">
                    All
                </Typography>
                <div className="flex items-center gap-2">
                    <Typography variant="label" as="span" className="text-gray-500">
                        SORT BY
                    </Typography>
                    <Button variant='outline'>
                        DATE
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </Button>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
                    <aside className="hidden md:flex flex-col w-65 shrink-0 ">
                        <ul className="flex flex-col space-y-1">
                            {CATEGORIES.map((category, index) => (
                                <li key={category}>
                                    <button
                                        className={`text-[16px] hover:text-black transition-colors ${index === 0 ? 'text-black font-semibold' : 'text-black font-medium'
                                            }`}
                                    >
                                        {category}
                                    </button>
                                </li>
                            ))}
                            <li>
                                <button className="text-[14px] text-gray-400 font-medium mt-2 hover:text-gray-600 transition-colors">
                                    + Load More
                                </button>
                            </li>
                        </ul>
                    </aside>
                    <div className="flex-1 flex flex-col">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {MOCK_DATA.map((item, i) => (
                                <Link
                                    href={`/integrations/${item.id}`}
                                    key={i}
                                    className="flex flex-col gap-y-5 p-8 border border-border-secondary aspect-square cursor-pointer bg-white "
                                >
                                    <div className="relative w-12 h-12 ">
                                        <Image
                                            src={item.iconUrl}
                                            alt={item.name}
                                            fill
                                            className="object-contain"
                                            priority={i < 3}
                                        />
                                    </div>
                                    <Typography variant="h5" as="h3" className="text-[#111111] leading-4">
                                        {item.name}
                                    </Typography>
                                    <Typography variant="body" as="p" className="text-black flex-1 text-[20px] leading-[1.4rem]">
                                        {item.description}
                                    </Typography>
                                    <div className="flex flex-wrap items-center gap-2">
                                        {item.tags.map((tag: string) => (
                                            <Button
                                                key={tag}
                                                variant='tertiary'
                                                className="px-4.5 py-2.5 bg-gray-100 rounded-full flex text-[14px] items-center justify-center"
                                            >
                                                {tag}
                                            </Button>
                                        ))}
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <PromoBanner />
                    </div>
                </div>
            </div>
        </Section>
    );
};