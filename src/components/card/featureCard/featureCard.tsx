import { Card } from "airbaby-ui";
import styles from "./featureCard.module.css";
import type { Icon, IconProps } from "@tabler/icons-react";

export interface IFeatureCard {
  title: string;
  description: string;
  Icon: React.ForwardRefExoticComponent<
    Omit<IconProps, "ref"> & React.RefAttributes<Icon>
  >;
}

export default function FeatureCard({ ...props }: IFeatureCard) {
  const { title, description, Icon } = props;
  return (
    <Card finish="glass" padding="lg" className={styles.card}>
      <Icon
        className={styles.icon}
        stroke={2}
        aria-hidden
      />
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </Card>
  );
}
