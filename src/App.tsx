import { useState, useRef, type ReactNode } from 'react';
import { motion, useInView } from 'motion/react';
import {
  Mail, Phone, MapPin, Linkedin, Github,
  Code2, Gamepad2, Brain, ChevronDown,
  ExternalLink, Play, Pause, Download,
} from 'lucide-react';

// ─── Data ────────────────────────────────────────────────────────────────────

const SKILLS_CATEGORIES = [
  {
    title: 'Languages',
    icon: 'code',
    color: 'from-violet-500 to-purple-600',
    items: ['JavaScript', 'TypeScript', 'C#', 'HTML', 'CSS'],
  },
  {
    title: 'Frontend',
    icon: 'link',
    color: 'from-cyan-500 to-blue-600',
    items: ['React', 'Next.js', 'React Native', 'Tailwind CSS', 'Vite'],
  },
  {
    title: 'Game Dev',
    icon: 'gamepad',
    color: 'from-orange-500 to-red-600',
    items: ['Unity Engine', 'C#', 'Augmented Reality', 'Virtual Reality', 'WebGL', 'Game Design', 'Level Design'],
  },
  {
    title: 'AI & Data',
    icon: 'brain',
    color: 'from-emerald-500 to-teal-600',
    items: ['OpenAI GPT-4', 'RAG Systems', 'Machine Learning', 'Computer Vision', 'Pulumi IaC', 'YOLOv10'],
  },
];

const EXPERIENCE = [
  {
    role: 'AI Developer (Intern)',
    company: 'StartMeUp.AI',
    period: '6/2025 – 8/2025',
    location: 'Remote, Lebanon',
    highlights: [
      'Developed 10 specialized AI agents using Next.js 15, TypeScript, and OpenAI GPT-4.',
      'Built infrastructure automation with Pulumi IaC and intelligent cost optimization.',
      'Implemented RAG systems with similarity matching and relevance scoring.',
      'Achieved 80%+ test coverage with Jest, React Testing Library, and Playwright.',
      'Built project management tools with GitHub integration and automated issue triage.',
    ],
    accent: 'from-violet-500 to-purple-600',
  },
  {
    role: 'ReactJS Developer',
    company: 'Hornet Strike',
    period: '10/2024 – Present',
    location: 'Tyre, Lebanon',
    highlights: [
      'Developed and maintained user interfaces using React and JSX.',
      'Created reusable components to enhance code efficiency and maintainability.',
      'Collaborated with cross-functional teams to implement new features.',
      'Adhered to best practices ensuring code quality and performance.',
    ],
    accent: 'from-cyan-500 to-blue-600',
  },
  {
    role: 'Data Science',
    company: 'Zaka.ai',
    period: '05/2024 – 09/2024',
    location: 'Remote, Lebanon',
    highlights: [
      'Certified program covering data science and machine learning end-to-end.',
      'Computer vision project: predicting anomalies from dental X-ray images.',
      'Applied preprocessing and augmentation over the dataset.',
      'Trained YOLOv10, Faster RCNN, and DETR models for best accuracy.',
    ],
    accent: 'from-emerald-500 to-teal-600',
  },
  {
    role: 'Unity Game Developer',
    company: 'Freelance',
    period: '10/2023 – 05/2024',
    location: 'Remote, Lebanon',
    highlights: [
      'Developed AR game for children in dentist clinics on Android using Voidar SDK.',
      'Built a VR simulation for safe electric scooter training using Unity and C#.',
      'Delivered AR, VR, and WebGL experiences.',
    ],
    accent: 'from-orange-500 to-red-600',
  },
  {
    role: 'Unity Mobile Game Developer',
    company: 'Playholding',
    period: '09/2020 – 08/2023',
    location: 'Beirut, Lebanon',
    highlights: [
      'Successfully launched 20+ high-quality mobile games on App Store and Google Play.',
      'Independently developed game logic, mechanics, and features from scratch.',
      'Optimized performance using CPU and GPU techniques for smooth mobile gameplay.',
      'Integrated ad SDKs and performed A/B testing to improve retention.',
      'Created GDDs, handled level design, and balanced gameplay experiences.',
    ],
    accent: 'from-yellow-500 to-orange-600',
  },
  {
    role: 'Front-end Developer Intern',
    company: 'Cloud Gate',
    period: '06/2020 – 08/2020',
    location: 'Beirut, Lebanon',
    highlights: [
      'Developed cross-platform apps using React Native and JavaScript.',
      'Random Movie app: displays highly-rated movies with random discovery.',
      'Instagram main page clone with dark mode layout.',
    ],
    accent: 'from-pink-500 to-rose-600',
  },
];

const GAMES = [
  {
    title: 'Eco Revive',
    video: '/videos/Eco%20Revive.mp4',
    description: 'An engaging mobile game developed with Unity and C#, launched on iOS and Android.',
    tags: ['Unity', 'C#', 'Mobile', 'iOS / Android'],
  },
  {
    title: 'Tire Restoration',
    video: '/videos/Tire%20restoration.mp4',
    description: 'A satisfying mobile restoration game experience built with Unity and C#.',
    tags: ['Unity', 'C#', 'Mobile', 'Game Design'],
  },
  {
    title: 'Conquer',
    video: '/videos/conquer.mp4',
    description: 'A strategy mobile game built with Unity and C#.',
    tags: ['Unity', 'C#', 'Mobile', 'Strategy'],
  },
  {
    title: 'Pool Vacuum',
    video: '/videos/Pool_Vacuum.mp4',
    description: 'A satisfying pool cleaning simulation game developed with Unity and C#.',
    tags: ['Unity', 'C#', 'Mobile', 'Simulation'],
  },
];

// ─── Animation Variants ───────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

// ─── Reusable Components ──────────────────────────────────────────────────────

function AnimatedSection({ id, children, className = '' }: { id: string; children: ReactNode; className?: string }) {
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

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <motion.div variants={fadeUp} className="mb-12 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{children}</h2>
      <div className="h-1 w-16 mx-auto rounded-full bg-gradient-to-r from-violet-500 to-cyan-500" />
    </motion.div>
  );
}

function SkillCategoryIcon({ icon }: { icon: string }) {
  if (icon === 'gamepad') return <Gamepad2 className="w-5 h-5 text-white" />;
  if (icon === 'brain') return <Brain className="w-5 h-5 text-white" />;
  if (icon === 'link') return <ExternalLink className="w-5 h-5 text-white" />;
  return <Code2 className="w-5 h-5 text-white" />;
}

function VideoCard({ game }: { game: typeof GAMES[0] }) {
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

function ExperienceCard({ exp }: { exp: typeof EXPERIENCE[0] }) {
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

// ─── Main App ─────────────────────────────────────────────────────────────────

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = ['about', 'skills', 'experience', 'games', 'education', 'contact'];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#06060f] text-white overflow-x-hidden font-sans">

      {/* Ambient glow blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute -top-60 -left-60 w-[700px] h-[700px] rounded-full bg-violet-950/60 blur-[140px]" />
        <div className="absolute top-1/2 -right-60 w-[600px] h-[600px] rounded-full bg-cyan-950/50 blur-[130px]" />
        <div className="absolute -bottom-60 left-1/3 w-[500px] h-[500px] rounded-full bg-purple-950/40 blur-[120px]" />
      </div>

      {/* ── Navigation ── */}
      <nav className="fixed top-0 inset-x-0 z-50 border-b border-white/[0.06] bg-[#06060f]/75 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <button onClick={() => scrollTo('about')} className="text-xl font-black bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent tracking-tight">
            Ahmad Dehaini
          </button>

          <div className="hidden md:flex items-center gap-7">
            {navLinks.map(link => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className="text-gray-400 hover:text-white capitalize text-sm transition-colors duration-200"
              >
                {link}
              </button>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-gray-400 hover:text-white"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5 w-6">
              <span className={`block h-0.5 bg-current transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden border-t border-white/[0.06] bg-[#06060f] px-6 py-4 space-y-3"
          >
            {navLinks.map(link => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className="block w-full text-left text-gray-400 hover:text-white capitalize text-sm py-1"
              >
                {link}
              </button>
            ))}
          </motion.div>
        )}
      </nav>

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-violet-400 font-mono text-xs tracking-[0.25em] uppercase mb-5"
          >
            Software Developer
          </motion.p>

          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black leading-none mb-6">
            <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
              Ahmad
            </span>
            <br />
            <span className="text-white">Dehaini</span>
          </h1>

          <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Frontend Engineer &nbsp;·&nbsp; Game Developer &nbsp;·&nbsp; AI Enthusiast
            <br />
            Building immersive experiences — from interactive web apps to Unity games.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <button
              onClick={() => scrollTo('games')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold text-sm hover:shadow-xl hover:shadow-violet-600/30 hover:-translate-y-0.5 transition-all duration-200"
            >
              <Gamepad2 className="w-4 h-4" />
              View Games
            </button>
            <button
              onClick={() => scrollTo('experience')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 text-gray-300 hover:text-white hover:border-white/30 hover:bg-white/5 font-semibold text-sm transition-all duration-200"
            >
              <Code2 className="w-4 h-4" />
              My Experience
            </button>
            <a
              href="mailto:ahmad.dehaini.8@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400/50 font-semibold text-sm transition-all duration-200"
            >
              <Mail className="w-4 h-4" />
              Hire Me
            </a>
            <a
              href="/CV/Ahmad%20Dehaini%20CV.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-violet-500/30 text-violet-400 hover:bg-violet-500/10 hover:border-violet-400/50 font-semibold text-sm transition-all duration-200"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </div>

          <div className="flex justify-center gap-3">
            <a
              href="https://linkedin.com/in/ahmad-dehaini/"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full border border-white/10 hover:border-white/25 hover:bg-white/5 transition-all duration-200 group"
            >
              <Linkedin className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
            </a>
            <a
              href="https://github.com/ahmd-92"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full border border-white/10 hover:border-white/25 hover:bg-white/5 transition-all duration-200 group"
            >
              <Github className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
            </a>
            <a
              href="https://github.com/AhmaDehaini"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full border border-white/10 hover:border-white/25 hover:bg-white/5 transition-all duration-200 group"
            >
              <Github className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
            </a>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
          className="absolute bottom-10"
        >
          <ChevronDown className="w-6 h-6 text-gray-700" />
        </motion.div>
      </section>

      {/* ── About ── */}
      <div className="border-t border-white/[0.06]">
        <AnimatedSection id="about">
          <SectionTitle>About Me</SectionTitle>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUp} className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Software engineer with a Master's degree in Computer and Communication Engineering,
                combining frontend development expertise with AI specialization. Experienced in React,
                Next.js, JavaScript, TypeScript, and Unity/C# game development.
              </p>
              <p>
                Completed an intensive AI Development internship with SMUAI, building enterprise-grade
                AI agents with OpenAI integration and infrastructure automation. Certified in data science
                with proficiency in machine learning and computer vision.
              </p>
              <p>
                Passionate about advancing skills in AI development, modern web technologies, and
                innovative application development.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4">
              {[
                { icon: <Code2 className="w-6 h-6" />, label: 'Frontend Dev', value: '2 Years', color: 'text-cyan-400', bg: 'bg-cyan-500/10' },
                { icon: <Gamepad2 className="w-6 h-6" />, label: 'Game Developer', value: '5+ Years', color: 'text-violet-400', bg: 'bg-violet-500/10' },
                { icon: <Brain className="w-6 h-6" />, label: 'AI / ML', value: 'Certified', color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
                { icon: <Play className="w-6 h-6" />, label: 'Games Launched', value: '20+', color: 'text-orange-400', bg: 'bg-orange-500/10' },
              ].map(stat => (
                <div
                  key={stat.label}
                  className="bg-white/[0.03] border border-white/10 rounded-xl p-5 text-center hover:border-white/20 transition-colors"
                >
                  <div className={`inline-flex p-2.5 rounded-lg ${stat.bg} ${stat.color} mb-3`}>{stat.icon}</div>
                  <p className="text-white font-bold text-2xl">{stat.value}</p>
                  <p className="text-gray-600 text-xs mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </AnimatedSection>
      </div>

      {/* ── Skills ── */}
      <div className="bg-white/[0.015] border-t border-white/[0.06]">
        <AnimatedSection id="skills">
          <SectionTitle>Skills & Technologies</SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SKILLS_CATEGORIES.map(cat => (
              <motion.div
                key={cat.title}
                variants={fadeUp}
                className="bg-white/[0.03] border border-white/10 rounded-xl p-5 hover:border-white/20 transition-colors group"
              >
                <div className={`inline-flex p-2.5 rounded-lg bg-gradient-to-br ${cat.color} mb-4 shadow-lg`}>
                  <SkillCategoryIcon icon={cat.icon} />
                </div>
                <h3 className="text-white font-bold mb-3 text-sm">{cat.title}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {cat.items.map(item => (
                    <span key={item} className="text-xs px-2 py-1 rounded-md bg-white/[0.04] text-gray-400 border border-white/[0.08]">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>

      {/* ── Experience ── */}
      <div className="border-t border-white/[0.06]">
        <AnimatedSection id="experience">
          <SectionTitle>Work Experience</SectionTitle>
          <div className="max-w-3xl mx-auto">
            {EXPERIENCE.map((exp, i) => (
              <ExperienceCard key={i} exp={exp} />
            ))}
          </div>
        </AnimatedSection>
      </div>

      {/* ── Games ── */}
      <div className="bg-white/[0.015] border-t border-white/[0.06]">
        <AnimatedSection id="games">
          <SectionTitle>Game Showcase</SectionTitle>
          <motion.p variants={fadeUp} className="text-center text-gray-500 mb-10 max-w-lg mx-auto text-sm leading-relaxed">
            A selection of mobile games developed with Unity and C# — launched on the App Store and Google Play.
          </motion.p>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {GAMES.map(game => (
              <VideoCard key={game.title} game={game} />
            ))}
          </div>
        </AnimatedSection>
      </div>

      {/* ── Education ── */}
      <div className="border-t border-white/[0.06]">
        <AnimatedSection id="education">
          <SectionTitle>Education</SectionTitle>
          <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {[
              {
                degree: 'Master of Science',
                field: 'Computer and Communication Engineering',
                school: 'Lebanese International University',
                year: '2016 – 2018',
                color: 'from-violet-500 to-purple-600',
              },
              {
                degree: 'Bachelor of Science',
                field: 'Computer and Communication Engineering',
                school: 'Lebanese International University',
                year: '2011 – 2016',
                color: 'from-cyan-500 to-blue-600',
              },
            ].map(edu => (
              <motion.div
                key={edu.degree}
                variants={fadeUp}
                className="bg-white/[0.03] border border-white/10 rounded-xl p-6 hover:border-white/20 transition-colors"
              >
                <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${edu.color} mb-5`} />
                <p className="text-gray-600 text-xs mb-1">{edu.year}</p>
                <h3 className="text-white font-bold text-lg mb-1">{edu.degree}</h3>
                <p className={`text-sm font-semibold bg-gradient-to-r ${edu.color} bg-clip-text text-transparent mb-2`}>
                  {edu.field}
                </p>
                <p className="text-gray-600 text-sm">{edu.school}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>

      {/* ── Contact ── */}
      <div className="bg-white/[0.015] border-t border-white/[0.06]">
        <AnimatedSection id="contact">
          <SectionTitle>Get In Touch</SectionTitle>
          <motion.p variants={fadeUp} className="text-center text-gray-500 mb-10 max-w-md mx-auto text-sm leading-relaxed">
            Open to new opportunities in frontend, game development, or AI engineering. Let's connect!
          </motion.p>

          <motion.div variants={fadeUp} className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
            <a
              href="mailto:ahmad.dehaini.8@gmail.com"
              className="flex items-center gap-3 bg-white/[0.03] border border-white/10 rounded-xl p-4 hover:border-violet-500/40 hover:bg-white/[0.05] transition-all group"
            >
              <Mail className="w-5 h-5 text-violet-400 shrink-0" />
              <div className="min-w-0">
                <p className="text-gray-600 text-xs">Email</p>
                <p className="text-gray-300 text-xs truncate">ahmad.dehaini.8@gmail.com</p>
              </div>
            </a>
            <a
              href="tel:+96170527168"
              className="flex items-center gap-3 bg-white/[0.03] border border-white/10 rounded-xl p-4 hover:border-cyan-500/40 hover:bg-white/[0.05] transition-all"
            >
              <Phone className="w-5 h-5 text-cyan-400 shrink-0" />
              <div>
                <p className="text-gray-600 text-xs">Phone</p>
                <p className="text-gray-300 text-xs">+961 70 527 168</p>
              </div>
            </a>
            <div className="flex items-center gap-3 bg-white/[0.03] border border-white/10 rounded-xl p-4">
              <MapPin className="w-5 h-5 text-emerald-400 shrink-0" />
              <div>
                <p className="text-gray-600 text-xs">Location</p>
                <p className="text-gray-300 text-xs">Beirut, Lebanon</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="flex justify-center gap-3">
            <a
              href="https://linkedin.com/in/ahmad-dehaini/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/10 hover:border-white/25 hover:bg-white/[0.07] transition-all text-gray-400 hover:text-white text-sm"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href="https://github.com/ahmd-92"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/10 hover:border-white/25 hover:bg-white/[0.07] transition-all text-gray-400 hover:text-white text-sm"
            >
              <Github className="w-4 h-4" />
              GitHub (ahmd-92)
            </a>
            <a
              href="https://github.com/AhmaDehaini"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/10 hover:border-white/25 hover:bg-white/[0.07] transition-all text-gray-400 hover:text-white text-sm"
            >
              <Github className="w-4 h-4" />
              GitHub (AhmaDehaini)
            </a>
          </motion.div>
        </AnimatedSection>
      </div>

      {/* ── Footer ── */}
      <footer className="border-t border-white/[0.06] py-8 text-center">
        <p className="text-gray-700 text-sm">
          © {new Date().getFullYear()} Ahmad Dehaini
        </p>
      </footer>

    </div>
  );
}
