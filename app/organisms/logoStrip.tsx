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
        <section className="w-full">
            <div className="flex flex-wrap items-center justify-center gap-8">
                {apps.map((app, i) => (
                    <div
                        key={i}
                        className={`
                            relative flex items-center justify-center 
                            w-70 h-70 md:w-70 md:h-70 
                            rounded-[2rem] 
                            ${app.hasInnerShadow
                                ? 'shadow-[inset_0px_4px_20px_rgba(255,255,255,0.4)]'
                                : 'shadow-xl'
                            }
                        `}
                        style={{ backgroundColor: app.bgClass }}

                    >
                        {/* INCREASED SIZE: w-[70%] h-[70%] for a massive logo feel */}
                        <div className="relative w-[70%] h-[70%]">
                            <Image
                                src={app.logo}
                                alt={`App logo ${i}`}
                                fill
                                sizes="160px"
                                className="object-contain"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}