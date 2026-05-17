import { Button } from "@/components/ui/button";
import { MacShell } from "@/components/mac-shell";
import { Mail, Github, Linkedin, ExternalLink, FolderCode } from "lucide-react";
import { SiX } from "react-icons/si";
import Link from "next/link";
import { projects } from "@/lib/data";

export default function ProjectsPage() {
  return (
    <MacShell headerLink={{ href: "/", label: "Home" }}>
      <div className="space-y-2">
        <h1 className="text-xl font-bold tracking-tight text-[var(--mac-fg)] sm:text-2xl">
          Projects
        </h1>
        <p className="text-sm leading-relaxed text-[var(--mac-muted)] sm:text-[15px]">
          A comprehensive list of projects I&apos;ve worked on, ranging from web
          applications to data scraping tools.
        </p>
      </div>

      <ul className="mt-8 space-y-4" role="list">
        {projects.map((project) => (
          <li key={project.name}>
            <article className="group relative flex flex-col rounded-lg border border-dashed border-[var(--mac-window-border)] bg-[var(--mac-elevated)]/40 p-5 transition-colors hover:border-[var(--mac-muted)]/40 hover:bg-[var(--mac-elevated)]/80 sm:p-6">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-md border border-[var(--mac-window-border)] bg-[var(--mac-window-bg)] text-[var(--mac-muted)]">
                    <FolderCode className="size-5" aria-hidden />
                  </span>
                  <h2 className="text-base font-semibold text-[var(--mac-fg)] sm:text-lg">
                    {project.name}
                  </h2>
                </div>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 rounded-md p-2 text-[var(--mac-muted)] transition-colors hover:bg-[var(--mac-window-bg)] hover:text-[var(--mac-fg)]"
                  title={`View ${project.name} on GitHub`}
                >
                  <ExternalLink className="size-5" aria-hidden />
                </a>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-[var(--mac-muted)]">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center rounded border border-[var(--mac-window-border)] px-2.5 py-0.5 text-xs font-medium uppercase tracking-wide text-[var(--mac-muted)]">
                  {project.tech}
                </span>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--mac-status)] underline decoration-[var(--mac-status)]/30 underline-offset-2 transition-colors hover:decoration-[var(--mac-status)]"
                >
                  View on GitHub
                  <ExternalLink className="size-3.5" aria-hidden />
                </a>
              </div>
            </article>
          </li>
        ))}
      </ul>

      <div className=" mb-6 flex justify-center  pt-8">
        <Button
          asChild
          variant="outline"
          className="rounded-lg border-[var(--mac-window-border)] bg-transparent font-mono text-[var(--mac-fg)] hover:bg-[var(--mac-elevated)]"
        >
          <Link href="/">Back home</Link>
        </Button>
      </div>

      <footer className="flex flex-col items-center justify-between gap-4 border-t border-[var(--mac-window-border)] pt-8 text-xs text-[var(--mac-muted)] sm:flex-row sm:pt-10">
        <span>© 2026 Guddu Kumar</span>
        <nav className="flex items-center gap-5" aria-label="Contact links">
          <a
            href="mailto:guddukrp7661@gmail.com"
            className="text-[var(--mac-muted)] transition-colors hover:text-[var(--mac-fg)]"
            title="Email"
          >
            <Mail className="size-5" aria-hidden />
          </a>
          <a
            href="https://github.com/Guddu-Pandit"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--mac-muted)] transition-colors hover:text-[var(--mac-fg)]"
            title="GitHub"
          >
            <Github className="size-5" aria-hidden />
          </a>
          <a
            href="https://www.linkedin.com/in/guddu-pandit"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--mac-muted)] transition-colors hover:text-[var(--mac-fg)]"
            title="LinkedIn"
          >
            <Linkedin className="size-5" aria-hidden />
          </a>
          <a
            href="https://x.com/guddukrpandit"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--mac-muted)] transition-colors hover:text-[var(--mac-fg)]"
            title="X"
          >
            <SiX className="size-5" aria-hidden />
          </a>
        </nav>
      </footer>
    </MacShell>
  );
}
