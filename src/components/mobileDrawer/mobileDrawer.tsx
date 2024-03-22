"use client";
import {
  Text,
  Center,
  Collapse,
  Divider,
  Drawer,
  ScrollArea,
  UnstyledButton,
  rem,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import styles from "./mobileDrawer.module.css";
import {
  IconAirBalloon,
  IconBabyBottle,
  IconBabyCarriage,
  IconBusinessplan,
  IconChevronDown,
  IconInfoCircle,
} from "@tabler/icons-react";
import { MockLinks } from "./mockLinks";

interface IDrawerProps {
  opened: boolean;
  onClose: () => void;
}

export default function MobileDrawer(props: IDrawerProps) {
  const { opened, onClose } = props;
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();

  return (
    <Drawer
      opened={opened}
      onClose={onClose}
      size="75%"
      padding="md"
      title="Airbaby Solutions, Baby"
      hiddenFrom="xs"
      overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
      classNames={{
        root: styles.drawer,
        header: styles.drawerHeader,
        body: styles.drawerBody,
      }}
      zIndex={1000000}
    >
      <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
        <Divider my="xs" />
        <div>
          <UnstyledButton onClick={toggleLinks}>
            <Center className={styles.drawerLink} inline>
              <IconBabyCarriage
                style={{ marginLeft: rem(5), width: rem(16), height: rem(16) }}
                color={theme.colors.pink[6]}
              />
              <Text className={styles.drawerLinkText} size="md" fw={500}>
                Our Solutions
              </Text>
              <IconChevronDown
                style={{
                  marginLeft: rem(5),
                  width: rem(16),
                  height: rem(16),
                  rotate: linksOpened ? "-180deg" : "0deg",
                  transition: "all 0.25s",
                }}
                color={theme.colors.pink[6]}
              />
            </Center>
          </UnstyledButton>
        </div>
        <Collapse in={linksOpened}>{<MockLinks close={onClose} />}</Collapse>
        <div>
          <UnstyledButton component="a" href="/info/about">
            <Center className={styles.drawerLink} inline>
              <IconInfoCircle
                style={{ marginLeft: rem(5), width: rem(16), height: rem(16) }}
                color={theme.colors.pink[6]}
              />
              <Text className={styles.drawerLinkText} size="md" fw={500}>
                About
              </Text>
            </Center>
          </UnstyledButton>
        </div>
        {/* <div>
          <Center className={styles.drawerLink} inline>
            <IconBusinessplan
              style={{ marginLeft: rem(5), width: rem(16), height: rem(16) }}
              color={theme.colors.pink[6]}
            />
            <Text className={styles.drawerLinkText} size="md" fw={500} >
              Solutions
            </Text>
          </Center>
        </div>
        <div>
          <Center className={styles.drawerLink} inline>
            <IconBabyBottle
              style={{ marginLeft: rem(5), width: rem(16), height: rem(16) }}
              color={theme.colors.pink[6]}
            />
            <Text className={styles.drawerLinkText} size="md" fw={500} >
              Baby
            </Text>
          </Center>
        </div> */}
      </ScrollArea>
    </Drawer>
  );
}
