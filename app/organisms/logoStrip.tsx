import Image from 'next/image';

type LogoStripProps = {
    apps?: Array<{
        logo: string;
        bgClass: string;
        hasInnerShadow: boolean;
    }>;
};

export function LogoStrip({ apps }: LogoStripProps) {
    if (!apps || apps.length === 0) return null;

    return (
        <section className="container mx-auto px-6 py-12">
            <div className="flex items-center justify-center gap-[1vw]">
                {apps.map((app, i) => (
                    <div
                        key={i}
                        className={`
                            relative flex items-center justify-center aspect-square w-20 md:w-24 
                            rounded-[22%] 
                            ${app.bgClass}
                            ${app.hasInnerShadow
                                ? 'shadow-[inset_0px_2px_10px_rgba(255,255,255,0.35)]'
                                : 'shadow-sm border border-gray-100'
                            }
                        `}
                    >
                        <div className="relative w-[50%] h-[50%]">
                            <Image
                                src={app.logo}
                                alt={`App logo ${i}`}
                                fill
                                sizes="100px"
                                className="object-contain drop-shadow-sm"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}