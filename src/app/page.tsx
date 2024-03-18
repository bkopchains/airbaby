import Image from "next/image";
import styles from "./page.module.css";
import rootStyles from "@/app/main.module.css";
import Hero from "@/components/hero/hero";

export default function Home() {
  return (
    <main className={rootStyles.main}>
      <div>
        <Image
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
