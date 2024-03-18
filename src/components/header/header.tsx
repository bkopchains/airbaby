"use client"
import { Burger, Container, Group, useMantineTheme } from '@mantine/core';
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import Image from "next/image";
import styles from "./header.module.css"
import Link from 'next/link';
import MobileDrawer from '../mobileDrawer';

const links = [
  { link: '/', label: 'Air' },
  { link: '/', label: 'Baby' },
  { link: '/', label: 'Solutions' },
  { link: '/', label: 'Baby' },
];

export default function Header() {

  const [opened, { toggle, close }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const theme = useMantineTheme();

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={styles.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={styles.header}>
      <Container size="md" className={styles.inner}>
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
        <Link href={"/"}>
          <Image
            className={styles.logo}
            src="/airbaby.svg"
            alt="airbaby logo, baby"
            width={50}
            height={50}
            priority
          />
        </Link>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>
      </Container>
      <MobileDrawer opened={opened} onClose={close} />
    </header>
  );
}
