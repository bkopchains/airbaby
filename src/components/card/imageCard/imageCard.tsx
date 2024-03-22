import { Paper, Text, Title, Button } from '@mantine/core';
import classes from './imageCard.module.css';

interface IImageCard {
  title: string;
  subtitle: string;
  footer: React.ReactNode;
  flipped?: boolean
}

export default function ImageCard({flipped = false, ...props}: IImageCard) {
  return (
    <Paper shadow="md" p="xl" radius="md" className={classes.card}>
      <div>
        <Text className={classes.category} size="xs" ta={flipped ? 'right' : 'left'}>
          {props.title}
        </Text>
        <Title order={3} className={classes.title} ta={flipped ? 'right' : 'left'}>
          {props.subtitle}
        </Title>
      </div>
      {props.footer}
    </Paper>
  )
}