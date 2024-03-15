"use client"
import { Burger, Container, Group } from '@mantine/core';
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import Image from "next/image";
import styles from "./header.module.css"

const links = [
  { link: '/', label: 'Air' },
  { link: '/', label: 'Baby' },
  { link: '/', label: 'Solutions' },
  { link: '/', label: 'Baby' },
];

export default function Header() {

  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

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
        <Image
          className={styles.logo}
          src="/airbaby.svg"
          alt="airbaby logo, baby"
          width={40}
          height={40}
          priority
        />
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}
