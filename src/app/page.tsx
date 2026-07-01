import { ExperienceSection } from "@/components/experience-section";
import { GitHubContributions } from "@/components/github-contributions";
import { MacShell } from "@/components/mac-shell";
import {
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  ArrowRight,
  BadgeCheck,
  FolderCode,
} from "lucide-react";
import {
  SiX,
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiSupabase,
  SiGit,
} from "react-icons/si";
import Link from "next/link";
import Image from "next/image";
import { hasCurrentExperience, projects, techAccentColor } from "@/lib/data";
import { Button } from "@/components/ui/button";

export default function Home() {
  const isEmployed = hasCurrentExperience();

  return (
    <MacShell>
      {/* Profile: header row (avatar + meta), full-width bio below — aligned with reference layout */}
      <section className="animate-in fade-in slide-in-from-bottom-4 mb-5 flex flex-col gap-8 duration-700 fill-mode-both sm:gap-10">
        <div className="flex flex-row items-start gap-4 sm:gap-8">
          <div className="relative shrink-0">
            <div
              className="absolute -inset-0.5 rounded-lg bg-gradient-to-br from-[var(--mac-status)] to-transparent opacity-40 blur-sm"
              aria-hidden
            />
            <Image
              src="https://github.com/Guddu-Pandit.png"
              alt="Guddu Kumar"
              width={96}
              height={96}
              className="relative size-20 rounded-lg border border-[var(--mac-window-border)] object-cover transition-transform duration-300 hover:scale-105 sm:size-24"
              priority
            />
          </div>
          <div className="min-w-0 flex-1 space-y-0">
            <h1 className="flex flex-wrap items-center gap-2 text-xl font-bold tracking-tight text-[var(--mac-fg)] sm:text-2xl">
              Guddu Kumar
              <BadgeCheck
                className="size-5 text-[var(--mac-status)] sm:size-6"
                aria-label="Verified"
              />
            </h1>
            <p className="mt-1 text-sm text-[var(--mac-muted)] sm:text-base">
              Full-Stack Developer
            </p>
            <p className="mt-2 flex items-center gap-2 text-xs text-[var(--mac-muted)] sm:text-sm">
              <span
                className={`status-dot ${isEmployed ? "status-dot--employed" : "status-dot--unemployed"}`}
                aria-hidden
              />
              <span className="text-[var(--mac-fg)]">status:</span>{" "}
              {isEmployed ? "employed" : "unemployed"}
            </p>
          </div>
        </div>
        <div className="w-full min-w-0 space-y-4 text-sm leading-relaxed text-[var(--mac-fg)]/90 sm:text-[15px]">
          <p>
            I&apos;m Guddu Kr. Pandit, a passionate full-stack developer who
            loves building intuitive and powerful web applications.I enjoy combining clean UI design with efficient backend logic to
            create experiences that are useful, user-friendly, and modern.
          </p>
        </div>
      </section>

      {/* Tools */}
      <section
        id="tools"
        className="animate-in fade-in slide-in-from-bottom-4 border-t border-[var(--mac-window-border)] pt-8 delay-100 duration-700 fill-mode-both sm:pt-10"
        aria-labelledby="tools-heading"
      >
        <h2
          id="tools-heading"
          className="mb-6 text-xs font-semibold uppercase tracking-widest text-[var(--mac-muted)]"
        >
          Tools
        </h2>
        <div className="flex flex-wrap items-center gap-6 sm:gap-8 mb-5">
          <div
            className="card-hover group flex flex-col items-center gap-2 rounded-lg p-2 text-[var(--mac-muted)] transition-colors hover:bg-[var(--mac-elevated)] hover:text-[var(--mac-fg)]"
            title="Next.js"
          >
            <SiNextdotjs
              className="size-9 transition-colors group-hover:text-[var(--mac-fg)] sm:size-10"
              aria-hidden
            />
            <span className="text-xs font-medium">Next.js</span>
          </div>
          <div
            className="card-hover group flex flex-col items-center gap-2 rounded-lg p-2 text-[var(--mac-muted)] transition-colors hover:bg-[var(--mac-elevated)] hover:text-[var(--mac-fg)]"
            title="React"
          >
            <SiReact
              className="size-9 transition-[color] group-hover:[color:#61DAFB] sm:size-10"
              aria-hidden
            />
            <span className="text-xs font-medium">React</span>
          </div>
          <div
            className="card-hover group flex flex-col items-center gap-2 rounded-lg p-2 text-[var(--mac-muted)] transition-colors hover:bg-[var(--mac-elevated)] hover:text-[var(--mac-fg)]"
            title="TypeScript"
          >
            <SiTypescript
              className="size-9 transition-[color] group-hover:[color:#3178C6] sm:size-10"
              aria-hidden
            />
            <span className="text-xs font-medium">TypeScript</span>
          </div>
          <div
            className="card-hover group flex flex-col items-center gap-2 rounded-lg p-2 text-[var(--mac-muted)] transition-colors hover:bg-[var(--mac-elevated)] hover:text-[var(--mac-fg)]"
            title="JavaScript"
          >
            <SiJavascript
              className="size-9 transition-[color] group-hover:[color:#F7DF1E] sm:size-10"
              aria-hidden
            />
            <span className="text-xs font-medium">JavaScript</span>
          </div>
          <div
            className="card-hover group flex flex-col items-center gap-2 rounded-lg p-2 text-[var(--mac-muted)] transition-colors hover:bg-[var(--mac-elevated)] hover:text-[var(--mac-fg)]"
            title="Supabase"
          >
            <SiSupabase
              className="size-9 transition-[color] group-hover:[color:#3ECF8E] sm:size-10"
              aria-hidden
            />
            <span className="text-xs font-medium">Supabase</span>
          </div>
          <div
            className="card-hover group flex flex-col items-center gap-2 rounded-lg p-2 text-[var(--mac-muted)] transition-colors hover:bg-[var(--mac-elevated)] hover:text-[var(--mac-fg)]"
            title="Pinecone"
          >
            <Image
              src="/pinecone-icon.svg"
              alt="Pinecone"
              width={40}
              height={40}
              className="size-9 object-contain opacity-70 transition-opacity group-hover:opacity-100 dark:invert sm:size-10"
              aria-hidden
            />
            <span className="text-xs font-medium">Pinecone</span>
          </div>
          <div
            className="card-hover group flex flex-col items-center gap-2 rounded-lg p-2 text-[var(--mac-muted)] transition-colors hover:bg-[var(--mac-elevated)] hover:text-[var(--mac-fg)]"
            title="Git"
          >
            <SiGit
              className="size-9 transition-[color] group-hover:[color:#F05032] sm:size-10"
              aria-hidden
            />
            <span className="text-xs font-medium">Git</span>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="animate-in fade-in slide-in-from-bottom-4 border-t border-[var(--mac-window-border)] pt-8 delay-200 duration-700 fill-mode-both sm:pt-10"
        aria-labelledby="projects-heading"
      >
        <h2
          id="projects-heading"
          className="mb-6 text-xs font-semibold uppercase tracking-widest text-[var(--mac-muted)]"
        >
          Projects
        </h2>
        <ul className="grid gap-4 sm:grid-cols-2" role="list">
          {projects.slice(0, 4).map((project) => (
            <li key={project.name}>
              <article className="card-hover group relative flex h-full flex-col rounded-lg border border-dashed border-[var(--mac-window-border)] bg-[var(--mac-elevated)]/40 p-4 hover:border-[var(--mac-muted)]/40 hover:bg-[var(--mac-elevated)]/80 sm:p-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-md border border-[var(--mac-window-border)] bg-[var(--mac-window-bg)] text-[var(--mac-muted)]">
                      <FolderCode className="size-4" aria-hidden />
                    </span>
                    <h3 className="text-sm font-semibold text-[var(--mac-fg)] sm:text-base">
                      {project.name}
                    </h3>
                  </div>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring shrink-0 rounded-md p-1.5 text-[var(--mac-muted)] transition-colors hover:bg-[var(--mac-window-bg)] hover:text-[var(--mac-fg)]"
                    title={`Open ${project.name}`}
                  >
                    <ExternalLink className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                  </a>
                </div>
                <p className="mt-3 line-clamp-3 flex-1 text-xs leading-relaxed text-[var(--mac-muted)] sm:text-sm">
                  {project.description}
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded border border-[var(--mac-window-border)] px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-[var(--mac-muted)] sm:text-xs">
                    <span
                      className="size-1.5 rounded-full"
                      style={{ backgroundColor: techAccentColor(project.tech) }}
                      aria-hidden
                    />
                    {project.tech}
                  </span>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring inline-flex items-center gap-1 text-[10px] font-medium text-[var(--mac-status)] underline decoration-[var(--mac-status)]/30 underline-offset-2 transition-colors hover:decoration-[var(--mac-status)] sm:text-xs"
                  >
                    GitHub
                    <ExternalLink className="size-3" aria-hidden />
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>
        <div className="mt-6 mb-5 flex justify-center">
          <Button
            asChild
            variant="outline"
            className="rounded-lg border-[var(--mac-window-border)] bg-transparent font-mono text-[var(--mac-fg)] transition-transform hover:-translate-y-0.5 hover:bg-[var(--mac-elevated)]"
          >
            <Link href="/projects" className="flex items-center gap-2">
              View all projects
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>

      <GitHubContributions />

      <ExperienceSection />

      {/* Contact / footer */}
      <footer
        id="contact"
        className="animate-in fade-in flex flex-col items-center justify-between gap-4 border-t border-[var(--mac-window-border)] pt-8 text-xs text-[var(--mac-muted)] duration-700 sm:flex-row sm:pt-10"
      >
        <span>© 2026 Guddu Kumar</span>
        <nav className="flex items-center gap-5" aria-label="Contact links">
          <a
            href="mailto:guddukrp7661@gmail.com"
            className="focus-ring inline-flex text-[var(--mac-muted)] transition-all hover:-translate-y-0.5 hover:text-[var(--mac-fg)]"
            title="Email"
          >
            <Mail className="size-5" aria-hidden />
          </a>
          <a
            href="https://github.com/Guddu-Pandit"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex text-[var(--mac-muted)] transition-all hover:-translate-y-0.5 hover:text-[var(--mac-fg)]"
            title="GitHub"
          >
            <Github className="size-5" aria-hidden />
          </a>
          <a
            href="https://www.linkedin.com/in/guddu-pandit"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex text-[var(--mac-muted)] transition-all hover:-translate-y-0.5 hover:text-[var(--mac-fg)]"
            title="LinkedIn"
          >
            <Linkedin className="size-5" aria-hidden />
          </a>
          <a
            href="https://x.com/guddukrpandit"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex text-[var(--mac-muted)] transition-all hover:-translate-y-0.5 hover:text-[var(--mac-fg)]"
            title="X"
          >
            <SiX className="size-5" aria-hidden />
          </a>
        </nav>
      </footer>
    </MacShell>
  );
}
