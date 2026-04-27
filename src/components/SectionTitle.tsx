import { type ReactNode } from 'react';
import { motion } from 'motion/react';
import { fadeUp } from '../lib/animations';

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <motion.div variants={fadeUp} className="mb-12 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{children}</h2>
      <div className="h-1 w-16 mx-auto rounded-full bg-gradient-to-r from-violet-500 to-cyan-500" />
    </motion.div>
  );
}
