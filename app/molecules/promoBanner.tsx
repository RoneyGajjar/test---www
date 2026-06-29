// components/organisms/PromoBanner.tsx
// import Image from 'next/image';
// import Typography from '../atoms/typography';
// import Button from '../atoms/buttons';

// export const PromoBanner = () => {
//     return (
//         <div className="w-full bg-[#6B38FB] rounded-[2rem] p-10 md:p-14 flex flex-col md:flex-row items-center gap-8 md:gap-12 mt-12 md-2 md:mb-8">
//             <div className="relative w-36 h-36 md:w-40 md:h-40 shrink-0">
//                 <Image
//                     src="/logos/large-icon.png"
//                     alt="SnapKit Grid Icon"
//                     fill
//                     className="object-contain"
//                 />
//             </div>

//             <div className="flex flex-col flex-1 text-center md:text-left justify-center">

//                 <div className="mb-8">
//                     <Typography variant="h3" as="h2" className="text-white mb-1">
//                         Build your own integrations
//                     </Typography>
//                     <Typography variant="h3" as="h3" className="text-white/60">
//                         Get started with SnapKit
//                     </Typography>
//                 </div>

//                 <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
//                     <Button variant='solid' className='border border-black' >
//                         Build Now
//                     </Button>
//                     <Button variant='outline' className='text-white border border-white'>
//                         Learn More
//                     </Button>
//                 </div>

//             </div>
//         </div>
//     );
// };