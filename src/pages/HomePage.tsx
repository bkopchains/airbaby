import rootStyles from "@/styles/main.module.css";
import Hero from "@/components/hero/hero";

export default function HomePage() {
  return (
    <main className={rootStyles.main}>
      <div>
        <img
          className={rootStyles.logo}
          src="/airbaby_text.svg"
          alt="airbaby logo, baby"
          width={350}
          height={150}
        />
      </div>
      <Hero />
    </main>
  );
}
