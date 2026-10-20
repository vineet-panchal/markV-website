"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, ExternalLink, Terminal } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { cn } from "@/lib/utils";
import SkillChip from "@/components/skill-chip";
import { SKILL_ICONS, type SkillIcon, type SkillName } from "@/components/skill-icons";
import { ScreenPlaceholder } from "@/components/projects-page/featuredProjectDisplay";
import { getProject, projects, type Project } from "@/lib/projects";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-(family-name:--font-geist-mono) text-xs tracking-widest text-zinc-500">
      {"// "}
      {children}
    </p>
  );
}

function SectionTitle({ eyebrow, title, accentWord }: { eyebrow: string; title: string; accentWord: string }) {
  return (
    <motion.div {...fadeUp} className="mb-10 flex flex-col gap-3">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="font-(family-name:--font-inter-tight) text-4xl font-bold leading-none tracking-tighter text-white sm:text-5xl">
        {title}{" "}
        <span className="font-(family-name:--font-dm-serif-display) font-normal italic tracking-normal text-[var(--accent)]">
          {accentWord}
        </span>
      </h2>
    </motion.div>
  );
}

function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-b from-[var(--surface-1)] to-[var(--surface-2)] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_20px_50px_-25px_rgba(0,0,0,0.7)] transition-colors duration-300 hover:border-white/[0.16]",
        className,
      )}
    >
      {children}
    </div>
  );
}

function SkillLogo({ skill, className = "size-5" }: { skill: SkillName; className?: string }) {
  const { logo, icon: Icon, color, invertOnLight }: SkillIcon = SKILL_ICONS[skill];
  if (Icon) return <Icon className={className} style={{ color }} aria-hidden />;
  return logo ? <Image src={logo} alt="" className={cn(className, "object-contain", invertOnLight && "light:invert")} /> : null;
}

function BrowserFrame({ project }: { project: Project }) {
  if (!project.image) return <ScreenPlaceholder title={project.title} className="w-full" />;
  return (
    <div className="overflow-hidden rounded-2xl border border-white/15 bg-[var(--surface-3)] shadow-2xl">
      <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 flex h-5 flex-1 items-center rounded-md bg-white/[0.06] px-2 font-(family-name:--font-geist-mono) text-[10px] text-zinc-500">
          {project.live ? project.live.replace(/^https?:\/\//, "").replace(/\/$/, "") : `${project.slug}.app`}
        </span>
      </div>
      <Image src={project.image} alt={`${project.title} screenshot`} className="h-auto w-full" priority />
    </div>
  );
}

function Hero({ project, index }: { project: Project; index: number }) {
  const meta = [
    { label: "year", value: project.year },
    { label: "role", value: project.role },
    { label: "context", value: project.context },
    { label: "status", value: project.status },
  ];

  return (
    <section className="relative overflow-hidden pb-20 pt-32 sm:pt-36">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]"
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 size-[44rem] -translate-x-1/2 rounded-full opacity-30 blur-[120px]"
        style={{ backgroundColor: project.accent }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.25, 0.35, 0.25] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-8">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 font-(family-name:--font-geist-mono) text-xs text-zinc-400 transition-colors hover:text-white"
        >
          <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-0.5" />
          all projects
        </Link>

        <div className="mt-10 grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          <motion.div {...fadeUp} className="flex flex-col gap-6">
            <Eyebrow>
              project {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
            </Eyebrow>
            <h1 className="font-(family-name:--font-inter-tight) text-5xl font-bold leading-[0.95] tracking-tighter text-white sm:text-7xl">
              {project.title}
            </h1>
            <p className="font-(family-name:--font-dm-serif-display) text-2xl italic leading-snug text-[var(--accent)] sm:text-3xl">
              {project.header}
            </p>
            <p className="max-w-xl text-base leading-relaxed text-zinc-400">{project.description}</p>

            <div className="flex flex-wrap items-center gap-2">
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/[0.08] py-1.5 pl-1.5 pr-5 text-sm font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-md transition-all hover:border-white/35 hover:bg-white/[0.14]"
                >
                  <span className="flex size-8 items-center justify-center rounded-full bg-white text-zinc-900">
                    <FaGithub className="size-4" />
                  </span>
                  Source code
                  <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-5 py-3 text-sm font-medium text-zinc-200 backdrop-blur-md transition-colors hover:border-white/30 hover:bg-white/[0.1] hover:text-white"
                >
                  Live site
                  <ExternalLink className="size-4" />
                </a>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40, rotateX: 12 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="relative [perspective:1200px]"
          >
            <div
              aria-hidden
              className="absolute -inset-6 rounded-[2rem] opacity-40 blur-3xl"
              style={{ background: `radial-gradient(circle at 50% 60%, ${project.accent}, transparent 70%)` }}
            />
            <div className="relative">
              <BrowserFrame project={project} />
            </div>
          </motion.div>
        </div>

        <motion.dl
          {...fadeUp}
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] md:grid-cols-4"
        >
          {meta.map(({ label, value }) => (
            <div key={label} className="bg-[var(--color-midnight)] p-5">
              <dt className="font-(family-name:--font-geist-mono) text-[11px] text-zinc-500">{label}</dt>
              <dd className="mt-1.5 flex items-center gap-2 text-sm font-medium text-zinc-100">
                {label === "status" && <span className="size-1.5 shrink-0 animate-pulse rounded-full bg-[var(--accent)]" />}
                {value}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}

function Stats({ project }: { project: Project }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-8">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {project.stats.map((stat, i) => (
          <motion.div key={stat.label} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.08 }}>
            <Card className="h-full">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-10 size-28 rounded-full opacity-20 blur-2xl transition-opacity duration-300 group-hover:opacity-40"
                style={{ backgroundColor: project.accent }}
              />
              <p className="relative font-(family-name:--font-inter-tight) text-4xl font-bold leading-none tracking-tighter text-white sm:text-5xl">
                {stat.value}
              </p>
              <p className="relative mt-3 font-(family-name:--font-geist-mono) text-[11px] leading-relaxed text-zinc-500">{stat.label}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Overview({ project }: { project: Project }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-8">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-16">
        <motion.div {...fadeUp} className="lg:sticky lg:top-28 lg:self-start">
          <Eyebrow>the story</Eyebrow>
          <p className="mt-4 font-(family-name:--font-dm-serif-display) text-4xl italic leading-tight text-white sm:text-5xl">
            &ldquo;{project.header}&rdquo;
          </p>
          <div className="mt-6 h-1 w-16 rounded-full" style={{ backgroundColor: project.accent }} />
        </motion.div>
        <div className="flex flex-col gap-6">
          {project.overview.map((paragraph, i) => (
            <motion.p
              key={i}
              {...fadeUp}
              className={cn("leading-relaxed text-zinc-300", i === 0 ? "text-lg sm:text-xl" : "text-base text-zinc-400")}
            >
              {paragraph}
            </motion.p>
          ))}
          <motion.ul {...fadeUp} className="mt-2 flex flex-col gap-3 border-t border-white/10 pt-6">
            {project.points.map((point) => (
              <li key={point} className="flex gap-3 text-sm leading-relaxed text-zinc-400">
                <Check className="mt-0.5 size-4 shrink-0 text-[var(--accent)]" />
                {point}
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}

function Features({ project }: { project: Project }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-8">
      <SectionTitle eyebrow="what it does" title="Features that" accentWord="matter." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {project.features.map(({ icon: Icon, title, body }, i) => (
          <motion.div
            key={title}
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: (i % 3) * 0.08 }}
            className={cn(i === 0 && project.features.length % 3 === 1 && "lg:col-span-2")}
          >
            <Card className="h-full">
              <div
                className="flex size-11 items-center justify-center rounded-2xl border border-white/10"
                style={{ background: `linear-gradient(135deg, ${project.accent}40, ${project.accent}10)` }}
              >
                <Icon className="size-5 text-white" />
              </div>
              <h3 className="mt-5 font-(family-name:--font-inter-tight) text-lg font-semibold tracking-tight text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{body}</p>
              <span className="absolute right-6 top-6 font-(family-name:--font-geist-mono) text-[11px] text-zinc-700">
                {String(i + 1).padStart(2, "0")}
              </span>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// Animated connector between architecture layers: a dashed track with a pulse travelling along it
function Flow({ accent, vertical }: { accent: string; vertical?: boolean }) {
  return (
    <div className={cn("relative flex items-center justify-center", vertical ? "h-10 w-full lg:hidden" : "hidden w-14 shrink-0 lg:flex")}>
      <div className={cn("border-dashed border-white/20", vertical ? "h-full border-l" : "w-full border-t")} />
      <motion.span
        className="absolute size-2 rounded-full"
        style={{ backgroundColor: accent, boxShadow: `0 0 12px ${accent}` }}
        animate={vertical ? { top: ["0%", "100%"] } : { left: ["0%", "100%"] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

function Architecture({ project }: { project: Project }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-8">
      <SectionTitle eyebrow="how it's wired" title="Under the" accentWord="hood." />
      <motion.div {...fadeUp} className="flex flex-col lg:flex-row lg:items-stretch">
        {project.architecture.map((layer, i) => (
          <React.Fragment key={layer.layer}>
            {i > 0 && (
              <>
                <Flow accent={project.accent} />
                <Flow accent={project.accent} vertical />
              </>
            )}
            <div className="flex flex-1 flex-col gap-3 rounded-3xl border border-dashed border-white/10 bg-white/[0.015] p-4">
              <p className="px-1 font-(family-name:--font-geist-mono) text-[11px] uppercase tracking-widest text-zinc-500">{layer.layer}</p>
              {layer.nodes.map((node) => (
                <div
                  key={node.name}
                  className="flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-gradient-to-b from-[var(--surface-1)] to-[var(--surface-2)] p-4"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                    {node.skill ? <SkillLogo skill={node.skill} /> : <span className="size-2 rounded-full bg-[var(--accent)]" />}
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-white">{node.name}</p>
                    <p className="text-xs leading-relaxed text-zinc-500">{node.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </React.Fragment>
        ))}
      </motion.div>
    </section>
  );
}

function Stack({ project }: { project: Project }) {
  const all = project.stack.flatMap((g) => g.skills);
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-8">
      <SectionTitle eyebrow="built with" title="The" accentWord="stack." />
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <motion.div {...fadeUp}>
          <Card className="h-full">
            <div className="flex flex-col divide-y divide-white/[0.06]">
              {project.stack.map((group) => (
                <div key={group.group} className="grid gap-3 py-5 first:pt-0 last:pb-0 sm:grid-cols-[8rem_minmax(0,1fr)] sm:items-center">
                  <p className="font-(family-name:--font-inter-tight) text-base font-semibold tracking-tight text-white">{group.group}</p>
                  <ul className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <SkillChip key={skill} skill={skill} />
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
          <div className="force-dark h-full overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0f0f10] shadow-[0_20px_50px_-25px_rgba(0,0,0,0.7)]">
            <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
              <Terminal className="size-3.5 text-zinc-500" />
              <span className="font-(family-name:--font-geist-mono) text-[11px] text-zinc-500">~/{project.slug}</span>
            </div>
            <div className="space-y-1.5 p-5 font-(family-name:--font-geist-mono) text-[12px] leading-relaxed">
              {project.repo && (
                <p className="break-all text-zinc-300">
                  <span className="text-[var(--accent)]">$</span> git clone {project.repo.replace(/^https?:\/\//, "")}
                </p>
              )}
              <p className="text-zinc-300">
                <span className="text-[var(--accent)]">$</span> cd {project.slug}
              </p>
              <p className="pt-2 text-zinc-500">{"// loading stack..."}</p>
              {all.map((skill, i) => (
                <motion.p
                  key={skill}
                  initial={{ opacity: 0, x: -6 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.07 }}
                  className="flex items-center gap-2 text-zinc-400"
                >
                  <Check className="size-3 text-emerald-400" />
                  {skill}
                </motion.p>
              ))}
              <p className="pt-2 text-zinc-300">
                <span className="text-[var(--accent)]">✓</span> {all.length} technologies ready
                <motion.span
                  className="ml-1 inline-block h-3.5 w-1.5 translate-y-0.5 bg-zinc-300"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function BuildLog({ project }: { project: Project }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-8">
      <SectionTitle eyebrow="build log" title="How it came" accentWord="together." />
      <ol className="relative ml-4 border-l border-white/10 sm:ml-6">
        {project.build.map((step, i) => (
          <motion.li key={step.title} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.06 }} className="relative pb-10 pl-10 last:pb-0">
            <span
              className="absolute -left-[17px] top-0 flex size-8 items-center justify-center rounded-full border border-white/15 bg-[var(--color-midnight)] font-(family-name:--font-geist-mono) text-[11px] text-white"
              style={{ boxShadow: `0 0 0 4px var(--color-midnight), 0 0 18px ${project.accent}55` }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="font-(family-name:--font-inter-tight) text-xl font-semibold tracking-tight text-white">{step.title}</h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-400">{step.body}</p>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}

function Challenges({ project }: { project: Project }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-8">
      <SectionTitle eyebrow="problems solved" title="Hard parts," accentWord="handled." />
      <div className="grid gap-4 md:grid-cols-2">
        {project.challenges.map((c, i) => (
          <motion.div key={c.title} {...fadeUp} transition={{ ...fadeUp.transition, delay: (i % 2) * 0.08 }}>
            <Card className="h-full">
              <h3 className="font-(family-name:--font-inter-tight) text-lg font-semibold tracking-tight text-white">{c.title}</h3>
              <div className="mt-5 grid gap-4">
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
                  <p className="font-(family-name:--font-geist-mono) text-[11px] text-red-300/80">{"// problem"}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">{c.problem}</p>
                </div>
                <div className="rounded-2xl border p-4" style={{ borderColor: `${project.accent}40`, background: `${project.accent}0d` }}>
                  <p className="font-(family-name:--font-geist-mono) text-[11px] text-[var(--accent)]">{"// solution"}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-zinc-300">{c.solution}</p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function NextProject({ index }: { index: number }) {
  const next = projects[(index + 1) % projects.length];
  const prev = projects[(index - 1 + projects.length) % projects.length];
  return (
    <section className="mx-auto max-w-6xl px-4 pb-24 pt-12 sm:px-8">
      <Link href={`/projects/${next.slug}`} className="group block">
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] p-8 transition-colors hover:border-white/20 sm:p-12">
          <div
            aria-hidden
            className="absolute inset-0 opacity-25 transition-opacity duration-500 group-hover:opacity-40"
            style={{ background: `radial-gradient(circle at 85% 50%, ${next.accent}, transparent 60%)` }}
          />
          <div className="relative flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <Eyebrow>next project</Eyebrow>
              <p className="mt-3 font-(family-name:--font-inter-tight) text-4xl font-bold tracking-tighter text-white sm:text-6xl">{next.title}</p>
              <p className="mt-2 font-(family-name:--font-dm-serif-display) text-xl italic" style={{ color: next.accent }}>
                {next.header}
              </p>
            </div>
            <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-white text-zinc-900 transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight className="size-6" />
            </span>
          </div>
        </div>
      </Link>
      <div className="mt-4 flex justify-between font-(family-name:--font-geist-mono) text-xs text-zinc-500">
        <Link href={`/projects/${prev.slug}`} className="inline-flex items-center gap-1.5 transition-colors hover:text-white">
          <ArrowLeft className="size-3.5" /> {prev.title}
        </Link>
        <Link href="/projects" className="transition-colors hover:text-white">
          all projects
        </Link>
      </div>
    </section>
  );
}

export default function ProjectDetail({ slug }: { slug: string }) {
  const project = getProject(slug);
  if (!project) return null;
  const index = projects.indexOf(project);

  return (
    <main style={{ "--accent": project.accent } as React.CSSProperties} className="text-white">
      <Hero project={project} index={index} />
      <Stats project={project} />
      <Overview project={project} />
      <Features project={project} />
      <Architecture project={project} />
      <Stack project={project} />
      <BuildLog project={project} />
      <Challenges project={project} />
      <NextProject index={index} />
    </main>
  );
}
