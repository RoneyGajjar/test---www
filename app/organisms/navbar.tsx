import Link from 'next/link';
import Image from 'next/image';
import Button from '../atoms/buttons';

export default function Navbar() {
    const navLinks = ['Products', 'Use cases', 'Resources', 'Our customers'];
    return (
        <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">
            <nav className="w-full flex items-center justify-between px-4 py-6 max-w-[91rem] mx-auto">

                <div className="flex items-center">
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
                    <div className="hidden lg:flex items-center space-x-8">
                        {navLinks.map((item) => (
                            <Link
                                key={item}
                                href={`#${item.toLowerCase().replace(' ', '-')}`}
                                className="flex items-center gap-1 text-[#111111] font-sans font-[500] text-[0.95rem] hover:text-gray-500 transition-colors"
                            >
                                {item}
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-60">
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </Link>
                        ))}
                    </div>
                </div>


                <div className="flex items-center gap-3">
                    <Button variant="outline">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                    </Button>
                    <Button variant="outline" className="hidden sm:flex">
                        Book a demo
                    </Button>
                    <Button variant="solid" className="hidden md:flex">
                        Sign Up
                    </Button>

                </div>
            </nav>
        </header>
    );
}