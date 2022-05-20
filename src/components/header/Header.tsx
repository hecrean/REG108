import {
  flex_container,
  flex_item,
  button,
  spacer,
} from './Header.module.scss';
import { motion } from 'framer-motion';

type HeaderProps = Record<string, unknown>;

const Header = (props: HeaderProps) => {
  return (
    <motion.header
      className={flex_container}
      animate={{ scale: 1 }}
      transition={{ duration: 2 }}
    >
      <span className={flex_item} data-align-end>
        EYLEA
      </span>
      <div className={spacer} />
      <button
        className={`${button} ${flex_item}`}
        data-align-end={true}
        data-wide-button={true}
      >
        WATCH THE ANIMATION
      </button>
      <button
        className={`${button} ${flex_item}`}
        data-align-end={true}
        data-wide-button={true}
      >
        CASE STUDIES
      </button>
      <div className={spacer} />
      <button className={`${button} ${flex_item}`} data-align-end={true}>
        REFERENCES
      </button>
      <button className={`${button} ${flex_item}`} data-align-end={true}>
        ISI
      </button>
    </motion.header>
  );
};

export { Header };
