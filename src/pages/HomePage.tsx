import rootStyles from "@/styles/main.module.css";
import BrandMark from "@/components/brand/BrandMark";
import Hero from "@/components/hero/hero";

export default function HomePage() {
  return (
    <main className={rootStyles.main}>
      <BrandMark
        src="/airbaby_text.svg"
        alt="airbaby logo, baby"
        aspectRatio={(871.32 / 255.41)*(2/3)}
      />
      <Hero />
    </main>
  );
}
