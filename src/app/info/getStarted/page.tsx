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
    className={styles.buffBkg}
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
            className={styles.rentBkg}
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
                bkgClass={styles.rentBkg}
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
            <GridCol>
              <HorizontalCard
                flipped
                bkgClass={styles.buffBkg}
                title="Infant Fitness"
                subtitle="I've never seen such a jacked toddler!"
                avatarSrc="/buffbaby.svg"
                username="Kajal C."
                dateText="Apr 22"
              />
            </GridCol>
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
                bkgClass={styles.buffBkg}
                title="Parenting"
                subtitle="My kid can beat me up now - and yours can too!"
                avatarSrc="/airbaby.svg"
                username="Beanius"
                dateText="Nov 27"
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
