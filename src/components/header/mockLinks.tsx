import { UnstyledButton, Group, ThemeIcon, rem, Text, useMantineTheme } from "@mantine/core";
import { IconBabyBottle, IconBabyCarriage, IconAirBalloon, IconPlane, IconPlanet } from "@tabler/icons-react";
import styles from "./header.module.css"

const mockdata = [
  {
    icon: IconBabyBottle,
    title: 'Airbaby',
    description: 'airbabysolutionsbaby',
  },
  {
    icon: IconBabyCarriage,
    title: 'Solutions',
    description: 'rentababy',
  },
  {
    icon: IconAirBalloon,
    title: 'Air',
    description: 'air baby? solutions.',
  },
  {
    icon: IconPlane,
    title: 'Baby',
    description: 'babybabybabybabybabybabybabybabybabybabybabybabybabybabybabybabybabybabybabybabybabybaby',
  },
  {
    icon: IconPlanet,
    title: 'Solutions',
    description: '👶',
  }
];

export const MockLinks = () => {
  const theme = useMantineTheme();
  return mockdata.map((item) => (
    <UnstyledButton className={styles.subLink} key={item.title}>
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon style={{ width: rem(22), height: rem(22) }} color={theme.colors.pink[6]} />
        </ThemeIcon>
        <div>
          <Text size="md" fw={500}>
            {item.title}
          </Text>
          <Text size="sm" c="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ))
};