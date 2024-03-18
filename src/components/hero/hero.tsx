import Image from 'next/image';
import { Container, Text, Button, Group, MantineGradient } from '@mantine/core';
import classes from './hero.module.css';
import { IconBrandGithub } from '@tabler/icons-react';

const gradient: MantineGradient = { from: 'pink', to: 'blue' }

export function Hero() {
  return (
    <div className={classes.wrapper}>
      <Container size={700} className={classes.inner}>
        <h1 className={classes.title}>
          Building{' '}
          <Text component="span" variant="gradient" gradient={gradient} inherit>
            totally safe
          </Text>{' '}
          solutions for you and your babies
        </h1>

        <Text className={classes.description}>
          From the brilliant mind behind RentABaby™, comes exciting new business solutions! Stay tuned for more.
        </Text>

        <Group className={classes.controls}>
          <Button
            size="xl"
            className={classes.control}
            variant="gradient"
            gradient={gradient}
          >
            Get started
          </Button>

          <Button
            component="a"
            href="https://github.com/bkopchains/airbaby"
            size="xl"
            variant="default"
            className={classes.control}
            leftSection={<IconBrandGithub size={20}/>}
          >
            GitHub
          </Button>
        </Group>
      </Container>
    </div>
  );
}