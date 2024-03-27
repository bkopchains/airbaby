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
import styles from "./drawer.module.css";
import {
  IconBabyCarriage,
  IconChevronDown,
  IconInfoCircle,
  IconNews,
} from "@tabler/icons-react";
import { MockLinks } from "./mockLinks";
import LinkButton from "./linkButton";

interface IDrawerProps {
  opened: boolean;
  onClose: () => void;
}

export default function MenuDrawer(props: IDrawerProps) {
  const { opened, onClose } = props;
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();

  const iconStyle = { marginLeft: rem(5), width: rem(20), height: rem(20) };
  const iconColor = theme.colors.pink[6];

  return (
    <Drawer
      opened={opened}
      onClose={onClose}
      size="sm"
      padding="md"
      title="Airbaby Solutions, Baby"
      // hiddenFrom="xs"
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
              <IconBabyCarriage style={iconStyle} color={iconColor} />
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
                color={iconColor}
              />
            </Center>
          </UnstyledButton>
        </div>
        <Collapse in={linksOpened}>{<MockLinks close={onClose} />}</Collapse>
        <LinkButton
          icon={<IconNews style={iconStyle} color={iconColor} />}
          label="Overview"
          href="/info/overview"
        />
        <LinkButton
          icon={<IconInfoCircle style={iconStyle} color={iconColor} />}
          label="About Us"
          href="/info/about"
        />
      </ScrollArea>
    </Drawer>
  );
}
