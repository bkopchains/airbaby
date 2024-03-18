import styles from "./page.module.css";
import rootStyles from "@/app/main.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        className={rootStyles.logo}
        src="/buffbaby.svg"
        alt="airbaby logo, baby"
        width={400}
        height={400}
      />
    </main>
  );
}
