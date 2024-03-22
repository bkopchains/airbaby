import { Card, Avatar, Text, Group, Grid, GridCol } from "@mantine/core";
import Image from "next/image";
import styles from "./horizontalCard.module.css";
import rootStyles from "@/app/main.module.css";

interface IHorizontalCard {
  title: string;
  subtitle: string;
  avatarSrc: string;
  username: string;
  dateText: string;
  flipped?: boolean;
}

const ImageComponent = () => (
  <GridCol className={styles.imageCol} span={3}>
    <Image alt="rentababy" src="/pattern.svg" height={200} width={220} />
  </GridCol>
);

export default function HorizontalCard({
  flipped = false,
  ...props
}: IHorizontalCard) {
  const { avatarSrc, title, subtitle, username, dateText } = props;
  return (
    <Card withBorder radius="md" p={0} className={styles.card}>
      <Grid gutter={0}>
        {!flipped && <ImageComponent />}
        <GridCol span={9} className={styles.body}>
          <Text tt="uppercase" c="dimmed" fw={700} size="xs">
            {title}
          </Text>
          <Text className={styles.title} mt="xs" mb="md">
            {subtitle}
          </Text>
          <Group wrap="nowrap" gap="xs">
            <Group gap="xs" wrap="nowrap">
              <Avatar
                className={
                  avatarSrc.includes(".svg") ? rootStyles.logo : undefined
                }
                size={20}
                src={avatarSrc}
              />
              <Text size="xs">{username}</Text>
            </Group>
            <Text size="xs" c="dimmed">
              •
            </Text>
            <Text size="xs" c="dimmed">
              {dateText}
            </Text>
          </Group>
        </GridCol>
        {flipped && <ImageComponent />}
      </Grid>
    </Card>
  );
}
