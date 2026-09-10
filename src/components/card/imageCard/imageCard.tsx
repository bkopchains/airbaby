import { Card } from "airbaby-ui";
import classes from "./imageCard.module.css";

interface IImageCard {
  title: string;
  subtitle: string;
  footer: React.ReactNode;
  flipped?: boolean;
  className?: string;
}

export default function ImageCard({
  flipped = false,
  ...props
}: IImageCard) {
  return (
    <Card
      finish="glass"
      padding="lg"
      className={
        props.className ? `${props.className} ${classes.card}` : classes.card
      }
    >
      <div className={flipped ? classes.flipped : undefined}>
        <p className={classes.category}>{props.title}</p>
        <h3 className={classes.title}>{props.subtitle}</h3>
      </div>
      {props.footer}
    </Card>
  );
}
