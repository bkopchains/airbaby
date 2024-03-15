"use client"
import { Text, Burger, Button, Center, Collapse, Container, Divider, Drawer, Group, ScrollArea, UnstyledButton, rem, useMantineTheme } from '@mantine/core';
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import Image from "next/image";
import styles from "./header.module.css"
import { IconChevronDown } from '@tabler/icons-react';
import { MockLinks } from './mockLinks';

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
        <Image
          className={styles.logo}
          src="/airbaby.svg"
          alt="airbaby logo, baby"
          width={50}
          height={50}
          priority
        />
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>
      </Container>
      <Drawer
        opened={opened}
        onClose={close}
        size="75%"
        padding="md"
        title="Airbaby Solutions, Baby"
        hiddenFrom="xs"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          <Text size="md" fw={500} className={styles.drawerLink}>
            Air
          </Text>
          <UnstyledButton className={styles.link} onClick={toggleLinks}>
            <Center inline>
              <Text size="md" fw={500}>
                Baby
              </Text>
              <IconChevronDown
                style={{ width: rem(16), height: rem(16), rotate: linksOpened ? '-180deg' : '0deg', transition: 'all 0.25s' }}
                color={theme.colors.blue[6]}
              />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{<MockLinks />}</Collapse>
          <Text size="md" fw={500} className={styles.drawerLink}>
            Solutions
          </Text>
          <Text size="md" fw={500} className={styles.drawerLink}>
            Baby
          </Text>
        </ScrollArea>
      </Drawer>
    </header>
  );
}
