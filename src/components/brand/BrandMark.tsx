import { cx } from "@/lib/cx";
import styles from "@/styles/main.module.css";

interface BrandMarkProps {
  src: string;
  alt: string;
  /** SVG viewBox width ÷ height (drives aspect-ratio while width is 100%). */
  aspectRatio: number;
  className?: string;
}

/** Frosted-glass silhouette matching kit Card finish="glass". */
export default function BrandMark({
  src,
  alt,
  aspectRatio,
  className,
}: BrandMarkProps) {
  const mask = {
    WebkitMaskImage: `url(${src})`,
    maskImage: `url(${src})`,
  } as const;

  return (
    <div
      role="img"
      aria-label={alt}
      className={cx(styles.logoGlassWrap, className)}
      style={{ aspectRatio: String(aspectRatio) }}
    >
      {/* Shadow on its own layer so filter doesn't kill backdrop-filter (Safari) */}
      <div className={styles.logoGlassShadow} style={mask} aria-hidden />
      <div className={styles.logoGlass} style={mask} aria-hidden />
    </div>
  );
}
