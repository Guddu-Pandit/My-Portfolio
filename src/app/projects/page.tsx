import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Mail, Github, Linkedin, ExternalLink } from "lucide-react";
import { SiX } from "react-icons/si";
import Link from "next/link";
import { projects } from "@/lib/data";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="mx-auto flex h-14 max-w-3xl items-center justify-between border-b border-border/50 px-6">
          <Link
            href="/"
            className="text-lg font-semibold text-foreground hover:text-foreground/90"
          >
            Guddu Kumar
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Projects List */}
      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Projects
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            A comprehensive list of projects I've worked on, ranging from web applications to data scraping tools.
          </p>
          
          <ul className="mt-12 space-y-8" role="list">
            {projects.map((project) => (
              <li key={project.name}>
                <article className="group relative flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-colors hover:border-border/80 hover:bg-accent/30">
                  <div className="flex items-start justify-between gap-3">
                    <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                      {project.name}
                    </h2>
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                      title={`View ${project.name} on GitHub`}
                    >
                      <Github className="size-6" aria-hidden />
                    </a>
                  </div>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center rounded-md border border-border bg-muted/50 px-3 py-1 text-sm font-medium text-muted-foreground">
                      {project.tech}
                    </span>
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground underline decoration-muted-foreground/50 underline-offset-4 transition-colors hover:decoration-foreground"
                    >
                      View on GitHub
                      <ExternalLink className="size-4" aria-hidden />
                    </a>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6">
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-6 border-t border-border/50 py-12 sm:flex-row">
          <span className="text-sm text-muted-foreground">
            © 2026 Guddu Kumar
          </span>
          <nav
            className="flex items-center gap-6"
            aria-label="Contact links"
          >
            <a
              href="mailto:guddukrp7661@gmail.com"
              className="inline-flex text-muted-foreground transition-colors hover:text-foreground"
              title="Email"
            >
              <Mail className="size-5" aria-hidden />
            </a>
            <a
              href="https://github.com/Guddu-Pandit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex text-muted-foreground transition-colors hover:text-foreground"
              title="GitHub"
            >
              <Github className="size-5" aria-hidden />
            </a>
            <a
              href="https://www.linkedin.com/in/guddu-pandit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex text-muted-foreground transition-colors hover:text-foreground"
              title="LinkedIn"
            >
              <Linkedin className="size-5" aria-hidden />
            </a>
            <a
              href="https://x.com/guddukrpandit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex text-muted-foreground transition-colors hover:text-foreground"
              title="X"
            >
              <SiX className="size-5" aria-hidden />
            </a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
