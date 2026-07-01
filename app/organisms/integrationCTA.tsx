import Image from 'next/image';
import { AdvancedTextBlock } from './advancedTextBlock';

export function IntegrationCTA({ title, subtitle, iconUrl, buttons }: any) {
    return (
        <section className="px-6 mt-16">
            <div className="bg-[#6366f1] rounded-[2rem] p-10 md:p-16 flex flex-col md:flex-row items-center gap-8 md:gap-12 text-white">

                {/* Icon */}
                <div className="w-24 h-24 relative shrink-0">
                    {iconUrl && <Image src={iconUrl} alt="Icon" fill className="object-contain" />}
                </div>

                {/* Text Block - Advanced Text Injection */}
                <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start">
                    {title?.text && (
                        <AdvancedTextBlock text={title.text} config={title.config} />
                    )}
                    {subtitle?.text && (
                        <div className="mt-2">
                            <AdvancedTextBlock text={subtitle.text} config={subtitle.config} />
                        </div>
                    )}
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                    {buttons?.map((btn: any, i: number) => (
                        <a
                            key={i}
                            href={btn.url}
                            className={`px-8 py-3 rounded-full font-bold text-sm transition-all
                                ${btn.variant === 'black'
                                    ? 'bg-black text-white hover:bg-gray-900'
                                    : 'border border-white/30 text-white hover:bg-white/10'
                                }`}
                        >
                            {btn.label.toUpperCase()}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}