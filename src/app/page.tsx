import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        className={styles.logo}
        src="/airbaby/airbaby_text.svg"
        alt="airbaby logo, baby"
        width={400}
        height={400}
        priority
      />
    </main>
  );
}
