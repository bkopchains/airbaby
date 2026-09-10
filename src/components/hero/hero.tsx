import { Button, GradientText } from "airbaby-ui";
import { IconBabyCarriage } from "@tabler/icons-react";
import styles from "./hero.module.css";

const stats = [
  { value: "12 min", label: "median time-to-baby delivery" },
  { value: "14", label: "products in active R&D" },
  { value: "∞", label: "naptime innovations shipped" },
];

export default function Hero() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <h1 className={styles.title}>
          Building <GradientText>totally safe</GradientText> solutions for you
          and your babies
        </h1>

        <p className={styles.description}>
          From the brilliant minds behind RentABaby™ come many exciting new B2B (baby to baby) solutions
        </p>

        <div className={styles.controls}>
          <Button
            finish="solid"
            variant="primary"
            size="lg"
            href="/info/overview"
          >
            Learn More
          </Button>

          <Button
            finish="solid"
            variant="secondary"
            size="lg"
            href="/info/about"
          >
            <IconBabyCarriage size={20} aria-hidden />
            About Us
          </Button>
        </div>

        {/* <ul className={styles.stats}>
          {stats.map((stat) => (
            <li key={stat.label} className={styles.stat}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </li>
          ))}
        </ul> */}
      </div>
    </div>
  );
}
