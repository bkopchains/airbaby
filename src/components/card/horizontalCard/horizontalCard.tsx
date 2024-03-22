import { Card, Avatar, Text, Group } from "@mantine/core";
import Image from "next/image";
import classes from "./horizontalCard.module.css";
import rootStyles from "@/app/main.module.css";

interface IHorizontalCard {
  title: string;
  subtitle: string;
  avatarSrc: string;
  username: string;
  dateText: string;
  flipped?: boolean;
}

export default function HorizontalCard({
  flipped = false,
  ...props
}: IHorizontalCard) {
  const { avatarSrc, title, subtitle, username, dateText } = props;
  return (
    <Card withBorder radius="md" p={0} className={classes.card}>
      <Group wrap="nowrap" gap={0}>
        {!flipped && (
          <Image alt="rentababy" src="/pattern.svg" height={200} width={220} />
        )}
        <div className={classes.body}>
          <Text tt="uppercase" c="dimmed" fw={700} size="xs">
            {title}
          </Text>
          <Text className={classes.title} mt="xs" mb="md">
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
        </div>
        {flipped && (
          <Image alt="rentababy" src="/pattern.svg" height={200} width={220} />
        )}
      </Group>
    </Card>
  );
}
