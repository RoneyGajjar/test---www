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


const PAGE_QUERY = `
  *[_type == "page" && slug.current == "hompage"][0] {
    pageBuilder[] {
      ...,
      
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
      }
      
    }
  }
`;
export default async function Home() {
  const data = await client.fetch(PAGE_QUERY, {}, {
    next: { tags: ['page'] } // This tag must match the one in your API route
  });
  if (!data || !data.pageBuilder) {
    return <main className="p-24 text-center">No blocks found.</main>;
  }
  return (
    <main className="min-h-screen">
      <div className="container mx-auto">
        <PageBuilder blocks={data.pageBuilder} />
      </div>
    </main>
  );
}