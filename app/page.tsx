import Image from "next/image";
import Navbar from "./organisms/navbar";
import HeroCentered from "./organisms/heroSection";
import { IntegrationsHero } from "./organisms/integrationHero";
import { FeatureCard } from "./organisms/featureCard";
import { IntegrationsDirectory } from "./organisms/integrationDirectory";
import { Footer } from "./organisms/footer";
import { PillSwitcher } from "./molecules/pillSwitcher";

export default function Home() {
  return (
    <>
      <Navbar />

      <HeroCentered />

      <IntegrationsHero />

      <FeatureCard />

      <PillSwitcher />

      <IntegrationsDirectory />

      <Footer />
    </>
  );
}
