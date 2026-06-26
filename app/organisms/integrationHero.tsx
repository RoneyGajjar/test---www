import Image from 'next/image';
import { APP_DATA } from '@/lib/appData';
import Section from '@/lib/components/misc/section';


export const IntegrationsHero = () => {
    return (
        // <section className="w-full flex flex-col items-center justify-center bg-white text-center overflow-hidden">
        <Section >
            <div className="w-full flex items-center justify-center">
                <div className="flex items-center justify-center gap-[1vw]">
                    {APP_DATA.map((app) => (
                        <div
                            key={app.id}
                            className={`
                                relative flex items-center justify-center aspect-square w-20 md:w-84 
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
                                    src={app.src}
                                    alt={app.alt}
                                    fill
                                    sizes="11vw"
                                    className="object-contain drop-shadow-sm"
                                    priority
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};




// import Image from 'next/image';

// export const IntegrationsHero = () => {
//     return (
//         <section className="w-full flex flex-col items-center justify-center bg-white text-center">
//             <div className="w-full mx-auto max-w-[100rem]">
//                 <div className="relative w-full aspect-[4/1] md:aspect-[2/1] overflow-hidden">
//                     <Image
//                         src="/frame14.jpg"
//                         alt="Integrations Banner"
//                         fill
//                         className="object-contain"
//                         priority
//                     />
//                 </div>

//             </div>
//         </section>
//     );
// };