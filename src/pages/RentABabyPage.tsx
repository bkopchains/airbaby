import rootStyles from "@/styles/main.module.css";
import styles from "./RentABabyPage.module.css";
import { SimpleGrid, Text, Title } from "@mantine/core";
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

export default function RentABabyPage() {
  const features: IFeatureCard[] = [
    {
      title: "Customizable Rental Durations",
      description:
        "RentABaby offers flexible rental durations, allowing users to choose from hourly, daily, or weekly rental options based on their needs and preferences.",
      Icon: IconCalendarClock,
    },
    {
      title: "Safety and Health Assurance",
      description:
        "Airbaby Solutions ensures the safety and health of all rented babies, with thorough background checks on caregivers, regular health screenings, and adherence to safety standards.",
      Icon: IconBodyScan,
    },
    {
      title: "24/7 Customer Support",
      description:
        "RentABaby provides round-the-clock customer support to address any concerns or queries, ensuring a smooth and stress-free rental experience.",
      Icon: IconClock24,
    },
    {
      title: "Delivery and Pickup Services",
      description:
        "Enjoy hassle-free rental with RentABaby's delivery and pickup services. Babies can be delivered directly to your doorstep and picked up at the end of the rental period, saving you time and effort.",
      Icon: IconTruckDelivery,
    },
    {
      title: "Baby Essentials Included",
      description:
        "Each rental includes essential baby items such as diapers, formula, and baby wipes, ensuring that you have everything you need to care for your rented baby.",
      Icon: IconBabyBottle,
    },
    {
      title: "Online Booking and Payment",
      description:
        "Easily book your rental online through RentABaby's user-friendly platform. Secure online payment options make the rental process quick and convenient.",
      Icon: IconCreditCardPay,
    },
    {
      title: "Optional Extras",
      description:
        "Enhance your rental experience with optional extras such as baby photography sessions, themed baby outfits, or personalized baby care packages.",
      Icon: IconBasketPlus,
    },
    {
      title: "Caregiver Feedback System",
      description:
        "Rate and provide feedback on your rental experience, helping to maintain the quality of service and ensure continuous improvement.",
      Icon: IconStars,
    },
    {
      title: "Subscription Plans",
      description:
        "For frequent users, RentABaby offers subscription plans with discounted rates and exclusive benefits, making it even more convenient to enjoy the joys of parenthood on demand.",
      Icon: IconInfinity,
    },
  ];

  return (
    <main className={rootStyles.main}>
      <img
        className={rootStyles.logo}
        src="/rentababy_text.svg"
        alt="rentababy, baby"
        width={400}
        height={400}
      />
      <Title order={2} className={styles.title} ta="center" mt="sm">
        Experience Parenthood Your Way
      </Title>
      <Text className={styles.description} ta="center" mt="md">
        Whether it&apos;s for a photoshoot, a family gathering, or simply to
        experience the joy of caring for an infant, RentABaby offers a
        convenient and affordable solution. No diapers to change, no sleepless
        nights — just pure, precious moments!
      </Text>
      <SimpleGrid
        cols={{ base: 1, md: 3 }}
        spacing="xl"
        className={styles.featureGrid}
      >
        {features.map((f, i) => (
          <FeatureCard
            title={f.title}
            description={f.description}
            Icon={f.Icon}
            key={i}
          />
        ))}
      </SimpleGrid>
    </main>
  );
}
