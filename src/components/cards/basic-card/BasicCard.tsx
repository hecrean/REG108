import * as $ from './BasicCard.module.scss';
import { CSSProperties } from 'react';

type BasicCardProps = {
  srcUrl: string;
  title: string;
  subtitle: string;
};
const BasicCard = ({ srcUrl, title, subtitle }: BasicCardProps) => {
  console.log(srcUrl);
  const styles = {
    '--background-image': srcUrl,
  } as CSSProperties;

  return (
    <figure className={$.card} style={styles}>
      <div className={$.image} />
      <figcaption>
        <h4 className={$.title}> {title} </h4>
        <h5 className={$.subtitle}>{subtitle}</h5>
      </figcaption>
    </figure>
  );
};

export { BasicCard };
