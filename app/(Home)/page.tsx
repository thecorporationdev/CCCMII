import About from "./_components/About/About";
import MainBrandServices from "./_components/BrandServices/MainBrandServices";
import HeroGrid from "./_components/Hero/HeroGrid";
import HeroText from "./_components/Hero/HeroText";
import Team from "./_components/Team/Team";

export default function Home() {
  return (
    <main className="">
      <HeroText />
      <HeroGrid />
      <About />
      <Team />
      <MainBrandServices />
    </main>
  );
}
