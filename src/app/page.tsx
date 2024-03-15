import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        className={styles.logo}
        src="/airbaby_text.svg"
        alt="airbaby logo, baby"
        width={500}
        height={500}
        priority
      />
    </main>
  );
}
