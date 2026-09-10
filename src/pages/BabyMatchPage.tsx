import rootStyles from "@/styles/main.module.css";
import BrandMark from "@/components/brand/BrandMark";
import FeatureCard, { IFeatureCard } from "@/components/card/featureCard";
import { cx } from "@/lib/cx";
import {
  IconFlag,
  IconHeartCode,
  IconUsers,
} from "@tabler/icons-react";
import styles from "./BabyMatchPage.module.css";

const stats = [
  { value: "2.4M", label: "super-likes on burp cloths" },
  { value: "68%", label: "matches who both hate raisins" },
  { value: "41s", label: "avg time-to-first-drool" },
  { value: "7", label: "failed IPOs (emotional)" },
];

const prompts: IFeatureCard[] = [
  {
    title: "Green flags we swipe for",
    description:
      "Knows the difference between a sleep regression and a personality. Owns more than one spare onesie. Can assemble a Pack 'n Play without calling support.",
    Icon: IconFlag,
  },
  {
    title: "Playdates without the middlemom",
    description:
      "Find your new bestie without having to crawl through all the hoops.",
    Icon: IconUsers,
  },
  {
    title: "Pure science, baby",
    description:
      "Our algorithm pairs based on nap schedules, snack philosophies, and whether you'd both smile convincingly in a holiday card.",
    Icon: IconHeartCode,
  },
];

export default function BabyMatchPage() {
  return (
    <main className={rootStyles.main}>
      <BrandMark
        src="/babymatch_text.svg"
        alt="think like, tinder, but... for babies?"
        aspectRatio={400 / 175}
      />
      <BrandMark
        src="/babymatch_logo.svg"
        alt="babymatch logo, baby"
        aspectRatio={1}
        className={cx(rootStyles.logoGlassSpaced, rootStyles.logoGlassEmblem)}
      />

      <h2 className={styles.title}>Swipe Right on Spit-Up Compatibility</h2>
      <p className={styles.description}>
        BabyMatch is a true B2B solution, connecting babies directly to each other for the first time. Find the googoo to your gaga
      </p>

      <ul className={styles.stats}>
        {stats.map((stat) => (
          <li key={stat.label} className={styles.stat}>
            <span className={styles.statValue}>{stat.value}</span>
            <span className={styles.statLabel}>{stat.label}</span>
          </li>
        ))}
      </ul>

      <div className={styles.featureGrid}>
        {prompts.map((item) => (
          <FeatureCard
            key={item.title}
            title={item.title}
            description={item.description}
            Icon={item.Icon}
          />
        ))}
      </div>

      <div className={rootStyles.pageFootnote}>
        <p className={rootStyles.pageFootnoteText}>
          BabyMatch is not responsible for any babies who fall madly in love with each other.
        </p>
      </div>
    </main>
  );
}
