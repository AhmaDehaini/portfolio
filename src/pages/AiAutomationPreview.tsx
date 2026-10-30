import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowLeft, Mail, Bot, Workflow, Clock, DollarSign, Building2, Zap,
  ShieldCheck, FileText, Users, ChartColumn, CircleCheck, CircleX, Activity,
  Sparkles, Headset, Boxes, Search, MessagesSquare, GraduationCap, Cpu, TrendingUp,
  type LucideIcon,
} from 'lucide-react';

import {
  IMPACT_METRICS, EFFICIENCY_GAINS, HOURS_TREND, AUTOMATION_PROJECTS,
  AUTOMATION_STACK, PROCESS_STEPS,
} from '../data/automation';
import { fadeUp } from '../lib/animations';
import { AnimatedSection } from '../components/AnimatedSection';
import { SectionTitle } from '../components/SectionTitle';
import { AnimatedNumber } from '../components/AnimatedNumber';

const ICONS: Record<string, LucideIcon> = {
  building: Building2,
  dollar: DollarSign,
  clock: Clock,
  workflow: Workflow,
  users: Users,
  headset: Headset,
  file: FileText,
  search: Search,
  zap: Zap,
  boxes: Boxes,
  messages: MessagesSquare,
  chart: ChartColumn,
};

const MAX_SAVINGS = Math.max(...AUTOMATION_PROJECTS.map(p => p.monthlySavings));
const TOTAL_MONTHLY_SAVINGS = AUTOMATION_PROJECTS.reduce((sum, p) => sum + p.monthlySavings, 0);
const MAX_HOURS = Math.max(...HOURS_TREND.map(m => m.hours));

function FillBar({ percent, gradient, delay = 0 }: { percent: number; gradient: string; delay?: number }) {
  return (
    <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${percent}%` }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.6, delay, ease: [0.16, 1, 0.3, 1] }}
        className={`h-full rounded-full bg-gradient-to-r ${gradient}`}
      />
    </div>
  );
}

function ProgressRing({ value, stroke, label }: { value: number; stroke: string; label: string }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative w-24 h-24 sm:w-28 sm:h-28">
        <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
          <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="7" />
          <motion.circle
            cx="50"
            cy="50"
            r="42"
            fill="none"
            stroke={stroke}
            strokeWidth="7"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: value / 100 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-xl sm:text-2xl font-black text-white">
          <AnimatedNumber value={value} suffix="%" />
        </span>
      </div>
      <p className="text-gray-400 text-xs mt-3 max-w-[7rem]">{label}</p>
    </div>
  );
}

function LiveTaskCounter() {
  const [count, setCount] = useState(48213);

  useEffect(() => {
    const id = setInterval(() => setCount(c => c + 1 + Math.floor(Math.random() * 3)), 1400);
    return () => clearInterval(id);
  }, []);

  return <span className="tabular-nums">{count.toLocaleString('en-US')}</span>;
}

export default function AiAutomationPreview() {
  useEffect(() => {
    document.title = 'AI Automation Engineer | Ahmad Dehaini';
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#06060f] text-white overflow-x-hidden font-sans">

      {/* Ambient glow blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute -top-60 -left-60 w-[700px] h-[700px] rounded-full bg-violet-950/60 blur-[140px]" />
        <div className="absolute top-1/2 -right-60 w-[600px] h-[600px] rounded-full bg-emerald-950/40 blur-[130px]" />
        <div className="absolute -bottom-60 left-1/3 w-[500px] h-[500px] rounded-full bg-cyan-950/50 blur-[120px]" />
      </div>

      {/* ── Navigation ── */}
      <nav className="fixed top-0 inset-x-0 z-50 border-b border-white/[0.06] bg-[#06060f]/75 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back to portfolio</span>
          </a>
          <span className="text-lg sm:text-xl font-black bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent tracking-tight">
            Ahmad Dehaini
          </span>
          <a
            href="mailto:ahmad.dehaini.8@gmail.com?subject=AI%20Automation%20Inquiry"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 px-4 py-2 text-xs sm:text-sm font-semibold text-white hover:shadow-lg hover:shadow-violet-600/25 transition-all"
          >
            <Mail className="w-4 h-4" />
            <span className="hidden sm:inline">Let's talk</span>
          </a>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative px-6 pt-32 sm:pt-40 pb-16 sm:pb-24 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-violet-300">
            <Bot className="w-4 h-4" />
            AI Automation Engineer
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.08]">
            I automate the work that{' '}
            <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
              slows your business down
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Custom AI agents, workflow automation, and internal tools that cut costs, eliminate repetitive work,
            and keep running reliably long after launch.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="mailto:ahmad.dehaini.8@gmail.com?subject=Free%20Automation%20Audit"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-violet-600/25"
            >
              <Sparkles className="w-4 h-4" />
              Get a Free Automation Audit
            </a>
            <button
              onClick={() => scrollTo('dashboard')}
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 px-6 py-3 text-sm font-semibold text-cyan-300 transition-all duration-200 hover:border-cyan-300 hover:bg-cyan-400/10"
            >
              <TrendingUp className="w-4 h-4" />
              See the Impact
            </button>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-500">
            <span><span className="text-white font-semibold">20+</span> companies</span>
            <span aria-hidden="true">·</span>
            <span><span className="text-white font-semibold">$640K+</span> saved</span>
            <span aria-hidden="true">·</span>
            <span><span className="text-white font-semibold">18,500+</span> hours automated</span>
          </div>
        </motion.div>

        {/* Engineer guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
          className="mt-14 max-w-3xl mx-auto rounded-2xl border border-emerald-400/25 bg-gradient-to-br from-emerald-500/[0.08] to-cyan-500/[0.05] p-6 sm:p-7"
        >
          <div className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300">
              <ShieldCheck className="h-6 w-6" />
            </span>
            <div>
              <p className="text-white font-bold text-base sm:text-lg">Engineering-Grade AI Automation</p>
              <p className="mt-2 text-gray-300 text-sm sm:text-base leading-relaxed">
                Every solution is designed and delivered by a qualified AI engineer with a formal technical background,
                not by someone who picked up AI tools over a few months without engineering experience. Each system is
                architected, tested, and secured to the same standards as production software.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── Impact Dashboard ── */}
      <div className="bg-white/[0.015] border-t border-white/[0.06]">
        <AnimatedSection id="dashboard">
          <SectionTitle>Impact Dashboard</SectionTitle>
          <motion.p variants={fadeUp} className="text-center text-gray-500 mb-10 max-w-xl mx-auto text-sm leading-relaxed">
            Combined results across every automation engagement delivered for my clients.
          </motion.p>

          <motion.div variants={fadeUp} className="rounded-2xl border border-white/10 bg-[#0c0c18] p-4 sm:p-6 shadow-2xl shadow-black/40">
            {/* Dashboard header */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-6 border-b border-white/[0.06]">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/15 text-violet-300">
                  <Activity className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-white font-semibold text-sm">Automation Performance</p>
                  <p className="text-gray-600 text-xs">All clients · All time</p>
                </div>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Live
              </span>
            </div>

            {/* KPI tiles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {IMPACT_METRICS.map((metric, i) => {
                const Icon = ICONS[metric.icon];
                return (
                  <div key={metric.label} className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-5">
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-gray-500 text-xs uppercase tracking-[0.12em]">{metric.label}</p>
                      <span className={`inline-flex p-2 rounded-lg ${metric.bg} ${metric.color}`}>
                        <Icon className="w-4 h-4" />
                      </span>
                    </div>
                    <p className="text-white font-black text-3xl mb-4">
                      <AnimatedNumber value={metric.value} prefix={metric.prefix} suffix={metric.suffix} duration={2.2} />
                    </p>
                    <FillBar percent={metric.fill} gradient={metric.bar} delay={i * 0.12} />
                    <p className="text-gray-600 text-xs mt-2">{metric.note}</p>
                  </div>
                );
              })}
            </div>

            <div className="grid lg:grid-cols-5 gap-4 mt-4">
              {/* Monthly savings per engagement */}
              <div className="lg:col-span-3 rounded-xl border border-white/[0.08] bg-white/[0.025] p-5">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-5">
                  <div>
                    <p className="text-white font-semibold text-sm">Monthly savings by engagement</p>
                    <p className="text-gray-600 text-xs">USD saved every month, per client</p>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Total <span className="text-white font-bold"><AnimatedNumber value={TOTAL_MONTHLY_SAVINGS} prefix="$" /></span>
                    <span className="text-gray-600"> /mo</span>
                  </p>
                </div>
                <div className="space-y-3">
                  {AUTOMATION_PROJECTS.map((project, i) => (
                    <div key={project.title} className="group grid grid-cols-[6.5rem_minmax(0,1fr)_4.5rem] sm:grid-cols-[8.5rem_minmax(0,1fr)_5rem] items-center gap-3">
                      <span className="text-gray-400 text-xs truncate">{project.industry}</span>
                      <div className="relative h-3 rounded-r bg-white/[0.04]">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(project.monthlySavings / MAX_SAVINGS) * 100}%` }}
                          viewport={{ once: true, amount: 0.5 }}
                          transition={{ duration: 1.4, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                          className="h-full rounded-r bg-emerald-400/80 group-hover:bg-emerald-300 transition-colors"
                        />
                        <span className="pointer-events-none absolute left-2 -top-7 z-10 whitespace-nowrap rounded-md border border-white/10 bg-[#14142a] px-2 py-1 text-[11px] text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity">
                          ${project.monthlySavings.toLocaleString('en-US')}/mo · {project.hoursSaved} hrs/mo saved
                        </span>
                      </div>
                      <span className="text-gray-300 text-xs text-right tabular-nums">
                        <AnimatedNumber value={project.monthlySavings} prefix="$" duration={1.6} />
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Efficiency rings */}
              <div className="lg:col-span-2 rounded-xl border border-white/[0.08] bg-white/[0.025] p-5 flex flex-col">
                <p className="text-white font-semibold text-sm">Efficiency gains</p>
                <p className="text-gray-600 text-xs mb-6">Average improvement after automation</p>
                <div className="grid grid-cols-3 gap-2 flex-1 items-center">
                  {EFFICIENCY_GAINS.map(gain => (
                    <ProgressRing key={gain.label} value={gain.value} stroke={gain.stroke} label={gain.label} />
                  ))}
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-5 gap-4 mt-4">
              {/* Hours saved trend */}
              <div className="lg:col-span-3 rounded-xl border border-white/[0.08] bg-white/[0.025] p-5">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-5">
                  <div>
                    <p className="text-white font-semibold text-sm">Hours saved per month</p>
                    <p className="text-gray-600 text-xs">Last 12 months, all clients</p>
                  </div>
                  <p className="text-gray-300 text-sm">
                    <span className="text-white font-bold"><AnimatedNumber value={302} suffix="%" /></span>
                    <span className="text-gray-600"> growth</span>
                  </p>
                </div>
                <div className="flex items-end gap-1.5 sm:gap-2 h-40 border-b border-white/[0.08]">
                  {HOURS_TREND.map((m, i) => (
                    <div key={m.month} className="group relative flex-1 h-full flex items-end">
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: `${(m.hours / MAX_HOURS) * 100}%` }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 1.2, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full rounded-t bg-cyan-400/70 group-hover:bg-cyan-300 transition-colors"
                      />
                      <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-1 z-10 whitespace-nowrap rounded-md border border-white/10 bg-[#14142a] px-2 py-1 text-[11px] text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity">
                        {m.month}: {m.hours.toLocaleString('en-US')} hrs
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-1.5 sm:gap-2 mt-2">
                  {HOURS_TREND.map(m => (
                    <span key={m.month} className="flex-1 text-center text-[10px] text-gray-600">{m.month}</span>
                  ))}
                </div>
              </div>

              {/* Live counters */}
              <div className="lg:col-span-2 grid grid-cols-2 lg:grid-cols-1 gap-4">
                <div className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-5">
                  <div className="flex items-center gap-2 text-gray-500 text-xs uppercase tracking-[0.12em] mb-3">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    Tasks run this month
                  </div>
                  <p className="text-white font-black text-2xl sm:text-3xl"><LiveTaskCounter /></p>
                  <p className="text-gray-600 text-xs mt-1">Executed automatically, zero manual input</p>
                </div>
                <div className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-5">
                  <p className="text-gray-500 text-xs uppercase tracking-[0.12em] mb-3">Average payback</p>
                  <p className="text-white font-black text-2xl sm:text-3xl"><AnimatedNumber value={6} suffix=" weeks" /></p>
                  <p className="text-gray-600 text-xs mt-1">Until the project pays for itself</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>

      {/* ── Projects ── */}
      <div className="border-t border-white/[0.06]">
        <AnimatedSection id="projects">
          <SectionTitle>Selected Automation Projects</SectionTitle>
          <motion.p variants={fadeUp} className="text-center text-gray-500 mb-10 max-w-xl mx-auto text-sm leading-relaxed">
            Client names and project details are kept confidential under NDA. The results speak for themselves.
          </motion.p>
          <div className="grid md:grid-cols-2 gap-5">
            {AUTOMATION_PROJECTS.map(project => {
              const Icon = ICONS[project.icon];
              return (
                <motion.article
                  key={project.title}
                  variants={fadeUp}
                  className="flex flex-col bg-white/[0.03] border border-white/10 rounded-xl p-6 hover:border-white/20 transition-colors"
                >
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <span className={`inline-flex p-2.5 rounded-lg bg-gradient-to-br ${project.accent} shadow-lg`}>
                      <Icon className="w-5 h-5 text-white" />
                    </span>
                    <div className="flex flex-wrap justify-end gap-2">
                      <span className="text-xs px-2.5 py-1 rounded-full bg-white/[0.04] text-gray-400 border border-white/[0.08]">{project.industry}</span>
                      <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-white/[0.04] text-gray-500 border border-white/[0.08]">
                        <ShieldCheck className="w-3 h-3" />
                        Confidential client
                      </span>
                    </div>
                  </div>

                  <h3 className="text-white font-bold text-lg mb-3">{project.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-2">
                    <span className="text-gray-300 font-semibold">Challenge: </span>{project.problem}
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">
                    <span className="text-gray-300 font-semibold">Solution: </span>{project.solution}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-5">
                    <div className="bg-emerald-500/10 rounded-lg p-3 text-center">
                      <p className="text-emerald-400 font-bold text-xl">
                        <AnimatedNumber value={project.monthlySavings} prefix="$" duration={1.6} />
                      </p>
                      <p className="text-gray-500 text-xs mt-0.5">Saved / month</p>
                    </div>
                    <div className="bg-cyan-500/10 rounded-lg p-3 text-center">
                      <p className="text-cyan-400 font-bold text-xl">
                        <AnimatedNumber value={project.hoursSaved} suffix=" hrs" duration={1.6} />
                      </p>
                      <p className="text-gray-500 text-xs mt-0.5">Saved / month</p>
                    </div>
                  </div>

                  <ul className="space-y-1.5 mb-5">
                    {project.results.map(result => (
                      <li key={result} className="text-gray-400 text-sm flex items-start gap-2">
                        <CircleCheck className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-violet-500/10 text-violet-200 border border-violet-500/20">{tag}</span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </AnimatedSection>
      </div>

      {/* ── Engineers, not overnight experts ── */}
      <div className="bg-white/[0.015] border-t border-white/[0.06]">
        <AnimatedSection id="engineers">
          <SectionTitle>Why an AI Engineer Matters</SectionTitle>
          <motion.p variants={fadeUp} className="text-center text-gray-300 mb-10 max-w-2xl mx-auto text-base leading-relaxed">
            I deliver AI automation as a qualified AI engineer, not as someone who learned AI within a couple of
            months without a technical background. Automations touch your customers, your data, and your money,
            so they deserve real engineering.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            <motion.div variants={fadeUp} className="rounded-xl border border-emerald-400/25 bg-emerald-500/[0.05] p-6">
              <p className="text-emerald-300 font-bold mb-4">Engineer-built automation</p>
              <ul className="space-y-3">
                {[
                  'Master’s degree in Computer & Communication Engineering',
                  'Years of production software across web, mobile, and backend',
                  'Hands-on machine learning, RAG, and AI agent development',
                  'Secure data handling, access control, and error recovery',
                  'Monitoring and cost control on every workflow',
                  'Clean, documented code your team can own',
                ].map(point => (
                  <li key={point} className="text-gray-300 text-sm flex items-start gap-2">
                    <CircleCheck className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={fadeUp} className="rounded-xl border border-white/10 bg-white/[0.02] p-6">
              <p className="text-gray-400 font-bold mb-4">Quick-course “AI experts”</p>
              <ul className="space-y-3">
                {[
                  'A few months of tutorials, no engineering background',
                  'Copy-paste templates that break on real-world data',
                  'No understanding of the models behind the tools',
                  'Sensitive data exposed to unvetted services',
                  'Silent failures nobody notices until it costs you',
                  'Fragile setups only they can maintain',
                ].map(point => (
                  <li key={point} className="text-gray-500 text-sm flex items-start gap-2">
                    <CircleX className="w-4 h-4 text-gray-600 mt-0.5 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className="grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto mt-5">
            {[
              { icon: <GraduationCap className="w-5 h-5" />, label: 'M.Sc. Computer & Communication Eng.', color: 'text-violet-400', bg: 'bg-violet-500/10' },
              { icon: <Cpu className="w-5 h-5" />, label: 'ML & Computer Vision Certified', color: 'text-cyan-400', bg: 'bg-cyan-500/10' },
              { icon: <Bot className="w-5 h-5" />, label: 'Production AI Agents & RAG Systems', color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
            ].map(item => (
              <div key={item.label} className="flex items-center gap-3 bg-white/[0.03] border border-white/10 rounded-xl p-4">
                <span className={`inline-flex p-2 rounded-lg ${item.bg} ${item.color} shrink-0`}>{item.icon}</span>
                <p className="text-gray-300 text-xs font-medium">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </AnimatedSection>
      </div>

      {/* ── Process ── */}
      <div className="border-t border-white/[0.06]">
        <AnimatedSection id="process">
          <SectionTitle>How I Work</SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.title}
                variants={fadeUp}
                className="bg-white/[0.03] border border-white/10 rounded-xl p-5 hover:border-white/20 transition-colors"
              >
                <p className="text-4xl font-black bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent mb-3">
                  0{i + 1}
                </p>
                <h3 className="text-white font-bold mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeUp} className="mt-10 text-center">
            <p className="text-gray-600 text-xs uppercase tracking-[0.16em] mb-4">Automation stack</p>
            <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
              {AUTOMATION_STACK.map(tool => (
                <span key={tool} className="text-xs px-3 py-1.5 rounded-md bg-white/[0.04] text-gray-400 border border-white/[0.08]">
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatedSection>
      </div>

      {/* ── CTA ── */}
      <div className="bg-white/[0.015] border-t border-white/[0.06]">
        <AnimatedSection id="contact">
          <motion.div
            variants={fadeUp}
            className="max-w-3xl mx-auto text-center rounded-2xl border border-violet-400/25 bg-gradient-to-br from-violet-500/[0.1] to-cyan-500/[0.06] p-8 sm:p-12"
          >
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Ready to stop paying for manual work?</h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-8">
              Tell me where your team loses the most time. I'll show you what can be automated, how much it can
              save, and how fast it pays for itself.
            </p>
            <a
              href="mailto:ahmad.dehaini.8@gmail.com?subject=Free%20Automation%20Audit"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-violet-600/25"
            >
              <Mail className="w-4 h-4" />
              Book a Free Automation Audit
            </a>
          </motion.div>
        </AnimatedSection>
      </div>

      {/* ── Footer ── */}
      <footer className="border-t border-white/[0.06] py-10 text-center">
        <a href="/" className="text-gray-500 hover:text-white text-sm transition-colors">View full portfolio</a>
        <p className="text-gray-700 text-xs mt-3">
          © {new Date().getFullYear()} Ahmad Dehaini
        </p>
      </footer>

    </div>
  );
}
