import { Button, Card } from "airbaby-ui";
import { ImageCard } from "@/components/card";
import HorizontalCard from "@/components/card/horizontalCard";
import styles from "./OverviewPage.module.css";

const BuffBabyCard = () => (
  <ImageCard
    flipped
    title="buffbaby"
    subtitle="Protein shakes for people who still need sippy cups."
    className={styles.buffBkg}
    footer={
      <div className={styles.footerEnd}>
        <Button finish="solid" variant="primary" href="/buffbaby" size="sm">
          Get Swole, Baby
        </Button>
      </div>
    }
  />
);

const stats = [
  { value: "4.9★", label: "average baby rating" },
  { value: "100%", label: "real babies involved" },
  { value: "12 min", label: "median time-to-baby delivery" },
  { value: "908%", label: "YoY growth" },
];

function firstInitial(name: string) {
  return name.trim().charAt(0).toUpperCase();
}

export default function OverviewPage() {
  return (
    <main className={styles.main}>
      <header className={styles.intro}>
        <p className={styles.eyebrow}>Airbaby Solutions · Product Zoo</p>
        <h1 className={styles.pageTitle}>
          For Babies, By Babies
        </h1>
        <p className={styles.lede}>
          Take a look at the portfolio that made VCs ask &quot;wait, is this real?&quot;
        </p>
      </header>

      <section className={styles.statsRow} aria-label="Portfolio metrics">
        {stats.map((stat) => (
          <div key={stat.label} className={styles.statChip}>
            <span className={styles.statValue}>{stat.value}</span>
            <span className={styles.statLabel}>{stat.label}</span>
          </div>
        ))}
      </section>

      <section className={styles.masonry} aria-label="Product highlights">
        <ImageCard
          className={styles.rentBkg}
          title="rentababy"
          subtitle="On-demand infants for when your brunch needs a plus-one."
          footer={
            <Button finish="solid" variant="primary" href="/rentababy" size="sm">
              Browse Inventory
            </Button>
          }
        />

        <HorizontalCard
          bkgClass={styles.rentBkg}
          title="Baby Rental"
          subtitle="The BEST way to get your hands on a baby in 2026!"
          username="Rentababy"
          avatarInitials={firstInitial("Rentababy")}
          dateText="Mar 20"
        />

        {/* TODO(charts): restore babies-vs-fun chart (was Mantine AreaChart) */}
        <div className={styles.noteCard}>
          <p className={styles.noteTitle}>Fun Level × Babies Rented</p>
          <p className={styles.noteBody}>
            Our science babies found a clean 1:1 correlation between babies
            rented and fun reported. The data speaks for itself!
          </p>
        </div>

        <BuffBabyCard />

        <HorizontalCard
          flipped
          bkgClass={styles.buffBkg}
          title="Infant Fitness"
          subtitle="I've never seen such a jacked toddler."
          username="Kajal C."
          avatarInitials={firstInitial("Kajal C.")}
          dateText="Apr 22"
        />

        <div className={styles.pair}>
          <div className={styles.chip}>
            <span className={styles.chipValue}>247</span>
            <span className={styles.chipLabel}>PR strollers pushed</span>
          </div>
          <div className={styles.chip}>
            <span className={styles.chipValue}>6%</span>
            <span className={styles.chipLabel}>body fat after tummy time</span>
          </div>
        </div>

        <HorizontalCard
          bkgClass={styles.buffBkg}
          title="Parenting"
          subtitle="My kid can beat me up now - and yours can too!"
          username="Beanius"
          avatarInitials={firstInitial("Beanius")}
          dateText="Nov 27"
        />

        <HorizontalCard
          bkgClass={styles.rentBkg}
          title="Childcare"
          subtitle="Remember, you should always stop what you're doing and take care of the baby."
          username="Sam C."
          avatarInitials={firstInitial("Sam")}
          dateText="Feb 8"
        />
      </section>

      <Card finish="glass" padding="lg" className={styles.matchPromo}>
        <p className={styles.eyebrow}>Also shipping</p>
        <h2 className={styles.matchTitle}>BabyMatch</h2>
        <p className={styles.matchBody}>
          Swipe right on spit-up compatibility. Swipe left on anyone who still
          thinks &quot;sleeping through the night&quot; is a personality.
        </p>
        <Button finish="solid" variant="secondary" href="/babymatch" size="sm">
          Start Matching
        </Button>
      </Card>
    </main>
  );
}
