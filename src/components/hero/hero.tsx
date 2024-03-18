import Image from 'next/image';
import { Container, Text, Button, Group, MantineGradient } from '@mantine/core';
import styles from './hero.module.css';
import { IconBrandGithub } from '@tabler/icons-react';

const gradient: MantineGradient = { from: 'pink', to: 'blue' }

export default function Hero() {
  return (
    <div className={styles.wrapper}>
      <Container size={700} className={styles.inner}>
        <h1 className={styles.title}>
          Building{' '}
          <Text component="span" variant="gradient" gradient={gradient} inherit>
            totally safe
          </Text>{' '}
          solutions for you and your babies
        </h1>

        <Text className={styles.description}>
          From the brilliant mind behind RentABaby™, comes exciting new business solutions! Stay tuned for more.
        </Text>

        <Group className={styles.controls}>
          <Button
            size="xl"
            className={styles.control}
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
            className={styles.control}
            leftSection={<IconBrandGithub size={20}/>}
          >
            GitHub
          </Button>
        </Group>
      </Container>
    </div>
  );
}