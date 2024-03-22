import { ImageCard } from "@/components/card";
import styles from "./page.module.css";
import {
  Button,
  Card,
  Container,
  Grid,
  GridCol,
  Paper,
  SimpleGrid,
  Skeleton,
  rem,
} from "@mantine/core";
import HorizontalCard from "@/components/card/horizontalCard/horizontalCard";

const PRIMARY_COL_HEIGHT = rem(300);

const BuffBabyCard = () => (
  <ImageCard
    flipped
    title="buffbaby"
    subtitle="Keep your baby as buff as ever!"
    footer={
      <div style={{ display: "flex", justifyContent: "end", width: "100%" }}>
        <Button component="a" href="/buffbaby" color="pink">
          More Info
        </Button>
      </div>
    }
  />
);

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
              <HorizontalCard
                title="Baby Rental"
                subtitle="The BEST way to get your hands on a baby in 2024!"
                avatarSrc="/rentababy_logo.svg"
                username="Rentababy"
                dateText="Mar 20"
              />
            </GridCol>
            <GridCol span={6}>
              <Card withBorder radius="md">
                Hey!
              </Card>
            </GridCol>
            <GridCol span={6}>
              <Card withBorder radius="md">
                Rent a baby!
              </Card>
            </GridCol>
          </Grid>
        </SimpleGrid>
      </Container>
      <Container my="md">
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
          <Container m={0} p={0} hiddenFrom="sm">
            <BuffBabyCard />
          </Container>
          <Grid gutter="md">
            <GridCol span={6}>
              <Card withBorder radius="md">
                Rent a baby!
              </Card>
            </GridCol>
            <GridCol span={6}>
              <Card withBorder radius="md">
                Hey!
              </Card>
            </GridCol>
            <GridCol>
              <HorizontalCard
                flipped
                title="Baby Rental"
                subtitle="The BEST way to get your hands on a baby in 2024!"
                avatarSrc="/rentababy_logo.svg"
                username="Rentababy"
                dateText="Mar 20"
              />
            </GridCol>
            <GridCol>
              <HorizontalCard
                title="Baby Rental"
                subtitle="The BEST way to get your hands on a baby in 2024!"
                avatarSrc="/rentababy_logo.svg"
                username="Rentababy"
                dateText="Mar 20"
              />
            </GridCol>
          </Grid>
          <Container m={0} p={0} visibleFrom="sm">
            <BuffBabyCard />
          </Container>
        </SimpleGrid>
      </Container>
    </main>
  );
}
