"use client";
import {
  Burger,
  Button,
  Center,
  Container,
  Group,
  ThemeIcon,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import Image from "next/image";
import styles from "./header.module.css";
import rootStyles from "@/app/main.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MenuDrawer from "../drawer";

const links = [
  { link: "/rentababy", label: "RentABaby" },
  { link: "/buffbaby", label: "BuffBaby" },
  { link: "/babymatch", label: "BabyMatch" },
  { link: "/info/about", label: "About" },
];

export default function Header() {
  const path = usePathname();
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => {
    const isCurrent = path === link.link;
    return (
      <Button
        component="a"
        key={link.label}
        href={link.link}
        variant="gradient"
        gradient={{ from: "pink", to: isCurrent ? "blue" : "pink" }}
        onClick={() => {
          setActive(link.link);
        }}
      >
        {link.label}
      </Button>
    );
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
        {/* <Group gap={5} visibleFrom="xs">
          {items}
        </Group> */}
      </Container>
      <MenuDrawer opened={opened} onClose={close} />
    </header>
  );
}
