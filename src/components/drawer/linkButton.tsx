import { Center, UnstyledButton, Text } from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons-react";
import styles from "./drawer.module.css";
import React from "react";

interface ILinkButton {
  href: string;
  label: string;
  icon: React.ReactNode;
}

export default function LinkButton(props: ILinkButton) {
  return (
    <div>
      <UnstyledButton component="a" href={props.href}>
        <Center className={styles.drawerLink} inline>
          {props.icon}
          <Text className={styles.drawerLinkText} size="md" fw={500}>
            {props.label}
          </Text>
        </Center>
      </UnstyledButton>
    </div>
  );
}
