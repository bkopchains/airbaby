import { Avatar, Card } from "airbaby-ui";
import styles from "./horizontalCard.module.css";

interface IHorizontalCard {
  title: string;
  subtitle: string;
  avatarSrc?: string;
  /** Override avatar letters (e.g. first initial only). */
  avatarInitials?: string;
  bkgClass: string;
  username: string;
  dateText?: string;
  flipped?: boolean;
}

export default function HorizontalCard({
  flipped = false,
  ...props
}: IHorizontalCard) {
  const {
    avatarSrc,
    avatarInitials,
    title,
    subtitle,
    username,
    dateText,
    bkgClass,
  } = props;

  return (
    <Card finish="glass" padding="none" className={styles.card}>
      <div className={flipped ? styles.rowFlipped : styles.row}>
        <div className={`${styles.imageCol} ${bkgClass}`} aria-hidden />
        <div className={styles.body}>
          <p className={styles.eyebrow}>{title}</p>
          <h3 className={styles.title}>{subtitle}</h3>
          <div className={styles.meta}>
            <Avatar
              src={avatarSrc}
              name={username}
              initials={avatarInitials}
              alt={`${username} avatar`}
              size="sm"
            />
            <span className={styles.username}>{username}</span>
            {dateText ? (
              <>
                <span className={styles.dot} aria-hidden>
                  •
                </span>
                <span className={styles.date}>{dateText}</span>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </Card>
  );
}
