import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react'; // Only keeping the UI icon from Lucide

// --- Custom SVG Icons to replace the removed Lucide Brand Icons ---
const LinkedinIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
    </svg>
);

const YoutubeIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M2.5 7.1C2 8.6 2 12 2 12s0 3.4.5 4.9c.3 1.2 1.3 2.1 2.5 2.4C8 20 12 20 12 20s4 0 7-.6c1.2-.3 2.2-1.2 2.5-2.4.5-1.5.5-4.9.5-4.9s0-3.4-.5-4.9c-.3-1.2-1.3-2.1-2.5-2.4C16 4 12 4 12 4s-4 0-7 .6c-1.2.3-2.2 1.2-2.5 2.4z" /><path d="m10 15 5-3-5-3v6z" />
    </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
);
// ------------------------------------------------------------------

export function Footer({ logoUrl, linkGroups, newsletter, bottomBar }: any) {
    return (
        <footer className="bg-[#151515] text-white pt-20 pb-8 w-full border-t border-gray-800">
            <div className="max-w-[1440px] mx-auto px-6">

                {/* TOP SECTION: 4 Columns Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

                    {/* Col 1: Logo */}
                    <div>
                        {logoUrl ? (
                            <div className="relative w-32 h-8">
                                <Image src={logoUrl} alt="Logo" fill className="object-contain object-left" />
                            </div>
                        ) : (
                            <div className="text-2xl font-bold tracking-tighter">DevRev</div>
                        )}
                    </div>

                    {/* Col 2 & Col 3: Link Groups mapped dynamically */}
                    <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-12">
                        {linkGroups?.map((group: any, index: number) => (
                            <div key={index} className="flex flex-col gap-4">
                                <h4 className="text-[15px] font-medium text-white">{group.heading}</h4>
                                <ul className="flex flex-col gap-3">
                                    {group.links?.map((link: any, i: number) => (
                                        <li key={i}>
                                            <Link href={link.url || '#'} className="text-[14px] text-gray-400 hover:text-white transition-colors">
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Col 4: Socials, Newsletter, Legal */}
                    <div className="flex flex-col gap-10">
                        {/* Socials */}
                        <div>
                            <h4 className="text-[15px] font-medium text-white mb-4">Follow Us</h4>
                            <div className="flex items-center gap-4 text-gray-400">
                                <a href="#" className="hover:text-white transition-colors"><LinkedinIcon className="w-5 h-5" /></a>
                                <a href="#" className="hover:text-white transition-colors"><YoutubeIcon className="w-5 h-5" /></a>
                                <a href="#" className="hover:text-white transition-colors"><TwitterIcon className="w-5 h-5" /></a>
                                <a href="#" className="hover:text-white transition-colors"><InstagramIcon className="w-5 h-5" /></a>
                            </div>
                        </div>

                        {/* Newsletter */}
                        <div>
                            <h4 className="text-[15px] font-medium text-white mb-4">{newsletter?.heading || 'Newsletter'}</h4>
                            <div className="flex items-center bg-[#1a1a1a] border border-gray-700 rounded-full p-1 focus-within:border-gray-500 transition-colors">
                                <input
                                    type="email"
                                    placeholder={newsletter?.placeholder || 'Your email'}
                                    className="bg-transparent flex-1 pl-4 text-sm text-white outline-none placeholder:text-gray-500"
                                />
                                <button className="bg-white text-black text-[11px] font-bold tracking-widest uppercase px-6 py-2.5 rounded-full hover:bg-gray-200 transition-colors shrink-0">
                                    {newsletter?.buttonText || 'SIGN UP'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* BOTTOM SECTION: Legal & Status */}
                <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">

                    {/* Language Selection */}
                    <div className="flex flex-col gap-1">
                        <span className="text-white font-medium">Language</span>
                        <button className="flex items-center gap-1 hover:text-white transition-colors">
                            {bottomBar?.language || 'English'} <ChevronDown className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Status */}
                    <div className="flex flex-col gap-1 md:items-center">
                        <span className="text-white font-medium">Status</span>
                        <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-green-500 shrink-0"></span>
                            <span>{bottomBar?.statusText || 'All services online'}</span>
                        </div>
                    </div>

                    {/* Certification */}
                    <div className="flex flex-col gap-1 md:items-end">
                        <span className="text-white font-medium">Certified Secure</span>
                    </div>

                </div>
            </div>
        </footer>
    );
}