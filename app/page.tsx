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

export const revalidate = 60; // Revalidates the cache every 60 seconds

import { client } from '../sanity/lib/client';
import { PageBuilder } from '../app/templates/pageBuilder';


const PAGE_QUERY = `
  *[_type == "page" && slug.current == "hompage"][0] {
    pageBuilder[] {
      ...,
      
      _type == "hero" => {
        // Map over the new content array
        content[] {
          ...,
          _type == "advancedText" => {
            text, config { tag, type, textSize, width, color, textAlign, margin }
          },
          _type == "searchBarBlock" => {
            placeholder, maxWidth
          },
          _type == "buttonBlock" => {
            _key,
            label,
            href,
            variant,
            size
          }
        }
      },

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
  const data = await client.fetch(PAGE_QUERY);

  if (!data || !data.pageBuilder) {
    return (
      <main className="p-24 text-center">
        No Page Builder blocks found. Please publish them in Sanity!
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <PageBuilder blocks={data.pageBuilder} />
    </main>
  );
}