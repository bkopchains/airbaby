import rootStyles from "@/app/main.module.css";
import Image from "next/image";

export default function BuffBaby() {
  return (
    <main className={rootStyles.main}>
      <Image
        className={rootStyles.logo}
        src="/buffbaby.svg"
        alt="buffbaby logo, baby"
        width={400}
        height={400}
      />
    </main>
  );
}
