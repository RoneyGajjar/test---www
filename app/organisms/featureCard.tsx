// components/organisms/FeatureCard.tsx
import Section from '@/lib/components/misc/section';
import Image from 'next/image';
import Typography from '../atoms/typography';

export const FeatureCard = () => {
    return (
        // <Section className="py-72">
        //     <div className="relative w-full aspect-[16/9] md:aspect-[2/1] rounded-[2.5rem] overflow-hidden">
        //         <Image
        //             src="/frame.jpg"
        //             alt="Recipe Mapping Feature"
        //             fill
        //             className="object-contain"
        //             priority
        //         />
        //     </div>
        // </Section>

        <Section className='py-10 md:py-18'>
            <div className='flex flex-col md:flex-row bg-purple rounded-xl h-auto md:h-160'>
                <div className='w-full md:w-1/2 flex flex-col items-center justify-center align-center text-center p-8 md:p-0'>
                    <Typography variant="h3" className='pb-8'>
                        Recipe Mapping
                    </Typography>
                    <Typography variant="p" className='mx-auto max-w-lg'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum magna libero, ut lobortis turpis suscipit id. Integer tincidunt vehicula urna, sed faucibus justo sagittis id.
                    </Typography>
                </div>
                <div className='w-full md:w-1/2 pt-23'>
                    <Image
                        src="/content-container.png"
                        alt="Recipe Mapping Feature"
                        width={800}
                        height={800}
                        className="object-contain"
                        priority
                    />
                </div>
            </div>

        </Section>
    );
};