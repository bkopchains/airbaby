import { Link, useLocation } from "react-router";
import { Button, Menu } from "airbaby-ui";
import type { MenuItemConfig } from "airbaby-ui";
import BrandMark from "@/components/brand/BrandMark";
import {
  IconBabyCarriage,
  IconBarbell,
  IconHeartHandshake,
  IconInfoCircle,
  IconLayoutGrid,
} from "@tabler/icons-react";
import styles from "./header.module.css";

const links: {
  href: string;
  label: string;
  icon: React.ReactNode;
}[] = [
  {
    href: "/rentababy",
    label: "RentABaby",
    icon: <IconBabyCarriage size={20} stroke={1.75} />,
  },
  {
    href: "/buffbaby",
    label: "BuffBaby",
    icon: <IconBarbell size={20} stroke={1.75} />,
  },
  {
    href: "/babymatch",
    label: "BabyMatch",
    icon: <IconHeartHandshake size={20} stroke={1.75} />,
  },
  {
    href: "/info/overview",
    label: "Overview",
    icon: <IconLayoutGrid size={20} stroke={1.75} />,
  },
  {
    href: "/info/about",
    label: "About",
    icon: <IconInfoCircle size={20} stroke={1.75} />,
  },
];

export default function Header() {
  const { pathname } = useLocation();

  const menuItems: MenuItemConfig[] = links.map((link) => ({
    id: link.href,
    label: link.label,
    href: link.href,
    icon: link.icon,
    active: pathname === link.href,
  }));

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <BrandMark
          src="/airbaby_text.svg"
          alt="Airbaby Solutions"
          aspectRatio={871.32 / 255.41}
          className={`${styles.logoDesktop} ${styles.logoWordmark}`}
        />
        <BrandMark
          src="/airbaby.svg"
          alt="Airbaby Solutions"
          aspectRatio={500 / 455.15}
          className={`${styles.logoMobile} ${styles.logoIcon}`}
        />
      </Link>

      <div className={styles.actionsDesktop}>
        {menuItems.map((item) => (
          <Button
            key={item.id}
            finish="solid"
            variant={item.active ? "primary" : "secondary"}
            href={item.href}
            size="sm"
          >
            {item.label}
          </Button>
        ))}
      </div>

      <div className={styles.actionsMobile}>
        <Menu
          finish="glass"
          align="end"
          label="Open navigation"
          items={menuItems}
        />
      </div>
    </header>
  );
}
