import {
  Burger,
  Center,
  Container,
  ThemeIcon,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import styles from "./header.module.css";
import rootStyles from "@/styles/main.module.css";
import { Link } from "react-router-dom";
import MenuDrawer from "../drawer";
import { IconSun, IconMoon } from "@tabler/icons-react";
import cx from "clsx";

export default function Header() {
  const [opened, { toggle, close }] = useDisclosure(false);

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
        <Link to="/">
          <Center visibleFrom="xs">
            <img
              className={rootStyles.logo}
              src="/airbaby_text.svg"
              alt="airbaby logo, baby"
              width={125}
              height={50}
            />
          </Center>
          <Center hiddenFrom="xs">
            <img
              className={rootStyles.logo}
              src="/airbaby.svg"
              alt="airbaby logo, baby"
              width={50}
              height={50}
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
      </Container>
      <MenuDrawer opened={opened} onClose={close} />
    </header>
  );
}
