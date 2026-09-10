import rootStyles from "@/styles/main.module.css";
import BrandMark from "@/components/brand/BrandMark";
import FeatureCard, { IFeatureCard } from "@/components/card/featureCard";
import {
  IconBabyBottle,
  IconBarbell,
  IconBabyCarriage,
} from "@tabler/icons-react";
import styles from "./BuffBabyPage.module.css";

const stats = [
  { value: "405 lb", label: "crib press PR (contested)" },
  { value: "2 hrs", label: "tummy-time HIIT blocks" },
  { value: "75%", label: "average baby mass gain" },
  { value: "0", label: "lethal injuries to caregivers this year" },
];

const programs: IFeatureCard[] = [
  {
    title: "Newborn Gains",
    description:
      "Micro-loads, mega cuteness. We start with head-control reps and emotional support protein (it's just milk).",
    Icon: IconBabyBottle,
  },
  {
    title: "Toddler Powerlifting",
    description:
      "Deadlift the toy bin. Squat to pick up Cheerios. Scream between sets for free cardio.",
    Icon: IconBarbell,
  },
  {
    title: "Stroller Strongman",
    description:
      "Parents train too! You're going to want to once they realize they can beat you up.",
    Icon: IconBabyCarriage,
  },
];

export default function BuffBabyPage() {
  return (
    <main className={rootStyles.main}>
      <BrandMark
        src="/buffbaby_logo.svg"
        alt="buffbaby logo, baby"
        aspectRatio={922.3 / 667}
      />
      <h2 className={styles.title}>Get Swole Before You Can Crawl</h2>
      <p className={styles.description}>
        BuffBaby turns soft nugs into absolute units. Certified trainers (and one
        very judgmental rubber duck) will have your infant benching expectations
        - and maybe a rattle - by Q3.
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
        {programs.map((program) => (
          <FeatureCard
            key={program.title}
            title={program.title}
            description={program.description}
            Icon={program.Icon}
          />
        ))}
      </div>
      <div className={rootStyles.pageFootnote}>
        <p className={rootStyles.pageFootnoteText}>
          Side effects may include sudden urge to buy tiny dumbbells and arguing
          about macros at daycare pickup.
        </p>
      </div>
    </main>
  );
}
