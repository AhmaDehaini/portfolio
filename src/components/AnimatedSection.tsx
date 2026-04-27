import { useRef, type ReactNode } from 'react';
import { motion, useInView } from 'motion/react';
import { staggerContainer } from '../lib/animations';

interface AnimatedSectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function AnimatedSection({ id, children, className = '' }: AnimatedSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.section
      id={id}
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={`py-20 px-6 max-w-6xl mx-auto ${className}`}
    >
      {children}
    </motion.section>
  );
}
