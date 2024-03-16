import Image from "next/image";
import styles from "./page.module.css";
import { Hero } from "@/components/hero/hero";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <Image
          className={styles.logo}
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
