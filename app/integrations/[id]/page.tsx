// app/integrations/[id]/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { PortableText, PortableTextComponents } from '@portabletext/react';
import Typography from '@/app/atoms/typography';
import Navbar from '@/app/organisms/navbar';
import { Footer } from '@/app/organisms/footer';
import { MOCK_DB } from '@/lib/mockdb';
import Section from '@/lib/components/misc/section';
import Button from '@/app/atoms/buttons';


const portableTextComponents: PortableTextComponents = {
    block: {
        normal: ({ children }) => (
            <Typography variant="body" as="p" className="text-gray-600 text-[18px] leading-[1.2]">
                {children}
            </Typography>
        ),
        h2: ({ children }) => (
            <Typography variant="h3" as="h2" className="text-[#111111] mb-12 mt-12">
                {children}
            </Typography>
        ),
        h3: ({ children }) => (
            <Typography variant="h5" as="h3" className="text-[#111111] mb-6 mt-12">
                {children}
            </Typography>
        ),
    },
};

// 1. Notice the 'async' keyword and the Promise type
export default async function AppDetailPage({ params }: { params: Promise<{ id: string }> }) {

    // 2. Await the params object before extracting the ID (Required for Next.js 15+)
    const resolvedParams = await params;
    const currentId = resolvedParams.id;

    // Fetch the data based on the URL ID
    const appData = MOCK_DB[currentId];

    // Fallback UI
    if (!appData) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-white text-[#111111]">
                <Typography variant="h3" as="h1" className="mb-4">Integration not found</Typography>
                <p className="text-gray-500 mb-8">We couldn't find an integration with the ID: {currentId}</p>
                <Link href="/" className="px-6 py-2 bg-gray-100 rounded-full font-medium hover:bg-gray-200 transition-colors">
                    Go Back
                </Link>
            </div>
        );
    }

    // Main UI
    return (
        <>

            <Navbar />
            <Section>
                <main className="min-h-screen bg-white w-full flex flex-col items-center pb-24">
                    <div className="px-6 pt-12 md:pt-16">

                        <Link
                            href="/"
                            className="flex items-center text-sm font-medium text-gray-600 hover:text-black transition-colors mb-4"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                                <polyline points="15 18 9 12 15 6"></polyline>
                            </svg>
                            Browse Snap-ins
                        </Link>

                        <div className="flex flex-col md:flex-row gap-6 md:gap-10 mb-14">
                            <div className="w-32 h-32 md:w-51 md:h-51 shrink-0 border border-gray-100 rounded-3xl flex items-center justify-center p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                                <div className="relative w-full h-full">
                                    <Image src={appData.iconUrl} alt={appData.name} fill className="object-contain" />
                                </div>
                            </div>

                            <div className="flex-1 flex flex-col justify-between py-2">
                                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                                    <div>
                                        <Typography variant="h3" as="h1" className="text-[#111111] mb-1">
                                            {appData.name}
                                        </Typography>
                                        <Typography variant="body" as="p" className="text-gray-500 text-[15px]">
                                            By {appData.developer}. <br />
                                            {appData.shortDescription}
                                        </Typography>
                                    </div>

                                    <div className="flex flex-wrap items-center gap-3">
                                        <Button variant='solid' className='bg-plumPurple' >
                                            Open in Computer
                                        </Button>
                                        <Button variant='outline' >
                                            Learn More
                                        </Button>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-col-2 gap-8 mt-8">
                                    <div>
                                        <span className="text-[13px] font-semibold text-[#111111] block">Learn more & Support</span>
                                        <div className="flex flex-wrap gap-4 text-[13px] font-medium text-[#6B38FB]">
                                            <a href="#" className="flex items-center hover:underline">
                                                Developer website <span className="ml-1 text-[10px]">↗</span>
                                            </a>
                                            <a href="#" className="flex items-center hover:underline">
                                                Documentation <span className="ml-1 text-[10px]">↗</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="text-[13px] font-semibold text-[#111111] block mb-2">Categories</span>
                                        <div className="flex flex-wrap gap-2">
                                            {appData.categories?.map((tag: string) => (
                                                <Typography key={tag} variant="label" as="span" className="px-3 py-1 bg-gray-100 rounded-full text-[10px]">
                                                    {tag}
                                                </Typography>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="aspect-[16/9] md:aspect-[2.2/1] bg-[#7B46F6] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden relative mb-12 flex items-center justify-center shadow-sm">
                            <Image
                                src={appData.heroMockupUrl}
                                alt="App Interface Mockup"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        <div className="max-w-[58rem] mx-auto">
                            <PortableText
                                value={appData.bodyContent}
                                components={portableTextComponents}
                            />
                        </div>

                    </div>
                </main>
            </Section>
            <Footer />
        </>

    );
}