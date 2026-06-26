// components/organisms/Footer.tsx
"use client"
import Link from 'next/link';
import Image from 'next/image';

const FOOTER_LINKS = {
    col1: [
        {
            title: 'Computer',
            links: ['Meet Computer', 'How Computer works', 'Agent Studio'],
        },
        {
            title: 'Computer+ Apps',
            links: ['Support App', 'Build App', 'Observe App'],
        },
        {
            title: 'Use Cases',
            links: [
                'Service desk automation',
                'Support teams',
                'Operations teams',
                'Customer support resolution',
                'Sales teams',
            ],
        },
    ],
    col2: [
        {
            title: 'Our customers',
            links: ['Customer stories'],
        },
        {
            title: 'Resources',
            links: ['Pricing', 'Blog', 'Marketplace', 'Documentation', 'API references'],
        },
        {
            title: 'Company',
            links: ['About us', 'Events', 'Careers', 'Contact us'],
        },
        {
            title: 'Initiatives',
            links: ['Partner Program', 'Startups Program', 'Gr.ai.ce'],
        },
    ],
    legal: ['Security', 'SLA', 'DPA', 'Subprocessors', 'Cookie Policy', 'Privacy Policy', 'Terms of Service'],
};

export const Footer = () => {
    return (
        <footer className="w-full bg-[#18181b] text-white pt-20 pb-12 px-6">
            <div className="max-w-[85rem] mx-auto w-full">

                {/* TOP SECTION: 4-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-6">

                    {/* Column 1: Logo */}
                    <div className="lg:col-span-3">
                        <Link href="/" className="flex items-center gap-2">
                            <Image
                                src="/logos/logo.png"
                                alt="DevRev Logo"
                                width={150}
                                height={40}
                                priority
                                className="object-contain"
                            />
                        </Link>
                    </div>

                    {/* Column 2: Computer & Apps & Use Cases */}
                    <div className="lg:col-span-3 flex flex-col gap-8">
                        {FOOTER_LINKS.col1.map((section) => (
                            <div key={section.title}>
                                <h4 className="text-[14px] font-semibold text-white mb-3">{section.title}</h4>
                                <ul className="flex flex-col gap-2.5">
                                    {section.links.map((link) => (
                                        <li key={link}>
                                            <Link href="#" className="text-[14px] text-gray-400 hover:text-white transition-colors">
                                                {link}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Column 3: Customers, Resources, Company, Initiatives */}
                    <div className="lg:col-span-3 flex flex-col gap-8">
                        {FOOTER_LINKS.col2.map((section) => (
                            <div key={section.title}>
                                <h4 className="text-[14px] font-semibold text-white mb-3">{section.title}</h4>
                                <ul className="flex flex-col gap-2.5">
                                    {section.links.map((link) => (
                                        <li key={link}>
                                            <Link href="#" className="text-[14px] text-gray-400 hover:text-white transition-colors">
                                                {link}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Column 4: Social, Newsletter, Legal */}
                    <div className="lg:col-span-3 flex flex-col gap-8">

                        {/* Social Icons */}
                        <div>
                            <h4 className="text-[14px] font-semibold text-white mb-4">Follow Us</h4>
                            <div className="flex items-center gap-4 text-gray-400">
                                {/* LinkedIn */}
                                <a href="#" className="hover:text-white transition-colors">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                </a>
                                {/* YouTube */}
                                <a href="#" className="hover:text-white transition-colors">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                                    </svg>
                                </a>
                                {/* X / Twitter */}
                                <a href="#" className="hover:text-white transition-colors">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                    </svg>
                                </a>
                                {/* Instagram */}
                                <a href="#" className="hover:text-white transition-colors">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Newsletter */}
                        <div>
                            <h4 className="text-[14px] font-semibold text-white mb-3">Newsletter</h4>
                            <form className="relative w-full max-w-[18rem]" onSubmit={(e) => e.preventDefault()}>
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="w-full bg-[#18181b] border border-[#333333] rounded-full py-2.5 pl-4 pr-[100px] text-[13px] text-white placeholder-gray-500 focus:outline-none focus:border-gray-400 transition-colors"
                                />
                                <button
                                    type="submit"
                                    className="absolute right-1 top-1 bottom-1 bg-white text-black text-[10px] font-bold tracking-widest uppercase px-4 rounded-full hover:bg-gray-200 transition-colors"
                                >
                                    Sign Up
                                </button>
                            </form>
                        </div>

                        {/* Legal */}
                        <div>
                            <h4 className="text-[14px] font-semibold text-white mb-3">Legal</h4>
                            <ul className="flex flex-col gap-2.5">
                                {FOOTER_LINKS.legal.map((link) => (
                                    <li key={link}>
                                        <Link href="#" className="text-[14px] text-gray-400 hover:text-white transition-colors">
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>

                {/* DIVIDER */}
                <div className="w-full h-px bg-[#333333] my-10"></div>

                {/* BOTTOM SECTION */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-6 items-start">

                    {/* Empty Space to align with Logo column above */}
                    <div className="hidden lg:block lg:col-span-3"></div>

                    {/* Language */}
                    <div className="lg:col-span-3">
                        <h4 className="text-[14px] font-semibold text-white mb-1.5">Language</h4>
                        <button className="flex items-center gap-1.5 text-[14px] text-gray-400 hover:text-white transition-colors">
                            English
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </button>
                    </div>

                    {/* Status */}
                    <div className="lg:col-span-3">
                        <h4 className="text-[14px] font-semibold text-white mb-1.5">Status</h4>
                        <div className="flex items-center gap-2 text-[14px] text-gray-400">
                            <span className="w-2 h-2 rounded-full bg-[#34C759]"></span>
                            All services online
                        </div>
                    </div>

                    {/* Certified Secure */}
                    <div className="lg:col-span-3">
                        <h4 className="text-[14px] font-semibold text-white">Certified Secure</h4>
                    </div>

                </div>

            </div>
        </footer>
    );
};