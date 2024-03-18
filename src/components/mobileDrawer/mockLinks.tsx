import { UnstyledButton, Group, ThemeIcon, rem, Text, useMantineTheme } from "@mantine/core";
import { IconBabyBottle, IconBabyCarriage, IconAirBalloon, IconPlane, IconPlanet, Icon } from "@tabler/icons-react";
import styles from "./header.module.css"
import Link from "next/link";

const mockdata: { icon: any, title: string, description: string, href: string }[] = [
  {
    icon: IconBabyBottle,
    title: 'Airbaby',
    description: 'airbabysolutionsbaby',
    href: '/'
  },
  {
    icon: IconBabyCarriage,
    title: 'Solutions',
    description: 'rentababy',
    href: '/rentababy'
  },
  {
    icon: IconAirBalloon,
    title: 'Air',
    description: 'air baby? solutions.',
    href: '/'
  },
  {
    icon: IconPlane,
    title: 'Baby',
    description: 'babybabybabybabybabybabybabybabybabybabybabybabybabybabybabybabybabybabybabybabybabybaby',
    href: '/'
  },
  {
    icon: IconPlanet,
    title: 'Solutions',
    description: '👶',
    href: '/'
  }
];

interface IMockLinks {
  close: () => void
}

export const MockLinks = (props: IMockLinks) => {
  const {close} = props;
  const theme = useMantineTheme();
  return mockdata.map((item) => (
    <UnstyledButton className={styles.subLink} key={item.title}>
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon style={{ width: rem(22), height: rem(22) }} color={theme.colors.pink[6]} />
        </ThemeIcon>
        <Link onClick={close} href={item.href}>
          <div>
            <Text size="md" fw={500}>
              {item.title}
            </Text>
            <Text size="sm" c="dimmed">
              {item.description}
            </Text>
          </div>
        </Link>
      </Group>
    </UnstyledButton>
  ))
};