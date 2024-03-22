import rootStyles from "@/app/main.module.css";
import Image from "next/image";

export default function BabyMatch() {
  return (
    <main className={rootStyles.main}>
      <Image
        className={rootStyles.logo}
        src="/babymatch_text.svg"
        alt="think like, tinder, but... for babies?"
        width={400}
        height={400}
      />
      <Image
        className={rootStyles.logo}
        src="/babymatch_logo.svg"
        alt="babymatch logo, baby"
        width={400}
        height={400}
      />
    </main>
  );
}
