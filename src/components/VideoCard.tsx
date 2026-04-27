import { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Play, Pause } from 'lucide-react';
import { fadeUp } from '../lib/animations';
import type { Game } from '../types';

export function VideoCard({ game }: { game: Game }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };

  return (
    <motion.div
      variants={fadeUp}
      className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-violet-500/40 transition-colors duration-300"
    >
      <div className="relative aspect-[9/16] cursor-pointer" onClick={toggle}>
        <video
          ref={videoRef}
          src={game.video}
          className="w-full h-full object-cover"
          loop
          muted
          playsInline
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        />
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
            playing ? 'bg-black/0 opacity-0 group-hover:opacity-100' : 'bg-black/40'
          }`}
        >
          <div className="w-16 h-16 rounded-full bg-violet-600/90 flex items-center justify-center backdrop-blur-sm shadow-lg shadow-violet-900/50">
            {playing
              ? <Pause className="w-6 h-6 text-white" fill="white" />
              : <Play className="w-6 h-6 text-white ml-1" fill="white" />
            }
          </div>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-white mb-2">{game.title}</h3>
        <p className="text-gray-400 text-sm mb-4 leading-relaxed">{game.description}</p>
        <div className="flex flex-wrap gap-2">
          {game.tags.map(tag => (
            <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-violet-500/15 text-violet-300 border border-violet-500/25">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
