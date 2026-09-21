import { Hero } from "@/components/sections/Hero";
import { ConceptBar } from "@/components/sections/ConceptBar";
import { WhyItMatters } from "@/components/sections/WhyItMatters";
import { Practice } from "@/components/sections/Practice";
import { Tools } from "@/components/sections/Tools";
import { Comparison } from "@/components/sections/Comparison";
import { Schedule } from "@/components/sections/Schedule";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <ConceptBar />
      <WhyItMatters />
      <Practice />
      <Tools />
      <Comparison />
      <Schedule />
      <FinalCta />
    </>
  );
}
