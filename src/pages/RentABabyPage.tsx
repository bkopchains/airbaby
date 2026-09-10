import rootStyles from "@/styles/main.module.css";
import styles from "./RentABabyPage.module.css";
import BrandMark from "@/components/brand/BrandMark";
import FeatureCard, { IFeatureCard } from "@/components/card/featureCard";
import {
  IconBabyBottle,
  IconBasketPlus,
  IconBodyScan,
  IconCalendarClock,
  IconClock24,
  IconCreditCardPay,
  IconInfinity,
  IconStars,
  IconTruckDelivery,
} from "@tabler/icons-react";

const stats = [
  { value: "11,042", label: "giggles fulfilled last quarter" },
  { value: "3.2 hrs", label: "avg rental duration" },
  { value: "99.1%", label: "babies returned safely" },
  { value: "$0", label: "post-rental commitment" },
];

export default function RentABabyPage() {
  const features: IFeatureCard[] = [
    {
      title: "Customizable Rental Durations",
      description:
        "Hourly for brunch optics. Daily for family reunions. Weekly if your calendar has more openings than your living room.",
      Icon: IconCalendarClock,
    },
    {
      title: "Safety and Health Assurance",
      description:
        "Every baby comes with a vibe check, certified health clearance, and \"paperwork\" reviewed by our team of professional babies.",
      Icon: IconBodyScan,
    },
    {
      title: "24/7 Customer Support",
      description:
        "You are free to call us at any time of day or night, and one of our babies will be sure to sometimes figure out how to answer.",
      Icon: IconClock24,
    },
    {
      title: "Delivery and Pickup Services",
      description:
        "Doorstep drop-off in our patented unmarked vans. Pickup before bedtime so you can return to your couch and your sleep schedule.",
      Icon: IconTruckDelivery,
    },
    {
      title: "Baby Essentials Included",
      description:
        "Diapers, wipes, formula, and one emergency pacifier that is usually cleaned between rentals. Stroller package available for additional fee.",
      Icon: IconBabyBottle,
    },
    {
      title: "Online Booking and Payment",
      description:
        "Tap, confirm, receive infant. No Refunds.",
      Icon: IconCreditCardPay,
    },
    {
      title: "Optional Extras",
      description:
        "You're telling us that we've been able to rent a baby to you and you want MORE?",
      Icon: IconBasketPlus,
    },
    {
      title: "Caregiver Feedback System",
      description:
        "Rate your rental like a rideshare. Five stars if they knew any cool tricks. One star if they mentioned unionizing.",
      Icon: IconStars,
    },
    {
      title: "Subscription Plans",
      description:
        "Baby of the Month Club for frequent users. Cancel anytime - unlike actual parenthood, which is more like a \"forever\" thing.",
      Icon: IconInfinity,
    },
  ];

  return (
    <main className={rootStyles.main}>
      <BrandMark
        src="/rentababy_text.svg"
        alt="rentababy, baby"
        aspectRatio={1156.1 / 323.44}
      />
      <h2 className={styles.title}>Experience Parenthood Your Way</h2>
      <p className={styles.description}>
        Photoshoot prop? Family gathering decoy? A three-hour trial of whether
        you&apos;d survive real parenthood? RentABaby delivers precious moments
        with a hard stop and a receipt. No sleepless nights - unless you forget
        the return window.
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
        {features.map((f, i) => (
          <FeatureCard
            title={f.title}
            description={f.description}
            Icon={f.Icon}
            key={i}
          />
        ))}
      </div>
    </main>
  );
}
