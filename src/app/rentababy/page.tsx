import rootStyles from "@/app/main.module.css";
import styles from "./page.module.css";
import Image from "next/image";

export default function RentABaby() {
  return (
    <main className={rootStyles.main}>
      <Image
        className={rootStyles.logo}
        src="/rentababy_text.svg"
        alt="rentababy, baby"
        width={400}
        height={400}
      />
      <Image
        className={rootStyles.logo}
        src="/rentababy_toss.svg"
        alt="love your baby!"
        width={400}
        height={400}
      />
      <Image
        className={`${rootStyles.logo} ${styles.shareLogo}`}
        src="/rentababy_shareR.svg"
        alt="share your baby!"
        width={400}
        height={400}
      />
      {/* <Image
        className={rootStyles.logo}
        src="/rentababy_shareL.svg"
        alt="airbaby logo, baby"
        width={400}
        height={400}
      /> */}
    </main>
  );
}
