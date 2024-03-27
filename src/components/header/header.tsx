"use client";
import {
  ActionIcon,
  Burger,
  Button,
  Center,
  Container,
  Group,
  ThemeIcon,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Image from "next/image";
import styles from "./header.module.css";
import rootStyles from "@/app/main.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MenuDrawer from "../drawer";
import { IconSun, IconMoon } from "@tabler/icons-react";
import cx from "clsx";

const links = [
  { link: "/rentababy", label: "RentABaby" },
  { link: "/buffbaby", label: "BuffBaby" },
  { link: "/babymatch", label: "BabyMatch" },
  { link: "/info/about", label: "About" },
];

export default function Header() {
  const [opened, { toggle, close }] = useDisclosure(false);

  const path = usePathname();
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  return (
    <header className={styles.header}>
      <Container size="md" className={styles.inner}>
        <ThemeIcon size={34} variant="default" radius="md">
          <Burger opened={opened} onClick={toggle} size="sm" />
        </ThemeIcon>
        <Link href={"/"}>
          <Center visibleFrom="xs">
            <Image
              className={rootStyles.logo}
              src="/airbaby_text.svg"
              alt="airbaby logo, baby"
              width={125}
              height={50}
              priority
            />
          </Center>
          <Center hiddenFrom="xs">
            <Image
              className={rootStyles.logo}
              src="/airbaby.svg"
              alt="airbaby logo, baby"
              width={50}
              height={50}
              priority
            />
          </Center>
        </Link>
        <ThemeIcon
          size={34}
          variant="default"
          radius="md"
          onClick={() =>
            setColorScheme(computedColorScheme === "light" ? "dark" : "light")
          }
          aria-label="Toggle color scheme"
        >
          <IconSun
            className={cx(rootStyles.icon, rootStyles.light)}
            stroke={1.5}
          />
          <IconMoon
            className={cx(rootStyles.icon, rootStyles.dark)}
            stroke={1.5}
          />
        </ThemeIcon>
        {/* <Group gap={5} visibleFrom="xs">
          {items}
        </Group> */}
      </Container>
      <MenuDrawer opened={opened} onClose={close} />
    </header>
  );
}
