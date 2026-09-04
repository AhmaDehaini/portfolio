import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Mail, Phone, MapPin, Linkedin, Github,
  Code2, Gamepad2, Brain, ChevronDown, Server,
  ExternalLink, Play, Download,
} from 'lucide-react';

import { SKILLS_CATEGORIES, EXPERIENCE, GAMES } from './data';
import { fadeUp } from './lib/animations';
import { AnimatedSection } from './components/AnimatedSection';
import { SectionTitle } from './components/SectionTitle';
import { ExperienceCard } from './components/ExperienceCard';
import { VideoCard } from './components/VideoCard';

function SkillCategoryIcon({ icon }: { icon: string }) {
  if (icon === 'gamepad') return <Gamepad2 className="w-5 h-5 text-white" />;
  if (icon === 'brain') return <Brain className="w-5 h-5 text-white" />;
  if (icon === 'server') return <Server className="w-5 h-5 text-white" />;
  if (icon === 'link') return <ExternalLink className="w-5 h-5 text-white" />;
  return <Code2 className="w-5 h-5 text-white" />;
}

const NAV_LINKS = ['about', 'skills', 'experience', 'projects', 'aurabrush', 'games', 'capstone', 'education', 'contact'] as const;

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [welcomed, setWelcomed] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#06060f] text-white overflow-x-hidden font-sans">

      {/* ── Welcome Splash ── */}
      {!welcomed && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          onAnimationComplete={() => setWelcomed(true)}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#06060f] pointer-events-none"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-gray-500 font-mono text-xs tracking-[0.3em] uppercase mb-4"
          >
            Welcome to my portfolio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent tracking-tight"
          >
            Ahmad Dehaini
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-5 h-px w-32 bg-gradient-to-r from-violet-500 to-cyan-500 origin-left"
          />
        </motion.div>
      )}

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
            {NAV_LINKS.map(link => (
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
            {NAV_LINKS.map(link => (
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
            Frontend-Focused Full-Stack Developer
          </motion.p>

          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black leading-none mb-6">
            <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
              Ahmad
            </span>
            <br />
            <span className="text-white">Dehaini</span>
          </h1>

          <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Full-Stack Developer &nbsp;·&nbsp; Game Developer &nbsp;·&nbsp; AI Enthusiast
            <br />
            Building complete web products with a sharp focus on frontend craft and user experience.
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
                Frontend-focused full-stack developer with a Master's degree in Computer and Communication
                Engineering. I build complete web applications while specializing in responsive interfaces,
                thoughtful interactions, and polished user experiences.
              </p>
              <p>
                My backend work spans PHP/Laravel, Supabase, PostgreSQL, Node.js, Express, and Python,
                including APIs, authentication, database design, serverless functions, and secure access control.
              </p>
              <p>
                I also bring five years of game-development experience and hands-on AI expertise, allowing
                me to approach products with a strong blend of engineering, interaction design, and creativity.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4">
              {[
                { icon: <Code2 className="w-6 h-6" />, label: 'Frontend Focus', value: 'Primary', color: 'text-cyan-400', bg: 'bg-cyan-500/10' },
                { icon: <Server className="w-6 h-6" />, label: 'Full-Stack Delivery', value: 'End to End', color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
                { icon: <Gamepad2 className="w-6 h-6" />, label: 'Game Developer', value: '5+ Years', color: 'text-violet-400', bg: 'bg-violet-500/10' },
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
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

      {/* ── Full-Stack Projects ── */}
      <div className="bg-white/[0.015] border-t border-white/[0.06]">
        <AnimatedSection id="projects">
          <SectionTitle>Featured Full-Stack Projects</SectionTitle>
          <motion.p variants={fadeUp} className="text-center text-gray-500 mb-10 max-w-xl mx-auto text-sm leading-relaxed">
            End-to-end products built across responsive frontend experiences, secure backends, databases, authentication, and production deployment.
          </motion.p>
          <div className="max-w-4xl mx-auto space-y-5">

            {/* BoardGoal */}
            <motion.article variants={fadeUp} className="group bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden hover:border-lime-400/30 transition-colors">
              <a
                href="https://boardgoal.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="relative block overflow-hidden bg-[#071c20]"
                aria-label="Play BoardGoal in a new tab"
              >
                <img
                  src="/BoardGoal/boardgoal_game.png"
                  alt="BoardGoal puzzle gameplay showing a football, walls, mud tiles, a switch, and a goal"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.015]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06060f]/80 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full border border-lime-300/30 bg-[#071c20]/85 px-3 py-1.5 text-xs font-bold text-lime-300 backdrop-blur-md">
                  <span className="h-2 w-2 rounded-full bg-lime-300 animate-pulse" />
                  Live project
                </span>
              </a>
              <div className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lime-400 mb-2">Browser puzzle game</p>
                    <h3 className="text-2xl font-black text-white">BoardGoal</h3>
                  </div>
                  <a
                    href="https://boardgoal.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-lime-400 text-[#07100b] font-bold text-sm hover:bg-lime-300 hover:shadow-xl hover:shadow-lime-400/20 hover:-translate-y-0.5 transition-all duration-200 shrink-0"
                  >
                    <Play className="w-4 h-4 fill-current" />
                    Play BoardGoal
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-gray-400 leading-relaxed text-sm">
                  A browser-based football puzzle game where players guide balls into goals while navigating
                  walls, mud, portals, switches, and timed gates. The responsive frontend includes animated
                  gameplay, a level creator, community levels, leaderboards, and synchronized progress tracking.
                  Its Supabase backend secures users and level data with PostgreSQL, Edge Functions,
                  authentication, Row Level Security, and TOTP-protected admin tools.
                </p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {['JavaScript', 'HTML', 'CSS', 'Supabase', 'PostgreSQL', 'Edge Functions', 'Authentication', 'RLS', 'TOTP'].map(tag => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-lime-400/10 text-lime-200 border border-lime-400/20">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.article>

            {/* Platform Replacement */}
            <motion.div variants={fadeUp} className="bg-white/[0.03] border border-white/10 rounded-xl p-6 hover:border-cyan-500/20 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                <div>
                  <h3 className="text-white font-bold text-lg">Platform Replacement — Full Stack</h3>
                  <p className="text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent mt-0.5">ScaryByte</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/25 font-semibold">&lt; 1 Month</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Identified that the company was paying <span className="text-white font-semibold">$10,000 / month</span> for a third-party SaaS platform. Built a full replacement from scratch — frontend and backend — in under one month, resulting in immediate savings of $10,000 per month for the company.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { label: 'Monthly Savings', value: '$10K', color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
                  { label: 'Build Time', value: '< 1 mo', color: 'text-cyan-400', bg: 'bg-cyan-500/10' },
                  { label: 'Stack', value: 'Full', color: 'text-violet-400', bg: 'bg-violet-500/10' },
                ].map(stat => (
                  <div key={stat.label} className={`${stat.bg} rounded-lg p-4 text-center`}>
                    <p className={`${stat.color} font-bold text-xl`}>{stat.value}</p>
                    <p className="text-gray-500 text-xs mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Full Stack', 'AI-Assisted Dev', 'GitHub Copilot', 'Claude', 'Lovable'].map(tag => (
                  <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">{tag}</span>
                ))}
              </div>
            </motion.div>

            {/* Data Provider Platform */}
            <motion.div variants={fadeUp} className="bg-white/[0.03] border border-white/10 rounded-xl p-6 hover:border-cyan-500/20 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-white font-bold text-lg">Data Provider Platform</h3>
                  <p className="text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent mt-0.5">ScaryByte — In Progress</p>
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-cyan-500/15 text-cyan-400 border border-cyan-500/25 font-semibold shrink-0 self-start">Concurrent</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Building a data provider platform in parallel — developed simultaneously alongside the platform replacement project, managing both workstreams with AI-assisted tooling under strict human review.
              </p>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Data Platform', 'AI-Assisted Dev'].map(tag => (
                  <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">{tag}</span>
                ))}
              </div>
            </motion.div>

            {/* AI-Assisted Dev Philosophy */}
            <motion.div variants={fadeUp} className="bg-white/[0.03] border border-white/10 rounded-xl p-5">
              <h3 className="text-white font-semibold text-sm mb-3">AI-Assisted Development Approach</h3>
              <ul className="space-y-2">
                {[
                  'Used GitHub Copilot, Claude, Lovable, and other AI tools to accelerate development velocity.',
                  'Maintained full managerial control — reviewed every AI-generated output before integration.',
                  'Ensured no full AI autonomy over production code; every detail audited and validated personally.',
                  'Balanced speed of AI tooling with engineering discipline and code quality standards.',
                ].map((point, i) => (
                  <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                    <span className="text-cyan-500 mt-0.5 shrink-0">▸</span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>
        </AnimatedSection>
      </div>

      {/* ── AuraBrush AI ── */}
      <div className="border-t border-white/[0.06]">
        <AnimatedSection id="aurabrush">
          <SectionTitle>AuraBrush AI</SectionTitle>
          <div className="max-w-4xl mx-auto">
            <motion.div variants={fadeUp} className="bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden hover:border-fuchsia-500/20 transition-colors">
              <div className="relative">
                <img
                  src="/Aurabrush/aurabrush-ai.png"
                  alt="AuraBrush AI screenshot"
                  className="w-full object-cover max-h-[480px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06060f] via-transparent to-transparent" />
              </div>
              <div className="p-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5">
                  <div>
                    <h3 className="text-2xl font-black text-white">AuraBrush AI</h3>
                    <p className="text-sm font-semibold bg-gradient-to-r from-pink-500 to-fuchsia-500 bg-clip-text text-transparent mt-1">Personal Project &nbsp;·&nbsp; 4/2026 – Present</p>
                  </div>
                  <a
                    href="https://aura-brush.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-pink-600 to-fuchsia-600 text-white font-semibold text-sm hover:shadow-xl hover:shadow-fuchsia-600/30 hover:-translate-y-0.5 transition-all duration-200 shrink-0"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Visit Live App
                  </a>
                </div>
                <p className="text-gray-400 leading-relaxed text-sm">
                  AuraBrush AI is a full-stack, AI-powered web application built with React, TypeScript, Node.js, and Express.
                  Users generate unique coloring-book-style images through an OpenAI integration that runs on a credit-based
                  system — controlling how many generations each user can request. Once an image is generated, it can be
                  painted interactively directly in the browser using a custom painting interface with brush, fill, and eraser
                  tools. The application includes full backend authentication — signup and login flows — as well as user
                  management and credit-tracking logic, giving every session a seamless end-to-end experience from account
                  creation to finished artwork.
                </p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {['React', 'TypeScript', 'Node.js', 'Express', 'OpenAI API', 'Full Stack', 'Authentication'].map(tag => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-fuchsia-500/10 text-fuchsia-300 border border-fuchsia-500/20">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
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

      {/* ── Capstone Project ── */}
      <div className="border-t border-white/[0.06]">
        <AnimatedSection id="capstone">
          <SectionTitle>AI Capstone Project</SectionTitle>
          <motion.p variants={fadeUp} className="text-center text-gray-500 mb-10 max-w-xl mx-auto text-sm leading-relaxed">
            A 40-week intensive program at Zaka.ai — 20 weeks of machine learning &amp; data science foundations followed by a 20-week computer vision capstone project.
          </motion.p>
          <div className="max-w-4xl mx-auto space-y-6">

            {/* Dataset Overview */}
            <motion.div variants={fadeUp} className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
              <h3 className="text-white font-bold text-lg mb-3">Dental X-Ray Anomaly Detection</h3>
              <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                Trained and evaluated multiple deep learning models to detect dental anomalies in X-ray images, working with a limited dataset of 437 annotated images across three anomaly classes: <span className="text-gray-300">Lesions</span>, <span className="text-gray-300">Cavity</span>, and <span className="text-gray-300">Mental Foramen</span>.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: 'X-Ray Images', value: '437', color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
                  { label: 'Anomaly Classes', value: '3', color: 'text-violet-400', bg: 'bg-violet-500/10' },
                  { label: 'Models Trained', value: '3', color: 'text-cyan-400', bg: 'bg-cyan-500/10' },
                ].map(stat => (
                  <div key={stat.label} className={`${stat.bg} rounded-lg p-4 text-center`}>
                    <p className={`${stat.color} font-bold text-2xl`}>{stat.value}</p>
                    <p className="text-gray-500 text-xs mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* YOLOv10 Per-Anomaly Results */}
            <motion.div variants={fadeUp} className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
              <h3 className="text-white font-bold text-base mb-5">YOLOv10 — Per-Anomaly Accuracy</h3>
              <div className="space-y-4">
                {[
                  { label: 'Mental Foramen', accuracy: 80, color: 'from-emerald-500 to-teal-500', note: 'Best result' },
                  { label: 'Cavity', accuracy: 25, color: 'from-orange-500 to-amber-500', note: '' },
                  { label: 'Lesions', accuracy: 12.5, color: 'from-red-500 to-rose-500', note: '' },
                ].map(item => (
                  <div key={item.label}>
                    <div className="flex justify-between items-center mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-300 text-sm">{item.label}</span>
                        {item.note && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/25">{item.note}</span>
                        )}
                      </div>
                      <span className="text-gray-400 text-sm font-mono">{item.accuracy}%</span>
                    </div>
                    <div className="h-2 bg-white/[0.06] rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                        style={{ width: `${item.accuracy}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Model Comparison */}
            <motion.div variants={fadeUp} className="grid sm:grid-cols-3 gap-4">
              {[
                { model: 'YOLOv10', note: 'Mental Foramen detection', accuracy: '80%', color: 'from-emerald-500 to-teal-600' },
                { model: 'DenseNet121', note: 'Best overall classifier', accuracy: '53%', color: 'from-violet-500 to-purple-600' },
                { model: 'Faster RCNN', note: 'Object detection baseline', accuracy: '—', color: 'from-cyan-500 to-blue-600' },
              ].map(m => (
                <div key={m.model} className="bg-white/[0.03] border border-white/10 rounded-xl p-5 text-center hover:border-white/20 transition-colors">
                  <div className={`h-1 w-10 mx-auto rounded-full bg-gradient-to-r ${m.color} mb-4`} />
                  <p className="text-white font-bold text-lg">{m.model}</p>
                  <p className="text-gray-500 text-xs mb-3">{m.note}</p>
                  <p className={`text-2xl font-black bg-gradient-to-r ${m.color} bg-clip-text text-transparent`}>{m.accuracy}</p>
                </div>
              ))}
            </motion.div>

            {/* Presentation Link */}
            <motion.div variants={fadeUp} className="text-center pt-2">
              <a
                href="https://docs.google.com/presentation/d/1t54H2Yt6emGmPBVKmdpRNkIZbDBnf3dJ/edit?usp=sharing&ouid=108655775498616841102&rtpof=true&sd=true"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold text-sm hover:shadow-xl hover:shadow-emerald-600/30 hover:-translate-y-0.5 transition-all duration-200"
              >
                <ExternalLink className="w-4 h-4" />
                View Final Presentation
              </a>
            </motion.div>

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
            Open to frontend-focused full-stack opportunities, game development, and AI engineering. Let's connect!
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
      <footer className="border-t border-white/[0.06] py-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 space-y-1"
        >
          <p className="text-gray-400 text-sm">Thank you for taking the time to visit my portfolio.</p>
          <p className="text-gray-600 text-xs">It means a lot — I hope you enjoyed exploring my work.</p>
        </motion.div>
        <p className="text-gray-700 text-xs">
          © {new Date().getFullYear()} Ahmad Dehaini
        </p>
      </footer>

    </div>
  );
}
