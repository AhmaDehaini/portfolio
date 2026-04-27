import { motion } from 'motion/react';
import { fadeUp } from '../lib/animations';
import type { ExperienceItem } from '../types';

export function ExperienceCard({ exp }: { exp: ExperienceItem }) {
  return (
    <motion.div variants={fadeUp} className="relative pl-8 pb-8 last:pb-0">
      <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10" />
      <div className={`absolute left-[-5px] top-2 w-3 h-3 rounded-full bg-gradient-to-br ${exp.accent} shadow-sm`} />
      <div className="bg-white/[0.03] border border-white/10 rounded-xl p-5 hover:border-white/20 transition-colors">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-4">
          <div>
            <h3 className="text-lg font-bold text-white">{exp.role}</h3>
            <span className={`text-sm font-semibold bg-gradient-to-r ${exp.accent} bg-clip-text text-transparent`}>
              {exp.company}
            </span>
          </div>
          <div className="sm:text-right shrink-0">
            <p className="text-gray-400 text-sm">{exp.period}</p>
            <p className="text-gray-600 text-xs">{exp.location}</p>
          </div>
        </div>
        <ul className="space-y-1.5">
          {exp.highlights.map((h, i) => (
            <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
              <span className="text-violet-500 mt-0.5 shrink-0">▸</span>
              {h}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
