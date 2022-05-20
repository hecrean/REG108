import { motion } from 'framer-motion';
import * as $ from './Timeline.module.scss';

type TimelineProps = {
  events: Array<{ date: string; title: string }>;
};
const Timeline = ({ events }: TimelineProps) => {
  return (
    <dl className={$.dl}>
      {events.map(({ date, title }, index) => (
        <div key={`${index}`} className={$.cell}>
          <div className={$.cell_content}>
            <dt>{date}</dt>
            <dd>{title}</dd>
          </div>
        </div>
      ))}
    </dl>
  );
};

export { Timeline };
