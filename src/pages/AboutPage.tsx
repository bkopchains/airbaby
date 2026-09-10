import rootStyles from "@/styles/main.module.css";
import FeatureCard, { IFeatureCard } from "@/components/card/featureCard";
import { IconHorseToy, IconQuestionMark } from "@tabler/icons-react";
import styles from "./AboutPage.module.css";

const facts = [
  { value: "2024", label: "founded" },
  { value: "3", label: "flagship products" },
  { value: "Dozens", label: "potential users aware of our existence" },
  { value: "24/7", label: "B2B hotline support" },
];

const cards: IFeatureCard[] = [
  {
    title: "Who we are",
    description:
      "We are a passionate pack of people poised to pioneer premiumly profitable programs for the pediatric populace.",
    Icon: IconQuestionMark,
  },
  {
    title: "What we build",
    description:
      "On-demand infant rentals, industry-leading B2B solutions, and serious training programs. Every product ships directly to the world, skipping all that bureaucracy and uncessecary legal jargon.",
    Icon: IconHorseToy,
  },
];

export default function AboutPage() {
  return (
    <main className={rootStyles.main}>
      <p className={styles.eyebrow}>About Airbaby Solutions, baby</p>
      <h1 className={styles.title}>We&apos;re not just a baby dating app.</h1>
      <p className={styles.lede}>
        <span className={styles.yet}> We&apos;re pioneers in the proprietary neonatal solutions space.</span>
      </p>

      <ul className={styles.stats}>
        {facts.map((fact) => (
          <li key={fact.label} className={styles.stat}>
            <span className={styles.statValue}>{fact.value}</span>
            <span className={styles.statLabel}>{fact.label}</span>
          </li>
        ))}
      </ul>

      <div className={styles.featureGrid}>
        {cards.map((card) => (
          <FeatureCard
            key={card.title}
            title={card.title}
            description={card.description}
            Icon={card.Icon}
          />
        ))}
      </div>
    </main>
  );
}
