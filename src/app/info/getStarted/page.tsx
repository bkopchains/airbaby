import { ImageCard } from "@/components/card";
import styles from "./page.module.css";
import {
  Button,
  Container,
  Grid,
  GridCol,
  Paper,
  SimpleGrid,
  Skeleton,
  rem,
} from "@mantine/core";

const PRIMARY_COL_HEIGHT = rem(300);

export default function GetStarted() {
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;

  return (
    <main className={styles.main}>
      <Container my="md">
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
          <ImageCard
            title="rentababy"
            subtitle="On-demand baby rentals!"
            footer={
              <Button component="a" href="/rentababy" color="pink">
                More Info
              </Button>
            }
          />
          <Grid gutter="md">
            <GridCol>
              <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" />
            </GridCol>
            <GridCol span={6}>
              <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" />
            </GridCol>
            <GridCol span={6}>
              <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" />
            </GridCol>
          </Grid>
        </SimpleGrid>
      </Container>
      <Container my="md">
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
          <Grid gutter="md">
            <GridCol>
              <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" />
            </GridCol>
            <GridCol span={6}>
              <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" />
            </GridCol>
            <GridCol span={6}>
              <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" />
            </GridCol>
          </Grid>
          <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" />
        </SimpleGrid>
      </Container>
    </main>
  );
}
