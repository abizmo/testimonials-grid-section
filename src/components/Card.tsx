import { PropsWithChildren } from 'react';
import styles from './Card.module.css';
import { VariantProps, cva } from 'class-variance-authority';

const card = cva(styles.card, {
  variants: {
    color: {
      primary: styles.primary,
      secondary: styles.secondary,
      light: styles.light,
      dark: styles.dark,
    },
  },
});

export interface CardProps extends VariantProps<typeof card> {
  id?: string;
  imgSrc: string;
  name: string;
  title: string;
  body?: string;
}

function Card({
  imgSrc,
  name,
  title,
  color,
  children,
}: PropsWithChildren<CardProps>) {
  return (
    <div className={card({ color })}>
      <header className={styles.cardHeader}>
        <img src={imgSrc} alt={name} className={styles.cardAvatar} />
        <div>
          <h1 className={styles.cardName}>{name}</h1>
          <span className={styles.cardVerified}>Verified Graduate</span>
        </div>
      </header>
      <main>
        <h2 className={styles.cardTitle}>{title}</h2>
        <p className={styles.cardBody}>{children}</p>
      </main>
    </div>
  );
}

export default Card;
