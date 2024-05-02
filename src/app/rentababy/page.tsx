"use client";
import rootStyles from "@/app/main.module.css";
import styles from "./page.module.css";
import Image from "next/image";
import cx from "clsx";
import { SimpleGrid, Text, Title } from "@mantine/core";
import { useCallback, useEffect, useRef, useState } from "react";
import { LoremIpsum } from "@/components/LoremIpsum";
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

export default function RentABaby() {
  const ref = useRef(null);
  const initW = typeof window !== 'undefined' ? document.body.clientWidth : 1920;

  const [scrolled, setScrolled] = useState(0);
  const [WH, setWH] = useState<{ w: number; h: number }>({
    w: initW,
    h: (initW * 9) / 16,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.body.addEventListener("scroll", scrollProgress);
      document.body.addEventListener("res", scrollProgress);
      const w = document.body.clientWidth;
      setWH({ w: w, h: (w * 9) / 16 });

      return () => document.body.removeEventListener("scroll", scrollProgress);
    }
  }, []);

  const scrollProgress = () => {
    if (typeof window !== 'undefined') {
      const scrollPx = document.body.scrollTop;
      const windowHeightPx =
        document.body.scrollHeight - document.body.clientHeight;

      const scrollLength = Math.ceil(((scrollPx / windowHeightPx) * 90) / 1);

      setScrolled(scrollLength);
    }
  };

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
    <main className={cx(rootStyles.main)} ref={ref}>
      <Image
        className={rootStyles.logo}
        src="/rentababy_text.svg"
        alt="rentababy, baby"
        width={400}
        height={400}
      />
      <div className={styles.scrollContainer}>
        <Image
          src={`/seq/rentababy/${Math.min(Math.max(scrolled, 1), 90)
            .toString()
            .padStart(4, "0")}.png`}
          width={WH.w}
          height={WH.h}
          className={styles.scrollSequence}
          priority={true}
          // quality={1}
          alt="img sequence"
        />
        <div className={styles.scrollBuffer} />
      </div>
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
      {/* <Image
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
      /> */}
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
