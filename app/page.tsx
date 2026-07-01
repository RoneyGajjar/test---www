// import Image from "next/image";
// import Navbar from "./organisms/navbar";
// import HeroCentered from "./organisms/heroSection";
// import { IntegrationsHero } from "./organisms/integrationHero";
// import { FeatureCard } from "./organisms/featureCard";
// import { IntegrationsDirectory } from "./organisms/integrationDirectory";
// import { Footer } from "./organisms/footer";
// import { PillSwitcher } from "./molecules/pillSwitcher";

// export default function Home() {
//   return (
//     <>
//       <Navbar />

//       <HeroCentered />

//       <IntegrationsHero />

//       <FeatureCard />

//       <PillSwitcher />

//       <IntegrationsDirectory />

//       <Footer />
//     </>
//   );
// }

// export const revalidate = 60;
// Revalidates the cache every 60 seconds

import { client } from '../sanity/lib/client';
import { PageBuilder } from '../app/templates/pageBuilder';
import { Footer } from './organisms/footer';
import { Navbar } from './organisms/navbar'; // Import Navbar

const PAGE_QUERY = `
  *[_type == "page" && slug.current == "hompage"][0] {
    pageBuilder[] {
      ...,
      

      _type == "navbar" => {
        _key,
        _type,
        "logoUrl": logo.asset->url,
        navItems[] {
          label,
          url,
          dropdownItems[] { label, url }
        },
        buttons[] {
          label,
          url,
          href,
          variant
        }
      },
      // --- 1. HERO BLOCK ---
      _type == "hero" => {
        content[] {
          ...,
          _type == "advancedText" => {
            text, config { tag, type, textSize, width, color, textAlign, margin }
          },
          _type == "searchBarBlock" => {
            placeholder, maxWidth
          },
          _type == "buttonBlock" => {
            _key, label, href, variant, size
          }
        } // <-- Hero content ends here
      },  // <-- Hero block ends here

      // --- 2. FEATURED BANNER BLOCK --- (Now it is outside the Hero!)
      _type == "featuredBanner" => {
        backgroundColor,
        "imageUrl": image.asset->url,
        imageFit,
        imageScale,
        manualImageWidth,   
        manualImageHeight,
        leftColumnMargin { top, bottom, left, right },  
        rightColumnMargin { top, bottom, left, right },
        heading {
           text, config { tag, type, textSize, width, color, textAlign, margin }
        },
        description {
           text, config { tag, type, textSize, width, color, textAlign, margin }
        }
      },
      _type == "integrationDirectory" => {
        _key,
        _type,
        heading,
        categories,
        sidebarGap,
        integrationCards[] {
          // UPGRADED TO FETCH ADVANCED TEXT OBJECTS
          title {
            text,
            config { tag, type, textSize, width, color, textAlign, margin }
          },
          description {
            text,
            config { tag, type, textSize, width, color, textAlign, margin }
          },
          "logoUrl": logo.asset->url,
          tags
        }
      },
      _type == "integrationCTA" => {
        _key,
        _type,
        title { text, config { tag, type, textSize, width, color, textAlign, margin } },
        subtitle { text, config { tag, type, textSize, width, color, textAlign, margin } },
        "iconUrl": icon.asset->url,
        buttons[] { label, url, variant }
      },

      // --- 3. LOGO STRIP BLOCK ---
      _type == "logoStrip" => {
        ...,
        apps[]{
          "logo": logo.asset->url,
          bgClass,
          hasInnerShadow
        }
      },
    }
  }
`;

const FOOTER_QUERY = `
  *[_type == "footer"][0] {
    "logoUrl": logo.asset->url,
    linkGroups[] {
      heading,
      links[] { label, url }
    },
    newsletter,
    bottomBar
  }
`;


// ... (PAGE_QUERY and FOOTER_QUERY remain the same) ...
const data = await client.fetch(PAGE_QUERY, {}, {
  next: { tags: ['page'] }
});

export default async function Home() {
  const [data, footerData] = await Promise.all([
    client.fetch(PAGE_QUERY, {}, { next: { tags: ['page'] } }),
    client.fetch(FOOTER_QUERY, {}, { next: { tags: ['footer'] } })
  ]);

  if (!data || !data.pageBuilder) {
    return <main className="p-24 text-center">No blocks found.</main>;
  }

  // Find the navbar data specifically to render it outside the container
  const navbarBlock = data.pageBuilder.find((b: any) => b._type === 'navbar');
  const contentBlocks = data.pageBuilder.filter((b: any) => b._type !== 'navbar');

  return (
    <main className="min-h-screen">
      {/* Navbar rendered flush at the top */}
      {navbarBlock && <Navbar {...navbarBlock} />}

      {/* Centered content container */}
      <div className="container mx-auto">
        <PageBuilder blocks={contentBlocks} />
      </div>

      {/* Footer rendered at the bottom */}
      {footerData && <Footer {...footerData} />}
    </main>
  );
}