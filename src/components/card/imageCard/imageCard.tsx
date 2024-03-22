import { Paper, Text, Title, Button } from '@mantine/core';
import classes from './imageCard.module.css';

interface IImageCard {
  title: string;
  subtitle: string;
  footer: React.ReactNode;
}

export default function ImageCard(props: IImageCard) {
  return (
    <Paper shadow="md" p="xl" radius="md" className={classes.card}>
      <div>
        <Text className={classes.category} size="xs">
          {props.title}
        </Text>
        <Title order={3} className={classes.title}>
          {props.subtitle}
        </Title>
      </div>
      {props.footer}
    </Paper>
  )
}