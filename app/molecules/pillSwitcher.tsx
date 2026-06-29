// components/molecules/PillSwitcher.tsx
'use client';
import { useState } from 'react';

const TABS = ['ESSENTIALS', 'AI AGENTS', 'SUPPORT', 'ENGINEERING'];

export const PillSwitcher = () => {
    const [activeTab, setActiveTab] = useState(TABS[0]);

    return (

        <div className="w-fit inline-flex justify-center items-center mx-auto max-w-130 bg-[#EEEEEE] rounded-full md:-mt-13 shadow-sm">
            {TABS.map((tab) => (
                <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`
                        px-3.5 py-2 md:px-6 md:py-2 rounded-full text-[11px] md:text-[11px] font-bold md:tracking-[0.15em] transition-all duration-300
                        ${activeTab === tab
                            ? 'bg-black text-white shadow-md'
                            : 'text-gray-500 hover:text-black'}
                    `}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
};



// components/molecules/PillSwitcher.tsx
// 'use client';
// import { useState } from 'react';

// const TABS = ['ESSENTIALS', 'AI AGENTS', 'SUPPORT', 'ENGINEERING'];

// export const PillSwitcher = () => {
//     const [activeTab, setActiveTab] = useState(TABS[0]);
    
//     return (

//         <div className="flex w-full max-w-4xl mx-auto overflow-x-auto bg-[#EEEEEE] rounded-full p-1 shadow-sm md:-mt-8 relative z-20">
//             {TABS.map((tab) => (
//                 <button
//                     key={tab}
//                     onClick={() => setActiveTab(tab)}
//                     className={`
//                         flex-1 min-w-max px-4 md:px-6 py-2.5 rounded-full text-[10px] md:text-[11px] font-bold tracking-widest md:tracking-[0.15em] transition-all duration-300 whitespace-nowrap
//                         ${activeTab === tab
//                             ? 'bg-black text-white shadow-md'
//                             : 'text-gray-500 hover:text-black'}
//                     `}
//                 >
//                     {tab}
//                 </button>
//             ))}
//         </div>
//     );
// };