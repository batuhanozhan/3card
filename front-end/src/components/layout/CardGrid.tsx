import React from 'react';
import styles from './CardGrid.module.css';
import InteractiveCard, { InteractiveCardProps } from '../ui/InteractiveCard';
import insaatBg from '../../assets/images/backgrounds/insaat.jpg';
import mimarlikBg from '../../assets/images/backgrounds/mimarlik.jpg';
import celikBg from '../../assets/images/backgrounds/celik-konst.jpg';

export type CardGridItem = Pick<InteractiveCardProps, 'title' | 'description' | 'href' | 'onClick' | 'ariaLabel'> & {
  id: string;
};

export type CardGridProps = {
  items: CardGridItem[];
};

function CardGrid({ items }: CardGridProps) {
  const accentClasses = [styles.accentBlue, styles.accentGreen, styles.accentPink];
  const backgrounds = [insaatBg, mimarlikBg, celikBg];

  return (
    <div className={styles.wrapper}>
      <div className={styles.grid}>
        {items.map((item, index) => (
          <div key={item.id} className={styles.row}>
            <InteractiveCard
              title={item.title}
              description={item.description}
              href={item.href}
              onClick={item.onClick}
              ariaLabel={item.ariaLabel}
              className={accentClasses[index % accentClasses.length]}
              backgroundImageUrl={backgrounds[index % backgrounds.length]}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardGrid;


