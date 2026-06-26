import Section from '@/lib/components/misc/section';
import Typography from '../atoms/typography';

export default function HeroCentered() {
    return (
        <Section className='flex items-center justify-center flex-col align-center text-center pb-10 md:pb-22 mt-22' >
            <Typography
                variant="label"
                className="text-gray-500 mb-4 block font-mono text-[14px] tracking-[0.05em] uppercase font-bold"
            >
                integration Marketplace
            </Typography>
            <Typography
                variant="display"
                as="h1"
                className="font-display font-[900] text-[#111111]  mb-10"
            >
                Easily integrate your favorite <br className="hidden md:block" /> products and services
            </Typography>
            <div className="w-full max-w-2xl mx-auto">
                <div className="flex items-center w-full bg-white border border-gray-200 h-10 rounded-full px-4 py-2 transition-all duration-200 hover:border-gray-300 focus-within:border-gray-400 focus-within:shadow-sm">
                    <input
                        type="text"
                        placeholder="Search"
                        className="flex-1 bg-transparent outline-none text-[#111111] placeholder-gray-500 text-[1.05rem]"
                    />
                    <button
                        type="button"
                        aria-label="Submit Search"
                        className="ml-3 text-gray-500 hover:text-gray-900 transition-colors"
                    >
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </button>
                </div>
            </div>
        </Section>
    );
}