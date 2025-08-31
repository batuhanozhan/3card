import React from 'react';
import styles from './InteractiveCard.module.css';

export type InteractiveCardProps = {
  title: string;
  description?: string;
  href?: string;
  onClick?: () => void;
  ariaLabel?: string;
  className?: string;
  backgroundImageUrl?: string;
};

function InteractiveCard({ title, description, href, onClick, ariaLabel, className, backgroundImageUrl }: InteractiveCardProps) {
  const style = backgroundImageUrl
    ? ({ ['--card-bg-image' as any]: `url(${backgroundImageUrl})` } as React.CSSProperties)
    : undefined;
  const content = (
    <div className={styles.inner}>
      <h2 className={styles.title}>{title}</h2>
      {description ? <p className={styles.description}>{description}</p> : null}
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        className={className ? `${styles.card} ${className}` : styles.card}
        style={style}
        aria-label={ariaLabel || title}
      >
        <span className={styles.backdrop} aria-hidden="true" />
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={className ? `${styles.card} ${className}` : styles.card}
      style={style}
      aria-label={ariaLabel || title}
    >
      <span className={styles.backdrop} aria-hidden="true" />
      {content}
    </button>
  );
}

export default InteractiveCard;


