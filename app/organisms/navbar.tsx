// import Link from 'next/link';
// import Image from 'next/image';
// import Button from '../atoms/buttons';

// export default function Navbar() {
//     const navLinks = ['Products', 'Use cases', 'Resources', 'Our customers'];
//     return (
//         <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">
//             <nav className="w-full flex items-center justify-between px-4 py-6 max-w-[91rem] mx-auto">

//                 <div className="flex items-center">
//                     <Link href="/" className="flex items-center gap-2">
//                         <Image
//                             src="/logos/logo.png"
//                             alt="DevRev Logo"
//                             width={150}
//                             height={40}
//                             priority
//                             className="object-contain"
//                         />
//                     </Link>
//                     <div className="hidden lg:flex items-center space-x-8">
//                         {navLinks.map((item) => (
//                             <Link
//                                 key={item}
//                                 href={`#${item.toLowerCase().replace(' ', '-')}`}
//                                 className="flex items-center gap-1 text-[#111111] font-sans font-[500] text-[0.95rem] hover:text-gray-500 transition-colors"
//                             >
//                                 {item}
//                                 <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-60">
//                                     <polyline points="6 9 12 15 18 9"></polyline>
//                                 </svg>
//                             </Link>
//                         ))}
//                     </div>
//                 </div>


//                 <div className="flex items-center gap-3">
//                     <Button variant="outline">
//                         <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                             <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
//                             <circle cx="12" cy="7" r="4"></circle>
//                         </svg>
//                     </Button>
//                     <Button variant="outline" className="hidden sm:flex">
//                         Book a demo
//                     </Button>
//                     <Button variant="solid" className="hidden md:flex">
//                         Sign Up
//                     </Button>

//                 </div>
//             </nav>
//         </header>
//     );
// }


import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, User } from 'lucide-react';
import { Button } from '../atoms/buttons';

export function Navbar({ logoUrl, navItems, buttons }: any) {
    return (
        <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
            <div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">

                {/* 1. LEFT SIDE: Logo + Nav Items grouped together */}
                <div className="flex items-center gap-10">
                    <Link href="/" className="relative w-32 h-8 shrink-0">
                        {logoUrl ? (
                            <Image src={logoUrl} alt="Logo" fill className="object-contain object-left" />
                        ) : (
                            <div className="text-2xl font-bold tracking-tighter">DevRev</div>
                        )}
                    </Link>

                    <nav className="hidden lg:flex items-center gap-8">
                        {navItems?.map((item: any, index: number) => {
                            const hasDropdown = item.dropdownItems && item.dropdownItems.length > 0;
                            const targetUrl = item.url || item.href;

                            return (
                                <div key={index} className="group cursor-pointer flex items-center gap-1 text-[15px] font-medium text-gray-800 hover:text-black transition-colors">
                                    {targetUrl ? (
                                        <Link href={targetUrl}>{item.label}</Link>
                                    ) : (
                                        <span>{item.label}</span>
                                    )}
                                    {hasDropdown && <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-black" />}
                                </div>
                            );
                        })}
                    </nav>
                </div>

                <div className="hidden md:flex items-center gap-3">
                    {buttons?.map((btn: any, index: number) => {
                        const targetUrl = btn.url || btn.href || '#';

                        const variantMap: { [key: string]: string } = {
                            'outline': 'outline',
                            'Outline': 'outline',
                            'black': 'dark',
                            'Black': 'dark',
                            'primary': 'primary'
                        };
                        const normalizedVariant = variantMap[btn.variant] || 'primary';
                        if (btn.variant === 'icon' || btn.label?.toLowerCase() === 'icon') {
                            return (
                                <Link key={btn._key || index} href={targetUrl} className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors shrink-0">
                                    <User className="w-5 h-5 text-gray-700" />
                                </Link>
                            );
                        }
                        return (
                            <Button
                                key={btn._key || index}
                                href={targetUrl}
                                variant={normalizedVariant as any}
                                className="uppercase"
                            >
                                {btn.label}
                            </Button>
                        );
                    })}
                </div>

            </div>
        </header>
    );
}