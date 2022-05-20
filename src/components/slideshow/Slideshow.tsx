import React, { useEffect, useCallback, useRef } from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';
import { prev, next, img, container } from './Slideshow.module.scss';

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

type SlideshowProps = {
  imageUrls: Array<string>;
};
export const Slideshow = ({ imageUrls }: SlideshowProps) => {
  // const slideShowContainerRef = useRef<HTMLDivElement>(null);
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex = wrap(0, imageUrls.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const keydownHandler = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      console.log(`Key pressed: ${event.key}`);

      if (event.code === `ArrowLeft`) {
        paginate(-1);
      }

      if (event.code === `ArrowRight`) {
        paginate(1);
      }
    },
    [paginate],
  );

  return (
    <div
      // ref={slideShowContainerRef}
      className={container}
      onKeyDown={keydownHandler}
      tabIndex={-1}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          className={img}
          key={page}
          src={imageUrls[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: `spring`, stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
      <div className={next} onClick={() => paginate(1)}>
        {`‣`}
      </div>
      <div className={prev} onClick={() => paginate(-1)}>
        {`‣`}
      </div>
    </div>
  );
};
