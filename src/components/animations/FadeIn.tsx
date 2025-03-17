
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  className?: string;
  once?: boolean;
  distance?: number;
}

const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  direction = 'up',
  duration = 0.5,
  className = '',
  once = true,
  distance = 20,
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once });

  const directionMap = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  };

  const variants = {
    hidden: {
      opacity: 0,
      ...directionMap[direction],
      transition: {
        duration: 0.1,
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else if (!once) {
      controls.start('hidden');
    }
  }, [controls, inView, once]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={`backface-hidden will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
