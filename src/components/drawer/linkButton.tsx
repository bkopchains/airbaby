import { Center, UnstyledButton, Text } from "@mantine/core";
import styles from "./drawer.module.css";
import React from "react";
import { Link } from "react-router-dom";

interface ILinkButton {
  href: string;
  label: string;
  icon: React.ReactNode;
}

export default function LinkButton(props: ILinkButton) {
  return (
    <div>
      <UnstyledButton component={Link} to={props.href}>
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
