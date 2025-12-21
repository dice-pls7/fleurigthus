import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const RevealText = ({ 
  children, 
  className = '', 
  delay = 0,
  as = 'div',
  ...props 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const Component = motion[as] || motion.div;

  const variants = {
    hidden: { 
      y: '120%',
      rotateX: -80,
      opacity: 0,
    },
    visible: { 
      y: 0,
      rotateX: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  };

  return (
    <div 
      ref={ref} 
      className={`reveal-wrapper ${className}`}
      style={{ 
        overflow: 'hidden',
        perspective: '1000px',
      }}
      {...props}
    >
      <Component
        variants={variants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        style={{ transformOrigin: 'bottom' }}
      >
        {children}
      </Component>
    </div>
  );
};

export default RevealText;
