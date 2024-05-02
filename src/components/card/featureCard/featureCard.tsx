import { Card, Text, rem, useMantineTheme } from "@mantine/core";

import styles from "./featureCard.module.css";
import { Icon, IconProps } from "@tabler/icons-react";

export interface IFeatureCard {
  title: string;
  description: string;
  Icon: React.ForwardRefExoticComponent<Omit<IconProps, "ref"> & React.RefAttributes<Icon>>;
}


export default function FeatureCard({
  ...props
}: IFeatureCard) {
  const { title, description, Icon } = props;
  const theme = useMantineTheme();
  return (
    <Card
      key={title}
      shadow="md"
      radius="md"
      className={styles.card}
      padding="xl"
    >
      <Icon
        style={{ width: rem(50), height: rem(50) }}
        stroke={2}
        color={theme.colors.pink[6]}
      />
      <Text fz="lg" fw={500} className={styles.cardTitle} mt="md">
        {title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {description}
      </Text>
    </Card>
  );
}
